import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { identityRows } from '../data/about';
import { profile } from '../data/profile';

const profilePortrait = new URL('../img/Professional Innovation Hub Portrait.png', import.meta.url).href;
const brightWebLogo = 'https://www.brightwebsolution.site/brightweb-logo.png';

export const AboutPage = () => {
  return (
    <>
      <SEOHead
        title="About | Jhoeven Kent Escobal"
        description="Full Stack Developer and Digital Operations Specialist combining product engineering, workflow optimization and customer-facing experience."
        canonicalPath="/about"
      />
      <div className="bg-[#F4F5F6]">
        <Container className="mx-0 px-4 pb-8 pt-4 sm:px-6 sm:pt-5 lg:mx-0 lg:max-w-none lg:px-8 lg:pt-6">
          <p className="eyebrow">About me</p>
          <h1 className="mt-2 text-[30px] font-extrabold tracking-[-0.025em] text-[#1B0638] sm:text-[36px]">Hi, I&apos;m Jhoeven.</h1>
          <p className="mt-2 max-w-[620px] text-[14.5px] leading-[1.65] text-[#171A1F]/75">Full Stack Developer and Digital Operations Specialist turning business problems into practical, scalable products and workflows.</p>

          <section className="card-premium mt-5 p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">

                <h2 className="max-w-[480px] text-[21px] font-extrabold leading-[1.3] tracking-[-0.02em] text-[#1B0638] sm:text-[24px]">I build technology around real problems — not just features.</h2>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#171A1F]/75">I&apos;m a Full Stack Developer and Digital Operations Specialist based in Sta. Monica, Siargao Island. My work combines software engineering, practical business workflows, and user-centered design to build digital products that are useful, scalable, and easier to operate.</p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#171A1F]/75">Through BrightWeb, I work on professional websites, custom business systems, web applications, automation solutions, and digital platforms for businesses and organizations.</p>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-[#171A1F]/75">My background also includes executive support, banking onboarding and high-volume customer service. That operational experience shapes how I design systems: clear pathways, reliable data, fewer handoffs, and measurable improvements for the people using them.</p>

                <div className="mt-6">
                  {identityRows.map((r, i) => (
                    <div key={r.id} className={`flex items-center gap-3 py-3 ${i !== 0 ? 'border-t border-[#1B0638]/10' : ''}`}>
                      <span className="flex min-w-[92px] items-center gap-1">
                        {r.badge ? (
                          <span className="flex h-8 w-[82px] items-center justify-center rounded-[8px] border border-[#1B0638]/10 bg-white px-2">
                            <img src={brightWebLogo} alt="BrightWeb IT Solutions" className="h-full w-full object-contain" />
                          </span>
                        ) : (
                          r.logos.map((l) => (
                            <img key={l} src={l} alt="" loading="lazy" className="h-6 w-6 rounded-[6px] border border-[#1B0638]/10 bg-white object-contain p-[3px]" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                          ))
                        )}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[13.5px] font-bold text-[#1B0638]">{r.title}</span>
                        <span className="block truncate text-[11.5px] text-[#171A1F]/65">{r.sub}</span>
                      </span>
                      <span className="font-mono text-[11px] text-[#171A1F]/45">{r.num}</span>
                    </div>
                  ))}
                </div>

                <Link to="/brightweb" className="group mt-4 flex items-center gap-3 rounded-[14px] border border-[#1B0638]/10 bg-[#F4F5F6] p-4 transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_14px_30px_-20px_rgba(23,26,31,0.35)]">
                  <span className="flex h-11 w-[118px] shrink-0 items-center justify-center rounded-[11px] border border-[#1B0638]/10 bg-white px-2.5">
                    <img src={brightWebLogo} alt="BrightWeb IT Solutions" className="h-full w-full object-contain" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#20C52B]">BrightWeb IT Solutions</span>
                    <span className="block truncate text-[12.5px] text-[#171A1F]/75">Founder &amp; CEO · 2026 – Present — websites, systems, apps &amp; automation. <span className="font-semibold text-[#1B0638]">View BrightWeb →</span></span>
                  </span>
                </Link>

                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[['Based in', 'Siargao Island, PH'], ['Current Role', 'Founder & CEO'], ['Company', 'BrightWeb IT Solutions'], ['Focus', 'Full Stack Development']].map(([k, v]) => (
                    <div key={k}>
                      <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#171A1F]/55">{k}</p>
                      <p className="mt-0.5 text-[12.5px] font-bold text-[#1B0638]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <figure className="relative mx-auto h-full max-w-[520px] overflow-hidden rounded-[24px] border border-[#1B0638]/10 bg-[#F4F5F6] shadow-[0_24px_48px_-32px_rgba(23,26,31,0.55)]">
                  <img
                    src={profilePortrait}
                    alt={profile.name}
                    className="h-full min-h-[440px] w-full object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1B0638]/95 via-[#1B0638]/58 to-transparent px-6 pb-6 pt-20 text-white">
                    <figcaption className="text-[20px] font-extrabold tracking-[-0.025em]">{profile.shortName}</figcaption>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#20C52B]">Full Stack Developer · Founder of BrightWeb</p>
                  </div>
                </figure>
              </div>
            </div>
          </section>

        </Container>
      </div>
    </>
  );
};
