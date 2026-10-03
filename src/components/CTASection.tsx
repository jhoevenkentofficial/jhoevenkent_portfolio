import { Container } from './Container';
import { Button } from './Button';
import { profile } from '../data/profile';

export const CTASection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B1F33] py-20 text-[#F6F2E9] lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 78% 18%, #72B7E6 0%, transparent 46%), radial-gradient(circle at 12% 82%, #D29A42 0%, transparent 42%)',
        }}
        aria-hidden="true"
      />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#72B7E6]">
              Open for New Engagements
            </p>
            <h2 className="mt-3 text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-balance sm:text-[38px] lg:text-[44px]">
              Have a system that needs building — or a workflow that needs fixing?
            </h2>
            <p className="mt-5 max-w-2xl text-[16.5px] leading-[1.68] text-[#F6F2E9]/75">
              I partner with founders, local businesses and remote teams to ship scalable web
              platforms, mobile applications and automation pipelines. Let&apos;s scope what you
              need.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-[16px] border border-[#F6F2E9]/15 bg-[#F6F2E9]/[0.05] p-7 backdrop-blur-sm">
              <p className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#D29A42]">
                Direct Line
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="mt-3 block break-all text-[17px] font-semibold text-[#F6F2E9] transition-colors hover:text-[#72B7E6]"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phoneHref}`}
                className="mt-2 block text-[17px] font-semibold text-[#F6F2E9] transition-colors hover:text-[#72B7E6]"
              >
                {profile.phone}
              </a>
              <p className="mt-4 text-[14.5px] leading-[1.6] text-[#F6F2E9]/65">
                {profile.availability}
              </p>
              <div className="mt-7 flex flex-col gap-3">
                <Button to="/contact" variant="primary" size="md" showArrow>
                  Send a Project Brief
                </Button>
                <Button href={profile.resumeUrl} variant="outline-light" size="md" external>
                  Download Résumé (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};