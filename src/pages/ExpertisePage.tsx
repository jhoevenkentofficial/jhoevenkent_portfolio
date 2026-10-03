import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { servicePillars } from '../data/expertise';

export const ExpertisePage = () => {
  return (
    <>
      <SEOHead
        title="Services | Jhoeven Kent Escobal"
        description="Professional websites, custom web applications, business systems, dashboards, automation, and more."
        canonicalPath="/expertise"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Services" title="BrightWeb IT Solutions Services" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((service) => (
              <div key={service.id} className="rounded-[16px] border border-[#0B1F33]/10 bg-white p-6 shadow-[0_1px_1px_rgba(11,31,51,0.01),0_10px_40px_-20px_rgba(11,31,51,0.25)]">
                <div className="flex items-start justify-between">
                  <h2 className="text-[17px] font-bold tracking-[-0.015em]">{service.title}</h2>
                  <span className="font-mono text-[12px] text-[#111827]/40">{service.id}</span>
                </div>
                <p className="mt-3 text-[14px] leading-relaxed text-[#111827]/70">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-[16px] border border-[#0B1F33]/10 bg-[#0B1F33] p-8 text-center text-[#F6F2E9] shadow-[0_1px_1px_rgba(11,31,51,0.01),0_10px_40px_-20px_rgba(11,31,51,0.25)]">
            <h3 className="text-[20px] font-bold">Have a project in mind?</h3>
            <a href="/contact" className="mt-4 inline-flex items-center rounded-[10px] bg-[#D29A42] px-6 py-3 font-semibold text-[#0B1F33] transition-colors hover:bg-[#e0ab55]">
              Start a Project
            </a>
          </div>
        </Container>
      </section>
    </>
  );
};
