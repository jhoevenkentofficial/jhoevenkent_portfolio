import { NavLink } from 'react-router-dom';
import {
  CheckCircle2,
  Facebook,
  FolderOpen,
  Github,
  GraduationCap,
  Home,
  Layers3,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
  UserRound,
} from 'lucide-react';
import { profile } from '../data/profile';

const profilePortrait = new URL('../img/Professional Innovation Hub Portrait.png', import.meta.url).href;

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/work', icon: FolderOpen },
  { label: 'BrightWeb', href: '/brightweb', icon: Rocket },
  { label: 'Services', href: '/expertise', icon: Layers3 },
  { label: 'Tech Stack', href: '/tech-stack', icon: Sparkles },
  { label: 'Credentials', href: '/credentials', icon: GraduationCap },
  { label: 'About', href: '/about', icon: UserRound },
  { label: 'Contact', href: '/contact', icon: Mail },
];

const socialLinks = [
  { label: 'GitHub', href: profile.social.github, icon: Github },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
  { label: 'Facebook', href: profile.social.facebook, icon: Facebook },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const Sidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 z-[60] hidden w-[310px] flex-col border-r border-[#1B0638]/10 bg-white xl:flex">
      <div className="sidebar-scroll flex min-h-0 flex-1 flex-col overflow-y-auto px-[29px] pb-5 pt-12">
        <div className="flex flex-col items-center text-center">
          <div className="profile-portrait" aria-label={profile.name}>
            <div className="profile-glow" />
            <div className="profile-monogram">
              <span>JKE</span>
              <small>Developer</small>
              <img
                src={profilePortrait}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                onError={(event) => {
                  (event.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-center gap-1.5">
            <h1 className="text-[18px] font-extrabold tracking-[-0.025em] text-[#090B0D]">{profile.shortName}</h1>
            <CheckCircle2 className="h-[16px] w-[16px] fill-[#20C52B] text-white" strokeWidth={3} />
          </div>
          <p className="mt-1 text-[12px] font-medium text-[#171A1F]/65">@jhoevenkent · Full Stack Developer</p>
          <p className="mt-2 text-[11px] font-bold uppercase tracking-[.11em] text-[#20C52B]">Founder of BrightWeb</p>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2.5">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noopener noreferrer'}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1B0638]/10 bg-white text-[#1B0638] transition-all hover:-translate-y-0.5 hover:border-[#20C52B]/60 hover:text-[#20C52B]"
              aria-label={label}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
            </a>
          ))}
        </div>

        <div className="my-7 h-px bg-[#1B0638]/10" />

        <nav className="flex flex-col gap-1" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              end={item.href === '/'}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-[10px] px-4 py-[10px] text-[13.5px] font-semibold transition-all ${
                  isActive
                    ? 'bg-[#1B0638]/10 text-[#1B0638]'
                    : 'text-[#171A1F]/75 hover:bg-[#F4F5F6] hover:text-[#1B0638]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <item.icon
                    className={`h-[18px] w-[18px] shrink-0 ${isActive ? 'text-[#20C52B]' : 'text-[#171A1F]/55 group-hover:text-[#20C52B]'}`}
                    strokeWidth={1.8}
                  />
                  <span>{item.label}</span>
                  {item.label === 'BrightWeb' && (
                    <span className="ml-auto rounded-full bg-[#20C52B]/10 px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-[.08em] text-[#171A1F]">Studio</span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-8">
          <div className="h-px bg-[#1B0638]/10" />
          <p className="mt-5 text-[10.5px] font-medium leading-relaxed text-[#171A1F]/65">© 2026 {profile.shortName}. All rights reserved.</p>
          <p className="mt-1 text-[10px] text-[#171A1F]/45">Sta. Monica, Siargao Island</p>
        </div>
      </div>
    </aside>
  );
};
