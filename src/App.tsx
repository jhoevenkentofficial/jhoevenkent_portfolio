import { useState, useEffect, ComponentType } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WorkHeader from './components/WorkHeader';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Tools from './components/Tools';
import Testimonials from './components/Testimonials';
import GetStarted from './components/GetStarted';
import AdminPage from './components/AdminPage';
import Work from './components/Work';
import AIAutomation from './components/AIAutomation';
import CalendarScheduling from './components/CalendarScheduling';
import AdminOperations from './components/AdminOperations';
import { ArrowRight } from 'lucide-react';

function HomePage() {
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'tools', 'testimonials'];
      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-beige flex flex-col font-sans selection:bg-[#FF7824]/20 selection:text-brand-navy" id="root-portfolio-container">
      {/* Sticky Navigation Header */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero setActiveSection={setActiveSection} />
        <Stats />
        <Services setActiveSection={setActiveSection} />
        <Tools />
        <Testimonials />
        
        {/* Get Started CTA Section */}
        <section className="py-20 px-6 md:px-12 bg-brand-navy relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy-light to-brand-navy opacity-90" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-display text-white tracking-tight mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's collaborate and build something amazing together. Get a free consultation and custom roadmap for your business.
            </p>
            <button
              onClick={() => window.location.href = '/get-started'}
              className="px-10 py-4 bg-brand-orange hover:bg-[#E05E12] text-white font-sans font-bold text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center gap-2"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      {/* Aesthetic Footer */}
      <footer className="bg-[#1E2E5C] text-white border-t border-white/5 py-12 px-6 md:px-12 text-center" id="portfolio-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <span className="text-xl font-black font-display text-white select-none">
              Jhoeven Kent
            </span>
            <p className="text-xs text-slate-400 mt-1.5 font-sans">
              © 2026 Jhoeven Kent Escobal. Built with React, Vite, and Tailwind v4.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-sans" id="footer-links">
            <button 
              onClick={() => {
                setActiveSection('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Back to Top
            </button>
            <a href="https://www.facebook.com/kent.escobal.12" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://www.instagram.com/es_kent_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/639096028169" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function WorkPage() {
  return (
    <div className="min-h-screen bg-brand-beige flex flex-col font-sans">
      {/* Sticky Navigation Header */}
      <WorkHeader activeSection="work" />

      {/* Main Content */}
      <main className="flex-1">
        <Work />
      </main>

      {/* Aesthetic Footer */}
      <footer className="bg-[#1E2E5C] text-white border-t border-white/5 py-12 px-6 md:px-12 text-center" id="portfolio-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <span className="text-xl font-black font-display text-white select-none">
              Jhoeven Kent
            </span>
            <p className="text-xs text-slate-400 mt-1.5 font-sans">
              © 2026 Jhoeven Kent Escobal. Built with React, Vite, and Tailwind v4.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-sans" id="footer-links">
            <a href="/" className="hover:text-white transition-colors">Back to Home</a>
            <a href="https://www.facebook.com/kent.escobal.12" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://www.instagram.com/es_kent_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/639096028169" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServicePage({ Component }: { Component: ComponentType }) {
  return (
    <div className="min-h-screen bg-brand-beige flex flex-col font-sans">
      <WorkHeader activeSection="work" />
      <main className="flex-1">
        <Component />
      </main>
      <footer className="bg-[#1E2E5C] text-white border-t border-white/5 py-12 px-6 md:px-12 text-center" id="portfolio-footer">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start text-left">
            <span className="text-xl font-black font-display text-white select-none">Jhoeven Kent</span>
            <p className="text-xs text-slate-400 mt-1.5 font-sans">© 2026 Jhoeven Kent Escobal. Built with React, Vite, and Tailwind v4.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-sans" id="footer-links">
            <a href="/" className="hover:text-white transition-colors">Back to Home</a>
            <a href="https://www.facebook.com/kent.escobal.12" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://www.instagram.com/es_kent_/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://wa.me/639096028169" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/ai-automation" element={<ServicePage Component={AIAutomation} />} />
        <Route path="/calendar-scheduling" element={<ServicePage Component={CalendarScheduling} />} />
        <Route path="/admin-operations" element={<ServicePage Component={AdminOperations} />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}
