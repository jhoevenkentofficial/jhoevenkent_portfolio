import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Eye, X, Cpu, Zap, ArrowRight, Star } from 'lucide-react';
import { Project } from '../types';

const projectImages: Record<string, string> = {
  'ai-1': '/src/assets/images/ai automation/AI Customer Support Chatbot.png',
  'ai-2': '/src/assets/images/ai automation/AI Email Assistant.png',
  'ai-3': '/src/assets/images/ai automation/AI Lead Qualification System.png',
  'ai-4': '/src/assets/images/ai automation/AI Resume Analyzer.png',
  'ai-5': '/src/assets/images/ai automation/AI Social Media Automation.png'
};

const AI_PROJECTS: Project[] = [
  {
    id: 'ai-1',
    title: 'AI Customer Support Chatbot',
    category: 'AI Automation',
    description: 'Intelligent chatbot system that handles customer inquiries, provides instant responses, and escalates complex issues to human agents seamlessly.',
    tags: ['AI', 'Chatbot', 'Customer Support', 'NLP'],
    image: projectImages['ai-1'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ai-2',
    title: 'AI Email Assistant',
    category: 'AI Automation',
    description: 'Smart email management system that categorizes, prioritizes, and drafts responses to incoming emails automatically.',
    tags: ['AI', 'Email Automation', 'Smart Replies', 'NLP'],
    image: projectImages['ai-2'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ai-3',
    title: 'AI Lead Qualification System',
    category: 'AI Automation',
    description: 'Automated lead scoring and qualification system that analyzes customer data to identify high-value prospects.',
    tags: ['AI', 'Lead Generation', 'CRM', 'Analytics'],
    image: projectImages['ai-3'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ai-4',
    title: 'AI Resume Analyzer',
    category: 'AI Automation',
    description: 'Intelligent resume parsing and analysis tool that extracts key information and matches candidates to job requirements.',
    tags: ['AI', 'Resume Parsing', 'HR Tech', 'Machine Learning'],
    image: projectImages['ai-4'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'ai-5',
    title: 'AI Social Media Automation',
    category: 'AI Automation',
    description: 'Comprehensive social media management platform with AI-powered content generation, scheduling, and performance analytics.',
    tags: ['AI', 'Social Media', 'Content Generation', 'Analytics'],
    image: projectImages['ai-5'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }
];

export default function AIAutomation() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveSlide(prev => (prev + 1) % AI_PROJECTS.length);
  }, []);

  const prevSlide = () => {
    setDirection(-1);
    setActiveSlide(prev => (prev - 1 + AI_PROJECTS.length) % AI_PROJECTS.length);
  };

  const goToSlide = (idx: number) => {
    setDirection(idx > activeSlide ? 1 : -1);
    setActiveSlide(idx);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const featured = AI_PROJECTS[activeSlide];

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0, scale: 0.95 })
  };

  return (
    <div className="min-h-screen bg-brand-beige">
      {/* Hero Carousel Section */}
      <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-brand-navy">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={featured.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            {/* Background Image with overlay */}
            <div className="absolute inset-0">
              <img
                src={projectImages[featured.id] || featured.image}
                alt={featured.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/40 via-transparent to-brand-navy/20" />
            </div>

            {/* Content */}
            <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="max-w-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-orange/30">
                    Featured Project
                  </span>
                  <span className="flex items-center gap-1 text-amber-400 text-xs">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    AI & Automation
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-display text-white tracking-tight mb-4 leading-none">
                  {featured.title}
                </h1>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {featured.tags.map(tag => (
                    <span key={tag} className="px-3 py-1.5 bg-white/10 text-white text-xs font-semibold rounded-lg backdrop-blur-sm border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedProject(featured)}
                    className="px-8 py-3.5 bg-brand-orange hover:bg-[#E05E12] text-white font-bold text-sm rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
                  >
                    View Project Details
                    <Eye className="w-4 h-4" />
                  </button>
                  {featured.demoUrl && featured.demoUrl !== '#' && (
                    <a href={featured.demoUrl} target="_blank" rel="noopener noreferrer"
                      className="px-6 py-3.5 border-2 border-white/30 text-white hover:bg-white/10 font-semibold text-sm rounded-xl transition-all duration-300 flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <button onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            {AI_PROJECTS.map((_, idx) => (
              <button key={idx} onClick={() => goToSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlide ? 'w-8 bg-brand-orange' : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`} />
            ))}
          </div>
          <button onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all flex items-center justify-center cursor-pointer">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="ml-2 text-[10px] text-white/50 hover:text-white/80 transition-colors cursor-pointer">
            {isAutoPlaying ? 'PAUSE' : 'PLAY'}
          </button>
        </div>

        {/* Bottom gradient overlay for carousel controls */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-[#EADCD0]/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">5+</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">AI Solutions</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">LLM</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Integration</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">100%</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Automation</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-black font-display text-brand-navy">Custom</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-orange font-bold text-xs tracking-widest uppercase mb-2">Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-black font-display text-brand-navy tracking-tight">AI & Automation Projects</h2>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-slate-400">
              <Cpu className="w-3.5 h-3.5" />
              <span>Click any project to explore</span>
            </div>
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer border border-[#EADCD0]/20"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <img
                    src={projectImages[project.id] || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Hover overlay with action button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-xl"
                    >
                      <Eye className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Project number badge */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-brand-navy font-bold text-xs flex items-center justify-center shadow-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="text-[9px] font-bold bg-brand-beige text-slate-500 border border-[#EADCD0]/30 px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold font-sans text-brand-navy tracking-tight group-hover:text-brand-orange transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Animated arrow on hover */}
                  <div className="mt-4 flex items-center gap-1 text-brand-orange text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-navy/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/95 text-brand-navy hover:text-brand-orange hover:scale-105 transition-all shadow-md cursor-pointer">
                <X className="w-5 h-5" />
              </button>

              <div className="overflow-y-auto flex-1">
                <div className="h-72 md:h-96 relative bg-slate-100">
                  <img src={projectImages[selectedProject.id] || selectedProject.image}
                    alt={selectedProject.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-orange text-white px-3 py-1 rounded-full">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight mt-3">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                <div className="p-6 md:p-8 text-left">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="text-xs font-semibold bg-brand-beige text-brand-navy-light px-3 py-1 rounded-md border border-[#EADCD0]/40">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg mb-3 flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-brand-orange" />
                        Project Overview
                      </h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg mb-3 flex items-center gap-2">
                        <Zap className="w-5 h-5 text-brand-orange" />
                        Key Features
                      </h5>
                      <ul className="space-y-2">
                        {selectedProject.tags.map(tag => (
                          <li key={tag} className="flex items-start gap-2 text-sm text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                            <span>{tag} implementation and integration</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-6 mt-6 border-t border-slate-100">
                    {selectedProject.demoUrl && (
                      <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 bg-brand-orange hover:bg-[#E05E12] text-white font-semibold text-sm rounded-xl flex items-center gap-2 shadow-md hover:shadow-lg transition-all">
                        <ExternalLink className="w-4 h-4" />
                        Launch Live Project
                      </a>
                    )}
                    {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer"
                        className="px-6 py-3 border border-slate-300 text-brand-navy hover:bg-slate-50 font-semibold text-sm rounded-xl flex items-center gap-2 transition-all">
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}