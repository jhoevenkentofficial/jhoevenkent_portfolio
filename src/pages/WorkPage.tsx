import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { Button } from '../components/Button';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { CTASection } from '../components/CTASection';
import { projects } from '../data/work';

export const WorkPage = () => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <SEOHead
        title="Projects | Jhoeven Kent Escobal"
        description="Production platforms by Jhoeven Kent Escobal - Siargao HireHub, HireNova, YourGiftNetwork, Kuya Pasabuy, TravelTewNews, Escobal Print Studio and more."
        canonicalPath="/work"
      />

      <section className="bg-[#0B1F33] pb-16 pt-14 text-[#F6F2E9] sm:pb-20 sm:pt-16">
        <Container>
          <p className="font-mono text-[12px] uppercase tracking-[0.16em] text-[#72B7E6]">
            Projects
          </p>
          <h1 className="mt-4 max-w-3xl text-[36px] font-bold leading-[1.1] tracking-[-0.025em] text-balance sm:text-[48px]">
            Platforms shipped to real users.
          </h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-[1.68] text-[#F6F2E9]/75">
            Local deployments across Siargao Island, remote projects, and cloud production releases.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/contact" variant="primary" size="md" showArrow>
              Start a Project
            </Button>
            <Button to="/experience" variant="outline-light" size="md">
              View Experience
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Case studies"
            className="mb-10 lg:mb-12"
          />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>

          {rest.length > 0 && (
            <>
              <SectionHeading
                eyebrow="More Projects"
                title="Additional work"
                className="mb-10 mt-16 lg:mt-20"
              />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {rest.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
};
