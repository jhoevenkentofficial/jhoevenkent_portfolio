export const identityRows = [
  {
    id: 'founder',
    title: 'Founder & CEO',
    sub: 'BrightWeb IT Solutions',
    num: '01',
    logos: [] as string[],
    badge: 'B',
  },
  {
    id: 'developer',
    title: 'Full Stack Developer',
    sub: 'Web Applications & Business Systems',
    num: '02',
    logos: ['/tech/react.svg', '/tech/typescript.svg', '/tech/nodejs.svg'],
    badge: null,
  },
  {
    id: 'solutions',
    title: 'Digital Solutions Builder',
    sub: 'APIs • Databases • Automation',
    num: '03',
    logos: ['/tech/postgresql.svg', '/tech/supabase.svg', '/tech/firebase.svg'],
    badge: null,
  },
  {
    id: 'product',
    title: 'Product Builder',
    sub: 'From idea → design → development → deployment',
    num: '04',
    logos: ['/tech/figma.svg', '/tech/vercel.svg', '/tech/git.svg'],
    badge: null,
  },
];

export const selectedBuilds = [
  {
    id: 'hirenova',
    name: 'HireNova',
    cat: 'Employment Technology',
    desc: 'AI-powered hiring ecosystem connecting talent and employers.',
    to: '/work',
    badge: 'H',
    badgeBg: '#0F1F38',
  },
  {
    id: 'brightweb',
    name: 'BrightWeb IT Solutions',
    cat: 'Digital Solutions',
    desc: 'Websites, systems, apps and automation for businesses.',
    to: '/brightweb',
    badge: 'B',
    badgeBg: '#1D64D8',
  },
  {
    id: 'ipsnsu',
    name: 'IPSNSU',
    cat: 'IP Management System',
    desc: 'Applicant portal with filing tracking and admin dashboard.',
    to: '/work',
    badge: 'IP',
    badgeBg: '#159947',
  },
];

export const howIWork = [
  {
    num: '01',
    title: 'Understand the Problem',
    desc: 'I start by understanding the real workflow, users, and business problem before choosing the technology.',
  },
  {
    num: '02',
    title: 'Build the Right Solution',
    desc: 'I design and develop practical systems around the actual requirements rather than unnecessary complexity.',
  },
  {
    num: '03',
    title: 'Ship & Improve',
    desc: 'I test, deploy, monitor, and improve the product based on real use and feedback.',
  },
];

export const aboutTechStrip = [
  'Next.js',
  'React',
  'TypeScript',
  'Node.js',
  'PHP',
  'Python',
  'PostgreSQL',
  'MySQL',
  'Supabase',
  'Firebase',
  'Git',
  'Vercel',
];

const logoByName: Record<string, string> = {
  'Next.js': '/tech/nextjs.svg',
  React: '/tech/react.svg',
  TypeScript: '/tech/typescript.svg',
  'Node.js': '/tech/nodejs.svg',
  PHP: '/tech/php.svg',
  Python: '/tech/python.svg',
  PostgreSQL: '/tech/postgresql.svg',
  MySQL: '/tech/mysql.svg',
  Supabase: '/tech/supabase.svg',
  Firebase: '/tech/firebase.svg',
  Git: '/tech/git.svg',
  Vercel: '/tech/vercel.svg',
};

export const aboutTechItems = aboutTechStrip.map((name) => ({ name, logo: logoByName[name] }));
