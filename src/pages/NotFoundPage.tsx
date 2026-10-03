import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/Button';
import { profile } from '../data/profile';

export const NotFoundPage = () => {
  return (
    <>
      <SEOHead title="Page Not Found | Jhoeven Kent Escobal" description="The page you are looking for does not exist." canonicalPath="/404" />
      <section className="flex min-h-[60vh] items-center py-24">
        <Container>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#174A7E]">
            404 — Not Found
          </p>
          <h1 className="mt-4 text-[38px] font-bold leading-[1.1] tracking-[-0.025em] text-[#0B1F33] sm:text-[52px]">
            This page took a wrong turn.
          </h1>
          <p className="mt-5 max-w-xl text-[16.5px] leading-[1.68] text-[#111827]/80">
            The link you followed doesn&apos;t exist on this site. Head back home, or reach{' '}
            {profile.shortName} directly below.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button to="/" variant="primary" size="md" showArrow>
              Back to Home
            </Button>
            <Button to="/contact" variant="outline-dark" size="md">
              Start a Project
            </Button>
          </div>
          <p className="mt-8 text-[14px] text-[#66717E]">
            Or email{' '}
            <Link
              to="/contact"
              className="font-semibold text-[#174A7E] underline decoration-[#D29A42] decoration-2 underline-offset-2"
            >
              {profile.email}
            </Link>
          </p>
        </Container>
      </section>
    </>
  );
};