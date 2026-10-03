import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';

export const BrightWebPage = () => {
  return (
    <>
      <SEOHead
        title="BrightWeb IT Solutions | Jhoeven Kent Escobal"
        description="Founded and leading BrightWeb IT Solutions - delivering professional websites, custom business systems, web applications, automation solutions, dashboards, and digital infrastructure."
        canonicalPath="/brightweb"
      />
      <section className="py-20 sm:py-28">
        <Container>
          <h1 className="text-[40px] font-bold tracking-[-0.03em] sm:text-[48px] lg:text-[56px]">
            BrightWeb IT Solutions
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#111827]/80">
            Founder &amp; CEO • 2026 – Present
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#111827]/80">
            Founded and lead an IT solutions company delivering professional websites, custom business systems, web applications,
            automation solutions, dashboards, and digital infrastructure for businesses and organizations.
          </p>
        </Container>
      </section>
    </>
  );
};
