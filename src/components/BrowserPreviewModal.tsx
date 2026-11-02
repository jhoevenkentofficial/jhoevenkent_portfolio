import { useEffect, useMemo, useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Globe2,
  Lock,
  RotateCw,
  ShieldAlert,
} from 'lucide-react';

/**
 * Hosts verified to respond with `X-Frame-Options: DENY` and/or
 * `Content-Security-Policy: frame-ancestors 'none'`. Browsers refuse to render
 * these responses inside an <iframe>, so we show a friendly fallback card
 * (with a direct-open escape hatch) instead of the browser's raw error page.
 */
const EMBED_BLOCKED_HOSTS = new Set([
  'hirenova-cec8.onrender.com',
  'siargaohirehubnetworking.onrender.com',
]);

interface BrowserPreviewModalProps {
  url: string;
  title?: string;
  onClose: () => void;
}

export const BrowserPreviewModal = ({ url, title, onClose }: BrowserPreviewModalProps) => {
  const { hostname, pathname, origin } = useMemo(() => new URL(url), [url]);

  const [reloadKey, setReloadKey] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showBlockedOverlay, setShowBlockedOverlay] = useState(() =>
    EMBED_BLOCKED_HOSTS.has(hostname),
  );
  const [faviconFailed, setFaviconFailed] = useState(false);

  const tabTitle = title || hostname.replace(/^www\./, '');

  const reload = () => {
    setIsLoading(true);
    setReloadKey((key) => key + 1);
  };

  const openInNewTab = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const faviconUrl = `https://www.google.com/s2/favicons?sz=64&domain=${hostname}`;

  return (
    <div
      className="fixed inset-0 z-[120] flex animate-fadeIn items-center justify-center p-2 sm:p-4 lg:p-6"
      style={{ backgroundColor: 'rgba(15, 6, 32, 0.72)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Browser preview of ${hostname}`}
    >
      <div
        className="flex h-[86vh] w-full max-w-[1120px] animate-scaleUp flex-col overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-[0_45px_90px_-35px_rgba(15,6,32,0.65)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Tab strip (Chrome style) ─────────────────────────────── */}
        <div className="flex items-center gap-3 bg-[#DDE1E6] px-4 pt-2">
          {/* Traffic lights — red closes the window */}
          <div className="flex shrink-0 items-center gap-1.5">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="h-3 w-3 rounded-full bg-[#FF5F57] ring-black/5 transition hover:brightness-90 focus:outline-none focus:ring-2 focus:ring-black/30"
            />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>

          {/* Active tab */}
          <div className="group flex h-8 min-w-0 w-[170px] items-center gap-2 rounded-t-[10px] bg-white px-3 shadow-[0_-1px_2px_rgba(0,0,0,0.04)] sm:w-[260px]">
            {faviconFailed ? (
              <Globe2 className="h-4 w-4 shrink-0 text-[#5F6368]" />
            ) : (
              <img
                src={faviconUrl}
                alt=""
                onError={() => setFaviconFailed(true)}
                className="h-4 w-4 shrink-0 rounded-[2px]"
              />
            )}
            <span className="min-w-0 flex-1 truncate text-[12.5px] font-medium text-[#202124]">
              {tabTitle}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close tab"
              className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[#5F6368] opacity-0 transition hover:bg-black/10 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
            >
              <span className="text-[11px] leading-none">×</span>
            </button>
          </div>
        </div>

        {/* ── Toolbar / Omnibox ────────────────────────────────────── */}
        <div className="flex items-center gap-1.5 border-b border-black/5 bg-white px-3 py-2 sm:gap-2">
          <button
            type="button"
            disabled
            aria-label="Back"
            className="rounded-full p-1.5 text-[#5F6368] opacity-40"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            disabled
            aria-label="Forward"
            className="rounded-full p-1.5 text-[#5F6368] opacity-40"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={reload}
            aria-label="Reload preview"
            className="rounded-full p-1.5 text-[#5F6368] transition hover:bg-black/5 hover:text-[#202124]"
          >
            <RotateCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          </button>

          {/* Address bar */}
          <div className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full bg-[#F1F3F4] px-3.5 transition hover:bg-[#E8EAED]">
            <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-600" aria-hidden="true" />
            <span className="min-w-0 truncate text-[13px] text-[#5F6368]">
              <span className="font-semibold text-[#202124]">{hostname}</span>
              <span>{pathname === '/' ? '/' : pathname}</span>
            </span>
          </div>

          <button
            type="button"
            onClick={openInNewTab}
            aria-label="Open this site in a new browser tab"
            title="Open in new tab"
            className="rounded-full p-2 text-[#5F6368] transition hover:bg-black/5 hover:text-[#202124]"
          >
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>

        {/* ── Viewport ─────────────────────────────────────────────── */}
        <div className="relative min-h-0 flex-1 bg-white">
          <iframe
            key={reloadKey}
            src={url}
            title={`Live preview of ${hostname}`}
            onLoad={() => setIsLoading(false)}
            className="absolute inset-0 h-full w-full border-0 bg-white"
          />

          {/* Loading state */}
          {isLoading && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/85 backdrop-blur-[2px]">
              <span className="h-9 w-9 animate-spin rounded-full border-[3px] border-[#1B0638]/15 border-t-[#20C52B]" />
              <p className="text-[13px] font-medium text-[#171A1F]/70">
                Connecting to <span className="text-[#1B0638]">{hostname}</span>…
              </p>
            </div>
          )}

          {/* Embed-blocked fallback (X-Frame-Options / frame-ancestors) */}
          {showBlockedOverlay && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#F4F5F6] p-6 text-center">
              <div className="max-w-md">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1B0638]/8">
                  <ShieldAlert className="h-7 w-7 text-[#1B0638]" />
                </span>
                <h3 className="mt-4 text-[18px] font-extrabold tracking-[-0.02em] text-[#1B0638]">
                  This site blocks embedded previews
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-[#171A1F]/70">
                  <span className="font-mono text-[12.5px] text-[#1B0638]">{hostname}</span> sends{' '}
                  <span className="font-mono text-[12.5px]">X-Frame-Options: DENY</span>, so browsers
                  refuse to display it inside another page. Open it directly in a real browser tab
                  instead.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={openInNewTab}
                    className="inline-flex items-center gap-2 rounded-[10px] bg-[#20C52B] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-sm transition hover:bg-[#1baa25]"
                  >
                    Open in new tab
                    <ExternalLink className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowBlockedOverlay(false);
                      reload();
                    }}
                    className="rounded-[10px] border border-[#1B0638]/15 px-4 py-2.5 text-[13.5px] font-semibold text-[#171A1F] transition hover:bg-white"
                  >
                    Try embed anyway
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Status bar ───────────────────────────────────────────── */}
        <div className="flex h-7 shrink-0 items-center justify-between border-t border-black/5 bg-white px-4 text-[11px] text-[#5F6368]">
          <span className="flex min-w-0 items-center gap-2">
            <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-[#20C52B]" />
            <span className="truncate">Live preview — {origin.replace('https://', '')}</span>
          </span>
          <span className="hidden shrink-0 sm:block">Rendered in an embedded frame</span>
        </div>
      </div>
    </div>
  );
};


