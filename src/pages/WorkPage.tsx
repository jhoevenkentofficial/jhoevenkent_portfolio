import { SEOHead } from '../components/SEOHead';
import { Container } from '../components/Container';
import { ProjectsBentoGrid } from '../components/ProjectsBentoGrid';

export const WorkPage = () => {
  return (
    <>
      <SEOHead
        title="Projects & Workflows | Jhoeven Kent Escobal"
        description="Real apps, funnels, AI agents, and GoHighLevel automation builds shipped to production by Jhoeven Kent Escobal."
        canonicalPath="/work"
      />

      <div className="dashboard-page relative min-h-screen bg-[#F4F5F6] overflow-hidden">
        <div aria-hidden="true" className="dashboard-orbit dashboard-orbit-one" />
        <div aria-hidden="true" className="dashboard-orbit dashboard-orbit-two" />

        <Container className="relative z-10 mx-0 max-w-none px-4 pb-12 pt-6 sm:px-6 lg:px-8 xl:px-12">
          <ProjectsBentoGrid />
        </Container>
      </div>
    </>
  );
};
