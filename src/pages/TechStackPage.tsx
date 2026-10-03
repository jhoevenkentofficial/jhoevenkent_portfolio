import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { TechnologyItem } from '../components/TechnologyItem';
import { techCategories } from '../data/technologies';
import { SectionHeading } from '../components/SectionHeading';

export const TechStackPage = () => {
  return (
    <>
      <SEOHead
        title="Tech Stack | Jhoeven Kent Escobal"
        description="Technologies I work with - frontend, backend, database, tools, and automation."
        canonicalPath="/tech-stack"
      />
      <section className="py-10 sm:py-12">
        <Container>
          <SectionHeading eyebrow="Tech Stack" title="Technologies I Work With" />
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techCategories.slice(0, 6).map((group) => (
              <div key={group.id} className="card-premium min-w-0 p-6">
                <h2 className="flex items-center gap-2.5 text-[15.5px] font-bold tracking-[-0.01em] text-[#0F1F38]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#E8EFFC] text-[#1D64D8]">
                    <group.icon className="h-[17px] w-[17px]" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  {group.category}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.technologies.map((tech) => (
                    <TechnologyItem key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {techCategories.slice(6).map((group) => (
              <div key={group.id} className="card-premium min-w-0 p-6">
                <h2 className="flex items-center gap-2.5 text-[15.5px] font-bold tracking-[-0.01em] text-[#0F1F38]">
                  <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#E8EFFC] text-[#1D64D8]">
                    <group.icon className="h-[17px] w-[17px]" strokeWidth={1.9} aria-hidden="true" />
                  </span>
                  {group.category}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.technologies.map((tech) => (
                    <TechnologyItem key={tech.name} tech={tech} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};
