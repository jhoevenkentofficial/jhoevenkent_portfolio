import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { AboutWorkspaceVisual } from '../components/about/AboutVisual';
import { aboutTechItems, howIWork, identityRows, selectedBuilds } from '../data/about';

export const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About | Jhoeven Kent Escobal"
        description="Founder & CEO of BrightWeb IT Solutions and Full Stack Developer building websites, business systems, web applications and automation."
        canonicalPath="/about"
      />
      <div className="bg-[#F7F5F0]">
        <Container className="mx-0 px-4 pb-8 pt-4 sm:px-6 sm:pt-5 lg:mx-0 lg:max-w-none lg:px-8 lg:pt-6">
          <p className="eyebrow">About me</p>
          <h1 className="mt-2 text-[30px] font-extrabold tracking-[-0.025em] text-[#0F1F38] sm:text-[36px]">Hi, I&apos;m Jhoeven.</h1>
          <p className="mt-2 max-w-[560px] text-[14.5px] leading-[1.65] text-[#4b5563]">Founder, developer, and product builder turning ideas and business problems into practical digital solutions.</p>

          <section className="card-premium mt-5 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="max-w-[480px] text-[21px] font-extrabold leading-[1.3] tracking-[-0.02em] text-[#0F1F38] sm:text-[24px]">I build technology around real problems — not just features.</h2>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#4b5563]">I&apos;m a Full Stack Developer and Founder &amp; CEO of BrightWeb IT Solutions based in Siargao Island, Philippines. My work combines software engineering, practical business workflows, and user-centered design to build digital products that are useful, scalable, and easier to operate.</p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#4b5563]">Through BrightWeb, I work on professional websites, custom business systems, web applications, automation solutions, and digital platforms for businesses and organizations.</p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#4b5563]">My experience spans frontend development, backend systems, databases, API integrations, automation, deployment, product development, and digital operations.</p>

                <div className="mt-6">
                  {identityRows.map((r, i) => (
                    <div key={r.id} className={`flex items-center gap-3 py-3 ${i !== 0 ? 'border-t border-[#F0EDE6]' : ''}`}>
                      <span className="flex min-w-[92px] items-center gap-1">
                        {r.badge ? (
                          <span className="flex h-7 w-7 items-center justify-center rounded-[8px] bg-[#0F1F38] text-[12px] font-extrabold text-white">B</span>
                        ) : (
                          r.logos.map((l) => (
                            <img key={l} src={l} alt="" loading="lazy" className="h-6 w-6 rounded-[6px] border border-[#EEEBE3] bg-white object-contain p-[3px]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                          ))
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13.5px] font-bold text-[#0F1F38]">{r.title}</span>
                        <span className="block truncate text-[11.5px] text-[#6b7482]">{r.sub}</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#aab2bf]">{r.num}</span>
                    </div>
                  ))}
                </div>

                <Link to="/brightweb" className="group mt-4 flex items-center gap-3 rounded-[14px] border border-[#E8E5DD] bg-[#FAF9F6] p-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-20px_rgba(15,31,56,0.35)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-[#0F1F38] text-[15px] font-extrabold text-white">B</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#1D64D8]">BrightWeb IT Solutions</span>
                    <span className="block truncate text-[12.5px] text-[#4b5563]">Founder &amp; CEO · 2026 – Present — websites, systems, apps &amp; automation. <span className="font-semibold text-[#0F1F38]">View BrightWeb →</span></span>
                  </span>
                </Link>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[['Based in', 'Siargao Island, PH'], ['Current Role', 'Founder & CEO'], ['Company', 'BrightWeb IT Solutions'], ['Focus', 'Full Stack Development']].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8a94a3]">{k}</p>
                      <p className="mt-0.5 text-[12.5px] font-bold text-[#0F1F38]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-5"><AboutWorkspaceVisual /></div>
            </div>
          </section>

          <section className="mt-6">
            <div className="flex items-center justify-between">
              <h2 className="eyebrow">Selected builds</h2>
              <Link to="/work" className="text-[12.5px] font-semibold text-[#1D64D8] hover:text-[#0F1F38]">View All →</Link>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {selectedBuilds.map((b) => (
                <Link key={b.id} to={b.to} className="group card-premium p-5 transition-all duration-200 hover:-translate-y-[2px]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-[11px] text-[13px] font-extrabold text-white" style={{ background: b.badgeBg }}>{b.badge}</span>
                  <span className="mt-3 flex items-center justify-between">
                    <span className="text-[14.5px] font-bold text-[#0F1F38]">{b.name}</span>
                    <ArrowUpRight className="h-4 w-4 text-[#8a94a3] group-hover:text-[#1D64D8]" />
                  </span>
                  <span className="text-[11.5px] font-semibold text-[#1D64D8]">{b.cat}</span>
                  <span className="mt-1.5 block text-[12.5px] leading-snug text-[#6b7482]">{b.desc}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-6">
            <h2 className="eyebrow">How I work</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {howIWork.map((s) => (
                <div key={s.num} className="card-premium p-5">
                  <p className="font-mono text-[11px] text-[#1D64D8]">{s.num}</p>
                  <h3 className="mt-1.5 text-[14.5px] font-bold text-[#0F1F38]">{s.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.65] text-[#6b7482]">{s.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="card-premium mt-6 p-5 sm:p-6">
            <h2 className="eyebrow">Built with / working with</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {aboutTechItems.map((t) => (
                <span key={t.name} title={t.name} className="inline-flex items-center gap-2 rounded-[10px] border border-[#E8E5DD] bg-white px-2.5 py-1.5 text-[12px] font-medium text-[#0F1F38] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#1D64D8]/35">
                  <img src={t.logo} alt={`${t.name} logo`} loading="lazy" className="h-5 w-5 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                  {t.name}
                </span>
              ))}
            </div>
          </section>

          <section className="card-premium mt-6 flex flex-col gap-5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-[#0F1F38]">Have an idea worth building?</h2>
              <p className="mt-1.5 max-w-[520px] text-[13.5px] leading-[1.65] text-[#4b5563]">Whether it&apos;s a website, custom business system, web application, or automation solution, let&apos;s talk about what you need.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to="/contact" variant="navy" size="md" showArrow>Start a Project</Button>
              <Button to="/work" variant="white" size="md">View My Work</Button>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};
