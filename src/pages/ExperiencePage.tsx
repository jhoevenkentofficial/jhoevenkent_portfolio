import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';
import { engagements } from '../data/experience';

export const ExperiencePage = () => {
  return (
    <>
      <SEOHead
        title="Experience | Jhoeven Kent Escobal"
        description="Professional experience and career timeline."
        canonicalPath="/experience"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Experience" title="Professional Journey" />
          <div className="mt-12 space-y-6">
            {engagements.map((engagement) => (
              <div key={engagement.id} className="rounded-[16px] border border-[#0B1F33]/10 bg-white p-6 shadow-[0_1px_1px_rgba(11,31,51,0.01),0_10px_40px_-20px_rgba(11,31,51,0.25)]">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h2 className="text-[18px] font-bold tracking-[-0.015em]">{engagement.role}</h2>
                    <p className="mt-1 text-[15px] text-[#174A7E]">{engagement.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[12px] text-[#111827]/60">{engagement.period}</p>
                    <p className="mt-1 font-mono text-[11px] text-[#111827]/50">{engagement.location}</p>
                  </div>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed text-[#111827]/70">{engagement.summary}</p>
              </div>
            ))}
            <div className="rounded-[16px] border border-[#0B1F33]/10 bg-white p-6 shadow-[0_1px_1px_rgba(11,31,51,0.01),0_10px_40px_-20px_rgba(11,31,51,0.25)]">
              <h2 className="text-[18px] font-bold tracking-[-0.015em]">Founder &amp; CEO</h2>
              <p className="mt-1 text-[15px] text-[#174A7E]">BrightWeb IT Solutions</p>
              <p className="mt-2 font-mono text-[12px] text-[#111827]/60">2026 – Present</p>
            </div>
            <div className="mt-6">
              <a href="/Jhoeven_Kent_Escobal_Master_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-[10px] bg-[#0B1F33] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#174A7E]">
                View Full Resume
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
