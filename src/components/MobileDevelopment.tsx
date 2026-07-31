import { motion } from 'motion/react';
import { Smartphone } from 'lucide-react';

export default function MobileDevelopment() {
  return (
    <div className="min-h-screen bg-brand-beige">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-brand-navy via-brand-navy to-[#2a3f6f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full border border-brand-orange/30 mb-6">
              <Smartphone className="w-4 h-4" />
              Mobile Development
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-6">
              Mobile Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Native and cross-platform mobile applications built for performance, scalability, and exceptional user experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-[#EADCD0]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">iOS</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Native</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">Android</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Native</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">React Native</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Cross-Platform</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">100%</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Performance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-brand-orange font-bold text-xs tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-black font-display text-brand-navy tracking-tight">Mobile Development Projects</h2>
          </div>

          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-brand-beige border-2 border-dashed border-[#EADCD0]/50 flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-10 h-10 text-slate-300" />
            </div>
            <h3 className="text-xl font-bold font-display text-brand-navy mb-2">Coming Soon</h3>
            <p className="text-sm text-slate-500">Mobile Development projects are being documented. Check back soon!</p>
          </div>
        </div>
      </section>
    </div>
  );
}