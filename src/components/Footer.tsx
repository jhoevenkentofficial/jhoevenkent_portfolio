import { Link } from 'react-router-dom';
import { Container } from './Container';
import { navLinks, profile } from '../data/profile';

export const Footer = () => {
  return (
    <footer className="border-t border-[#E5E1D8] bg-[#F7F5F0]">
      <Container className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[12px] text-[#6b7482]">© 2026 {profile.name} · {profile.location}</p>
        <nav className="flex flex-wrap gap-x-4 gap-y-1" aria-label="Footer">
          {navLinks.slice(0, 5).map((l) => (
            <Link key={l.href} to={l.href} className="text-[12px] font-medium text-[#6b7482] hover:text-[#0F1F38]">{l.label}</Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
};