import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  FolderOpen,
  Globe2,
  Layers3,
  Medal,
  MessageSquareQuote,
  UserRound,
  Workflow,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { testimonials } from '../data/testimonials';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
import { useBrowserPreview } from '../components/BrowserPreviewContext';

const profilePortrait = new URL('../img/Professional Innovation Hub Portrait.png', import.meta.url).href;
const brightWebSite = 'https://www.brightwebsolution.site/';
const brightWebLogo = 'https://www.brightwebsolution.site/brightweb-logo.png';

const dailyTools = [
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  { name: 'Supabase', icon: '/tech/supabase.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
];

const serviceRows = [
  { title: 'Professional Websites', icon: Globe2 },
  { title: 'Web Applications', icon: Code2 },
  { title: 'AI & Workflow Automation', icon: Workflow },
  { title: 'Business Systems', icon: Layers3 },
  { title: 'Ongoing Support', icon: BriefcaseBusiness },
];

const CardHeading = ({ icon: Icon, title }: { icon: typeof FolderOpen; title: string }) => (
  <div className="flex items-center gap-2.5">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#20C52B] text-white shadow-[0_7px_16px_-9px_rgba(32,197,43,.9)]">
      <Icon className="h-[18px] w-[18px]" strokeWidth={2.1} />
    </span>
    <h2 className="text-[17px] font-extrabold tracking-[-0.02em] text-[#1B0638]">{title}</h2>
  </div>
);

export const HomePage = () => {
  const { openPreview } = useBrowserPreview();

  return (
    <>
      <SEOHead
        title="Jhoeven Kent Escobal | Full Stack Developer & Digital Operations Specialist"
        description="Jhoeven Kent Escobal builds scalable web and mobile products, backend integrations, workflow automations and community-focused digital systems."
        canonicalPath="/"
      />

      <div className="dashboard-page relative min-h-screen overflow-hidden bg-[#F4F5F6]">
        <div aria-hidden="true" className="dashboard-orbit dashboard-orbit-one" />
        <div aria-hidden="true" className="dashboard-orbit dashboard-orbit-two" />

        <Container className="relative z-10 mx-0 max-w-none px-4 pb-5 pt-6 sm:px-6 lg:px-8 lg:pb-7 lg:pt-8 xl:px-12">
          <section className="relative flex min-h-[168px] flex-col justify-center pr-0 lg:pr-[190px]" aria-labelledby="home-title">
            <h1 id="home-title" className="max-w-[900px] text-[37px] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#1B0638] sm:text-[49px] xl:text-[58px]">
              Build it once. Run it forever.
            </h1>
            <p className="mt-4 max-w-[820px] text-[15px] font-medium leading-relaxed tracking-[0.005em] text-[#171A1F]/75 sm:text-[17px]">
              I build reliable digital products and automated systems that keep businesses moving.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#1B0638] px-6 py-3 text-[13px] font-bold text-white shadow-[0_10px_22px_-12px_rgba(23,26,31,.75)] transition-transform hover:-translate-y-0.5 lg:absolute lg:right-0 lg:top-8 lg:mt-0"
            >
              Get in touch <ArrowUpRight className="h-4 w-4 text-[#20C52B]" />
            </Link>
          </section>

          <section className="dashboard-tools" aria-label="Tools I work with">
            <div className="dashboard-tools-label">
              <span>Daily drivers</span>
              <strong>Tools I work with</strong>
            </div>
            <div className="dashboard-tools-rail no-scrollbar">
              <div className="dashboard-tools-track">
                {[0, 1].map((copy) => (
                  <div key={copy} className="dashboard-tools-set" aria-hidden={copy === 1}>
                    {dailyTools.map((tool) => (
                      <Link
                        key={`${copy}-${tool.name}`}
                        to="/tech-stack"
                        tabIndex={copy === 1 ? -1 : undefined}
                        className="dashboard-tool"
                      >
                        <img src={tool.icon} alt="" className="h-5 w-5 object-contain" />
                        <span>{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="dashboard-bento mt-5" aria-label="Portfolio overview">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
              <Link to="/work" className="dashboard-card group min-h-[290px] overflow-hidden p-5 xl:col-span-6">
                <div className="grid h-full grid-cols-1 gap-5 sm:grid-cols-[minmax(190px,.82fr)_minmax(280px,1.18fr)]">
                  <div className="flex flex-col">
                    <CardHeading icon={FolderOpen} title="Projects" />
                    <p className="mt-2 text-[12.5px] leading-relaxed text-[#171A1F]/65">
                      Production platforms and apps built to solve real business and community problems.
                    </p>
                    <span className="mt-auto hidden items-center gap-1.5 pt-5 text-[12px] font-bold text-[#1B0638] sm:inline-flex">
                      Explore all projects <ArrowUpRight className="h-3.5 w-3.5 text-[#20C52B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                  <div className="project-stack self-end">
                    <div className="project-window project-window-main">
                      <div className="project-window-bar"><i /><i /><i /><span>Siargao HireHub</span></div>
                      <div className="project-window-body">
                        <div className="flex items-center gap-1.5 text-[7px] font-semibold uppercase tracking-[.13em] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-[#20C52B]" /> Employment ecosystem</div>
                        <p className="mt-5 max-w-[220px] text-[22px] font-extrabold leading-[1.05] tracking-[-.04em] text-white">Local talent.<br /><em className="font-serif font-normal text-[#20C52B]">Real opportunities.</em></p>
                        <span className="mt-5 inline-flex rounded-full bg-white px-3 py-1 text-[8px] font-bold text-[#1B0638]">Find your next role</span>
                      </div>
                    </div>
                    <div className="project-window project-window-back">
                      <div className="project-window-bar"><i /><i /><i /><span>BrightWeb IT Solutions</span></div>
                      <div className="grid grid-cols-3 gap-2 p-3"><b /><b /><b /></div>
                    </div>
                  </div>
                </div>
              </Link>

              <Link to="/about" className="dashboard-card group flex min-h-[290px] flex-col p-5 xl:col-span-3">
                <CardHeading icon={UserRound} title="About" />
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#171A1F]/65">Who I am, how I work, and what I care about.</p>
                <div className="about-portrait mt-auto" aria-hidden="true">
                  <span className="about-sheet about-sheet-one" />
                  <span className="about-sheet about-sheet-two" />
                  <span className="about-sheet about-sheet-main">
                    <img src={profilePortrait} alt="" className="about-card-photo" />
                  </span>
                </div>
              </Link>

              <a
                href={brightWebSite}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  openPreview(brightWebSite, 'BrightWeb IT Solutions');
                }}
                aria-label="Visit the official BrightWeb IT Solutions website"
                className="dashboard-card brightweb-card group flex min-h-[290px] flex-col overflow-hidden p-5 xl:col-span-3"
              >
                <div className="flex h-9 items-center">
                  <img src={brightWebLogo} alt="BrightWeb IT Solutions" className="brightweb-official-logo" />
                </div>
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#171A1F]/65">My IT solutions studio for businesses ready to build and grow.</p>
                <div className="brightweb-panel mt-auto">
                  <div className="flex items-center justify-between gap-3">
                    <span className="brightweb-logo-panel">
                      <img src={brightWebLogo} alt="" />
                    </span>
                    <span className="brightweb-role">Founder &amp; CEO</span>
                  </div>
                  <h3>BrightWeb IT Solutions</h3>
                  <p>Websites · Business systems · Automation</p>
                  <span className="brightweb-link">
                    Explore the studio
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>

              <Link to="/credentials" className="dashboard-card flex min-h-[280px] flex-col p-5 xl:col-span-3">
                <CardHeading icon={Medal} title="Credentials" />
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#171A1F]/65">BS in Information Technology and production-proven experience.</p>
                <div className="credential-badge mt-auto" aria-label="Bachelor of Science in Information Technology">
                  <div className="credential-seal"><Medal className="h-11 w-11 text-[#20C52B]" strokeWidth={1.45} /></div>
                  <span><CheckCircle2 className="h-3.5 w-3.5 text-[#20C52B]" /> BS Information Technology</span>
                </div>
              </Link>

              <Link to="/expertise" className="dashboard-card min-h-[280px] p-5 xl:col-span-3">
                <CardHeading icon={Layers3} title="Services" />
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#171A1F]/65">What I build for businesses and organizations.</p>
                <div className="mt-3 divide-y divide-[#1B0638]/10">
                  {serviceRows.map(({ title, icon: Icon }, index) => (
                    <div key={title} className="flex items-center gap-2 py-[6px] text-[11.5px] font-bold text-[#171A1F]">
                      <span className="flex h-6 w-6 items-center justify-center rounded-[7px] bg-[#F4F5F6] text-[#20C52B]"><Icon className="h-3.5 w-3.5" /></span>
                      <span className="min-w-0 flex-1 truncate">{title}</span>
                      <span className="font-mono text-[9px] text-[#171A1F]/45">0{index + 1}</span>
                    </div>
                  ))}
                </div>
              </Link>

              <div className="dashboard-card min-h-[280px] p-5 xl:col-span-6">
                <CardHeading icon={MessageSquareQuote} title="Testimonials" />
                <p className="mt-2 text-[12.5px] leading-relaxed text-[#171A1F]/65">What collaborators and clients say about the work.</p>
                <div className="mt-4">
                  <TestimonialsCarousel testimonials={testimonials} />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
    </>
  );
};
