import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Eye, X, Palette, ArrowRight } from 'lucide-react';
import { ALVEE_PROJECTS } from '../data';
import { Project } from '../types';

import marketingImagePng from '../assets/images/image.png';

const projectImages: Record<string, string> = {
  'project-4': marketingImagePng,
};


const UI_PROJECTS = ALVEE_PROJECTS.filter(p => p.category === 'UI/UX Design' || p.tags.some(t => t.toLowerCase().includes('ui') || t.toLowerCase().includes('ux') || t.toLowerCase().includes('design') || t.toLowerCase().includes('branding')));

export default function UIUXDesign() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-brand-beige">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 bg-gradient-to-br from-brand-navy via-brand-navy to-[#2a3f6f] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-orange/20 text-brand-orange text-xs font-bold uppercase tracking-widest rounded-full border border-brand-orange/30 mb-6">
              <Palette className="w-4 h-4" />
              UI/UX Design
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-6">
              Design Excellence
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Beautiful, intuitive interfaces and complete digital branding solutions that captivate users and drive engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-brand-orange font-bold text-xs tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-black font-display text-brand-navy tracking-tight">UI/UX Design Projects</h2>
          </div>

          {UI_PROJECTS.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 rounded-full bg-brand-beige border-2 border-dashed border-[#EADCD0]/50 flex items-center justify-center mx-auto mb-4">
                <Palette className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-xl font-bold font-display text-brand-navy mb-2">Coming Soon</h3>
              <p className="text-sm text-slate-500">UI/UX Design projects are being documented. Check back soon!</p>
            </div>
          ) : (
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {UI_PROJECTS.map((project, idx) => (
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
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={projectImages[project.id] || project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center shadow-xl"
                      >
                        <Eye className="w-6 h-6" />
                      </motion.div>
                    </div>

                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-brand-navy font-bold text-xs flex items-center justify-center shadow-sm">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

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

                    <div className="mt-4 flex items-center gap-1 text-brand-orange text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
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
                        <Palette className="w-5 h-5 text-brand-orange" />
                        Project Overview
                      </h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.description}</p>
                    </div>
                    <div>
                      <h5 className="font-bold text-brand-navy text-lg mb-3 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-brand-orange" />
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