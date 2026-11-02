import { ArrowUpRight, ExternalLink } from 'lucide-react';
import type { Project } from '../types';
import { useBrowserPreview } from './BrowserPreviewContext';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const { openPreview } = useBrowserPreview();

  return (
    <article
      className={`group flex flex-col rounded-[14px] border border-[#1B0638]/10 bg-white/70 p-6 transition-all duration-200 hover:border-[#20C52B]/35 hover:shadow-[0_20px_45px_-30px_rgba(23,26,31,0.6)] sm:p-7 ${
        featured ? 'lg:p-8' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[11.5px] uppercase tracking-[0.14em] text-[#20C52B]">
          {project.category}
        </span>
        <span className="font-mono text-[11.5px] text-[#171A1F]/65">{project.period}</span>
      </div>

      <h3
        className={`mt-4 font-bold leading-tight tracking-[-0.02em] text-[#1B0638] ${
          featured ? 'text-[24px] sm:text-[27px]' : 'text-[21px]'
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-1.5 font-mono text-[12px] text-[#171A1F]/65">{project.deployment}</p>

      <p className="mt-4 text-[15.5px] leading-[1.68] text-[#090B0D]/80">{project.description}</p>

      {featured && (
        <ul className="mt-5 space-y-3">
          {project.summaryPoints.map((point) => (
            <li key={point} className="flex gap-3 text-[15px] leading-[1.62] text-[#090B0D]/78">
              <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#20C52B]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[#1B0638]/12 bg-[#F4F5F6] px-2.5 py-1 text-[12.5px] font-medium text-[#090B0D]/75"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.demoUrl && (
        <div className="mt-6 border-t border-[#1B0638]/10 pt-5">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.preventDefault();
              if (project.demoUrl) openPreview(project.demoUrl, project.title);
            }}
            className="inline-flex items-center gap-2 text-[14.5px] font-semibold text-[#20C52B] transition-colors hover:text-[#1B0638]"
          >
            <ExternalLink className="h-4 w-4" />
            View live deployment
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      )}
    </article>
  );
};
