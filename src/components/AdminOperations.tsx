import { useState } from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, Star, ArrowRight } from 'lucide-react';

import marketingImg1 from '../assets/images/admin operation/image1.png';
import marketingImg2 from '../assets/images/admin operation/image2.jpg';
import marketingImg3 from '../assets/images/admin operation/image3.jpg';
// image4 has special filename suffix; skipping for now to avoid Vite import parse errors
// import marketingImg4 from '../assets/images/admin operation/image4.jpg!w700wp';

import marketingImg4 from '../assets/images/admin operation/image3.jpg';




import marketingImg5 from '../assets/images/admin operation/image5.avif';
import marketingImg6 from '../assets/images/admin operation/image6.jpg';

const projectImages: Record<string, string> = {
  'marketing-1': marketingImg1,
  'marketing-2': marketingImg2,
  'marketing-3': marketingImg3,
  'marketing-4': marketingImg4,
  'marketing-5': marketingImg5,
  'marketing-6': marketingImg6,
};


const MARKETING_PROJECTS = [
  {
    id: 'marketing-1',
    title: 'Brand Identity & Logo Design',
    description: 'Complete brand identity design including custom logo creation, color palettes, typography selection, and comprehensive brand guidelines for businesses. I create visual identities that resonate with your target audience and stand out in the market.',
    image: projectImages['marketing-1']
  },
  {
    id: 'marketing-2',
    title: 'Social Media Content Creation',
    description: 'Professional social media content creation including graphics, carousels, story designs, and engaging visuals for Instagram, Facebook, and LinkedIn. Eye-catching content that drives engagement and grows your following.',
    image: projectImages['marketing-2']
  },
  {
    id: 'marketing-3',
    title: 'Marketing Campaign Design',
    description: 'Strategic marketing campaign visuals including promotional banners, ad creatives, email templates, and landing page designs. Cohesive campaign assets that convert viewers into customers.',
    image: projectImages['marketing-3']
  },
  {
    id: 'marketing-4',
    title: 'Social Media Management',
    description: 'Complete social media management including content scheduling, community engagement, analytics tracking, and growth optimization. Strategic management to build your online presence.',
    image: projectImages['marketing-4']
  },
  {
    id: 'marketing-5',
    title: 'SEO & Content Strategy',
    description: 'Comprehensive SEO optimization and content strategy including keyword research, on-page optimization, and content planning for maximum visibility. Data-driven strategies to improve your search rankings.',
    image: projectImages['marketing-5']
  },
  {
    id: 'marketing-6',
    title: 'Marketing Analytics & Reporting',
    description: 'Data-driven marketing analytics with custom dashboards, performance tracking, and actionable insights to optimize marketing ROI. Turn data into decisions that grow your business.',
    image: projectImages['marketing-6']
  }
];

export default function AdminOperations() {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(MARKETING_PROJECTS[0]);

  return (
    <div className="min-h-screen bg-brand-beige">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-brand-orange/20 text-brand-orange text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-orange/30">
                Featured Work
              </span>
              <span className="flex items-center gap-1 text-amber-400 text-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                Marketing & Strategy
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-display text-white tracking-tight mb-4 leading-none">
              Marketing Services
            </h1>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Strategic marketing solutions, social media management, SEO optimization, and data-driven campaigns that drive business growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 md:px-12 bg-gradient-to-r from-brand-orange to-[#E05E12]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black font-display text-white tracking-tight mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create stunning marketing materials that drive results. Get started with a free consultation today.
          </p>
          <button
            onClick={() => navigate('/get-started')}
            className="px-10 py-4 bg-white text-brand-orange hover:bg-brand-beige font-bold text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
          >
            Request Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Projects Gallery Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="text-brand-orange font-bold text-xs tracking-widest uppercase mb-2">Portfolio</p>
            <h2 className="text-3xl md:text-4xl font-black font-display text-brand-navy tracking-tight">Marketing Projects</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Side - All Images */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-4">
                {MARKETING_PROJECTS.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedProject(project)}
                    className={`relative aspect-square rounded-2xl overflow-hidden cursor-pointer border-2 transition-all ${
                      selectedProject.id === project.id
                        ? 'border-brand-orange shadow-xl'
                        : 'border-transparent hover:border-brand-orange/30'
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <p className="text-white text-xs font-bold truncate">{project.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Side - Selected Project Details */}
            <div className="lg:col-span-7">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-[#EADCD0]/20"
              >
                {/* Large Image */}
                <div className="relative h-96 lg:h-[500px] overflow-hidden bg-slate-100">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <span className="text-[10px] font-bold uppercase tracking-widest bg-brand-orange text-white px-3 py-1 rounded-full">
                      Marketing
                    </span>
                    <h3 className="text-2xl md:text-3xl font-black font-display text-white tracking-tight mt-3">
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-brand-orange" />
                    <h4 className="font-bold text-brand-navy text-lg">Project Overview</h4>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-brand-beige text-brand-navy text-xs font-semibold rounded-lg border border-[#EADCD0]/30">
                      Marketing
                    </span>
                    <span className="px-3 py-1.5 bg-brand-beige text-brand-navy text-xs font-semibold rounded-lg border border-[#EADCD0]/30">
                      Strategy
                    </span>
                    <span className="px-3 py-1.5 bg-brand-beige text-brand-navy text-xs font-semibold rounded-lg border border-[#EADCD0]/30">
                      Creative
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}