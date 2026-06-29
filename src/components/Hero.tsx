import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download } from 'lucide-react';
import heroImage from '../assets/images/image.png';

interface HeroProps {
  setActiveSection: (section: string) => void;
}

export default function Hero({ setActiveSection }: HeroProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStartedClick = () => {
    window.location.href = '/get-started';
  };

  // Open CV PDF in new tab
  const handleDownloadCV = () => {
    window.open('/Jhoeven_Kent_Escobal_Master_Resume.pdf', '_blank');
  };

  // Calculate blur intensity based on scroll (max blur at 300px scroll)
  const blurAmount = Math.min(scrollY / 10, 20);
  const opacityReduction = Math.min(scrollY / 500, 0.8);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-8 pb-16 px-6 md:px-12 overflow-hidden bg-brand-beige">
      
      {/* Background overlay that appears on scroll */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-brand-beige/0 via-brand-beige/50 to-brand-beige pointer-events-none z-0"
        style={{
          opacity: opacityReduction
        }}
      />
      
      {/* Background pattern that fades in on scroll */}
      <motion.div 
        className="absolute inset-0 opacity-0 pointer-events-none z-0"
        style={{
          opacity: scrollY > 100 ? Math.min((scrollY - 100) / 300, 0.15) : 0,
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(30, 46, 92, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Background Accent Circles dispersed in different areas to elevate the layout */}
      {/* Top Left Background Accent Circle */}
      <motion.div 
        animate={{ 
          x: [0, 15, -10, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-12 -left-20 w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-[#FCECDD]/40 rounded-full blur-3xl pointer-events-none -z-10"
      />

      {/* Middle Left Accent Circle - directly behind the text to give high-end editorial depth */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/3 w-[200px] h-[200px] bg-[#FF7824]/5 rounded-full blur-2xl pointer-events-none -z-10"
      />

      {/* Bottom Left Accent Circle - right under the call-to-action buttons */}
      <motion.div 
        animate={{ 
          x: [-10, 10, -10],
          y: [10, -10, 10],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-12 w-[180px] h-[180px] bg-[#FAD9C1]/30 rounded-full blur-xl pointer-events-none -z-10"
      />

      {/* Top Center-Right Accent Ring */}
      <div className="absolute top-4 right-1/3 w-[120px] h-[120px] border border-[#FF7824]/5 rounded-full pointer-events-none -z-10" />

      {/* Bottom Center Accent Circle */}
      <motion.div 
        animate={{ 
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-2 right-1/2 w-[240px] h-[240px] bg-[#FCECDD]/25 rounded-full blur-2xl pointer-events-none -z-10"
      />

      <motion.div 
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        style={{
          filter: `blur(${blurAmount}px)`,
          transition: 'filter 0.1s ease-out'
        }}
      >
        
        {/* Left Side: Content matching original layout */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left" id="hero-left-content">
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#FF7824] font-sans font-bold text-lg md:text-xl tracking-wide mb-1"
          >
            Hi I'm
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-[#1E2E5C] tracking-tighter leading-none mb-3"
          >
            Jhoeven Kent
          </motion.h1>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-3xl lg:text-[2.2rem] font-bold font-sans text-[#1C2C54] tracking-tight leading-tight mb-5"
          >
            Full Stack Developer & Digital Operations Specialist
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-slate-600 font-sans text-base md:text-lg leading-relaxed max-w-xl mb-8"
          >
            Results-driven Full Stack Developer and Digital Operations professional specializing in building scalable web applications, optimizing business workflows, and integrating AI automations with administrative and operational excellence.
          </motion.p>
          
          {/* Action Buttons matching orange filled and outline states */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
            id="hero-cta-buttons"
          >
            <button
              onClick={handleDownloadCV}
              className="px-8 py-3.5 bg-[#FF7824] hover:bg-[#E05E12] text-white font-sans font-semibold rounded-lg shadow-lg hover:shadow-xl hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 cursor-pointer flex items-center gap-2"
              id="btn-download-cv"
            >
              <Download className="w-4 h-4" />
              Download CV
            </button>
            <button
              onClick={handleGetStartedClick}
              className="px-8 py-3.5 border-2 border-[#FF7824] text-[#FF7824] bg-white hover:bg-[#FF7824]/5 font-sans font-semibold rounded-lg hover:translate-y-[-1px] active:translate-y-[1px] transition-all duration-200 cursor-pointer flex items-center gap-2"
              id="btn-get-started-hero"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* Right Side: Exact concentric backdrop layout with person removed and fully augmented with elegant nested aesthetic circles */}
        <div className="lg:col-span-6 relative flex items-end justify-center h-[450px] md:h-[550px]" id="hero-right-visual">
          
          {/* Layer 6: Outermost massive subtle circle */}
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.1, delay: 0.5 }}
            className="absolute w-[420px] h-[420px] md:w-[540px] md:h-[540px] bg-[#FCECDD]/30 rounded-full translate-x-20 -translate-y-8 blur-md"
          />

          {/* Layer 5: Soft warm coral orbit ring */}
          <motion.div 
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.0, delay: 0.4 }}
            className="absolute w-[380px] h-[380px] md:w-[490px] md:h-[490px] border border-[#FF7824]/10 rounded-full translate-x-16 -translate-y-6"
          />

          {/* Layer 4: Original outer soft circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="absolute w-[360px] h-[360px] md:w-[460px] md:h-[460px] bg-[#FCECDD] rounded-full translate-x-12 -translate-y-4 shadow-inner"
          />

          {/* Layer 3: Secondary intermediate soft peach-pink circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="absolute w-[335px] h-[335px] md:w-[430px] md:h-[430px] bg-[#FAD9C1]/80 rounded-full translate-x-9 -translate-y-3"
          />

          {/* Layer 2: Original middle soft pinkish-peach circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute w-[310px] h-[310px] md:w-[400px] md:h-[400px] bg-[#FAD9C1] rounded-full translate-x-6 -translate-y-2"
          />

          {/* Layer 1.5: Vivid soft orange-red offset circle */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.9 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="absolute w-[285px] h-[285px] md:w-[365px] md:h-[365px] bg-[#FF8C42]/30 rounded-full translate-x-3 -translate-y-1"
          />

          {/* Layer 1: Inner vivid orange-coral circle (the primary circle backdrop) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="absolute w-[260px] h-[260px] md:w-[330px] md:h-[330px] bg-[#FF7824] rounded-full shadow-2xl shadow-[#FF7824]/35 flex items-center justify-center"
          >
            {/* Added a subtle concentric white glowing layout ring to anchor the center elegantly */}
            <motion.div 
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border-4 border-dashed border-white/20"
            />
          </motion.div>

          {/* User photo standing in the right side */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            className="absolute z-10 bottom-0 w-[300px] h-[400px] md:w-[440px] md:h-[540px] flex items-end justify-center"
          >
            <img 
              src={heroImage}
              alt="Jhoeven Kent Escobal"
              className="max-w-full max-h-full object-contain drop-shadow-[0_25px_60px_rgba(30,46,92,0.45)] hover:brightness-105 transition-all duration-300"
            />
          </motion.div>

          {/* Additional decorative floating accent circles around the perimeter */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-16 left-16 w-8 h-8 rounded-full bg-[#FF7824]/20 border border-[#FF7824]/30"
          />
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-16 right-16 w-12 h-12 rounded-full bg-[#FCECDD]/95 shadow-md flex items-center justify-center"
          >
            <div className="w-4 h-4 rounded-full bg-[#FF7824]/60" />
          </motion.div>
          <motion.div 
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-1/2 right-12 w-6 h-6 rounded-full bg-[#1E2E5C]/10"
          />
        </div>

      </motion.div>
    </section>
  );
}

