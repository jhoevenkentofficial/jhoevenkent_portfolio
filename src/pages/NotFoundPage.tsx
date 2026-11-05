import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '../components/Container';
import { SEOHead } from '../components/SEOHead';
import { profile } from '../data/profile';

export const NotFoundPage = () => (
  <>
    <SEOHead
      title="Page Not Found | Jhoeven Kent Escobal"
      description="The page you are looking for does not exist."
      canonicalPath="/404"
    />
    <section className="not-found-page">
      <Container>
        <p className="editorial-kicker">404 · Page not found</p>
        <h1>This page took a wrong turn.</h1>
        <p>The link you followed doesn&apos;t exist here. Head back home or get in touch with Jhoeven Kent.</p>
        <div>
          <Link to="/" className="button-dark">Back to home <ArrowUpRight /></Link>
          <a href={`mailto:${profile.email}`} className="text-link">Start a conversation <ArrowUpRight /></a>
        </div>
      </Container>
    </section>
  </>
);
