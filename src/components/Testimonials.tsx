import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { ALVEE_TESTIMONIALS } from '../data';
import { Testimonial } from '../types';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-brand-beige/40 rounded-br-[10rem] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-beige/40 rounded-tl-[10rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-4xl md:text-5xl font-black font-display text-brand-navy tracking-tight mb-4"
          >
            What Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-slate-600 leading-relaxed font-sans"
          >
            Don't just take my word for it. Here's what business leaders and collaborators have to say about working together.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ALVEE_TESTIMONIALS.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-brand-beige/30 hover:bg-brand-beige/50 border border-[#EADCD0]/30 hover:border-[#EADCD0]/60 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 shadow-sm hover:shadow-xl relative group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-brand-navy" />
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#FF7824] text-[#FF7824]"
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 mb-6">
                <p className="text-slate-700 font-sans text-sm md:text-base leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#EADCD0]/40">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF7824] to-[#E05E12] flex items-center justify-center text-white font-bold font-display text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold font-sans text-brand-navy text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-sans">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}