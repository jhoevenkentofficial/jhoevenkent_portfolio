import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { BrowserPreviewModal } from './BrowserPreviewModal';

interface BrowserPreviewState {
  url: string;
  title?: string;
}

interface BrowserPreviewContextValue {
  openPreview: (url: string, title?: string) => void;
  closePreview: () => void;
}

const BrowserPreviewContext = createContext<BrowserPreviewContextValue | null>(null);

interface BrowserPreviewProviderProps {
  children: ReactNode;
}

/**
 * Mounts a single Chrome-style browser window modal and exposes
 * `useBrowserPreview()` so any component can open a live site preview
 * with `openPreview(url, title)`.
 */
export const BrowserPreviewProvider = ({ children }: BrowserPreviewProviderProps) => {
  const [preview, setPreview] = useState<BrowserPreviewState | null>(null);

  const openPreview = useCallback((url: string, title?: string) => {
    setPreview({ url, title });
  }, []);

  const closePreview = useCallback(() => setPreview(null), []);

  const value = useMemo(
    () => ({ openPreview, closePreview }),
    [openPreview, closePreview],
  );

  return (
    <BrowserPreviewContext.Provider value={value}>
      {children}
      {preview && (
        <BrowserPreviewModal
          url={preview.url}
          title={preview.title}
          onClose={closePreview}
        />
      )}
    </BrowserPreviewContext.Provider>
  );
};

export const useBrowserPreview = (): BrowserPreviewContextValue => {
  const ctx = useContext(BrowserPreviewContext);
  if (!ctx) {
    throw new Error('useBrowserPreview must be used within a BrowserPreviewProvider');
  }
  return ctx;
};
