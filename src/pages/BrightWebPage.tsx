import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ExternalLink, Lock, RotateCw } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';

const brightWebUrl = 'https://www.brightwebsolution.site/';
const brightWebPreviewImage = 'https://www.brightwebsolution.site/og.png';

export const BrightWebPage = () => {
  const [reloadKey, setReloadKey] = useState(0);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [previewFailed, setPreviewFailed] = useState(false);

  useEffect(() => {
    if (iframeLoaded || previewFailed) return;

    const timeout = window.setTimeout(() => setPreviewFailed(true), 12000);
    return () => window.clearTimeout(timeout);
  }, [iframeLoaded, previewFailed, reloadKey]);

  const reloadPreview = () => {
    setIframeLoaded(false);
    setPreviewFailed(false);
    setReloadKey((key) => key + 1);
  };

  return (
    <>
      <SEOHead
        title="BrightWeb IT Solutions | Jhoeven Kent Escobal"
        description="Founded and leading BrightWeb IT Solutions - delivering professional websites, custom business systems, web applications, automation solutions, dashboards, and digital infrastructure."
        canonicalPath="/brightweb"
      />
      <section className="py-8 sm:py-10 lg:py-12">
        <Container className="max-w-none">
          <div className="mb-5 sm:mb-6">
            <h1 className="text-[36px] font-bold tracking-[-0.035em] sm:text-[42px] lg:text-[48px]">
              BrightWeb IT Solutions
            </h1>

            <div className="mt-4 flex flex-col gap-4 rounded-[16px] border border-[#1B0638]/10 bg-white px-4 py-4 shadow-[0_10px_30px_-24px_rgba(27,6,56,0.35)] sm:px-5 lg:flex-row lg:items-center lg:gap-5">
              <div className="shrink-0 lg:border-r lg:border-[#1B0638]/10 lg:pr-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#20C52B]">Leadership</p>
                <p className="mt-1 text-sm font-bold text-[#1B0638] sm:text-[15px]">Founder &amp; CEO</p>
                <p className="mt-0.5 text-xs font-medium text-[#171A1F]/55">2026 – Present</p>
              </div>

              <p className="min-w-0 flex-1 text-[13.5px] leading-[1.65] text-[#171A1F]/70 sm:text-[14.5px]">
                BrightWeb builds professional websites, custom business systems, web applications, and automation solutions
                that help businesses and organizations work better.
              </p>

              <a
                href={brightWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-12 shrink-0 items-center justify-between gap-3 rounded-full bg-[#1B0638] py-2 pl-5 pr-2 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(27,6,56,0.7)] transition-all hover:-translate-y-0.5 hover:bg-[#20C52B] hover:shadow-[0_14px_28px_-12px_rgba(32,197,43,0.55)] sm:w-auto"
              >
                Open Live Site
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/12 transition-transform group-hover:rotate-6 group-hover:bg-white/20">
                  <ExternalLink aria-hidden="true" className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[18px] border border-[#090B0D]/12 bg-white shadow-[0_18px_48px_-32px_rgba(9,11,13,0.3)]">
            <div className="flex min-h-[58px] items-center gap-2 border-b border-[#090B0D]/10 bg-[#FAFAFA] px-3 sm:gap-3 sm:px-5">
              <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#D5D5D5] sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D5D5D5] sm:h-3 sm:w-3" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#D5D5D5] sm:h-3 sm:w-3" />
              </div>
              <button
                type="button"
                disabled
                aria-label="Back"
                className="hidden rounded-full p-1.5 text-[#5F6368] opacity-45 sm:inline-flex"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                disabled
                aria-label="Forward"
                className="hidden rounded-full p-1.5 text-[#5F6368] opacity-45 sm:inline-flex"
              >
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={reloadPreview}
                aria-label="Refresh BrightWeb preview"
                className="rounded-full p-1.5 text-[#5F6368] transition hover:bg-black/5 hover:text-[#202124]"
              >
                <RotateCw aria-hidden="true" className="h-4 w-4" />
              </button>
              <div className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-full bg-[#F0F1F2] px-3 sm:px-4">
                <Lock aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#5F6368]" />
                <span className="truncate text-xs text-[#414549] sm:text-[13px]">
                  brightwebsolution.site
                </span>
              </div>
              <a
                href={brightWebUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open BrightWeb in a new tab"
                title="Open BrightWeb in a new tab"
                className="rounded-full p-2 text-[#5F6368] transition hover:bg-black/5 hover:text-[#202124]"
              >
                <ExternalLink aria-hidden="true" className="h-4 w-4" />
              </a>
            </div>

            <div className="relative h-[420px] bg-white sm:h-[520px] lg:h-[600px]">
              {previewFailed ? (
                <a
                  href={brightWebUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open BrightWeb website in a new tab"
                  className="block h-full w-full"
                >
                  <img
                    src={brightWebPreviewImage}
                    alt="BrightWeb IT Solutions homepage preview"
                    className="h-full w-full object-cover object-top"
                  />
                </a>
              ) : (
                <iframe
                  key={reloadKey}
                  src={brightWebUrl}
                  title="BrightWeb IT Solutions"
                  onLoad={() => setIframeLoaded(true)}
                  onError={() => setPreviewFailed(true)}
                  className="absolute inset-0 h-full w-full border-none"
                />
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
