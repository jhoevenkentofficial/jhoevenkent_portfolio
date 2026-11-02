import type { ComponentType } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Building2,
  Code2,
  GraduationCap,
  Rocket,
  UsersRound,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { profile } from '../data/profile';

interface TimelineItem {
  category: string;
  meta: string;
  title: string;
  credential: string;
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  featured?: boolean;
  href?: string;
  linkLabel?: string;
}

const timelineItems: TimelineItem[] = [
  {
    category: 'Recognition',
    meta: '2026 · Innovation',
    title: 'Youth CORE 2026',
    credential: 'Best Innovation Award · Top 5 Finalist',
    description:
      'Recognized for HireNova / SiargaoHireHub and its innovative approach to improving employment access and recruitment opportunities.',
    icon: Award,
    featured: true,
  },
  {
    category: 'Startup Incubation',
    meta: 'Founder Journey',
    title: 'SNSU WAVES Technology Business Incubator',
    credential: 'Startup Incubatee',
    description:
      'Developing and validating HireNova through startup mentorship, pitching, innovation programs, product development and entrepreneurial support.',
    icon: Rocket,
  },
  {
    category: 'Professional Community',
    meta: 'Siargao · Philippines',
    title: 'Digital Nomad Association Philippines',
    credential: 'Member · Siargao Digital Community',
    description:
      'Connected with entrepreneurs, freelancers, remote professionals and digital innovators through professional community collaboration.',
    icon: UsersRound,
    href: 'https://www.linkedin.com/company/digital-nomad-ph',
    linkLabel: 'View verified community page',
  },
];

export const CredentialsPage = () => {
  return (
    <>
      <SEOHead
        title="Education, Recognition & Community | Jhoeven Kent Escobal"
        description="Education, startup incubation, innovation recognition and professional community involvement shaping Jhoeven Kent Escobal's work as a developer and founder."
        canonicalPath="/credentials"
      />

      <section className="py-12 sm:py-16 lg:py-20">
        <Container>
          <header className="max-w-[980px]">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#20C52B]">
              Education · Recognition · Community
            </p>
            <h1 className="mt-4 text-[38px] font-extrabold leading-[1.04] tracking-[-0.04em] text-[#1B0638] sm:text-[49px] lg:text-[58px]">
              Built through technology, entrepreneurship &amp; real-world experience.
            </h1>
            <p className="mt-5 max-w-[820px] text-[15px] leading-[1.75] text-[#171A1F]/68 sm:text-[16px]">
              A foundation in Information Technology strengthened by startup incubation, award-winning innovation, client work, and active involvement in the Philippine digital community.
            </p>
          </header>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-12 lg:gap-12 xl:gap-16">
            <div className="lg:sticky lg:top-8 lg:col-span-5">
              <article className="relative flex min-h-[540px] flex-col overflow-hidden rounded-[28px] border border-[#1B0638]/10 bg-[#FFFEFA] p-7 shadow-[0_20px_52px_-42px_rgba(27,6,56,0.35)] sm:p-9 lg:min-h-[580px] lg:p-10">
                <div className="absolute left-0 top-10 h-24 w-[3px] rounded-r-full bg-[#20C52B]" />
                <div className="absolute right-0 top-0 h-32 w-32 border-b border-l border-[#1B0638]/[0.045]" />

                <div className="flex items-start justify-between gap-6">
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#20C52B]">
                    Academic Foundation
                  </p>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] border border-[#1B0638]/10 bg-white text-[#1B0638]" aria-label="Academic foundation">
                    <GraduationCap className="h-7 w-7" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-14">
                  <h2 className="max-w-[430px] text-[29px] font-extrabold leading-[1.12] tracking-[-0.035em] text-[#1B0638] sm:text-[34px]">
                    Surigao del Norte State University
                  </h2>
                  <p className="mt-2 text-[13px] font-semibold text-[#171A1F]/48">Del Carmen Campus</p>

                  <div className="mt-8 border-l-2 border-[#20C52B]/35 pl-5">
                    <p className="text-[16px] font-bold leading-[1.45] text-[#1B0638]">
                      Bachelor of Science in Information Technology
                    </p>
                    <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#20C52B]">
                      2022 — Present
                    </p>
                  </div>

                  <p className="mt-8 max-w-[440px] text-[14px] leading-[1.75] text-[#171A1F]/66">
                    Focused on software development, databases, systems design, web technologies and applied information technology.
                  </p>
                </div>

                <div className="mt-auto pt-12">
                  <div className="h-px bg-[#1B0638]/10" />
                  <p className="mt-5 text-[10.5px] font-bold uppercase tracking-[0.13em] text-[#1B0638]/48">
                    Technology · Systems · Product Development
                  </p>
                </div>
              </article>
            </div>

            <div className="lg:col-span-7">
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-[#1B0638]/10 pb-5">
                <div>
                  <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#20C52B]">Selected Journey</p>
                  <h2 className="mt-2 text-[25px] font-extrabold tracking-[-0.03em] text-[#1B0638] sm:text-[30px]">Recognition &amp; community</h2>
                </div>
                <p className="hidden text-right font-mono text-[10px] uppercase tracking-[0.12em] text-[#171A1F]/38 sm:block">
                  Building in public<br />since 2022
                </p>
              </div>

              <div className="relative">
                <div className="absolute bottom-8 left-7 top-7 w-px bg-gradient-to-b from-[#20C52B]/55 via-[#1B0638]/14 to-[#1B0638]/5" aria-hidden="true" />

                {timelineItems.map((item, index) => {
                  const TimelineIcon = item.icon;
                  return (
                    <article
                      key={item.title}
                      className={`group relative grid grid-cols-[56px_minmax(0,1fr)] gap-5 ${index < timelineItems.length - 1 ? 'pb-10 sm:pb-12' : ''}`}
                    >
                      <div className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full border bg-[#F4F5F6] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#20C52B]/50 group-hover:bg-white group-hover:shadow-[0_12px_28px_-18px_rgba(27,6,56,0.45)] ${item.featured ? 'border-[#20C52B]/35 text-[#20C52B]' : 'border-[#1B0638]/12 text-[#1B0638]'}`}>
                        <TimelineIcon className="h-6 w-6" strokeWidth={1.7} aria-hidden="true" />
                      </div>

                      <div className={`min-w-0 pb-10 transition-transform duration-300 group-hover:translate-x-1 ${index < timelineItems.length - 1 ? 'border-b border-[#1B0638]/10' : ''}`}>
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#20C52B]">{item.category}</p>
                          <span className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.1em] text-[#171A1F]/38">{item.meta}</span>
                        </div>

                        <h3 className="mt-3 text-[22px] font-extrabold leading-[1.22] tracking-[-0.025em] text-[#1B0638] sm:text-[25px]">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-[14px] font-bold leading-relaxed text-[#1B0638]">{item.credential}</p>

                        {item.featured && (
                          <span className="mt-4 inline-flex rounded-full bg-[#20C52B] px-3 py-1.5 text-[9.5px] font-extrabold uppercase tracking-[0.12em] text-white">
                            Best Innovation
                          </span>
                        )}

                        <p className="mt-4 max-w-[690px] text-[13.5px] leading-[1.75] text-[#171A1F]/64">{item.description}</p>

                        {item.href && item.linkLabel && (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-1.5 rounded-full text-[11.5px] font-bold text-[#1B0638] outline-none transition-colors hover:text-[#20C52B] focus-visible:ring-2 focus-visible:ring-[#20C52B] focus-visible:ring-offset-4"
                          >
                            {item.linkLabel}
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-2 border-y border-[#1B0638]/12 py-7 lg:grid-cols-4 lg:py-8">
            {[
              { icon: Building2, label: 'Founder', value: 'BrightWeb IT Solutions' },
              { icon: Rocket, label: 'Founder', value: 'HireNova' },
              { icon: Code2, label: '4+ Years', value: 'Building Digital Products' },
              { icon: BriefcaseBusiness, label: 'Global Work', value: 'Local & International Clients' },
            ].map(({ icon: Icon, label, value }, index) => (
              <div
                key={`${label}-${value}`}
                className={`px-4 py-4 sm:px-6 lg:py-1 ${index % 2 !== 0 ? 'border-l border-[#1B0638]/10' : ''} ${index >= 2 ? 'border-t border-[#1B0638]/10 lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l lg:border-[#1B0638]/10' : ''}`}
              >
                <Icon className="h-5 w-5 text-[#20C52B]" strokeWidth={1.7} aria-hidden="true" />
                <p className="mt-4 text-[18px] font-extrabold uppercase tracking-[-0.02em] text-[#1B0638] sm:text-[21px]">{label}</p>
                <p className="mt-1 max-w-[230px] text-[12px] font-semibold leading-snug text-[#171A1F]/52 sm:text-[13px]">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-7 border-l-[3px] border-[#20C52B] bg-[#1B0638] px-6 py-8 text-white sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
            <div>
              <p className="font-mono text-[10.5px] font-bold uppercase tracking-[0.16em] text-[#67DF70]">Complete Background</p>
              <h2 className="mt-2 text-[26px] font-extrabold tracking-[-0.03em] sm:text-[30px]">Review the full résumé</h2>
              <p className="mt-2 max-w-[760px] text-[13.5px] leading-[1.7] text-white/62">
                Explore my complete technical skills, professional experience, startup journey, selected projects and achievements.
              </p>
            </div>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#20C52B] px-6 text-[13.5px] font-bold text-white outline-none transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#1B0638] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#1B0638]"
            >
              View Résumé PDF
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};
