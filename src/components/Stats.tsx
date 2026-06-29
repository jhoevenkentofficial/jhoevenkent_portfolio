import { motion } from 'motion/react';
import { Award, FileCheck, Headphones } from 'lucide-react';
import { ALVEE_STATS } from '../data';

// Map icon names to components
const iconMap: { [key: string]: any } = {
  Award: Award,
  FileCheck: FileCheck,
  Headphones: Headphones
};

export default function Stats() {
  return (
    <section className="px-6 md:px-12 pb-16 bg-brand-beige" id="stats-section">
      <div className="max-w-7xl mx-auto">
        {/* Rounded white capsule container matching the image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-[2rem] md:rounded-full py-6 px-8 md:px-16 shadow-xl shadow-brand-navy/5 border border-[#EADCD0]/40 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-between"
          id="stats-capsule-container"
        >
          {ALVEE_STATS.map((stat, idx) => {
            const IconComponent = iconMap[stat.iconName] || Award;
            return (
              <div 
                key={stat.id} 
                className={`flex items-center gap-5 justify-center md:justify-start ${
                  idx !== 0 ? 'md:border-l border-slate-100 md:pl-8' : ''
                }`}
                id={`stat-item-${stat.id}`}
              >
                {/* Accent Orange Circle with White Icon */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-[#FF7824] flex items-center justify-center text-white shadow-md shadow-[#FF7824]/20 hover:scale-105 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" strokeWidth={2} />
                </div>
                
                {/* Labeling matching the layout of the image */}
                <div className="flex flex-col text-left">
                  <span className="text-xl md:text-2xl font-bold font-sans text-[#1E2E5C] leading-tight tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-sm font-sans font-medium text-slate-500 tracking-wide mt-0.5">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
