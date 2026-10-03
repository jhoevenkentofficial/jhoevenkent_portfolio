import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { LaptopVisual } from '../components/home/LaptopVisual';
import { CheckItem, ViewAll } from '../components/home/bits';
import { profile } from '../data/profile';
import { hireNovaChecklist, hireNovaTags, homeServices, techStrip } from '../data/home';

const homepageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    telephone: profile.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Siargao Island',
      addressRegion: 'Surigao del Norte',
      addressCountry: 'PH',
    },
    description: profile.statement,
    knowsAbout: [
      'Full Stack Development',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'AI Automation',
      'Digital Solutions',
    ],
  },
];

export const HomePage = () => {
  return (
    <>
      <SEOHead
        title="Jhoeven Kent Escobal | Founder & CEO of BrightWeb IT Solutions | Full Stack Developer"
        description="Jhoeven Kent Escobal, Founder & CEO of BrightWeb IT Solutions and Full Stack Developer building websites, business systems, web applications, automation solutions, and scalable digital products."
        canonicalPath="/"
        jsonLd={homepageSchema}
      />
      <div className="bg-[#F7F5F0]">
        <Container className="mx-0 px-4 pb-8 pt-4 sm:px-6 sm:pt-5 lg:mx-0 lg:max-w-none lg:px-8 lg:pt-6">
          <section className="card-premium relative overflow-hidden px-6 py-8 sm:px-8 lg:px-9">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#E2DFD6] bg-[#FAF9F6] px-3 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#22C55E]" />
                  <span className="text-[12px] font-semibold text-[#2b3442]">Available for new projects</span>
                </span>
                <p className="eyebrow mt-3">Full Stack Developer • Founder &amp; CEO • Digital Solutions Builder</p>
                <h1 className="mt-2 max-w-[560px] text-[32px] font-extrabold leading-[1.12] tracking-[-0.025em] text-[#0F1F38] sm:text-[40px] lg:text-[44px]">
                  Building digital products<br />that <span className="text-[#1D64D8]">move businesses forward.</span>
                </h1>
                <p className="mt-2.5 max-w-[520px] text-[14.5px] leading-[1.7] text-[#4b5563] sm:text-[15px]">{profile.statement}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button to="/work" variant="navy" size="md" showArrow>View My Work</Button>
                  <Button to="/contact" variant="white" size="md" showArrow>Start a Project</Button>
                </div>
              </div>
              <div className="lg:col-span-5"><LaptopVisual /></div>
            </div>
          </section>

          <section className="card-premium mt-4 overflow-hidden px-5 py-5 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <h2 className="eyebrow">Technologies I work with</h2>
              <ViewAll to="/tech-stack" />
            </div>
            <div className="tech-marquee no-scrollbar -mx-1 mt-4 px-1 pb-1">
              <div className="tech-marquee-track gap-12 pr-12">
                {[0, 1].map((copy) => (
                  <div key={copy} className="flex shrink-0 items-start gap-12" aria-hidden={copy === 1}>
                    {techStrip.map((t) => (
                      <Link
                        key={`${copy}-${t.name}`}
                        to="/tech-stack"
                        tabIndex={copy === 1 ? -1 : undefined}
                        className="group flex w-[62px] shrink-0 flex-col items-center gap-1.5 transition-transform duration-200 hover:-translate-y-[2px] hover:scale-[1.03]"
                        aria-label={t.name}
                      >
                        <span className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-[#EEEBE3] bg-[#FAF9F6] p-2 transition-all duration-200 group-hover:border-[#1D64D8]/30 group-hover:shadow-[0_8px_20px_-12px_rgba(15,31,56,0.35)]">
                          <img src={t.icon} alt={`${t.name} logo`} loading="lazy" className="h-[26px] w-[26px] object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                        </span>
                        <span className="whitespace-nowrap text-[10.5px] font-medium text-[#4b5563]">{t.name}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)]">
            <Link to="/work" className="group card-premium min-w-0 p-5 transition-all duration-200 hover:-translate-y-[2px] sm:p-6" aria-label="Featured project HireNova">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <span className="inline-block rounded-full bg-[#E8EFFC] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#1D64D8]">Featured Project</span>
                  <h3 className="mt-3 text-[24px] font-extrabold tracking-[-0.02em] text-[#0F1F38]">HireNova ↗</h3>
                  <p className="mt-1 text-[13.5px] font-semibold leading-snug text-[#0F1F38]/80">AI-Powered Employment &amp; Professional<br />Networking Platform</p>
                  <p className="mt-3 text-[13px] leading-[1.65] text-[#4b5563]">Connects job seekers, employers, freelancers, and businesses through a modern digital hiring ecosystem with AI-assisted tools.</p>
                  <ul className="mt-4 space-y-2">{hireNovaChecklist.map((c) => (<CheckItem key={c}>{c}</CheckItem>))}</ul>
                  <div className="mt-4 flex flex-wrap gap-1.5">{hireNovaTags.map((t, i) => (<span key={t} className={`rounded-full px-2.5 py-1 text-[11.5px] font-semibold ${i === 0 ? 'bg-[#0F1F38] text-white' : 'bg-[#F1EFE9] text-[#3d4451]'}`}>{t}</span>))}</div>
                </div>
                <div className="overflow-hidden rounded-[14px] border border-[#EEEBE3] bg-[#FAF9F6]">
                  <div className="flex items-center gap-1.5 border-b border-[#EEEBE3] bg-white px-3 py-2">
                    <i className="block h-2 w-2 rounded-full bg-[#E2DFD6]" />
                    <i className="block h-2 w-2 rounded-full bg-[#E2DFD6]" />
                    <span className="ml-2 truncate text-[10px] font-medium text-[#8a94a3]">hirenova — hiring ecosystem</span>
                  </div>
                  <div className="p-3">
                    <div className="rounded-[10px] bg-[#0F1F38] p-3 text-white">
                      <p className="text-[11px] font-bold">Find work that moves you forward</p>
                      <div className="mt-2 flex gap-1.5"><span className="h-6 flex-1 rounded-md bg-white/15" /><span className="h-6 w-14 rounded-md bg-[#1D64D8]" /></div>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="rounded-[9px] border border-[#EEEBE3] bg-white p-2"><p className="text-[10px] font-bold text-[#0F1F38]">Frontend Dev</p><p className="text-[8.5px] text-[#8a94a3]">Siargao · Apply →</p></div>
                      <div className="rounded-[9px] border border-[#EEEBE3] bg-white p-2"><p className="text-[10px] font-bold text-[#0F1F38]">UI Designer</p><p className="text-[8.5px] text-[#8a94a3]">Remote · Apply →</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <div className="flex min-w-0 flex-col gap-4">
              <Link to="/brightweb" className="group card-premium relative flex-1 p-5 transition-all duration-200 hover:-translate-y-[2px] sm:p-6" aria-label="BrightWeb IT Solutions">
                <span className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full border border-[#E2DFD6] text-[#6b7482] group-hover:bg-[#0F1F38] group-hover:text-white">↗</span>
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#0F1F38] text-[16px] font-extrabold text-white">B</span>
                  <div><h3 className="text-[17px] font-extrabold text-[#0F1F38]">BrightWeb IT Solutions</h3><p className="text-[12px] text-[#6b7482]">Founder &amp; CEO · 2026 – Present</p></div>
                </div>
                <p className="mt-3 text-[13px] leading-[1.65] text-[#4b5563]">Delivering professional websites, custom business systems, web applications, automation solutions, and digital infrastructure for businesses and organizations.</p>
              </Link>
              <div className="card-premium flex-1 p-5 sm:p-6">
                <div className="flex items-center justify-between"><h3 className="eyebrow">Let&apos;s build together</h3><ViewAll to="/expertise" /></div>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {homeServices.map((s) => (
                    <Link key={s.id} to="/expertise" className="group flex items-start gap-2.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#E8EFFC] text-[13px] font-bold text-[#1D64D8]">{s.icon === 'globe' ? '◉' : s.icon === 'layout' ? '▦' : s.icon === 'spark' ? '✦' : '✓'}</span>
                      <span><span className="block text-[13.5px] font-bold text-[#0F1F38]">{s.title}</span><span className="block text-[11.5px] text-[#6b7482]">{s.desc}</span></span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[{ t: 'Projects', d: 'Production platforms & case studies', to: '/work' },
              { t: 'Experience', d: 'Roles, impact & history', to: '/experience' },
              { t: 'Credentials', d: 'Education & certifications', to: '/credentials' },
              { t: 'Contact', d: 'Start a project together', to: '/contact' }].map((c) => (
              <Link key={c.to} to={c.to} className="group card-premium p-5 transition-all duration-200 hover:-translate-y-[2px]">
                <span className="flex items-center justify-between"><span className="text-[14.5px] font-bold text-[#0F1F38]">{c.t}</span><span className="text-[#8a94a3] group-hover:text-[#1D64D8]">↗</span></span>
                <span className="mt-1 block text-[12.5px] text-[#6b7482]">{c.d}</span>
              </Link>
            ))}
          </section>
        </Container>
      </div>
      <style>{`@keyframes floaty { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }`}</style>
    </>
  );
};
