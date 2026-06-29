import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/' },
  { id: 'work', label: 'Work', href: '/work' },
  { id: 'blog', label: 'Blog', href: '/', hasDropdown: true },
  { id: 'testimonials', label: 'Testimonials', href: '/' }
];

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [blogDropdownOpen, setBlogDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setIsOpen(false);
    setBlogDropdownOpen(false);
    
    if (href === '/work') {
      navigate('/work');
    } else if (href === '/get-started') {
      navigate('/get-started');
    } else if (href === '/') {
      // Check if we're on home page or need to navigate there
      if (window.location.pathname === '/' || window.location.pathname === '') {
        // Small delay to allow navigation to complete before scrolling
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Navigate to home page first, then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-beige/95 backdrop-blur-md border-b border-[#EADCD0]/30 py-4 px-6 md:px-12 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo matching the slanted parallelogram in the image */}
        <div 
          onClick={() => handleNavClick('home', '/')}
          className="relative cursor-pointer group flex items-center"
          id="header-logo-container"
        >
          {/* Slanted parallelogram background */}
          <div className="absolute -inset-x-3 -inset-y-1 bg-[#FFE353] transform -skew-x-12 rounded-sm group-hover:bg-[#FFD426] transition-all duration-300" />
          {/* Logo text */}
          <span className="relative text-2xl font-black font-display text-brand-navy tracking-tight pl-1 select-none">
            KentDev
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" id="desktop-nav">
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              {item.hasDropdown ? (
                <>
                  <button
                    onClick={() => setBlogDropdownOpen(!blogDropdownOpen)}
                    onMouseEnter={() => setBlogDropdownOpen(true)}
                    onMouseLeave={() => setBlogDropdownOpen(false)}
                    className={`relative font-sans text-base font-medium tracking-normal transition-colors duration-200 py-1 cursor-pointer flex items-center gap-1 ${
                      activeSection === item.id 
                        ? 'text-brand-orange' 
                        : 'text-brand-navy hover:text-brand-orange/80'
                    }`}
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Blog Mega Menu Dropdown */}
                  <AnimatePresence>
                    {blogDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-white rounded-2xl shadow-2xl border border-[#EADCD0]/30 overflow-hidden z-50"
                        onMouseEnter={() => setBlogDropdownOpen(true)}
                        onMouseLeave={() => setBlogDropdownOpen(false)}
                      >
                        <div className="p-8">
                          <div className="flex items-start gap-6">
                            {/* Icon Section */}
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-orange/5 text-brand-orange flex items-center justify-center shrink-0">
                              <BookOpen className="w-8 h-8" />
                            </div>
                            
                            {/* Content Section */}
                            <div className="flex-1">
                              <h3 className="text-xl font-bold font-display text-brand-navy mb-2">
                                Latest Insights
                              </h3>
                              <p className="text-sm text-slate-600 font-sans leading-relaxed mb-4">
                                No articles yet — check back soon.
                              </p>
                              <div className="h-px bg-gradient-to-r from-transparent via-[#EADCD0]/50 to-transparent mb-4" />
                              <p className="text-xs text-slate-500 font-sans">
                                Stay tuned for guides on workflow automations, localized digital solutions, and high-performance development.
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Decorative accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange/0 via-brand-orange/50 to-brand-orange/0" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`relative font-sans text-base font-medium tracking-normal transition-colors duration-200 py-1 cursor-pointer ${
                    activeSection === item.id 
                      ? 'text-brand-orange' 
                      : 'text-brand-navy hover:text-brand-orange/80'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Social Icons matching image styling */}
        <div className="hidden md:flex items-center space-x-4" id="desktop-socials">
          <a 
            href="https://www.facebook.com/kent.escobal.12" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#1877F2] text-white hover:scale-110 transition-transform duration-200 shadow-sm"
            aria-label="Facebook"
          >
            <Facebook className="w-5 h-5 fill-current" />
          </a>
          <a 
            href="https://www.instagram.com/es_kent_/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-white hover:scale-110 transition-transform duration-200 shadow-sm bg-gradient-to-tr from-[#FFB200] via-[#D80073] to-[#7100D8]"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a 
            href="https://wa.me/639096028169" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#25D366] text-white hover:scale-110 transition-transform duration-200 shadow-sm"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
          </a>
          
          {/* Get Started Button */}
          <button
            onClick={() => handleNavClick('getstarted', '/get-started')}
            className="px-5 py-2 bg-brand-orange hover:bg-[#E05E12] text-white font-sans font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-navy hover:text-brand-orange focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden mt-4 pt-4 border-t border-[#EADCD0]/40 overflow-hidden"
            id="mobile-nav-drawer"
          >
            <div className="flex flex-col space-y-4 pb-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id, item.href)}
                  className={`text-left font-sans text-lg font-medium py-1 px-2 rounded-md ${
                    activeSection === item.id 
                      ? 'text-brand-orange bg-brand-orange/5' 
                      : 'text-brand-navy hover:text-brand-orange'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-2 px-2">
                <a 
                  href="https://www.facebook.com/kent.escobal.12" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#1877F2] text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a 
                  href="https://www.instagram.com/es_kent_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-white bg-gradient-to-tr from-[#FFB200] via-[#D80073] to-[#7100D8]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/639096028169" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#25D366] text-white"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}