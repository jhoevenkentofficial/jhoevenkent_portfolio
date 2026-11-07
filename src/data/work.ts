import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'hirenova',
    title: 'Siargao HireHub / HireNova',
    category: 'Employment Technology / Professional Networking',
    period: 'September 2025 – Present',
    deployment: 'Production — Siargao Island, Philippines',
    description:
      'An AI-powered professional networking and employment platform designed to connect job seekers, employers, freelancers, and businesses through a modern digital hiring ecosystem.',
    tags: ['Node.js', 'Python', 'REST APIs', 'MySQL', 'Postgres', 'Ionic'],
    summaryPoints: [
      'Central web and mobile job application platform bridging local talent with expanding businesses across the Siargao Island tourism and hospitality ecosystems.',
      'Implemented Node.js and Python backend services that supported 35% growth in concurrent-user capacity while maintaining uptime above 99.9%.',
      'Connected REST APIs to secure MySQL and PostgreSQL infrastructure and designed clear application pathways for job seekers and employers.',
    ],
    demoUrl: 'https://hirenova-cec8.onrender.com/',
    featured: true,
  },
  {
    id: 'kuya-pasabuy',
    title: 'Kuya Pasabuy',
    category: 'Delivery Platform',
    period: 'March 2026 – May 2026',
    deployment: 'Local Deployment — Siargao Island, Philippines',
    description:
      'A localized delivery platform specialized for streamlined order procurement and routing fulfilment inside the regional ecosystems of Siargao.',
    tags: ['React', 'Database Logic', 'Delivery Routing', 'Local Deployment'],
    summaryPoints: [
      'Designed, built and deployed an end-to-end procurement and routing fulfilment experience for the local market.',
      'Engineered interactive front-to-back components and database logic to support real-time delivery scheduling.',
    ],
    demoUrl: 'https://www.kuyapasabuysiargao.com/',
    featured: true,
  },
  {
    id: 'traveltewnews',
    title: 'TravelTewNews',
    category: 'Data Aggregation',
    period: 'February 2026 – April 2026',
    deployment: 'Cloud Production Deployment',
    description:
      'A comprehensive data-driven news aggregator platform dedicated to scraping, centralizing and dispatching multi-channel travel news feeds.',
    tags: ['Data Scraping', 'Aggregation', 'Routing Layouts', 'Cloud Production'],
    summaryPoints: [
      'Developed and structured a full-site, data-driven aggregator centralizing multi-channel travel news feeds.',
      'Optimized automated routing layouts and secure information indexing for fast loading and device responsiveness.',
    ],
    demoUrl: 'https://traveltewnews.com/',
    featured: true,
  },
];
