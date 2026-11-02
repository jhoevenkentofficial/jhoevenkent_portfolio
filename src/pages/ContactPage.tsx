import { ArrowUpRight, Clock3, FileDown, ShieldCheck, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { ContactForm } from '../components/ContactForm';
import { Icon } from '../components/Icon';
import { contactDetails, profile } from '../data/profile';

export const ContactPage = () => {
  return (
    <>
      <SEOHead
        title="Contact | Jhoeven Kent Escobal"
        description="Start a project with Jhoeven Kent Escobal — send a project brief for web development, mobile apps, AI automations or operations support."
        canonicalPath="/contact"
      />

      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[440px] w-[440px] rounded-full bg-[#20C52B]/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-[24%] h-[420px] w-[420px] rounded-full bg-[#1B0638]/[0.05] blur-3xl" />

        <Container className="relative">
          <div className="mb-7 grid gap-5 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#20C52B]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Start a conversation
              </div>
              <h1 className="mt-3 max-w-[800px] text-[38px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#1B0638] sm:text-[48px] lg:text-[54px]">
                Have a project in mind? Let&apos;s make it real.
              </h1>
            </div>
            <p className="max-w-xl text-[14.5px] leading-[1.7] text-[#171A1F]/68 lg:col-span-4 lg:justify-self-end">
              Share the challenge, desired outcome, and timeline. You&apos;ll receive a focused reply with a practical next step.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[28px] border border-[#1B0638]/10 bg-white shadow-[0_28px_80px_-44px_rgba(27,6,56,0.36)] lg:grid-cols-12">
            <aside className="relative overflow-hidden bg-[#1B0638] p-6 text-white sm:p-8 lg:col-span-5 lg:p-10">
              <div className="pointer-events-none absolute -right-20 -top-16 h-64 w-64 rounded-full border-[48px] border-white/[0.035]" />
              <div className="pointer-events-none absolute bottom-0 right-0 h-40 w-40 bg-[radial-gradient(circle,#20C52B_1.2px,transparent_1.2px)] bg-[length:16px_16px] opacity-15" />

              <div className="relative flex h-full flex-col">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#20C52B]/30 bg-[#20C52B]/10 px-3 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#20C52B] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#20C52B]" />
                  </span>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#B9F3BE]">
                    {profile.availability}
                  </span>
                </div>

                <h2 className="mt-7 max-w-md text-[28px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[34px]">
                  Direct, thoughtful, and easy to start.
                </h2>
                <p className="mt-3 max-w-md text-[14.5px] leading-[1.7] text-white/65">
                  Use the project brief for a structured inquiry, or reach out through any direct channel below.
                </p>

                <div className="mt-8 space-y-2.5">
                  {contactDetails.map((detail) => (
                    <a
                      key={detail.label}
                      href={detail.href}
                      className="group flex items-center gap-3 rounded-[14px] border border-white/10 bg-white/[0.055] p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C52B]/45 hover:bg-white/[0.09]"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-white/10 text-[#67DF70] transition-colors group-hover:bg-[#20C52B] group-hover:text-white">
                        <Icon name={detail.icon} className="h-[18px] w-[18px]" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[9.5px] font-bold uppercase tracking-[0.14em] text-white/40">
                          {detail.label}
                        </span>
                        <span className="mt-0.5 block truncate text-[13.5px] font-semibold text-white/90 sm:text-[14px]">
                          {detail.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#67DF70]" aria-hidden="true" />
                    </a>
                  ))}
                </div>

                <div className="mt-8 border-t border-white/10 pt-6 lg:mt-auto">
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-[14px] bg-white p-4 text-[#1B0638] transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#20C52B]/10 text-[#20C52B]">
                        <FileDown className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-[12px] font-bold">View complete résumé</span>
                        <span className="mt-0.5 block text-[10.5px] text-[#171A1F]/50">Experience, skills &amp; credentials</span>
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </aside>

            <div className="p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-12">
              <div className="flex flex-col gap-4 border-b border-[#1B0638]/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#20C52B]">Project brief</p>
                  <h2 className="mt-2 text-[27px] font-bold tracking-[-0.025em] text-[#1B0638] sm:text-[32px]">Tell me what you need.</h2>
                  <p className="mt-2 max-w-xl text-[13.5px] leading-[1.65] text-[#171A1F]/60">
                    A few clear details are enough to start. Your email client will open with the brief ready to send.
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2 rounded-full bg-[#F4F5F6] px-3 py-2 text-[11px] font-semibold text-[#1B0638]">
                  <Clock3 className="h-3.5 w-3.5 text-[#20C52B]" aria-hidden="true" />
                  Reply within 24 hours
                </div>
              </div>

              <div className="pt-7">
                <ContactForm />
              </div>

              <div className="mt-6 flex items-start gap-2.5 rounded-[12px] bg-[#20C52B]/[0.055] px-4 py-3 text-[11.5px] leading-relaxed text-[#171A1F]/60">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#20C52B]" aria-hidden="true" />
                Your information is only used to respond to your inquiry and is never shared.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
