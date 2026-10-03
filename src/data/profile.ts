import type { ContactDetail, NavLink, Stat, TimelineEntry } from '../types';

export const profile = {
  name: 'Jhoeven Kent Escobal',
  shortName: 'Jhoeven Kent',
  monogram: 'JKE',
  title: 'Founder & CEO — BrightWeb IT Solutions',
  secondaryTitle: 'Full Stack Developer',
  headline: 'Building digital products that move businesses forward.',
  statement:
    "I'm Jhoeven Kent Escobal, Founder & CEO of BrightWeb IT Solutions and a Full Stack Developer building websites, business systems, web applications, automation solutions, and scalable digital products.",
  email: 'escobaljhoeven@gmail.com',
  phone: '+639096028169',
  phoneHref: '+639096028169',
  location: 'Siargao Island, Philippines',
  availability: 'Available for selected projects',
  resumeUrl: '/Jhoeven_Kent_Escobal_Master_Resume.pdf',
  social: {
    github: 'https://github.com/jhoevenkentescobal',
    linkedin: 'https://www.linkedin.com/in/jhoeven-kent-escobal-1371a7264',
    facebook: 'https://www.facebook.com/jhoeven.kent.escobal',
  },
} as const;

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/work' },
  { label: 'BrightWeb', href: '/brightweb' },
  { label: 'Services', href: '/expertise' },
  { label: 'Experience', href: '/experience' },
  { label: 'Tech Stack', href: '/tech-stack' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const contactDetails: ContactDetail[] = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: 'mail',
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    icon: 'phone',
  },
  {
    label: 'Location',
    value: profile.location,
    href: 'https://maps.google.com/?q=Siargao+Island+Surigao+del+Norte',
    icon: 'location',
  },
];

export const stats: Stat[] = [
  {
    id: 'experience',
    value: '4+ Years',
    label: 'Combined Experience',
    subLabel: 'Web development, operations & support',
  },
  {
    id: 'projects',
    value: '25+',
    label: 'Systems Shipped',
    subLabel: 'Web, mobile & automation platforms',
  },
  {
    id: 'uptime',
    value: '99.9%',
    label: 'Platform Uptime',
    subLabel: 'Maintained across production deployments',
  },
  {
    id: 'retrieval',
    value: '40%',
    label: 'Faster Retrieval',
    subLabel: 'Document efficiency protocol introduced',
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: 'timeline-1',
    year: '2022',
    title: 'Graduated Sapao National High School',
    detail: 'General Academic Strand — foundation in analytical and communication skills.',
  },
  {
    id: 'timeline-2',
    year: '2023',
    title: 'Customer Service Representative',
    detail: 'Eperformax Contact Center — resolved 1,500+ monthly multi-channel inquiries.',
  },
  {
    id: 'timeline-3',
    year: '2024',
    title: 'Virtual Assistant & Web Developer',
    detail: 'Pangeon AI Start-Up Factory — protocol engineering and executive support.',
  },
  {
    id: 'timeline-4',
    year: '2025',
    title: 'Scaled full stack delivery',
    detail: 'Siargao HireHub, Escobal Print Studio and YourGiftNetwork shipped to production.',
  },
  {
    id: 'timeline-5',
    year: '2026',
    title: 'BSIT Graduate & Independent Developer',
    detail: 'Surigao del Norte State University — delivering localized digital platforms.',
  },
];

export const differentiators = [
  {
    number: '01',
    subtitle: 'Engineering',
    title: 'Technical depth with an operations mindset.',
    paragraph:
      'Comfortable across React, Angular, Ionic, Node.js and Python — and equally at home mapping the business workflow the software has to serve.',
  },
  {
    number: '02',
    subtitle: 'Localization',
    title: 'Solutions built for real regional constraints.',
    paragraph:
      'Platforms like Siargao HireHub and Kuya Pasabuy were designed around island connectivity, tourism seasonality and local operating realities.',
  },
  {
    number: '03',
    subtitle: 'Automation',
    title: 'Removing manual work from the critical path.',
    paragraph:
      'From CRM pipelines to AI-assisted reporting, the focus is always measurable efficiency — 40% faster document retrieval, 20% fewer repeat contacts.',
  },
] as const;