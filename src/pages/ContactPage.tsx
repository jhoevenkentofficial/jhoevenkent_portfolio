import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
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

      <section className="bg-[#0B1F33] pb-16 pt-14 text-[#F6F2E9] sm:pb-20 sm:pt-16">
        <Container>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#72B7E6]">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-[36px] font-bold leading-[1.1] tracking-[-0.025em] text-balance sm:text-[48px]">
            Tell me what you need built — or fixed.
          </h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-[1.68] text-[#F6F2E9]/75">
            Send a brief below and it will open in your email client, addressed
            and structured. {profile.availability}.
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                eyebrow="Direct Channels"
                title="Reach me directly"
                className="mb-8"
              />
              <div className="space-y-4">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="group flex items-start gap-4 rounded-[14px] border border-[#0B1F33]/10 bg-white/70 p-5 transition-all duration-200 hover:border-[#174A7E]/30"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[11px] bg-[#0B1F33]/[0.06] text-[#174A7E] transition-colors group-hover:bg-[#174A7E] group-hover:text-[#F6F2E9]">
                      <Icon name={detail.icon} className="h-[20px] w-[20px]" />
                    </span>
                    <span>
                      <span className="block font-mono text-[11.5px] uppercase tracking-[0.12em] text-[#66717E]">
                        {detail.label}
                      </span>
                      <span className="mt-1 block break-all text-[15px] font-semibold text-[#0B1F33]">
                        {detail.value}
                      </span>
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-[14px] border border-[#174A7E]/20 bg-[#174A7E]/[0.05] p-6">
                <p className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-[#174A7E]">
                  Prefer a file?
                </p>
                <p className="mt-2 text-[14.5px] leading-[1.6] text-[#111827]/75">
                  Grab the full résumé with complete history and references.
                </p>
                <div className="mt-4">
                  <Button href={profile.resumeUrl} variant="outline-dark" size="sm" external>
                    Download Résumé (PDF)
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-[16px] border border-[#0B1F33]/10 bg-white/70 p-6 sm:p-8 lg:p-10">
                <SectionHeading
                  eyebrow="Project Brief"
                  title="Send a brief"
                  description="Four fields, two minutes. The more specific the problem, the sharper the reply."
                  className="mb-8"
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
