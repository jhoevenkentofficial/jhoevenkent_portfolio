import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  PanelsTopLeft,
  RefreshCcw,
  Rocket,
  Search,
  ShieldCheck,
  Workflow,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { servicePillars } from '../data/expertise';

const methodSteps: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
}> = [
  {
    number: '01',
    title: 'Discover.',
    description: 'We clarify the problem, users, workflow and outcome before choosing the technology.',
    icon: Search,
    tags: ['Goals', 'Users', 'Workflow'],
  },
  {
    number: '02',
    title: 'Build.',
    description: 'I design and develop the smallest dependable system that solves the real requirement.',
    icon: Workflow,
    tags: ['UX', 'Systems', 'Integrations'],
  },
  {
    number: '03',
    title: 'Improve.',
    description: 'The product is tested, launched, monitored and refined around actual use and feedback.',
    icon: Rocket,
    tags: ['QA', 'Deploy', 'Iterate'],
  },
];

const serviceTools: Array<Array<{ name: string; logo: string }>> = [
  [
    { name: 'React', logo: '/tech/react.svg' },
    { name: 'TypeScript', logo: '/tech/typescript.svg' },
    { name: 'Node.js', logo: '/tech/nodejs.svg' },
    { name: 'WordPress', logo: '/tech/wordpress.svg' },
  ],
  [
    { name: 'Make', logo: '/tech/make.svg' },
    { name: 'Zapier', logo: '/tech/zapier.svg' },
    { name: 'HighLevel', logo: '/tech/highlevel.svg' },
    { name: 'HubSpot', logo: '/tech/hubspot.svg' },
  ],
  [
    { name: 'Google Workspace', logo: '/tech/googleworkspace.svg' },
    { name: 'Microsoft Office', logo: '/tech/microsoftoffice.svg' },
    { name: 'Calendly', logo: '/tech/calendly.svg' },
    { name: 'ClickUp', logo: '/tech/clickup.svg' },
  ],
  [
    { name: 'Shopify', logo: '/tech/shopify.svg' },
    { name: 'Stripe', logo: '/tech/stripe.svg' },
    { name: 'PayPal', logo: '/tech/paypal.svg' },
    { name: 'Gorgias', logo: '/tech/gorgias.svg' },
  ],
  [
    { name: 'HubSpot', logo: '/tech/hubspot.svg' },
    { name: 'HighLevel', logo: '/tech/highlevel.svg' },
    { name: 'Mailchimp', logo: '/tech/mailchimp.svg' },
    { name: 'Brevo', logo: '/tech/brevo.svg' },
  ],
  [
    { name: 'Canva', logo: '/tech/canva.svg' },
    { name: 'Meta', logo: '/tech/meta.svg' },
    { name: 'Photoshop', logo: '/tech/photoshop.svg' },
    { name: 'CapCut', logo: '/tech/capcut.svg' },
  ],
];

const serviceOutcomes = [
  'Built to scale',
  'Less manual work',
  'Clearer operations',
  'Smoother fulfilment',
  'Leads you can act on',
  'Strategy tied to outcomes',
];

const deliveryFlow = [
  { label: 'Discover', icon: Search },
  { label: 'Architect', icon: PanelsTopLeft },
  { label: 'Build', icon: Code2 },
  { label: 'Validate', icon: ShieldCheck },
  { label: 'Launch', icon: Rocket },
  { label: 'Improve', icon: RefreshCcw },
];

export const ExpertisePage = () => {
  return (
    <>
      <SEOHead
        title="Services | Jhoeven Kent Escobal"
        description="Professional websites, custom web applications, business systems, operations, automation and growth solutions."
        canonicalPath="/expertise"
      />

      <div className="services-page min-h-screen bg-[#F4F5F6]">
        <Container className="mx-0 max-w-none px-4 pb-8 pt-8 sm:px-6 lg:px-8 xl:px-12">
          <header className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-[#20C52B]">Services</p>
              <h1 className="mt-2 max-w-[980px] text-[34px] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#1B0638] sm:text-[44px] xl:text-[50px]">
                Websites, systems, automation and operations—built to work together.
              </h1>
              <p className="mt-3 max-w-[760px] text-[14.5px] leading-relaxed text-[#171A1F]/70 sm:text-[16px]">
                Practical digital solutions for organizations that need clearer workflows, dependable products and room to grow.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-[#1B0638] px-6 py-3 text-[13px] font-bold text-white shadow-[0_12px_24px_-15px_rgba(23,26,31,.7)] transition-transform hover:-translate-y-0.5"
            >
              Discuss a project <ArrowUpRight className="h-4 w-4 text-[#20C52B]" />
            </Link>
          </header>

          <section className="services-surface mt-7">
            <div className="rounded-[22px] border border-[#1B0638]/10 bg-white/90 p-4 shadow-[0_18px_38px_-30px_rgba(23,26,31,.38)] sm:p-5">
              <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">
                <div className="flex flex-col justify-center rounded-[17px] bg-[#F4F5F6] p-5 xl:col-span-3">
                  <p className="text-[9.5px] font-extrabold uppercase tracking-[0.13em] text-[#20C52B]">The BrightWeb method</p>
                  <h2 className="mt-3 text-[26px] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#1B0638]">
                    Discover. Build. Improve.
                  </h2>
                  <p className="mt-3 text-[12.5px] leading-relaxed text-[#171A1F]/65">
                    Clear decisions first. Dependable delivery next. Continuous improvement after launch.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 md:grid-cols-3 xl:col-span-9">
                  {methodSteps.map(({ number, title, description, icon: Icon, tags }) => (
                    <article key={number} className="service-step-card">
                      <span className="service-step-number">{number}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#20C52B]/25 bg-[#F4F5F6] text-[#20C52B]">
                        <Icon className="h-5 w-5" strokeWidth={1.9} />
                      </span>
                      <h3 className="mt-4 text-[20px] font-extrabold tracking-[-0.025em] text-[#1B0638]">{title}</h3>
                      <p className="mt-2 min-h-[60px] text-[11.5px] leading-[1.65] text-[#171A1F]/65">{description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                          <span key={tag} className="rounded-full border border-[#1B0638]/10 bg-white px-2.5 py-1 text-[9px] font-bold text-[#171A1F]">{tag}</span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-9 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#1B0638]/10 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.11em] text-[#20C52B]">
                <ClipboardCheck className="h-3.5 w-3.5" /> What I can do for you
              </div>
              <h2 className="mt-3 text-[27px] font-extrabold tracking-[-0.03em] text-[#1B0638]">Choose one service or combine a few.</h2>
              <p className="mt-1.5 text-[12.5px] text-[#171A1F]/70">Every engagement is scoped around the actual problem—not a fixed package.</p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {servicePillars.map((service, index) => {
                const tools = serviceTools[index];
                return (
                  <article key={service.id} id={service.id} className="service-tile scroll-mt-24">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex -space-x-1.5" aria-label={`Tools commonly used for ${service.title}`}>
                        {tools.map((tool) => (
                          <span
                            key={tool.name}
                            title={tool.name}
                            className="flex h-10 w-10 items-center justify-center rounded-[11px] border border-[#1B0638]/10 bg-white p-2 shadow-[0_5px_14px_-10px_rgba(23,26,31,.55)] transition-transform hover:z-10 hover:-translate-y-1"
                          >
                            <img src={tool.logo} alt={`${tool.name} logo`} loading="lazy" className="h-full w-full object-contain" />
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] font-semibold tracking-[0.08em] text-[#171A1F]/45">
                        {String(index + 1).padStart(2, '0')} / {String(servicePillars.length).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[19px] font-extrabold tracking-[-0.025em] text-[#1B0638]">{service.title}</h3>
                    <p className="mt-2 min-h-[46px] text-[12.5px] leading-[1.65] text-[#171A1F]/70">{service.description}</p>
                    <span className="mt-4 inline-flex rounded-full border border-[#20C52B]/25 bg-[#20C52B]/10 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.07em] text-[#20C52B]">
                      {serviceOutcomes[index]}
                    </span>
                    <ul className="mt-4 space-y-2">
                      {service.capabilities.slice(0, 3).map((capability) => (
                        <li key={capability} className="flex items-start gap-2 text-[11.5px] leading-snug text-[#171A1F]/75">
                          <CheckCircle2 className="mt-[1px] h-3.5 w-3.5 shrink-0 text-[#20C52B]" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>

            <section className="mt-10 rounded-[24px] border border-[#1B0638]/10 bg-white/76 px-5 py-8 text-center sm:px-8">
              <p className="text-[9.5px] font-extrabold uppercase tracking-[0.13em] text-[#20C52B]">Delivery workflow</p>
              <h2 className="mt-2 text-[27px] font-extrabold tracking-[-0.03em] text-[#1B0638]">From a real problem to a dependable system.</h2>
              <p className="mx-auto mt-2 max-w-[660px] text-[12.5px] leading-relaxed text-[#171A1F]/70">
                Every build follows a visible process, so you always know what is being decided, built, tested and improved.
              </p>
              <ol className="services-flow-grid mt-7">
                {deliveryFlow.map(({ label, icon: Icon }, index) => (
                  <li key={label} className="services-flow-node">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B0638] text-white">
                      <Icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <strong>{label}</strong>
                    <small>{String(index + 1).padStart(2, '0')}</small>
                  </li>
                ))}
              </ol>
            </section>

            <section className="mt-5 flex flex-col gap-6 overflow-hidden rounded-[24px] bg-[#1B0638] p-6 text-white shadow-[0_20px_42px_-30px_rgba(23,26,31,.85)] sm:p-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-[9.5px] font-extrabold uppercase tracking-[0.13em] text-[#20C52B]">Ready when you are</p>
                <h2 className="mt-2 text-[25px] font-extrabold tracking-[-0.03em]">Have a system to build—or a workflow to fix?</h2>
                <p className="mt-2 max-w-[680px] text-[12.5px] leading-relaxed text-white/65">Tell me what is slowing the work down. I’ll help turn it into a clear, practical build plan.</p>
              </div>
              <Link
                to="/contact"
                className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-[12px] font-extrabold text-[#1B0638] transition-transform hover:-translate-y-0.5"
              >
                Start a project <ArrowUpRight className="h-4 w-4 text-[#20C52B]" />
              </Link>
            </section>
          </section>
        </Container>
      </div>
    </>
  );
};
