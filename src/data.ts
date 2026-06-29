import { Project, Service, BlogPost, Stat, Testimonial } from './types';

export const ALVEE_STATS: Stat[] = [
  {
    id: 'exp',
    value: '4-5 Years',
    label: 'Experience',
    subLabel: 'Web Dev & Digital Ops',

    iconName: 'Award'
  },
  {
    id: 'projects',
    value: '25+ Projects',
    label: 'Completed',
    subLabel: 'Deployed systems & apps',

    iconName: 'FileCheck'
  },
  {
    id: 'support',
    value: 'AI & Automations',
    label: 'Capabilities',
    subLabel: 'Workflow optimization & CRM',
    iconName: 'Headphones'
  }
];

export const ALVEE_SERVICES: Service[] = [
  {
    id: 'web-mobile-dev',
    title: 'Web & Mobile Dev',
    description: 'Custom full-stack web architectures, mobile application development, and system integrations.',
    iconName: 'Code',
    price: 'Starting from $800',
    features: [
      'Front-end & back-end development',
      'Website development',
      'Mobile application development',
      'Hybrid mobile app architecture',
      'Web & mobile system design',
      'WordPress content management & setup',
      'QA testing & cross-device validation',
      'Bug identification & resolution',
      'Application deployment & cloud hosting',
      'Website maintenance & updates',
      'Database integration',
      'System uptime monitoring',
      'System integration & API implementation',
      'User access management'
    ]
  },
  {
    id: 'ai-automations',
    title: 'AI & Automations',
    description: 'Designing AI-driven workflows, email automations, LLM integrations, and custom reports.',
    iconName: 'Cpu',
    price: 'Starting from $600',
    features: [
      'AI workflow automation setup',
      'Process workflow automation',
      'Automated reporting setup',
      'Email automation setup',
      'LLM integration & prompting engineering',
      'AI-driven startup factory support',
      'Workflow documentation',
      'Operational process improvement',
      'Cross-functional team coordination',
      'Task tracking & digital project timelines',
      'Internal communication support',
      'Workflow optimization'
    ]
  },
  {
    id: 'admin-operations',
    title: 'Admin & Operations',
    description: 'Administrative, operational, and customer support with spreadsheet and calendar management.',
    iconName: 'Briefcase',
    price: 'Starting from $300',
    features: [
      'Administrative & executive support',
      'Business operations support',
      'Calendar management',
      'Appointment scheduling',
      'Customer service (phone, email & chat)',
      'Invoicing & billing support',
      'Booking management',
      'Online reservation management',
      'Data entry & data retrieval',
      'Report generation & presentation',
      'Shared document collaboration',
      'Spreadsheet management'
    ]
  },
  {
    id: 'sales-commerce',
    title: 'Sales & Commerce',
    description: 'Operational commerce support, payment/shipping setups, and order tracking workflows.',
    iconName: 'ShoppingBag',
    price: 'Starting from $400',
    features: [
      'Sales operations management',
      'Order processing',
      'Payment processing',
      'Returns and refunds processing',
      'Order status monitoring',
      'Shipping coordination',
      'Dispute resolution handling',
      'Customer account management',
      'Inventory tracking'
    ]
  },
  {
    id: 'growth-optimization',
    title: 'Growth & Optimization',
    description: 'CRM database setups, client segmentation, and lead tracking pipelines.',
    iconName: 'TrendingUp',
    price: 'Starting from $500',
    features: [
      'CRM database management',
      'Form creation & QR code integration',
      'Lead generation & lead tracking',
      'Lead management',
      'Customer segmentation',
      'Customer journey mapping'
    ]
  },
  {
    id: 'marketing-strategy',
    title: 'Marketing & Strategy',
    description: 'Social media marketing, search engine optimization, and campaign analytics.',
    iconName: 'Megaphone',
    price: 'Starting from $400',
    features: [
      'Social media management',
      'Audience engagement tracking',
      'Online community engagement',
      'Analytics & metrics analysis',
      'Content strategy development',
      'Content calendar management',
      'Content planning, creation & posting',
      'Graphic design & short video creation',
      'Promotional content design',
      'Marketing campaign implementation',
      'Performance monitoring',
      'SEO website optimization',
      'Landing page management'
    ]
  }
];

export const ALVEE_PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'Siargao HireHub',
    category: 'Web Development',
    description: 'A central web and mobile job application platform bridging local talent with expanding businesses in the Siargao Island tourism and hospitality ecosystems.',
    tags: ['Node.js', 'Python', 'REST APIs', 'MySQL', 'Postgres'],
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Kuya Pasabuy',
    category: 'Web Development',
    description: 'A localized delivery platform specialized for streamlined order procurement and routing fulfillment inside the regional ecosystems of Siargao.',
    tags: ['React', 'Database Logic', 'Delivery Routing', 'Local Deployment'],
    image: 'https://images.unsplash.com/photo-1526367790999-015078648c7e?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'project-3',
    title: 'TravelTewNews',
    category: 'Web Development',
    description: 'A comprehensive full-site data-driven news aggregator platform dedicated to scraping, centralizing, and dispatching multi-channel travel news feeds.',
    tags: ['Data Scraping', 'News Aggregator', 'Routing Layouts', 'Cloud Production'],
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'project-4',
    title: 'Escobal Print Studio',
    category: 'UI/UX Design',
    description: 'A complete digital branding suite and sleek, professional business interfaces to optimize ordering pipelines for a localized custom printing studio.',
    tags: ['UI/UX Design', 'Branding Suite', 'Business Tracking', 'Automation'],
    image: 'https://images.unsplash.com/photo-1561070791-26c113006238?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  },
  {
    id: 'project-5',
    title: 'YourGiftNetwork',
    category: 'Web Development',
    description: 'A dynamic social media platform enabling users to connect, share content, and build communities with real-time feeds, messaging, and engagement tools.',
    tags: ['React', 'Social Features', 'Real-time Feed', 'User Authentication', 'Responsive UI'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#',
    githubUrl: '#',
    featured: true
  }
];

export const ALVEE_TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'Eric Ben Arellano',
    role: 'CEO',
    company: 'Siargao VA Hub',
    content: 'Jhoeven has been an absolute game-changer for our business. His attention to detail and proactive approach to managing our communications has freed up so much of my time.',
    rating: 5
  },
  {
    id: 'testimonial-2',
    name: 'Vengi Olila Isidro',
    role: 'Founder',
    company: 'Haptitanan Siargao',
    content: 'The interface Jhoeven developed for us exceeded all expectations. Clean code, beautiful design, and delivered on time. His technical skills are truly top-notch.',
    rating: 5
  },
  {
    id: 'testimonial-3',
    name: 'Kurt Sulima',
    role: 'Full Stack Developer',
    company: 'Siargao VA Hub',
    content: 'Working with Jhoeven was fantastic. He understood our vision perfectly and created a stunning, high-performance site that our users absolutely love.',
    rating: 5
  },
  {
    id: 'testimonial-4',
    name: 'Tommy Walker',
    role: 'CEO',
    company: 'TravelTewNews',
    content: 'Jhoeven delivered an exceptional news aggregator platform that transformed how we deliver travel news. His technical expertise and dedication to quality resulted in a scalable, high-performance system that our users love. Highly recommended!',
    rating: 5
  }
];

export const ALVEE_BLOGS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Optimizing Local Digital Workflows for Remote Success',
    excerpt: 'How integrating automated reporting and digital communication protocols can boost project efficiency by 40%.',
    content: 'In modern start-ups and remote teams, documentation and clear communication pipelines are the difference between success and failure. Implementing organized cloud-based databases and customized automated reporting channels allows executive teams to make fast, accurate decisions without checking in repeatedly.\n\n### Document Retrieval Efficiency\nBy introducing clear folder architecture and document indexing protocol, companies can slash document search latency, giving virtual support staff immediate access to crucial guides and templates.',
    date: 'June 18, 2026',
    readTime: '5 min read',
    category: 'Operations',
    author: 'Jhoeven Kent Escobal',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'Bridging Localized Needs with Modern Web Architectures',
    excerpt: 'Building Siargao HireHub: How a custom-built React and REST API stack connects local talent to the tourism boom.',
    content: 'Tourism-heavy regions like Siargao Island have unique labor and business dynamics. Static job boards don\'t fit the fast-paced hiring need of hospitality venues. Building HireHub required a tailored backend with Node.js and a robust SQL database to match shifts, full-time roles, and emergency cover roles smoothly.\n\n### System Reliability\nWhen operating in regions with spotty infrastructure, keeping API responses light and client caching aggressive is a must to keep user experience smooth even under low connection speeds.',
    date: 'May 12, 2026',
    readTime: '8 min read',
    category: 'Engineering',
    author: 'Jhoeven Kent Escobal',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'Designing Business Pipelines with High-Level CRM Integrations',
    excerpt: 'A developer\'s guide to configuring GoHighLevel, HubSpot, and Zapier automated email and booking triggers.',
    content: 'Many businesses don\'t need custom web applications; they need highly optimized pipelines that sync client requests with calendars, invoicing systems, and team notifications automatically.\n\n### The Power of Webhooks\nBy listening to form submissions and trigger events, we can pipe lead data straight into custom segmentation lists in GHL or Monday, firing off personalized booking links in real-time.',
    date: 'April 28, 2026',
    readTime: '6 min read',
    category: 'AI & Automations',
    author: 'Jhoeven Kent Escobal',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
  }
];
