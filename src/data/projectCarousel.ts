import { projects } from './work';
import { siteWorksGallery } from './siteWorksGallery';

const brightwebImage = new URL('../img/Site Works/brightweb.png', import.meta.url).href;

export interface ProjectCarouselItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  url?: string;
  tags: string[];
  caseStudyId?: string;
}

const caseStudyIds: Record<string, string> = {
  hirenova: 'hirenovaPortal',
  'kuya-pasabuy': 'kuyaPasabuy',
  traveltewnews: 'travelTewNews',
};

const normalizeUrl = (url?: string) => {
  if (!url) return undefined;
  try {
    return new URL(url).hostname.replace(/^www\./, '') + new URL(url).pathname.replace(/\/$/, '');
  } catch {
    return url;
  }
};

const representedUrls = new Set(projects.map((project) => normalizeUrl(project.demoUrl)).filter(Boolean));

const workItems: ProjectCarouselItem[] = projects.map((project) => {
  const liveWork = siteWorksGallery.find(
    (site) => normalizeUrl(site.url) === normalizeUrl(project.demoUrl),
  );

  return {
    id: project.id,
    title: project.title,
    category: project.category,
    description: project.description,
    image: liveWork?.image,
    url: project.demoUrl,
    tags: project.tags,
    caseStudyId: caseStudyIds[project.id],
  };
});

const additionalLiveWork: ProjectCarouselItem[] = siteWorksGallery
  .filter((site) => !representedUrls.has(normalizeUrl(site.url)))
  .map((site) => ({
    id: site.id,
    title: site.title,
    category: site.category,
    description: site.description ?? '',
    image: site.image,
    url: site.url,
    tags: site.tags ?? [],
    caseStudyId: caseStudyIds[site.id],
  }));

export const projectCarouselItems: ProjectCarouselItem[] = [
  {
    id: 'brightweb',
    title: 'BrightWeb IT Solutions',
    category: 'Web & Business Solutions',
    description:
      'Professional websites, custom business systems, web applications, and automation solutions for growing businesses.',
    image: brightwebImage,
    url: 'https://www.brightwebsolution.site/',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Cloud Hosting'],
    caseStudyId: 'companyWebsites',
  },
  ...workItems,
  ...additionalLiveWork,
];
