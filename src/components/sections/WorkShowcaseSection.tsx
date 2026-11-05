import { useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Container } from '../Container';
import { ProjectWalkthroughModal } from '../ProjectWalkthroughModal';
import { useBrowserPreview } from '../BrowserPreviewContext';
import { bentoItems } from '../ProjectsBentoGrid';
import { projectCarouselItems } from '../../data/projectCarousel';
import type { ProjectCarouselItem } from '../../data/projectCarousel';

const ProjectSlide = ({
  project,
  index,
  position,
  reduceMotion,
  onSelect,
  onPreview,
  onCaseStudy,
}: {
  project: ProjectCarouselItem;
  index: number;
  position: 'previous' | 'active' | 'next';
  reduceMotion: boolean;
  onSelect: () => void;
  onPreview: () => void;
  onCaseStudy: () => void;
}) => (
  <motion.article
    className={`work-project-card work-project-card--${position}`}
    role="group"
    aria-roledescription="slide"
    aria-label={`${index + 1} of ${projectCarouselItems.length}: ${project.title}`}
    initial={reduceMotion ? false : { opacity: 0.45, y: 12 }}
    animate={{
      opacity: position === 'active' ? 1 : 0.62,
      scale: position === 'active' ? 1 : 0.94,
      y: 0,
    }}
    transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="work-project-card__image">
      {project.image ? (
        <img src={project.image} alt={`${project.title} project preview`} loading={position === 'active' ? 'eager' : 'lazy'} decoding="async" />
      ) : (
        <div className="work-project-card__unavailable" role="img" aria-label={`Screenshot unavailable for ${project.title}`}>
          <span>Preview unavailable</span>
          <strong>{project.title}</strong>
        </div>
      )}
      {position === 'active' ? (
        project.url && (
          <button type="button" className="work-project-card__preview" onClick={onPreview}>
            Open preview <ArrowUpRight aria-hidden="true" />
          </button>
        )
      ) : (
        <button type="button" className="work-project-card__select" onClick={onSelect} aria-label={`Feature ${project.title}`} />
      )}
    </div>

    <div className="work-project-card__caption">
      <h3>{project.title}</h3>
      <ul className="work-project-card__tags" aria-label="Project categories">
        {[project.category, ...project.tags.slice(0, 2)].map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </div>
    {position === 'active' && (
      <>
        <p className="work-project-card__description">{project.description}</p>
        <div className="work-project-card__links">
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View project <ExternalLink aria-hidden="true" />
            </a>
          )}
          {project.caseStudyId && (
            <button type="button" onClick={onCaseStudy}>
              Case study <ArrowUpRight aria-hidden="true" />
            </button>
          )}
        </div>
      </>
    )}
  </motion.article>
);

export const WorkShowcaseSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeWalkthrough, setActiveWalkthrough] = useState<string | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const reduceMotion = useReducedMotion() ?? false;
  const { openPreview } = useBrowserPreview();
  const activeWalkthroughItem = activeWalkthrough ? bentoItems[activeWalkthrough] : null;
  const projectIndices = [
    (activeIndex - 1 + projectCarouselItems.length) % projectCarouselItems.length,
    activeIndex,
    (activeIndex + 1) % projectCarouselItems.length,
  ];

  const goTo = (index: number) => {
    setActiveIndex((index + projectCarouselItems.length) % projectCarouselItems.length);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      goTo(activeIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  };

  const onPointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStartX.current === null) return;
    const distance = event.clientX - pointerStartX.current;
    pointerStartX.current = null;
    if (Math.abs(distance) >= 48) goTo(activeIndex + (distance < 0 ? 1 : -1));
  };

  return (
    <section id="work" className="work-showcase" aria-labelledby="works-title">
      <Container className="work-showcase__container">
        <header className="work-showcase__heading">
          <p className="editorial-kicker">Selected projects</p>
          <h2 id="works-title">Our Works</h2>
        </header>

        <div id="project-showcase" className="work-carousel-anchor" />
        <div
          className="work-carousel"
          role="region"
          aria-label="Project carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={(event) => {
            if (event.pointerType === 'touch') pointerStartX.current = event.clientX;
          }}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            pointerStartX.current = null;
          }}
        >
          <div className="work-carousel__stage">
            <AnimatePresence initial={false}>
              {projectIndices.map((index, slot) => {
                const project = projectCarouselItems[index];
                const position = slot === 1 ? 'active' : slot === 0 ? 'previous' : 'next';

                return (
                  <ProjectSlide
                    key={`${position}-${project.id}`}
                    project={project}
                    index={index}
                    position={position}
                    reduceMotion={reduceMotion}
                    onSelect={() => goTo(index)}
                    onPreview={() => project.url && openPreview(project.url, project.title)}
                    onCaseStudy={() => project.caseStudyId && setActiveWalkthrough(project.caseStudyId)}
                  />
                );
              })}
            </AnimatePresence>
          </div>

          <div className="work-carousel__controls" role="group" aria-label="Carousel controls">
            <button
              type="button"
              className="work-carousel__arrow"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous project"
            >
              <ChevronLeft aria-hidden="true" />
            </button>

            <div className="work-carousel__pagination" role="group" aria-label="Choose a project">
              {projectCarouselItems.map((item, index) => (
                <button
                  type="button"
                  key={item.id}
                  className={index === activeIndex ? 'is-active' : ''}
                  aria-label={`Go to project ${index + 1}: ${item.title}`}
                  aria-current={index === activeIndex ? 'true' : undefined}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>

            <button
              type="button"
              className="work-carousel__arrow"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next project"
            >
              <ChevronRight aria-hidden="true" />
            </button>

            <p className="work-carousel__count" aria-live="polite">
              <span>{String(activeIndex + 1).padStart(2, '0')}</span>
              <span aria-hidden="true"> / </span>
              {String(projectCarouselItems.length).padStart(2, '0')}
            </p>
          </div>

        </div>
      </Container>
      <ProjectWalkthroughModal item={activeWalkthroughItem} onClose={() => setActiveWalkthrough(null)} />
      <ProjectWalkthroughModal item={activeWalkthroughItem} onClose={() => setActiveWalkthrough(null)} />
    </section>
  );
};
