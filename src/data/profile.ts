import type { ContactDetail, NavLink, Stat, TimelineEntry } from '../types';

export const profile = {
  name: 'Jhoeven Kent Estaloza Escobal',
  shortName: 'Jhoeven Kent',
  monogram: 'JKE',
  title: 'Full Stack Developer & Digital Operations Specialist',
  secondaryTitle: 'Founder & CEO — BrightWeb IT Solutions',
  headline: 'Engineering practical digital systems for businesses and communities.',
  statement:
    'I build scalable web and mobile products, connect reliable backend systems, and improve the workflows around them — combining full-stack engineering with hands-on digital operations.',
  email: 'escobaljhoeven@gmail.com',
  phone: '+639096028169',
  phoneHref: '+639096028169',
  location: 'Sta. Monica, Siargao Island, Philippines',
  availability: 'Available for selected projects',
  resumeUrl: '/Jhoeven_Kent_Escobal_Master_Resume.pdf',
  social: {
    github: 'https://github.com/jhoevenkentofficial',
    linkedin: 'https://www.linkedin.com/in/jhoeven-kent-escobal-535b80375/',
    facebook: 'https://www.facebook.com/kent.escobal.12',
  },
} as const;

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/work' },
  { label: 'BrightWeb', href: '/brightweb' },
  { label: 'Services', href: '/expertise' },
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
    id: 'support-volume',
    value: '1,500+',
    label: 'Monthly Inquiries',
    subLabel: 'Resolved across technical and account support',
  },
  {
    id: 'retrieval',
    value: '40%',
    label: 'Faster Retrieval',
    subLabel: 'From a cloud data organization protocol',
  },
  {
    id: 'capacity',
    value: '35%',
    label: 'Higher Capacity',
    subLabel: 'Concurrent-user growth supported by HireHub',
  },
  {
    id: 'uptime',
    value: '99.9%+',
    label: 'System Uptime',
    subLabel: 'Maintained for the HireHub platform',
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
    title: 'Expanded into digital operations',
    detail: 'Joined Pangeon AI Start-Up Factory and later GoTyme Bank, pairing web work with operations and client onboarding.',
  },
  {
    id: 'timeline-4',
    year: '2025',
    title: 'Shipped local and remote products',
    detail: 'Built Siargao HireHub, Escobal Print Studio and YourGiftNetwork across web, mobile and operational workflows.',
  },
  {
    id: 'timeline-5',
    year: '2026',
    title: 'BSIT graduate & independent builder',
    detail: 'Graduated from Surigao del Norte State University while delivering production platforms for local and remote teams.',
  },
];

export const differentiators = [
  {
    number: '01',
    subtitle: 'Engineering',
    title: 'Technical depth with an operations mindset.',
    paragraph:
      'Comfortable across React, Angular, Ionic, Node.js and Python — and equally focused on the operational workflow the software needs to support.',
  },
  {
    number: '02',
    subtitle: 'Localization',
    title: 'Solutions built for real regional constraints.',
    paragraph:
      'Platforms like Siargao HireHub and Kuya Pasabuy are designed around island connectivity, tourism demand and real local operating constraints.',
  },
  {
    number: '03',
    subtitle: 'Automation',
    title: 'Removing manual work from the critical path.',
    paragraph:
      'From cloud data organization to service workflows, the focus is measurable efficiency — including 40% faster retrieval and 20% fewer repeat contacts.',
  },
] as const;
