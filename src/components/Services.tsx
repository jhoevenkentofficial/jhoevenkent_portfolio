import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Cpu, Briefcase, ShoppingBag, TrendingUp, Megaphone, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ALVEE_SERVICES } from '../data';

const iconMap: { [key: string]: any } = {
  Code: Code,
  Cpu: Cpu,
  Briefcase: Briefcase,
  ShoppingBag: ShoppingBag,
  TrendingUp: TrendingUp,
  Megaphone: Megaphone
};

const INITIAL_VISIBLE = 5;

interface ServicesProps {
  setActiveSection: (section: string) => void;
}

export default function Services({ setActiveSection }: ServicesProps) {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  const handleServiceInquiry = (serviceTitle: string) => {
    navigate('/get-started');
  };

  const toggleExpand = (id: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-white relative">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-beige/40 rounded-bl-[10rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Header / Title Area */}
        <div className="text-center md:text-left mb-16 max-w-2xl" id="services-header-container">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-2"
          >
            Capabilities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-4xl md:text-5xl font-black font-display text-brand-navy tracking-tight"
          >
            Tailored Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-slate-600 mt-4 leading-relaxed font-sans"
          >
            Whether you need to build scalable applications, setup custom AI automations, organize database integrations, or optimize digital operations, Kent delivers premium results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-grid-container">
          {ALVEE_SERVICES.map((service, index) => {
            const Icon = iconMap[service.iconName] || Code;
            const isExpanded = expandedCards.has(service.id);
            const visibleFeatures = isExpanded ? service.features : service.features.slice(0, INITIAL_VISIBLE);
            const hasMore = service.features.length > INITIAL_VISIBLE;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-brand-beige/50 hover:bg-brand-beige/80 border border-[#EADCD0]/30 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 shadow-sm"
                id={`service-card-${service.id}`}
              >
                <div>
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#EADCD0]/40 flex items-center justify-center text-brand-orange shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold font-sans text-brand-navy tracking-tight mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 font-sans text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <ul className="space-y-1.5 mb-3" id={`service-bullets-${service.id}`}>
                    <AnimatePresence initial={false}>
                      {visibleFeatures.map((feature, fIdx) => (
                        <motion.li
                          key={fIdx}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex items-start gap-2 text-sm font-sans text-slate-700"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF7824] shrink-0" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>

                  {/* See More / See Less toggle */}
                  {hasMore && (
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center gap-1 text-xs font-semibold text-brand-orange hover:text-[#E05E12] transition-colors mb-4 cursor-pointer"
                      id={`btn-toggle-${service.id}`}
                    >
                      {isExpanded ? (
                        <>
                          <ChevronUp className="w-3.5 h-3.5" />
                          See Less
                        </>
                      ) : (
                        <>
                          <ChevronDown className="w-3.5 h-3.5" />
                          See {service.features.length - INITIAL_VISIBLE} More
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Card footer CTA */}
                <button
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full py-2.5 bg-white hover:bg-brand-orange hover:text-white border border-[#EADCD0] hover:border-brand-orange text-brand-navy font-semibold text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  id={`btn-service-cta-${service.id}`}
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
