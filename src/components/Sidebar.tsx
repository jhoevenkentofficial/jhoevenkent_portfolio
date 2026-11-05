import { Facebook, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data/profile';

const socialLinks = [
  { label: 'GitHub', href: profile.social.github, icon: Github },
  { label: 'LinkedIn', href: profile.social.linkedin, icon: Linkedin },
  { label: 'Facebook', href: profile.social.facebook, icon: Facebook },
  { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
];

export const Sidebar = () => (
  <aside className="social-rail" aria-label="Social profiles">
    <span>Connect</span>
    {socialLinks.map(({ label, href, icon: Icon }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        target={label === 'Email' ? undefined : '_blank'}
        rel={label === 'Email' ? undefined : 'noopener noreferrer'}
      >
        <Icon aria-hidden="true" />
      </a>
    ))}
  </aside>
);
