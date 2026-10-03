export interface TechItem {
  name: string;
  icon: string;
}

// Home strip stays in sync with the shared source — same local assets.
export const techStrip: TechItem[] = [
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'PHP', icon: '/tech/php.svg' },
  { name: 'Python', icon: '/tech/python.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  { name: 'MySQL', icon: '/tech/mysql.svg' },
  { name: 'MongoDB', icon: '/tech/mongodb.svg' },
  { name: 'Supabase', icon: '/tech/supabase.svg' },
  { name: 'Firebase', icon: '/tech/firebase.svg' },
  { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg' },
  { name: 'Git', icon: '/tech/git.svg' },
  { name: 'Figma', icon: '/tech/figma.svg' },
  { name: 'Vercel', icon: '/tech/vercel.svg' },
];

export const hireNovaChecklist = [
  'Job marketplace',
  'Professional profiles',
  'Employer dashboard',
  'Resume management',
  'Messaging & networking',
];

export const hireNovaTags = ['Next.js', 'TypeScript', 'Supabase', '+6'];

export const homeServices = [
  {
    id: 'websites',
    title: 'Websites',
    desc: 'Business & Professional',
    icon: 'globe' as const,
  },
  {
    id: 'webapps',
    title: 'Web Applications',
    desc: 'Custom Systems',
    icon: 'layout' as const,
  },
  {
    id: 'automation',
    title: 'Automation',
    desc: 'AI & Workflow',
    icon: 'spark' as const,
  },
  {
    id: 'support',
    title: 'Ongoing Support',
    desc: 'Maintenance & Optimization',
    icon: 'shield' as const,
  },
];

export const floatingCards = [
  { id: 'webapps', title: 'Web Applications', icon: 'layout' as const },
  { id: 'systems', title: 'Business Systems', icon: 'briefcase' as const },
  { id: 'ai', title: 'AI & Automation', icon: 'spark' as const },
];
