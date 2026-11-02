import { Quote } from 'lucide-react';
import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <figure className="flex h-full flex-col rounded-[14px] border border-[#1B0638]/10 bg-[#F4F5F6] p-6 sm:p-7">
      <Quote className="h-6 w-6 text-[#20C52B]" strokeWidth={1.75} />
      <blockquote className="mt-4 flex-1 text-[15.5px] leading-[1.7] text-[#090B0D]/85">
        {testimonial.content}
      </blockquote>
      <figcaption className="mt-6 border-t border-[#1B0638]/10 pt-5">
        <p className="text-[15.5px] font-bold text-[#1B0638]">{testimonial.name}</p>
        <p className="mt-0.5 font-mono text-[12px] uppercase tracking-[0.1em] text-[#20C52B]">
          {testimonial.role} · {testimonial.company}
        </p>
      </figcaption>
    </figure>
  );
};
