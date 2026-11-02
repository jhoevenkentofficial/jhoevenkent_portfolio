import { useEffect, useRef, useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number, dir: 'next' | 'prev' = 'next') => {
    setDirection(dir);
    setActiveIndex(index);
  };

  const next = () => {
    goTo((activeIndex + 1) % testimonials.length, 'next');
  };

  const prev = () => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length, 'prev');
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      next();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, isPaused]);

  const current = testimonials[activeIndex];

  // Initials avatar
  const initials = current.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div
      className="testimonial-carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Animated Card */}
      <div
        key={activeIndex}
        className={`testimonial-carousel__card ${
          direction === 'next' ? 'testimonial-carousel__card--slide-left' : 'testimonial-carousel__card--slide-right'
        }`}
      >
        {/* Top Header: Rating stars & Quote decoration */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[#20C52B]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[#20C52B]" />
            ))}
            <span className="ml-1.5 font-mono text-[11px] font-semibold text-[#171A1F]/60">5.0</span>
          </div>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#20C52B]/10 text-[#20C52B]">
            <Quote className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Testimonial Content Text */}
        <p className="testimonial-carousel__content">
          "{current.content}"
        </p>

        {/* Author Details */}
        <div className="testimonial-carousel__author">
          <div className="testimonial-carousel__avatar">
            {initials}
          </div>
          <div className="testimonial-carousel__author-info">
            <div className="flex items-center gap-1.5">
              <strong className="testimonial-carousel__name">{current.name}</strong>
              <CheckCircle className="h-3.5 w-3.5 text-[#20C52B]" aria-label="Verified client" />
            </div>
            <span className="testimonial-carousel__role">
              {current.role} &middot; {current.company}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Controls: Prev/Next buttons & Indicator dots */}
      <div className="testimonial-carousel__controls">
        <div className="testimonial-carousel__dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`testimonial-carousel__dot${i === activeIndex ? ' testimonial-carousel__dot--active' : ''}`}
              onClick={() => goTo(i, i > activeIndex ? 'next' : 'prev')}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={prev}
            className="testimonial-carousel__arrow-btn"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="testimonial-carousel__arrow-btn"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
