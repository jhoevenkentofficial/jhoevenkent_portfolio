import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from './Button';
import { navLinks, profile } from '../data/profile';

const profilePortrait = new URL('../img/Professional Innovation Hub Portrait.png', import.meta.url).href;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 xl:hidden ${
        scrolled
          ? 'border-[#1B0638]/10 bg-[#F4F5F6]/95 backdrop-blur-md'
          : 'border-transparent bg-[#F4F5F6]'
      }`}
    >
      <Container className="flex h-[64px] items-center justify-between gap-4">
        <NavLink to="/" className="flex items-center gap-2.5" aria-label="Jhoeven Kent Escobal — home">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-[#1B0638]/10 text-[10px] font-extrabold text-[#1B0638]">
            <span aria-hidden="true">JKE</span>
            <img
              src={profilePortrait}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-[14.5px] font-bold tracking-[-0.01em] text-[#1B0638]">
              Jhoeven Kent Escobal
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#20C52B]">
              Full Stack Developer
            </span>
          </span>
        </NavLink>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#1B0638]/15 text-[#1B0638] transition-colors hover:bg-[#1B0638]/[0.06]"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-[#1B0638]/10 bg-[#F4F5F6]">
          <Container className="flex max-h-[70vh] flex-col gap-1 overflow-y-auto py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                end={link.href === '/'}
                className={({ isActive }) =>
                  `rounded-[8px] px-3 py-3 text-[15px] font-semibold transition-colors ${
                    isActive ? 'bg-[#20C52B]/10 text-[#1B0638]' : 'text-[#090B0D]/75'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-3 pb-2">
              <Button to="/contact" variant="primary" size="md" showArrow>
                Start a Project
              </Button>
              <Button href={profile.resumeUrl} variant="outline-dark" size="md" external>
                Download Résumé
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
};
