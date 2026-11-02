import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  LayoutGrid,
  Rotate3d,
} from 'lucide-react';
import { FunnelBarrel, SiteWorkItem } from './FunnelBarrel';
import { useBrowserPreview } from './BrowserPreviewContext';

interface SiteWorks3DModalProps {
  open: boolean;
  onClose: () => void;
  items: SiteWorkItem[];
  title?: string;
  subtitle?: string;
}

export const SiteWorks3DModal = ({
  open,
  onClose,
  items,
  title = 'Real apps, funnels and GHL builds you can open.',
  subtitle = 'Everything here shipped. Open a card to walk through the work at full size.',
}: SiteWorks3DModalProps) => {
  const { openPreview } = useBrowserPreview();
  const [selectedItem, setSelectedItem] = useState<SiteWorkItem | null>(null);
  const [viewMode, setViewMode] = useState<'3d' | 'grid'>('3d');
  const spinRef = useRef<((delta: number) => void) | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedItem) {
          setSelectedItem(null);
        } else {
          onClose();
        }
      }
    };

    if (open) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose, selectedItem]);

  if (!open) return null;

  const handleSpin = (delta: number) => {
    if (spinRef.current) {
      spinRef.current(delta);
    }
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col justify-between overflow-hidden animate-fadeIn"
      style={{
        backgroundColor: 'rgba(9, 13, 26, 0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      {/* ── TOP HEADER BAR ── */}
      <div
        className="relative z-20 flex w-full flex-col px-6 pt-6 sm:px-10 sm:pt-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#20C52B]">
              Projects · Client Site Works
            </span>
            <h1 className="mt-1 text-[24px] sm:text-[34px] font-black tracking-[-0.025em] text-white">
              {title}
            </h1>
            <p className="mt-1 max-w-2xl text-[13px] sm:text-[14.5px] leading-relaxed text-white/70">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            {/* View Mode Toggle: 3D Cylinder / Grid */}
            <div className="hidden sm:flex items-center rounded-full border border-white/15 bg-white/5 p-1 text-white">
              <button
                type="button"
                onClick={() => setViewMode('3d')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold transition-all ${
                  viewMode === '3d'
                    ? 'bg-[#20C52B] text-white shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <Rotate3d className="h-3.5 w-3.5" /> 3D Cylinder
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-bold transition-all ${
                  viewMode === 'grid'
                    ? 'bg-[#20C52B] text-white shadow-xs'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" /> Grid
              </button>
            </div>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:scale-105 hover:bg-white hover:text-black shadow-lg"
              aria-label="Close 3D showcase"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>

      {/* ── 3D CYLINDER STAGE / GRID STAGE ── */}
      <div
        className="relative flex flex-1 w-full items-center justify-center overflow-hidden py-2"
        onClick={(e) => e.stopPropagation()}
      >
        {viewMode === '3d' ? (
          <div className="relative h-full w-full">
            <FunnelBarrel
              items={items}
              onOpen={(item) => setSelectedItem(item)}
              spinRef={spinRef}
            />

            {/* Quick manual rotate arrows for easy interaction */}
            <div className="pointer-events-none absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between sm:inset-x-8">
              <button
                type="button"
                onClick={() => handleSpin(0.4)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-black"
                title="Rotate Left"
                aria-label="Rotate cylinder left"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={() => handleSpin(-0.4)}
                className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:bg-white hover:text-black"
                title="Rotate Right"
                aria-label="Rotate cylinder right"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        ) : (
          /* Grid View Mode */
          <div className="max-h-[70vh] w-full max-w-6xl overflow-y-auto px-6 py-4">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((site) => (
                <div
                  key={site.id}
                  onClick={() => setSelectedItem(site)}
                  className="group flex flex-col overflow-hidden rounded-[18px] border border-white/15 bg-white/5 backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-[#20C52B]/60 hover:bg-white/10 cursor-pointer shadow-xl"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-end justify-between p-3 text-white">
                      <span className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-white">
                        <Maximize2 className="h-3.5 w-3.5" /> Open Preview
                      </span>
                      {site.url && (
                        <span className="rounded bg-[#20C52B] px-2 py-0.5 text-[10px] font-bold text-white shadow-xs">
                          Live Site
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-[#20C52B]">
                      {site.category}
                    </span>
                    <h3 className="mt-1 text-[16px] font-bold text-white group-hover:text-[#20C52B] transition-colors truncate">
                      {site.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-[12px] text-white/70 leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── BOTTOM BAR ── */}
      <div
        className="relative z-20 flex w-full flex-wrap items-center justify-between gap-3 border-t border-white/10 px-6 py-4 sm:px-10 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 font-mono text-[11.5px] text-white/70">
            <Sparkles className="h-4 w-4 text-[#20C52B]" /> 9 Live Production Sites
          </span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline text-[12px] text-white/60">
            Stripe & PayPal 1-Click Checkouts · High-Converting UI
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[10px] border border-white/20 bg-white/5 px-4 py-1.5 text-[12.5px] font-semibold text-white transition hover:bg-white/15"
          >
            Close 3D View
          </button>
        </div>
      </div>

      {/* ── CARD DETAIL MODAL (WHEN A CARD IS CLICKED FROM 3D DRUM) ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
          style={{ backgroundColor: 'rgba(5, 8, 16, 0.85)', backdropFilter: 'blur(12px)' }}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedItem(null);
          }}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[24px] border border-white/20 bg-[#0F1424] p-6 text-white shadow-2xl sm:p-8 animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close detail */}
            <button
              onClick={() => setSelectedItem(null)}
              type="button"
              className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black"
              aria-label="Back to 3D cylinder"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-[#20C52B]/20 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#20C52B]">
                {selectedItem.category}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-white/50">
                Live Production
              </span>
            </div>

            <h2 className="mt-3 text-[26px] font-extrabold text-white sm:text-[32px]">
              {selectedItem.title}
            </h2>

            <p className="mt-2 text-[14.5px] leading-relaxed text-white/80">
              {selectedItem.description}
            </p>

            {/* Screenshot Hero Preview */}
            <div className="relative mt-6 overflow-hidden rounded-[16px] border border-white/15 bg-black/60 shadow-inner">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-h-[50vh] w-full object-contain object-top"
              />
            </div>

            {/* Metrics */}
            {selectedItem.metrics && selectedItem.metrics.length > 0 && (
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {selectedItem.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="rounded-[12px] border border-white/10 bg-white/5 p-3 text-center"
                  >
                    <div className="text-[18px] font-bold text-white">{m.value}</div>
                    <div className="text-[11px] font-medium text-white/60">{m.label}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Tags */}
            {selectedItem.tags && selectedItem.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {selectedItem.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="rounded-[10px] border border-white/20 bg-white/5 px-4 py-2 text-[13px] font-semibold text-white transition hover:bg-white/10"
              >
                ← Back to 3D Cylinder
              </button>

              {selectedItem.url && (
                <button
                  type="button"
                  onClick={() => {
                    const targetUrl = selectedItem.url!;
                    const targetTitle = selectedItem.title;
                    setSelectedItem(null);
                    onClose();
                    openPreview(targetUrl, targetTitle);
                  }}
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[#20C52B] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-sm transition hover:bg-[#1baa25]"
                >
                  Open Live Site
                  <ExternalLink className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
};
