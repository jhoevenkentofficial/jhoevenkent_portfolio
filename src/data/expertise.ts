import type { ServicePillar } from '../types';

export const servicePillars: ServicePillar[] = [
  {
    id: 'web-development',
    title: 'Website Development',
    description:
      'Responsive, high-quality websites that help businesses communicate clearly and grow online.',
    iconName: 'code',
    capabilities: [
      'Front-end & back-end development',
      'Responsive website development',
      'WordPress content management & setup',
      'QA testing & cross-device validation',
      'Application deployment & cloud hosting',
      'Website maintenance & updates',
    ],
  },
  {
    id: 'custom-systems',
    title: 'Custom System Development',
    description:
      'Web applications and mobile systems designed around the way your team and customers work.',
    iconName: 'code',
    capabilities: [
      'Web and mobile application development',
      'Hybrid mobile app architecture',
      'Web and mobile system design',
      'Database integration & user access',
      'System integration & API implementation',
      'Bug identification, QA & resolution',
    ],
  },
  {
    id: 'ai-automations',
    title: 'AI Integration & Automation',
    description:
      'Useful AI integrations and workflow automation that make repetitive work easier to manage.',
    iconName: 'cpu',
    capabilities: [
      'AI workflow automation setup',
      'Process workflow automation',
      'Automated reporting & email workflows',
      'LLM integration & prompt engineering',
      'Workflow documentation',
      'Operational process improvement',
    ],
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Clear, approachable digital experiences shaped around user needs and business goals.',
    iconName: 'megaphone',
    capabilities: [
      'User journey mapping',
      'Interface and experience design',
      'Content structure & information hierarchy',
      'Responsive layout design',
      'Visual assets and promotional design',
      'Usability testing & refinement',
      'Content strategy & calendar management',
      'SEO website optimization',
      'Social media & audience engagement',
    ],
  },
  {
    id: 'business-solutions',
    title: 'Business Digital Solutions',
    description:
      'Connected tools, operations and support that help teams work with more clarity.',
    iconName: 'briefcase',
    capabilities: [
      'Business operations support',
      'CRM database management',
      'Lead generation, tracking & management',
      'Customer segmentation & journey mapping',
      'Task tracking & workflow optimization',
      'Data retrieval, reports & shared documents',
      'Calendar management & appointment scheduling',
      'Customer service (phone, email & chat)',
      'Invoicing, booking & reservation support',
      'Spreadsheet management',
    ],
  },
  {
    id: 'ecommerce-development',
    title: 'E-commerce Development',
    description:
      'Practical storefronts and connected commerce workflows for orders, payments and fulfilment.',
    iconName: 'shopping-bag',
    capabilities: [
      'E-commerce store setup',
      'Order and inventory management',
      'Payment processing integration',
      'Returns and refunds workflows',
      'Shipping and fulfilment coordination',
      'Customer account management',
      'Sales operations & order status monitoring',
      'Dispute resolution handling',
      'Inventory tracking',
    ],
  },
];
