import { Link } from 'react-router-dom';
import { Container } from './Container';
import { navLinks, profile } from '../data/profile';

export const Footer = () => {
  return (
    <footer className="border-t border-[#1B0638]/10 bg-[#F4F5F6] xl:hidden">
      <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-[#171A1F]/65">© 2026 {profile.name} · {profile.location}</p>
        <p className="text-[12px] text-[#171A1F]/65">© 2026 {profile.name} · {profile.location}</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Footer">
          {navLinks.slice(0, 5).map((l) => (
            <Link key={l.href} to={l.href} className="text-[12px] font-medium text-[#171A1F]/65 hover:text-[#1B0638]">{l.label}</Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
};
