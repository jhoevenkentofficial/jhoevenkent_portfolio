import { NavLink } from 'react-router-dom';
import {
  Briefcase,
  FolderKanban,
  Github,
  Home,
  Layers,
  Linkedin,
  Facebook,
  Mail,
  Medal,
  Rocket,
  User,
  Wrench,
} from 'lucide-react';
import { profile } from '../data/profile';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/work', icon: FolderKanban },
  { label: 'BrightWeb', href: '/brightweb', icon: Rocket },
  { label: 'Services', href: '/expertise', icon: Layers },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Tech Stack', href: '/tech-stack', icon: Wrench },
  { label: 'Credentials', href: '/credentials', icon: Medal },
  { label: 'About', href: '/about', icon: User },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[240px] flex-col border-r border-[#E5E1D8] bg-[#FBFAF7] lg:flex">
      <div className="flex flex-1 flex-col overflow-y-auto px-5 py-7">
        <div className="flex flex-col items-center text-center">
          {/* Real profile photo slot — falls back to initials if no image file yet.
              Drop your photo at public/profile.jpg to use it automatically. */}
          <div className="relative h-[96px] w-[96px] overflow-hidden rounded-full bg-[#E9EDF3] ring-1 ring-[#0F1F38]/10">
            <img
              src="/profile.jpg"
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            <span className="absolute inset-0 -z-0 flex items-center justify-center text-[22px] font-bold tracking-tight text-[#0F1F38]/60">
              JKE
            </span>
          </div>
          <h1 className="mt-4 text-[16.5px] font-bold leading-tight tracking-[-0.015em] text-[#0F1F38]">
            {profile.name}
          </h1>
          <p className="mt-1.5 text-[12px] font-semibold leading-snug text-[#1D64D8]">
            Founder &amp; CEO — BrightWeb
            <br />
            IT Solutions
          </p>
          <p className="mt-1 text-[12px] font-medium text-[#111827]/55">Full Stack Developer</p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {profile.social.github && (
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2DFD6] bg-white text-[#111827]/65 transition-colors hover:border-[#1D64D8]/40 hover:text-[#1D64D8]"
              aria-label="GitHub"
            >
              <Github className="h-[15px] w-[15px]" />
            </a>
          )}
          {profile.social.linkedin && (
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2DFD6] bg-white text-[#111827]/65 transition-colors hover:border-[#1D64D8]/40 hover:text-[#1D64D8]"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-[15px] w-[15px]" />
            </a>
          )}
          {profile.social.facebook && (
            <a
              href={profile.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2DFD6] bg-white text-[#111827]/65 transition-colors hover:border-[#1D64D8]/40 hover:text-[#1D64D8]"
              aria-label="Facebook"
            >
              <Facebook className="h-[15px] w-[15px]" />
            </a>
          )}
          <a
            href={`mailto:${profile.email}`}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E2DFD6] bg-white text-[#111827]/65 transition-colors hover:border-[#1D64D8]/40 hover:text-[#1D64D8]"
            aria-label="Email"
          >
            <Mail className="h-[15px] w-[15px]" />
          </a>
        </div>

        <nav className="mt-7 flex flex-col gap-[3px]" aria-label="Main Navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-[10px] px-3 py-[9px] text-[13.5px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#E8EFFC] text-[#0F1F38]'
                    : 'text-[#3d4451]/80 hover:bg-[#0F1F38]/[0.04] hover:text-[#0F1F38]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`h-[17px] w-[17px] shrink-0 ${
                      isActive ? 'text-[#1D64D8]' : 'text-[#6b7482] group-hover:text-[#0F1F38]'
                    }`}
                    strokeWidth={1.9}
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-8 text-center">
          <p className="text-[11px] font-medium text-[#111827]/50">© 2026 Jhoeven Kent Escobal</p>
          <p className="mt-1 text-[11px] leading-snug text-[#111827]/40">
            Built with care in Siargao Island,
            <br />
            Philippines
          </p>
        </div>
      </div>
    </aside>
  );
};
