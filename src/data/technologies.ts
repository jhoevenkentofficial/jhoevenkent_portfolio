import type { ComponentType } from 'react';
import {
  CalendarClock,
  Cloud,
  Code2,
  Cpu,
  CreditCard,
  Database,
  Layers,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Palette,
  Plug,
  Rocket,
  Search,
  Server,
  Wrench,
} from 'lucide-react';

export interface Technology {
  name: string;
  logo?: string;
  genericIcon?: 'api' | 'calendar-api' | 'cloud' | 'deploy' | 'db' | 'code' | 'seo' | 'suite';
}

export interface TechCategory {
  id: string;
  category: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  technologies: Technology[];
}

// Single source of truth — shared by Home strip + Tech Stack page.
export const techCategories: TechCategory[] = [
  {
    id: 'languages',
    category: 'Languages & Web',
    icon: Code2,
    technologies: [
      { name: 'HTML', logo: '/tech/html5.svg' },
      { name: 'CSS', logo: '/tech/css3.svg' },
      { name: 'JavaScript', logo: '/tech/javascript.svg' },
      { name: 'TypeScript', logo: '/tech/typescript.svg' },
      { name: 'jQuery', logo: '/tech/jquery.svg' },
      { name: 'PHP', logo: '/tech/php.svg' },
      { name: 'Java', logo: '/tech/java.svg' },
      { name: 'Python', logo: '/tech/python.svg' },
      { name: 'C++', logo: '/tech/cplusplus.svg' },
      { name: 'SQL', genericIcon: 'db' },
    ],
  },
  {
    id: 'frameworks',
    category: 'Frameworks & Runtimes',
    icon: Layers,
    technologies: [
      { name: 'React', logo: '/tech/react.svg' },
      { name: 'React Native', logo: '/tech/react.svg' },
      { name: 'Angular', logo: '/tech/angular.svg' },
      { name: 'Ionic', logo: '/tech/ionic.svg' },
      { name: 'Node.js', logo: '/tech/nodejs.svg' },
      { name: 'Bootstrap 5', logo: '/tech/bootstrap.svg' },
      { name: 'CodeIgniter', logo: '/tech/codeigniter.svg' },
    ],
  },
  {
    id: 'databases',
    category: 'Databases & Integration',
    icon: Database,
    technologies: [
      { name: 'MySQL', logo: '/tech/mysql.svg' },
      { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
      { name: 'MongoDB', logo: '/tech/mongodb.svg' },
      { name: 'Firebase', logo: '/tech/firebase.svg' },
      { name: 'API Integration', genericIcon: 'api' },
      { name: 'Booking API Integration', genericIcon: 'calendar-api' },
      { name: 'Git (Version Control)', logo: '/tech/git.svg' },
    ],
  },
  {
    id: 'cms',
    category: 'CMS & Deployment',
    icon: Cloud,
    technologies: [
      { name: 'WordPress', logo: '/tech/wordpress.svg' },
      { name: 'GoDaddy', logo: '/tech/godaddy.svg' },
      { name: 'Wix', logo: '/tech/wix.svg' },
      { name: 'Vercel', logo: '/tech/vercel.svg' },
      { name: 'Cloud Hosting', genericIcon: 'cloud' },
      { name: 'Application Deployment', genericIcon: 'deploy' },
    ],
  },
  {
    id: 'automation',
    category: 'Automation & CRM',
    icon: Cpu,
    technologies: [
      { name: 'Zapier', logo: '/tech/zapier.svg' },
      { name: 'Make', logo: '/tech/make.svg' },
      { name: 'HighLevel (GHL)', logo: '/tech/highlevel.svg' },
      { name: 'HubSpot', logo: '/tech/hubspot.svg' },
      { name: 'Mailchimp', logo: '/tech/mailchimp.svg' },
      { name: 'Klaviyo', logo: '/tech/klaviyo.svg' },
      { name: 'Brevo', logo: '/tech/brevo.svg' },
      { name: 'Trello', logo: '/tech/trello.svg' },
      { name: 'Notion', logo: '/tech/notion.svg' },
      { name: 'Asana', logo: '/tech/asana.svg' },
      { name: 'ClickUp', logo: '/tech/clickup.svg' },
      { name: 'Monday', logo: '/tech/monday.svg' },
    ],
  },
  {
    id: 'commerce',
    category: 'Commerce & Payments',
    icon: CreditCard,
    technologies: [
      { name: 'Shopify', logo: '/tech/shopify.svg' },
      { name: 'Amazon', logo: '/tech/amazon.svg' },
      { name: 'Etsy', logo: '/tech/etsy.svg' },
      { name: 'Gorgias', logo: '/tech/gorgias.svg' },
      { name: 'PayPal', logo: '/tech/paypal.svg' },
      { name: 'Stripe', logo: '/tech/stripe.svg' },
      { name: 'Apple Pay', logo: '/tech/applepay.svg' },
      { name: 'Google Pay', logo: '/tech/googlepay.svg' },
      { name: 'Tradify', logo: '/tech/tradify.svg' },
    ],
  },
  {
    id: 'design',
    category: 'Design & Content',
    icon: Palette,
    technologies: [
      { name: 'Figma', logo: '/tech/figma.svg' },
      { name: 'Canva', logo: '/tech/canva.svg' },
      { name: 'CapCut', logo: '/tech/capcut.svg' },
      { name: 'Adobe Photoshop', logo: '/tech/photoshop.svg' },
      { name: 'Gamma', logo: '/tech/gamma.svg' },
      { name: 'Meta Business Suite', logo: '/tech/meta.svg' },
      { name: 'SEO Optimization', genericIcon: 'seo' },
    ],
  },
  {
    id: 'productivity',
    category: 'Productivity & Comms',
    icon: MessageSquare,
    technologies: [
      { name: 'Google Workspace', logo: '/tech/googleworkspace.svg' },
      { name: 'Microsoft Office', logo: '/tech/microsoftoffice.svg' },
      { name: 'Calendly', logo: '/tech/calendly.svg' },
      { name: 'DocuSign', logo: '/tech/docusign.svg' },
      { name: 'Slack', logo: '/tech/slack.svg' },
      { name: 'Zoom', logo: '/tech/zoom.svg' },
      { name: 'Microsoft Teams', logo: '/tech/microsoftteams.svg' },
      { name: 'Google Meet', logo: '/tech/googlemeet.svg' },
      { name: 'Time Doctor', logo: '/tech/timedoctor.svg' },
      { name: 'Hubstaff', logo: '/tech/hubstaff.svg' },
    ],
  },
];

export const genericIconMap = {
  api: Plug,
  'calendar-api': CalendarClock,
  cloud: Cloud,
  deploy: Rocket,
  db: Database,
  code: Code2,
  seo: Search,
  suite: LayoutDashboard,
} as const;

// Keep legacy export for any existing imports.
export const stackGroupsLegacy = techCategories.map((c) => ({
  id: c.id,
  category: c.category,
  items: c.technologies.map((t) => t.name),
}));

export { CalendarClock, Cloud, Code2, Cpu, CreditCard, Database, Layers, Mail, MessageSquare, Palette, Plug, Rocket, Search, Server, Wrench };
