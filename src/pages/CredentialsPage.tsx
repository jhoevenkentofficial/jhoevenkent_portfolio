import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { SectionHeading } from '../components/SectionHeading';

export const CredentialsPage = () => {
  return (
    <>
      <SEOHead
        title="Credentials | Jhoeven Kent Escobal"
        description="Certifications and credentials - only real ones will be added."
        canonicalPath="/credentials"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Credentials" title="Certifications & Credentials" />
          <div className="mt-12 rounded-[16px] border border-[#0B1F33]/10 bg-white p-8 text-center shadow-[0_1px_1px_rgba(11,31,51,0.01),0_10px_40px_-20px_rgba(11,31,51,0.25)]">
            <p className="text-lg text-[#111827]/70">
              No certifications to display yet. This section will be updated as real credentials become available.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
};
