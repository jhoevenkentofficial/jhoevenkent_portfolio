import { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Images,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from 'lucide-react';
import { useBrowserPreview } from './BrowserPreviewContext';

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description?: string;
  image: string;
  url?: string;
}

export interface BentoProjectItem {
  id: string;
  badge?: string;
  category: string;
  title: string;
  subtitle: string;
  iconName?: string;
  logoUrl?: string;
  tags: string[];
  metrics?: { label: string; value: string }[];
  overview: string;
  features: string[];
  architectureNodes?: { step: string; title: string; desc: string }[];
  demoUrl?: string;
  gallery?: GalleryItem[];
}

interface ProjectWalkthroughModalProps {
  item: BentoProjectItem | null;
  onClose: () => void;
}

const AutomationWorkflowVisual = () => (
  <section className="automation-visual" aria-label="Illustrative automation workflow">
    <div className="automation-visual__heading">
      <div>
        <span className="automation-visual__eyebrow">Workflow preview</span>
        <h3>From new lead to timely follow-up</h3>
      </div>
      <span className="automation-visual__status">
        <span />
        AUTOMATION FLOW
      </span>
    </div>

    <svg
      className="automation-visual__diagram"
      viewBox="0 0 960 300"
      role="img"
      aria-labelledby="automation-diagram-title automation-diagram-description"
    >
      <title id="automation-diagram-title">Lead intake and follow-up automation</title>
      <desc id="automation-diagram-description">
        A lead submits a form, gets qualified and routed into a CRM, which triggers follow-up messages and a team notification.
      </desc>
      <defs>
        <linearGradient id="automation-flow-line" x1="0" x2="1">
          <stop offset="0%" stopColor="#20C52B" stopOpacity=".35" />
          <stop offset="100%" stopColor="#20C52B" />
        </linearGradient>
        <filter id="automation-card-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="7" stdDeviation="8" floodColor="#1B0638" floodOpacity=".08" />
        </filter>
      </defs>

      <path d="M206 119H267M441 119H502M676 119H737" fill="none" stroke="url(#automation-flow-line)" strokeWidth="3" strokeDasharray="6 7" />
      <path d="m258 111 9 8-9 8M493 111l9 8-9 8M728 111l9 8-9 8" fill="none" stroke="#20C52B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />

      <g filter="url(#automation-card-shadow)">
        <rect x="30" y="58" width="176" height="124" rx="18" fill="#FFFFFF" stroke="#DCE4EF" />
        <rect x="265" y="58" width="176" height="124" rx="18" fill="#FFFFFF" stroke="#DCE4EF" />
        <rect x="500" y="58" width="176" height="124" rx="18" fill="#FFFFFF" stroke="#DCE4EF" />
        <rect x="735" y="58" width="195" height="124" rx="18" fill="#FFFFFF" stroke="#DCE4EF" />
      </g>

      <g fontFamily="Manrope, sans-serif">
        <circle cx="58" cy="88" r="13" fill="#E9F9EB" />
        <path d="M52 88h12M58 82v12" stroke="#1BAA25" strokeWidth="2" strokeLinecap="round" />
        <text x="80" y="92" fill="#697386" fontSize="11" fontWeight="700" letterSpacing="1.1">01 · CAPTURE</text>
        <text x="48" y="128" fill="#1B0638" fontSize="16" fontWeight="800">New lead</text>
        <text x="48" y="151" fill="#697386" fontSize="12">Form · SMS · booking</text>

        <circle cx="293" cy="88" r="13" fill="#F2EEFF" />
        <path d="M287 84h12M287 89h8M287 94h10" stroke="#6941C6" strokeWidth="2" strokeLinecap="round" />
        <text x="315" y="92" fill="#697386" fontSize="11" fontWeight="700" letterSpacing="1.1">02 · QUALIFY</text>
        <text x="283" y="128" fill="#1B0638" fontSize="16" fontWeight="800">Smart routing</text>
        <text x="283" y="151" fill="#697386" fontSize="12">Rules · tags · owner</text>

        <circle cx="528" cy="88" r="13" fill="#EEF5FF" />
        <rect x="522" y="82" width="12" height="12" rx="2" fill="none" stroke="#3874C8" strokeWidth="2" />
        <path d="M525 86h6M525 90h6" stroke="#3874C8" strokeWidth="1.5" strokeLinecap="round" />
        <text x="550" y="92" fill="#697386" fontSize="11" fontWeight="700" letterSpacing="1.1">03 · SYNC</text>
        <text x="518" y="128" fill="#1B0638" fontSize="16" fontWeight="800">CRM updated</text>
        <text x="518" y="151" fill="#697386" fontSize="12">Pipeline · activity · task</text>

        <circle cx="763" cy="88" r="13" fill="#FFF5E8" />
        <path d="M757 87h12v8h-12zM757 87l6 5 6-5" fill="none" stroke="#D48725" strokeWidth="1.7" strokeLinejoin="round" />
        <text x="785" y="92" fill="#697386" fontSize="11" fontWeight="700" letterSpacing="1.1">04 · FOLLOW UP</text>
        <text x="753" y="128" fill="#1B0638" fontSize="16" fontWeight="800">Right next step</text>
        <text x="753" y="151" fill="#697386" fontSize="12">SMS · email · team alert</text>
      </g>

      <rect x="30" y="222" width="900" height="48" rx="14" fill="#F4F7FA" />
      <circle cx="54" cy="246" r="5" fill="#20C52B" />
      <text x="69" y="250" fill="#475467" fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="700">
        Connected with GoHighLevel, Make, Zapier, webhooks and your existing tools
      </text>
      <text x="906" y="250" fill="#1BAA25" fontFamily="IBM Plex Mono, monospace" fontSize="11" fontWeight="700" textAnchor="end">
        BUILT TO FIT
      </text>
    </svg>
    <p className="automation-visual__note">Illustrative workflow — each automation is tailored to the client&apos;s process.</p>
  </section>
);

export const ProjectWalkthroughModal = ({ item, onClose }: ProjectWalkthroughModalProps) => {
  const { openPreview } = useBrowserPreview();
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    setActiveImageIndex(null);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (activeImageIndex !== null) {
          setActiveImageIndex(null);
        } else {
          onClose();
        }
      } else if (activeImageIndex !== null && item?.gallery && item.gallery.length > 0) {
        if (e.key === 'ArrowLeft') {
          setActiveImageIndex((prev) =>
            prev === null ? null : (prev - 1 + item.gallery!.length) % item.gallery!.length
          );
        } else if (e.key === 'ArrowRight') {
          setActiveImageIndex((prev) =>
            prev === null ? null : (prev + 1) % item.gallery!.length
          );
        }
      }
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, activeImageIndex]);

  if (!item) return null;

  const demoUrl = item.demoUrl;
  const hasGallery = Boolean(item.gallery && item.gallery.length > 0);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn"
      style={{ backgroundColor: 'rgba(15, 6, 32, 0.65)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}
    >
      <div
        className={`relative max-h-[92vh] w-full ${hasGallery ? 'max-w-5xl' : item.id === 'automations' ? 'max-w-4xl' : 'max-w-3xl'} overflow-y-auto rounded-[24px] border border-[#1B0638]/15 bg-white p-6 shadow-2xl sm:p-8 animate-scaleUp`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-[#1B0638]/10 bg-[#F4F5F6] text-[#171A1F] transition-colors hover:bg-[#1B0638] hover:text-white"
          aria-label="Close walkthrough"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Eyebrow & Badge */}
        <div className="flex flex-wrap items-center gap-2">
          {item.badge && (
            <span className="rounded-full bg-[#20C52B]/10 px-3 py-1 font-mono text-[10.5px] font-bold uppercase tracking-wider text-[#20C52B]">
              {item.badge}
            </span>
          )}
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#171A1F]/60">
            {item.category}
          </span>
        </div>

        {/* Title */}
        <div className="mt-3 flex items-center gap-3">
          {item.logoUrl && (
            <img
              src={item.logoUrl}
              alt=""
              className="h-9 w-9 rounded-full object-contain bg-white shadow-xs p-0.5 border border-[#1B0638]/10"
            />
          )}
          <h2 className="text-[26px] font-extrabold leading-tight tracking-[-0.02em] text-[#1B0638] sm:text-[32px]">
            {item.title}
          </h2>
        </div>

        {/* Subtitle / Overview */}
        <p className="mt-3 text-[15px] leading-relaxed text-[#171A1F]/75">
          {item.overview}
        </p>

        {item.id === 'automations' && <AutomationWorkflowVisual />}

        {/* Shipped Client Sites & Funnels Gallery (if available) */}
        {hasGallery && item.gallery && (
          <div className="mt-7 rounded-[20px] border border-[#1B0638]/10 bg-[#F8FAFC] p-4 sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1B0638]/8 pb-3">
              <div>
                <h3 className="flex items-center gap-2 font-mono text-[12.5px] font-bold uppercase tracking-wider text-[#171A1F]">
                  <Images className="h-4 w-4 text-[#20C52B]" />
                  Shipped Client Sites & Funnels ({item.gallery.length} Projects)
                </h3>
                <p className="mt-0.5 text-[12px] text-[#171A1F]/65">
                  Click any project card to view high-resolution screenshot or preview live.
                </p>
              </div>
              <span className="rounded-full bg-[#20C52B]/10 px-2.5 py-1 font-mono text-[10.5px] font-bold text-[#20C52B]">
                Live Showcase
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {item.gallery.map((site, idx) => (
                <div
                  key={site.id}
                  onClick={() => setActiveImageIndex(idx)}
                  className="group flex flex-col overflow-hidden rounded-[14px] border border-[#1B0638]/10 bg-white shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[#20C52B]/40 hover:shadow-md cursor-pointer"
                >
                  {/* Screenshot Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900/5">
                    <img
                      src={site.image}
                      alt={site.title}
                      className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 flex items-end justify-between p-2.5 text-white">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/95">
                        <Maximize2 className="h-3 w-3" /> Click to view
                      </span>
                      {site.url && (
                        <span className="inline-flex items-center gap-1 rounded bg-[#20C52B] px-1.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                          Live Site
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="flex flex-1 flex-col justify-between p-3">
                    <div>
                      <span className="font-mono text-[9.5px] font-bold uppercase tracking-wider text-[#20C52B]">
                        {site.category}
                      </span>
                      <h4 className="mt-0.5 truncate text-[14px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                        {site.title}
                      </h4>
                      {site.description && (
                        <p className="mt-1 line-clamp-2 text-[11.5px] leading-relaxed text-[#171A1F]/70">
                          {site.description}
                        </p>
                      )}
                    </div>

                    <div className="mt-3 flex items-center justify-between border-t border-[#1B0638]/5 pt-2 text-[11px]">
                      <span className="font-medium text-[#171A1F]/60 group-hover:text-[#1B0638] flex items-center gap-1">
                        <Maximize2 className="h-3 w-3" /> Enlarge
                      </span>
                      {site.url ? (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                            openPreview(site.url!, site.title);
                          }}
                          className="inline-flex items-center gap-1 font-bold text-[#20C52B] hover:underline"
                        >
                          Visit Site <ArrowUpRight className="h-3 w-3" />
                        </button>
                      ) : (
                        <span className="text-[10.5px] text-[#171A1F]/50">Portfolio Archive</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Metrics Row (if available) */}
        {item.metrics && item.metrics.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {item.metrics.map((m, idx) => (
              <div
                key={idx}
                className="rounded-[14px] border border-[#1B0638]/10 bg-[#F8FAFC] p-3.5 text-center"
              >
                <div className="text-[20px] font-extrabold tracking-tight text-[#1B0638]">
                  {m.value}
                </div>
                <div className="mt-0.5 text-[11.5px] font-medium text-[#171A1F]/65">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Architecture Pipeline / Steps */}
        {item.architectureNodes && item.architectureNodes.length > 0 && (
          <div className="mt-7">
            <h3 className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-[#171A1F]">
              <Layers className="h-4 w-4 text-[#20C52B]" />
              System Architecture & Flow
            </h3>
            <div className="mt-3 space-y-2.5">
              {item.architectureNodes.map((node, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-[12px] border border-[#1B0638]/8 bg-[#F4F5F6]/70 p-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#20C52B] text-[11px] font-bold text-white">
                    {node.step}
                  </span>
                  <div>
                    <h4 className="text-[13.5px] font-bold text-[#1B0638]">{node.title}</h4>
                    <p className="text-[12.5px] text-[#171A1F]/70">{node.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights / Features */}
        <div className="mt-7">
          <h3 className="flex items-center gap-2 font-mono text-[12px] font-bold uppercase tracking-wider text-[#171A1F]">
            <Sparkles className="h-4 w-4 text-[#20C52B]" />
            What Shipped
          </h3>
          <ul className="mt-3 space-y-2">
            {item.features.map((feat, i) => (
              <li key={i} className="flex items-start gap-2.5 text-[14px] leading-relaxed text-[#171A1F]/80">
                <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[#20C52B]" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mt-7 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#1B0638]/10 bg-[#F4F5F6] px-3 py-1 font-mono text-[11.5px] font-medium text-[#171A1F]/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#1B0638]/10 pt-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-[10px] border border-[#1B0638]/15 px-4 py-2 text-[13.5px] font-semibold text-[#171A1F] transition hover:bg-[#F4F5F6]"
          >
            Close Walkthrough
          </button>

          {demoUrl ? (
            <button
              type="button"
              onClick={() => {
                onClose();
                openPreview(demoUrl, item.title);
              }}
              className="inline-flex items-center gap-2 rounded-[10px] bg-[#20C52B] px-5 py-2.5 text-[13.5px] font-bold text-white shadow-sm transition hover:bg-[#1baa25]"
            >
              Open Live Site
              <ExternalLink className="h-4 w-4" />
            </button>
          ) : (
            <span className="flex items-center gap-1.5 text-[13px] font-semibold text-[#20C52B]">
              <CheckCircle2 className="h-4 w-4" /> Ready for production deployment
            </span>
          )}
        </div>
      </div>

      {/* Fullscreen Image Lightbox Overlay */}
      {activeImageIndex !== null && item.gallery && item.gallery[activeImageIndex] && (
        <div
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-black/95 p-4 sm:p-6 backdrop-blur-md animate-fadeIn"
          onClick={(e) => {
            e.stopPropagation();
            setActiveImageIndex(null);
          }}
        >
          {/* Lightbox Header Bar */}
          <div
            className="flex w-full items-center justify-between gap-4 border-b border-white/10 pb-3 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5 truncate">
              <span className="rounded-full bg-[#20C52B] px-2.5 py-0.5 font-mono text-[10.5px] font-bold uppercase tracking-wider text-white shadow-xs">
                {item.gallery[activeImageIndex].category}
              </span>
              <h3 className="truncate text-[16px] sm:text-[19px] font-extrabold text-white">
                {item.gallery[activeImageIndex].title}
              </h3>
              <span className="hidden font-mono text-[12px] text-white/50 sm:inline">
                ({activeImageIndex + 1} of {item.gallery.length})
              </span>
            </div>

            <div className="flex items-center gap-2.5">
              {item.gallery[activeImageIndex].url && (
                <button
                  type="button"
                  onClick={() => {
                    const current = item.gallery![activeImageIndex];
                    setActiveImageIndex(null);
                    onClose();
                    openPreview(current.url!, current.title);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-[9px] bg-[#20C52B] px-3.5 py-1.5 text-[12px] font-bold text-white shadow-xs transition hover:bg-[#1baa25]"
                >
                  Visit Live Site
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              )}

              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white hover:text-black"
                aria-label="Close Lightbox"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Lightbox Main Stage: Image & Left/Right Arrows */}
          <div
            className="relative flex flex-1 w-full items-center justify-center overflow-hidden py-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === null ? null : (prev - 1 + item.gallery!.length) % item.gallery!.length
                )
              }
              className="absolute left-1 sm:left-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-xs transition hover:scale-110 hover:bg-white hover:text-black"
              aria-label="Previous project image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="relative flex max-h-[72vh] max-w-full items-center justify-center overflow-hidden rounded-[14px] border border-white/15 bg-black/40 shadow-2xl">
              <img
                src={item.gallery[activeImageIndex].image}
                alt={item.gallery[activeImageIndex].title}
                className="max-h-[72vh] w-auto max-w-full object-contain"
              />
            </div>

            <button
              type="button"
              onClick={() =>
                setActiveImageIndex((prev) =>
                  prev === null ? null : (prev + 1) % item.gallery!.length
                )
              }
              className="absolute right-1 sm:right-4 z-20 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white shadow-xl backdrop-blur-xs transition hover:scale-110 hover:bg-white hover:text-black"
              aria-label="Next project image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Lightbox Footer & Dots Navigation */}
          <div
            className="flex w-full flex-col items-center gap-2 border-t border-white/10 pt-3 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {item.gallery[activeImageIndex].description && (
              <p className="max-w-2xl text-[12.5px] text-white/80 line-clamp-1">
                {item.gallery[activeImageIndex].description}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-1.5 py-1">
              {item.gallery.map((g, idx) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all ${
                    idx === activeImageIndex
                      ? 'w-7 sm:w-9 bg-[#20C52B]'
                      : 'w-2 sm:w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                  title={g.title}
                  aria-label={`Jump to image ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
