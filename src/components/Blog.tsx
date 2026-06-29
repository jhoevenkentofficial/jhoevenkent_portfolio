import { motion } from 'motion/react';
import { BookOpen } from 'lucide-react';

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16 max-w-2xl" id="blog-header-container">
          <p className="text-[#FF7824] font-bold text-sm tracking-widest uppercase mb-2">
            Insights
          </p>
          <h2 className="text-4xl md:text-5xl font-black font-display text-brand-navy tracking-tight">
            Latest Articles
          </h2>
          <p className="text-slate-600 mt-4 leading-relaxed font-sans text-sm md:text-base">
            Read Jhoeven Kent's guides on workflow automations, localized digital solutions, and high-performance development.
          </p>
        </div>

        {/* Empty State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-beige/30 border border-[#EADCD0]/20 rounded-3xl p-12 md:p-16 text-center"
          id="blog-empty-state"
        >
          <div className="max-w-md mx-auto">
            <div className="w-16 h-16 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold font-display text-brand-navy mb-3">
              No articles yet
            </h3>
            <p className="text-slate-600 font-sans text-sm md:text-base leading-relaxed">
              No articles yet — check back soon.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
