import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

interface WorkHeaderProps {
  activeSection: string;
}

export default function WorkHeader({ activeSection }: WorkHeaderProps) {
  const navigate = useNavigate();

  const workNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'ai-automation', label: 'AI Automation' },
    { id: 'calendar-scheduling', label: 'Calendar Scheduling' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'marketing', label: 'Marketing' }
  ];

  const handleNavClick = (id: string) => {
    if (id === 'home') {
      navigate('/');
    } else if (id === 'web-development') {
      navigate('/work');
    } else if (id === 'marketing') {
      navigate('/admin-operations');
    } else {
      navigate(`/${id}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-brand-beige/95 backdrop-blur-md border-b border-[#EADCD0]/30 py-2.5 px-4 md:px-8 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div 
          onClick={() => navigate('/')}
          className="relative cursor-pointer group flex items-center"
        >
          {/* Slanted parallelogram background */}
          <div className="absolute -inset-x-3 -inset-y-1 bg-[#FFE353] transform -skew-x-12 rounded-sm group-hover:bg-[#FFD426] transition-all duration-300" />
          {/* Logo text */}
          <span className="relative text-2xl font-black font-display text-brand-navy tracking-tight pl-1 select-none">
            KentDev
          </span>
        </div>

        {/* Work-specific Navigation Links */}
        <nav className="hidden md:flex items-center gap-2 xl:gap-3 flex-nowrap overflow-x-auto justify-center absolute left-1/2 -translate-x-1/2" id="work-nav">
          {workNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="relative font-sans text-base font-medium tracking-normal transition-colors duration-200 py-1 cursor-pointer text-brand-navy hover:text-brand-orange/80 whitespace-nowrap shrink-0"
            >
              {item.label}
            </button>
          ))}
        </nav>

      </div>
    </header>
  );
}