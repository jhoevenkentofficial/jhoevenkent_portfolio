import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { profile } from '../data/profile';

const links = [
  { label: 'Services', id: 'services' },
  { label: 'Our Work', id: 'work' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Meet Kent', id: 'about' },
];

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, hash]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!isHome) return;
    if (hash) setActiveSection(hash.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );

    for (const { id } of links) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }

    return () => observer.disconnect();
  }, [isHome, hash]);

  const closeMenu = () => {
    if (!menuOpen) return;
    setMenuOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header className={`site-header${isHome ? ' site-header--home' : ''}`}>
      <div className="site-header__inner">
        <Link to="/#home" className="brand-mark" aria-label="Jhoeven Kent Escobal — home">
          <span className="brand-mark__name">
            <span>Jhoeven Kent</span>
            <strong>Escobal</strong>
          </span>
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className="site-header__menu"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav id="primary-navigation" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`} aria-label="Main navigation">
          {links.map(({ label, id }) => (
            <Link
              key={id}
              to={`/#${id}`}
              onClick={closeMenu}
              aria-current={activeSection === id ? 'location' : undefined}
              className={activeSection === id ? 'site-nav__link is-active' : 'site-nav__link'}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a href={profile.bookingUrl} className="site-nav__cta" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
          Start a Project <ArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};
