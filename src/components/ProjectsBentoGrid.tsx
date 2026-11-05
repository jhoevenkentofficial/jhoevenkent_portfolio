import { useState } from 'react';
import {
  ArrowUpRight,
  MousePointerClick,
} from 'lucide-react';
import { ProjectWalkthroughModal } from './ProjectWalkthroughModal';
import type { BentoProjectItem } from './ProjectWalkthroughModal';
import { ComingSoonModal } from './ComingSoonModal';
import { SiteWorks3DModal } from './SiteWorks3DModal';
import { useBrowserPreview } from './BrowserPreviewContext';
import { siteWorksGallery } from '../data/siteWorksGallery';

const brightwebIcon = new URL('../img/brightweb icon.png', import.meta.url).href;
const hirenovaIcon = new URL('../img/hirenova icon.png', import.meta.url).href;

export const bentoItems: Record<string, BentoProjectItem> = {
  automations: {
    id: 'automations',
    category: 'Services: AI & Automations',
    badge: 'GoHighLevel & Pipeline Engineering',
    title: 'AI & Workflow Automations',
    subtitle: 'Real GoHighLevel workflows, automated CRM pipelines, and multi-app webhook integrations.',
    overview:
      'I engineer end-to-end automated client journeys using GoHighLevel, Zapier, Make, and Python scripts. From instant lead capture to conditional routing, 2-way SMS follow-ups, and automated CRM pipeline stage updates, these systems eliminate repetitive manual work.',
    metrics: [
      { label: 'Time Saved per Lead', value: '45 mins' },
      { label: 'Uptime Reliability', value: '99.9%' },
      { label: 'Multi-Step Pipelines', value: '18+ Nodes' },
    ],
    architectureNodes: [
      { step: '1', title: 'Inbound Lead Trigger', desc: 'Captures inquiries from funnels, websites, or social ads with UTM source attribution.' },
      { step: '2', title: 'Smart Qualification & Scoring', desc: 'Evaluates budget and service intent; auto-assigns tags and routes to the right pipeline.' },
      { step: '3', title: 'Automated 2-Way Engagement', desc: 'Dispatches instantaneous personalized SMS, email sequence, and calendar booking link.' },
      { step: '4', title: 'CRM Sync & Team Alert', desc: 'Updates pipeline stage in GoHighLevel, alerts team Slack, and schedules internal follow-up tasks.' },
    ],
    features: [
      'Multi-branch condition routing based on custom form fields and user responses.',
      'Automated appointment reminders, rescheduling flows, and missed-call text-back automations.',
      'Two-way sync connecting GoHighLevel CRM, Stripe payments, and PostgreSQL databases.',
      'Operational reporting automation and daily lead status summaries sent to business owners.',
    ],
    tags: ['GoHighLevel', 'Make.com', 'Zapier', 'CRM Pipelines', 'SMS Automations', 'Webhooks'],
  },

  companyWebsites: {
    id: 'companyWebsites',
    category: 'Services: Web & Mobile Development',
    badge: 'Startup & Company Websites',
    title: 'Startup & Company Websites',
    subtitle: 'High-performance business sites, startup platforms, and client portals built for BrightWeb and clients.',
    logoUrl: brightwebIcon,
    overview:
      'As Founder & CEO of BrightWeb IT Solutions, I architect and build modern, ultra-fast websites and web applications tailored for growing startups, local businesses, and international clients.',
    metrics: [
      { label: 'Lighthouse Performance', value: '98/100' },
      { label: 'Average Page Load', value: '< 0.8s' },
      { label: 'Code Quality', value: 'Type-Safe' },
    ],
    architectureNodes: [
      { step: '1', title: 'UI/UX & Brand Design', desc: 'Crafting responsive layouts, component hierarchies, and interactive wireframes in Figma.' },
      { step: '2', title: 'Modern Full-Stack Engineering', desc: 'Building with React, Next.js, TypeScript, Tailwind CSS, and scalable REST APIs.' },
      { step: '3', title: 'Database & CMS Integration', desc: 'Connecting PostgreSQL, Supabase, or headless CMS for easy client content updates.' },
      { step: '4', title: 'Cloud CI/CD Deployment', desc: 'Deploying with automated GitHub Actions to Vercel and Render with SSL and custom domain DNS.' },
    ],
    features: [
      'Full-stack company websites with rapid page speeds and clean responsive layouts.',
      'Custom client portals, inquiry forms, and interactive price estimators.',
      'SEO optimization, meta tags, OpenGraph sharing cards, and structured schema markup.',
      'Turnkey setup including domain management, business email, and cloud hosting.',
    ],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'BrightWeb IT Solutions', 'Cloud Hosting'],
    demoUrl: 'https://www.brightwebsolution.site/',
  },

  hirenovaPortal: {
    id: 'hirenovaPortal',
    category: 'Services: Web & Mobile Development',
    badge: 'Startup Platform',
    title: 'Siargao HireHub / HireNova',
    subtitle: 'AI-powered recruitment portal connecting island talent and expanding businesses...',
    logoUrl: hirenovaIcon,
    overview:
      'Production employment technology platform connecting local talent with expanding businesses across the tourism, hospitality, and tech sectors of Siargao Island.',
    metrics: [
      { label: 'Capacity Growth', value: '+35%' },
      { label: 'Uptime', value: '99.9%' },
      { label: 'Users', value: 'Active' },
    ],
    features: [
      'Central web and mobile job application portal bridging local jobseekers with island employers.',
      'Node.js and Python backend microservices handling high-concurrency applicant traffic.',
      'Structured application pathways, resume storage, and employer interview dispatch.',
    ],
    tags: ['Node.js', 'Python', 'PostgreSQL', 'Ionic', 'REST APIs'],
    demoUrl: 'https://hirenova-cec8.onrender.com/',
  },

  clientDesk: {
    id: 'clientDesk',
    category: 'Services: Growth & Operations',
    badge: 'GHL Blueprint',
    title: 'Client Intake & CRM Desk',
    subtitle: 'Automated client intake, stage tracking & SLA timers built inside GoHighLevel...',
    overview:
      'Transformed standard CRM accounts into fully automated client onboarding desks with automatic ticket assignment, priority escalation, and customer SLA monitoring.',
    metrics: [
      { label: 'Intake Speed', value: 'Instant' },
      { label: 'SLA Tracking', value: '99%' },
      { label: 'Pipelines', value: 'Unified' },
    ],
    features: [
      'Multi-channel inquiry intake unifying Email, SMS, Web Forms, and Social DMs into one inbox.',
      'Automated SLA timer that alerts managers if high-ticket leads wait more than 15 minutes.',
      'Canned response macros and automatic tag segmentation for targeted follow-up marketing.',
    ],
    tags: ['GoHighLevel', 'CRM Architecture', 'Client Intake', 'Lead Management'],
  },

  travelTewNews: {
    id: 'travelTewNews',
    category: 'Services: Web & Data Engineering',
    badge: 'Cloud Production',
    title: 'TravelTewNews Platform',
    subtitle: 'Automated multi-channel travel news indexing and cloud distribution...',
    overview:
      'A comprehensive data-driven news aggregator platform dedicated to scraping, centralizing and dispatching multi-channel travel news feeds with sub-second loading.',
    metrics: [
      { label: 'Uptime', value: '99.9%' },
      { label: 'Cloud Hosting', value: 'Global CDN' },
      { label: 'Speed', value: '< 600ms' },
    ],
    features: [
      'Automated multi-source scraping and indexing pipelines.',
      'Responsive news feed interface with fast caching and SEO metadata.',
      'Secure information dispatch and multi-device responsiveness.',
    ],
    tags: ['Data Scraping', 'Aggregation', 'Routing Layouts', 'Cloud Production'],
    demoUrl: 'https://traveltewnews.com/',
  },

  kuyaPasabuy: {
    id: 'kuyaPasabuy',
    category: 'Services: Sales & Commerce',
    badge: 'Commerce & Logistics',
    title: 'Kuya Pasabuy Delivery',
    subtitle: 'Localized order procurement and real-time routing fulfillment inside Siargao...',
    overview:
      'End-to-end delivery and order procurement platform customized for regional merchants, island customers, and delivery riders in Siargao.',
    metrics: [
      { label: 'Local Deployment', value: 'Production' },
      { label: 'Order Routing', value: 'Real-Time' },
      { label: 'Commerce Logic', value: 'Custom' },
    ],
    features: [
      'Interactive customer ordering catalog with real-time delivery scheduling.',
      'Rider assignment logic, buyer SMS updates, and delivery fulfillment tracking.',
      'Backend database architecture managing daily merchant orders and settlement reports.',
    ],
    tags: ['React', 'Database Architecture', 'Delivery Logistics', 'Local Commerce'],
    demoUrl: 'https://www.kuyapasabuysiargao.com/',
  },

  funnelsSites: {
    id: 'funnelsSites',
    category: 'Services: Sales & Commerce',
    badge: 'High-Converting Landers',
    title: 'Funnels & High-Converting Sites',
    subtitle: 'Custom sales funnels, booking engines, and brand landing pages designed to drive revenue.',
    overview:
      'Conversion-focused landing pages, e-commerce stores, and booking funnels designed with rapid load times, persuasive visual hierarchy, and frictionless payment gateway integrations (Stripe, PayPal, local payment methods). Browse all 9 live client works below.',
    metrics: [
      { label: 'Client Works', value: '9 Shipped' },
      { label: 'Payment Gateway', value: 'Stripe / PayPal' },
      { label: 'Mobile Readiness', value: '100%' },
    ],
    features: [
      'Mobile-first responsive funnels with high-contrast call-to-action buttons.',
      'Integrated payment checkouts, deposit collections, and automatic invoice delivery.',
      'Direct synchronization to CRM pipelines to trigger instant thank-you SMS and onboarding steps.',
      'A/B test-ready landing page sections designed for maximum conversion rate optimization.',
    ],
    tags: ['Funnels', 'Stripe', 'PayPal', 'Shopify', 'Conversion UI', 'Client Showcase', 'Figma'],
    demoUrl: 'https://traveltewnews.com/',
    gallery: siteWorksGallery,
  },

  aiAgents: {
    id: 'aiAgents',
    category: 'Services: AI & Automations',
    badge: 'RAG & Autonomous Bots',
    title: 'AI Agents & RAG Chatbots',
    subtitle: 'Custom retrieval chatbots, automated customer service agents, and LLM knowledge search.',
    overview:
      'Autonomous AI customer agents and RAG (Retrieval-Augmented Generation) systems that query company documentation, answer customer questions accurately, and trigger real operational actions.',
    metrics: [
      { label: 'Accuracy', value: '99% Grounded' },
      { label: 'Response Latency', value: '< 500ms' },
      { label: 'Availability', value: '24/7 Live' },
    ],
    features: [
      'Vector semantic search powered by pgvector and embeddings over company PDFs and manuals.',
      'Automated customer support handling FAQ questions, pricing, and appointment booking 24/7.',
      'Function calling capabilities to look up orders, update CRM records, and ping human agents.',
      'Strict guardrails and prompt engineering preventing hallucinations or unauthorized data leaks.',
    ],
    tags: ['OpenAI', 'Python', 'LangChain', 'pgvector', 'RAG Chatbots', 'Customer AI'],
    demoUrl: 'https://yourgiftnetwork.app/',
  },

  appsExtensions: {
    id: 'appsExtensions',
    category: 'Services: Web & Mobile Development',
    badge: 'Mobile Apps & Extensions',
    title: 'Mobile Apps & Web Systems',
    subtitle: 'Cross-platform mobile apps, internal company portals, and custom productivity tools.',
    overview:
      'Cross-platform mobile applications for iOS and Android built with React Native and Ionic, paired with specialized Chrome extensions that automate day-to-day administrative and browser workflows.',
    metrics: [
      { label: 'Platforms', value: 'iOS / Android / Web' },
      { label: 'Architecture', value: 'Full-Stack' },
      { label: 'Deployments', value: 'Live' },
    ],
    features: [
      'Native-feel mobile apps with offline caching and real-time backend synchronization.',
      'Custom Chrome Manifest V3 tools to scrape, validate, or auto-fill repetitive web forms.',
      'Role-based administration dashboards with granular permissions for team members.',
    ],
    tags: ['React Native', 'Ionic', 'Chrome Extensions', 'TypeScript', 'Node.js'],
    demoUrl: 'https://www.kuyapasabuysiargao.com/',
  },
};

export const ProjectsBentoGrid = () => {
  const { openPreview } = useBrowserPreview();
  const [selectedItem, setSelectedItem] = useState<BentoProjectItem | null>(null);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showSiteWorks3D, setShowSiteWorks3D] = useState(false);
  const caseStudies: Record<string, BentoProjectItem> = {
    hirenova: bentoItems.hirenovaPortal,
    kuyapasbuy: bentoItems.kuyaPasabuy,
    traveltewnews: bentoItems.travelTewNews,
  };

  return (
    <div className="relative w-full">
      <section className="work-gallery" aria-label="Selected live projects">
        <div className="work-gallery__heading">
          <p className="editorial-kicker">Selected live work · 09 projects</p>
          <p>Real products, client sites and digital experiences, built to be explored.</p>
        </div>
        <div className="work-gallery__grid">
          {siteWorksGallery.map((site, index) => (
            <article className={`work-gallery__item work-gallery__item--${index + 1}`} key={site.id}>
              <button
                type="button"
                className="work-gallery__image"
                onClick={() => site.url && openPreview(site.url, site.title)}
                aria-label={`Open ${site.title} live preview`}
              >
                <img src={site.image} alt={`${site.title} project screenshot`} loading="lazy" />
                <span>Open live preview <ArrowUpRight aria-hidden="true" /></span>
              </button>
              <div className="work-gallery__meta"><span>{site.category}</span><span>{String(index + 1).padStart(2, '0')}</span></div>
              <h3>{site.title}</h3>
              {site.description && <p>{site.description}</p>}
              <div className="work-gallery__actions">
                {site.url && (
                  <button type="button" onClick={() => openPreview(site.url!, site.title)}>
                    View project <ArrowUpRight aria-hidden="true" />
                  </button>
                )}
                {caseStudies[site.id] && (
                  <button type="button" onClick={() => setSelectedItem(caseStudies[site.id])}>
                    Case study <ArrowUpRight aria-hidden="true" />
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Eyebrow & Headline Header - Same sizes as Home Page */}
      <div className="mb-6 sm:mb-8">
        <p className="font-mono text-[12px] font-bold uppercase tracking-[0.16em] text-[#20C52B]">
          INTERACTIVE WALKTHROUGHS
        </p>
        <h2 className="mt-3 text-[37px] font-extrabold leading-[1.04] tracking-[-0.045em] text-[#1B0638] sm:text-[49px] xl:text-[58px]">
          Go beyond the screenshots.
        </h2>
        <p className="mt-4 max-w-[820px] text-[15px] font-medium leading-relaxed tracking-[0.005em] text-[#171A1F]/75 sm:text-[17px]">
          Open a project to explore its walkthrough, system details and interactive live-site showcase.
        </p>
      </div>

      {/* Main Bento Container */}
      <div className="relative rounded-[26px] border border-[#CBD8E8] bg-[#EEF2F8]/70 p-4 sm:p-6 lg:p-7 shadow-[inset_0_1px_3px_rgba(255,255,255,0.8),0_14px_36px_-16px_rgba(27,6,56,0.08)]">
        
        {/* Floating Top Pill Badge */}
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1.5 rounded-full border border-[#CBD8E8] bg-white px-4 py-1 shadow-sm">
            <MousePointerClick className="h-3 w-3 text-[#20C52B]" />
            <span className="font-mono text-[10px] font-extrabold uppercase tracking-wider text-[#1B0638]">
              CLICK A CARD TO OPEN IT
            </span>
          </div>
        </div>

        {/* ── TOP ROW BENTO GRID ── */}
        <div className="grid grid-cols-1 items-start gap-4 xl:grid-cols-12">
          
          {/* Card 1: Automations */}
          <button
            type="button"
            aria-label="Open AI and workflow automations case study"
            onClick={() => setSelectedItem(bentoItems.automations)}
            className="dashboard-card group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#20C52B]/40 hover:shadow-lg sm:p-6 xl:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between">
                {/* Integration App Badges: Make, Zapier, GHL, HubSpot */}
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                  {/* Make */}
                  <div
                    title="Make.com Automations"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
                      <rect width="32" height="32" rx="7" fill="#6F00F8" />
                      <g fill="#FFFFFF">
                        <rect x="7" y="7.5" width="4" height="17" rx="2" transform="rotate(-15 7 7.5)" />
                        <rect x="14" y="7.5" width="4" height="17" rx="2" transform="rotate(-15 14 7.5)" />
                        <rect x="21" y="7.5" width="4" height="17" rx="2" transform="rotate(-15 21 7.5)" />
                      </g>
                    </svg>
                  </div>

                  {/* Zapier */}
                  <div
                    title="Zapier Webhooks & Workflows"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#FF4F00] text-white">
                      <span className="font-sans text-[8px] sm:text-[9px] font-black tracking-tighter">zapier</span>
                    </div>
                  </div>

                  {/* GHL */}
                  <div
                    title="GoHighLevel Workflows"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#111827] text-white">
                      <span className="font-mono text-[9px] sm:text-[10px] font-extrabold tracking-tight">
                        GH<span className="text-red-500">L</span>
                      </span>
                    </div>
                  </div>

                  {/* HubSpot */}
                  <div
                    title="HubSpot CRM Integrations"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <svg viewBox="0 0 32 32" className="h-full w-full" fill="none">
                      <circle cx="16" cy="16" r="4.5" stroke="#FF7A59" strokeWidth="2.5" fill="none" />
                      <circle cx="16" cy="5.5" r="2.5" fill="#FF7A59" />
                      <line x1="16" y1="8" x2="16" y2="11.5" stroke="#FF7A59" strokeWidth="2.5" />
                      <circle cx="6.5" cy="22" r="2.5" fill="#FF7A59" />
                      <line x1="8.5" y1="20.5" x2="12.5" y2="18" stroke="#FF7A59" strokeWidth="2.5" />
                      <circle cx="25.5" cy="22" r="2.5" fill="#FF7A59" />
                      <line x1="23.5" y1="20.5" x2="19.5" y2="18" stroke="#FF7A59" strokeWidth="2.5" />
                    </svg>
                  </div>
                </div>

                <span className="rounded-full bg-[#20C52B]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#20C52B]">
                  GHL Workflows
                </span>
              </div>
              <h2 className="mt-4 text-[21px] sm:text-[23px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                AI & Workflow Automations
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#171A1F]/70">
                GoHighLevel CRM pipelines, automated lead routing, and multi-app webhook integrations.
              </p>
            </div>

            {/* Workflow Canvas Preview Mockup */}
            <div className="mt-5 rounded-[14px] border border-[#1B0638]/10 bg-[#F8FAFC] p-3.5 shadow-inner">
              <div className="flex items-center justify-between border-b border-[#1B0638]/6 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400" />
                  <span className="h-2 w-2 rounded-full bg-amber-400" />
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="ml-2 font-mono text-[10px] text-[#171A1F]/50">GoHighLevel Inbound Pipeline</span>
                </div>
                <span className="rounded bg-[#20C52B]/15 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-[#20C52B]">
                  Active Flow
                </span>
              </div>

              {/* Connected node diagram */}
              <div className="mt-3 flex flex-col items-center gap-2">
                <div className="w-full max-w-[220px] rounded-[8px] border border-[#20C52B]/30 bg-white p-2 text-center shadow-xs">
                  <span className="block font-mono text-[9px] font-bold uppercase text-[#20C52B]">Inbound Trigger</span>
                  <span className="block text-[11.5px] font-bold text-[#1B0638]">Lead Form / SMS Received</span>
                </div>
                <div className="h-2.5 w-[1.5px] bg-[#20C52B]/40" />
                <div className="w-full max-w-[220px] rounded-[8px] border border-[#1B0638]/10 bg-white p-2 text-center shadow-xs">
                  <span className="block font-mono text-[9px] font-bold uppercase text-[#171A1F]/55">Logic Branch</span>
                  <span className="block text-[11.5px] font-bold text-[#1B0638]">High-Intent Qualification</span>
                </div>
                <div className="h-2.5 w-[1.5px] bg-[#20C52B]/40" />
                <div className="flex w-full justify-center gap-2">
                  <div className="rounded-[6px] bg-[#20C52B] px-2.5 py-1 text-[9.5px] font-bold text-white shadow-xs">
                    Auto 2-Way SMS
                  </div>
                  <div className="rounded-[6px] bg-[#1B0638] px-2.5 py-1 text-[9.5px] font-bold text-white shadow-xs">
                    Update CRM Deal
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Card 2: Startup & Company Websites */}
          <div className="dashboard-card relative flex flex-col overflow-hidden p-5 sm:p-6 xl:col-span-4">
            <div>
              <div className="flex items-center justify-between">
                {/* Full-Stack Web App Badges: React, Next.js, TypeScript, Tailwind CSS */}
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                  {/* React */}
                  <div
                    title="React.js"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#20232A] p-1">
                      <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-4.5 w-4.5">
                        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
                        <g stroke="#61DAFB" strokeWidth="1" fill="none">
                          <ellipse rx="11" ry="4.2"/>
                          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
                          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Next.js */}
                  <div
                    title="Next.js"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-black text-white p-1">
                      <svg viewBox="0 0 180 180" className="h-4 w-4 fill-white">
                        <path fillRule="evenodd" clipRule="evenodd" d="M90 0C40.2944 0 0 40.2944 0 90C0 139.706 40.2944 180 90 180C139.706 180 180 139.706 180 90C180 40.2944 139.706 0 90 0ZM139.513 147.242L66.7589 54H54V126H65.8947V71.0544L130.344 153.298C133.488 151.365 136.562 149.345 139.513 147.242ZM126 54H114.105V107.037L126 122.253V54Z" />
                      </svg>
                    </div>
                  </div>

                  {/* TypeScript */}
                  <div
                    title="TypeScript"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#3178C6] text-white">
                      <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-tight">TS</span>
                    </div>
                  </div>

                  {/* Tailwind CSS */}
                  <div
                    title="Tailwind CSS"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#0F172A] p-1 text-[#38BDF8]">
                      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current">
                        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-[#20C52B]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#20C52B]">
                  Featured Platforms
                </span>
              </div>

              <h2 className="mt-4 text-[21px] sm:text-[23px] font-bold text-[#1B0638]">
                Startup & Company Websites
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#171A1F]/70">
                Custom full-stack business sites, startup platforms, and client portals built for scale.
              </p>
            </div>

            {/* The 2 choices with BIG squircle logo placed FIRST before text and green circle arrow */}
            <div className="mt-4 flex flex-col gap-3">
              {/* Choice 1: BrightWeb IT Solutions */}
              <a
                href="https://www.brightwebsolution.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item cursor-pointer rounded-[18px] sm:rounded-[20px] border border-[#1B0638]/10 bg-white p-3 text-left no-underline shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C52B]/50 hover:shadow-md sm:p-3.5"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  {/* Big Squircle Icon First */}
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[13px] sm:rounded-[15px] border border-[#CBD8E8] bg-white p-2 shadow-xs transition-transform duration-200 group-hover/item:scale-105">
                    <img
                      src={brightwebIcon}
                      alt="BrightWeb logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text block */}
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-blue-600">
                      STARTUP & IT SOLUTIONS STUDIO
                    </span>
                    <h3 className="mt-0.5 line-clamp-2 text-[14.5px] sm:text-[15.5px] font-bold text-[#1B0638] group-hover/item:text-[#20C52B] transition-colors">
                      BrightWeb IT Solutions
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[11.5px] sm:text-[12px] text-[#171A1F]/65">
                      Full-stack websites, custom systems & cloud infrastructure...
                    </p>
                  </div>

                  {/* Green circular button with arrow up-right */}
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#20C52B] text-white shadow-sm transition-transform duration-200 group-hover/item:scale-110">
                    <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </div>
                </div>
              </a>

              {/* Choice 2: Siargao HireHub / HireNova */}
              <a
                href="https://hirenova-cec8.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group/item cursor-pointer rounded-[18px] sm:rounded-[20px] border border-[#1B0638]/10 bg-white p-3 text-left no-underline shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C52B]/50 hover:shadow-md sm:p-3.5"
              >
                <div className="flex items-center gap-3 sm:gap-3.5">
                  {/* Big Squircle Icon First */}
                  <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-[13px] sm:rounded-[15px] border border-[#CBD8E8] bg-white p-2 shadow-xs transition-transform duration-200 group-hover/item:scale-105">
                    <img
                      src={hirenovaIcon}
                      alt="HireNova logo"
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Text block */}
                  <div className="min-w-0 flex-1">
                    <span className="block font-mono text-[9px] sm:text-[9.5px] font-bold uppercase tracking-wider text-emerald-700">
                      AI EMPLOYMENT & HIRING PLATFORM
                    </span>
                    <h3 className="mt-0.5 line-clamp-2 text-[14.5px] sm:text-[15.5px] font-bold text-[#1B0638] group-hover/item:text-[#20C52B] transition-colors">
                      Siargao HireHub / HireNova
                    </h3>
                    <p className="mt-0.5 line-clamp-2 text-[11.5px] sm:text-[12px] text-[#171A1F]/65">
                      Recruitment platform & candidate portal connecting talent...
                    </p>
                  </div>

                  {/* Green circular button with arrow up-right */}
                  <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-[#20C52B] text-white shadow-sm transition-transform duration-200 group-hover/item:scale-110">
                    <ArrowUpRight className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Column 3: Stacked 3 Quick Blueprint Cards */}
          <div className="flex flex-col gap-3 xl:col-span-3">
            
            {/* Stacked Card 1: Physio-Care */}
            <a
              href="https://physio-care-one.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-card group flex cursor-pointer items-center justify-between p-4 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C52B]/40 hover:shadow-md"
            >
              <div className="min-w-0 pr-2">
                <span className="block font-mono text-[9px] font-bold uppercase tracking-wider text-blue-600">
                  PHYSICAL THERAPY CLINIC
                </span>
                <h3 className="mt-1 truncate text-[14px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                  Physio-Care
                </h3>
                <p className="mt-0.5 truncate text-[11.5px] text-[#171A1F]/65">
                  Physical therapy clinic web platform...
                </p>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1B0638]/10 bg-[#F4F5F6] text-[#171A1F]/70 group-hover:bg-[#20C52B] group-hover:text-white transition-colors">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Stacked Card 2: TravelTewNews Platform */}
            <a
              href="https://traveltewnews.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-card group flex cursor-pointer items-center justify-between p-4 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C52B]/40 hover:shadow-md"
            >
              <div className="min-w-0 pr-2">
                <span className="block font-mono text-[9px] font-bold uppercase tracking-wider text-amber-600">
                  CLOUD PRODUCTION
                </span>
                <h3 className="mt-1 truncate text-[14px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                  TravelTewNews Platform
                </h3>
                <p className="mt-0.5 truncate text-[11.5px] text-[#171A1F]/65">
                  Multi-channel travel news feed indexing...
                </p>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1B0638]/10 bg-[#F4F5F6] text-[#171A1F]/70 group-hover:bg-[#20C52B] group-hover:text-white transition-colors">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </a>

            {/* Stacked Card 3: Vanilly */}
            <a
              href="https://www.vanilly.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="dashboard-card group flex cursor-pointer items-center justify-between p-4 no-underline transition-all duration-200 hover:-translate-y-0.5 hover:border-[#20C52B]/40 hover:shadow-md"
            >
              <div className="min-w-0 pr-2">
                <span className="block font-mono text-[9px] font-bold uppercase tracking-wider text-amber-700">
                  E-COMMERCE · AUSTRALIA
                </span>
                <h3 className="mt-1 truncate text-[14px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                  Vanilly
                </h3>
                <p className="mt-0.5 truncate text-[11.5px] text-[#171A1F]/65">
                  Premium vanilla products e-commerce, Australia...
                </p>
              </div>
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#1B0638]/10 bg-[#F4F5F6] text-[#171A1F]/70 group-hover:bg-[#20C52B] group-hover:text-white transition-colors">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </a>

          </div>
        </div>

        {/* ── BOTTOM ROW BENTO GRID ── */}
        <div className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-12">
          
          {/* Card 4: Funnels and sites */}
          <button
            type="button"
            aria-label="Open interactive 3D project showcase"
            onClick={() => setShowSiteWorks3D(true)}
            className="dashboard-card group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#20C52B]/40 hover:shadow-lg sm:p-6 xl:col-span-4"
          >
            <div>
              <div className="flex items-center justify-between">
                {/* Brand badges: Stripe, PayPal, Shopify, Figma */}
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                  {/* Stripe */}
                  <div
                    title="Stripe Payments"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#635BFF] text-white">
                      <svg viewBox="0 0 32 32" className="h-4 w-4" fill="currentColor">
                        <path d="M13.9 14.7c0-1.4 1.1-2.1 3-2.1 2.7 0 5.4.9 7.4 2.1V7.9c-2.3-1-4.8-1.4-7.4-1.4-6.3 0-10.4 3.3-10.4 8.8 0 8.7 11.9 7.3 11.9 11.1 0 1.6-1.4 2.2-3.4 2.2-3.1 0-6.2-1.3-8.4-2.6v6.9c2.6 1.1 5.3 1.7 8.1 1.7 6.5 0 10.9-3.2 10.9-8.9-.1-9.3-12.1-7.8-12.1-11z" />
                      </svg>
                    </div>
                  </div>

                  {/* PayPal */}
                  <div
                    title="PayPal Checkout"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#003087] text-[#0079C1] p-1">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.789.789 0 0 1 .778-.667h6.634c3.42 0 5.86 1.455 5.56 4.795-.23 2.585-1.92 4.41-4.32 5.03l-.47.11a.78.78 0 0 0-.58.64l-.94 5.95a.64.64 0 0 1-.63.54H7.076z" />
                      </svg>
                    </div>
                  </div>

                  {/* Shopify */}
                  <div
                    title="Shopify & E-Commerce"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#95BF47] p-1 text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white">
                        <path d="M19.5 7.5l-2-4.5H6.5l-2 4.5v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-12zM7.5 5.5h9l1.1 2.5H6.4L7.5 5.5zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                    </div>
                  </div>

                  {/* Figma */}
                  <div
                    title="Figma UI/UX & Wireframing"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#1E1E1E] p-1">
                      <svg viewBox="0 0 38 57" className="h-4 w-4">
                        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1abcfe"/>
                        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 1 1-19 0z" fill="#0acf83"/>
                        <path d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z" fill="#ff7262"/>
                        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#f24e1e"/>
                        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#a259ff"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-[#20C52B]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#20C52B]">
                  Stripe & Funnels
                </span>
              </div>

              <h2 className="mt-4 text-[21px] sm:text-[23px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                Funnels & High-Converting Sites
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#171A1F]/70">
                Landing pages, booking funnels, and e-commerce setups with Stripe & PayPal checkouts.
              </p>
            </div>

            {/* Overlapping cards preview real client site screenshots */}
            <div className="site-works-preview mt-5" aria-hidden="true">
              {siteWorksGallery.slice(0, 3).map((site) => (
                <div className="site-works-preview__card" key={site.id}>
                  <img src={site.image} alt="" draggable={false} />
                  <span>{site.title}</span>
                </div>
              ))}
            </div>
          </button>

          {/* Card 5: AI agents and RAG chatbots */}
          <button
            type="button"
            aria-label="Open AI agents and RAG chatbots case study"
            onClick={() => setSelectedItem(bentoItems.aiAgents)}
            className="dashboard-card group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#20C52B]/40 hover:shadow-lg sm:p-6 xl:col-span-4"
          >
            <div>
              <div className="flex items-center justify-between">
                {/* AI & Vector Stack Badges: OpenAI, Claude/Anthropic, Python, pgvector */}
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                  {/* OpenAI */}
                  <div
                    title="OpenAI GPT Models & Embeddings"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#10A37F] p-1 text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1683a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4947zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1683a.0757.0757 0 0 1-.071 0l-4.8303-2.7866A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5973 8.3829l2.02-1.1636a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4022-.6862zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1635a.0804.0804 0 0 1-.038-.0567V6.0748a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.4598a.7948.7948 0 0 0-.3927.6813v6.7219z" />
                      </svg>
                    </div>
                  </div>

                  {/* Claude / Anthropic */}
                  <div
                    title="Anthropic Claude"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#D97706] p-1 text-white">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                        <path d="M12 2L14.4 8.6L21 11L14.4 13.4L12 20L9.6 13.4L3 11L9.6 8.6L12 2Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Python */}
                  <div
                    title="Python LLM Pipelines"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#1E293B] p-1">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                        <path d="M11.927 2C6.969 2 7.28 4.148 7.28 4.148l.006 2.227h4.729v.668H5.32S2 6.649 2 11.636c0 4.988 2.898 4.808 2.898 4.808h1.728v-2.428s-.094-2.898 2.85-2.898h4.896s2.74.045 2.74-2.67V4.708S17.483 2 11.927 2zm-2.69 1.488a.987.987 0 1 1 0 1.974.987.987 0 0 1 0-1.974z" fill="#387EB8"/>
                        <path d="M12.073 22c4.958 0 4.647-2.148 4.647-2.148l-.006-2.227h-4.729v-.668h6.695S22 17.351 22 12.364c0-4.988-2.898-4.808-2.898-4.808h-1.728v2.428s.094 2.898-2.85 2.898h-4.896s-2.74-.045-2.74 2.67v3.744S6.517 22 12.073 22zm2.69-1.488a.987.987 0 1 1 0-1.974.987.987 0 0 1 0 1.974z" fill="#FFE052"/>
                      </svg>
                    </div>
                  </div>

                  {/* pgvector / PostgreSQL */}
                  <div
                    title="PostgreSQL & pgvector"
                    className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10"
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#336791] text-white font-mono text-[9px] font-black">
                      pg
                    </div>
                  </div>
                </div>

                <span className="rounded-full bg-[#20C52B]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#20C52B]">
                  RAG & LLM Agents
                </span>
              </div>

              <h2 className="mt-4 text-[21px] sm:text-[23px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                AI Agents & RAG Chatbots
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#171A1F]/70">
                Retrieval chatbots, automated customer service agents, and LLM knowledge search.
              </p>
            </div>

            {/* AI Agent & RAG Interface Mockup */}
            <div className="mt-5 rounded-[14px] border border-[#1B0638]/10 bg-[#0F172A] p-3.5 shadow-inner text-white">
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#20C52B] animate-pulse" />
                  <span className="font-mono text-[10px] text-white/70">agent-rag · pgvector</span>
                </div>
                <span className="rounded bg-[#20C52B]/20 px-1.5 py-0.5 font-mono text-[9px] font-bold uppercase text-[#20C52B]">
                  99% Grounded
                </span>
              </div>

              {/* Chat & Retrieval Stream */}
              <div className="mt-2.5 flex flex-col gap-2">
                {/* User Prompt */}
                <div className="flex items-center justify-between rounded-[8px] bg-white/5 px-2.5 py-1.5 border border-white/5">
                  <span className="truncate text-[11px] text-white/90">
                    “Match client docs & trigger pipeline”
                  </span>
                  <span className="ml-1 shrink-0 font-mono text-[9px] text-[#38BDF8]">RAG</span>
                </div>

                {/* RAG & Action result */}
                <div className="flex items-center justify-between rounded-[8px] border border-[#20C52B]/30 bg-[#20C52B]/10 px-2.5 py-1.5">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#20C52B]" />
                    <span className="truncate text-[11px] font-medium text-[#20C52B]">
                      3 Vector Chunks · CRM Updated
                    </span>
                  </div>
                  <span className="shrink-0 font-mono text-[9px] text-white/40">&lt;450ms</span>
                </div>
              </div>
            </div>
          </button>

          {/* Card 6: Mobile Apps & Web Systems */}
          <button
            type="button"
            aria-label="View mobile apps and web systems information"
            onClick={() => setShowComingSoon(true)}
            className="dashboard-card group relative flex w-full cursor-pointer flex-col justify-between overflow-hidden p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#20C52B]/40 hover:shadow-lg sm:p-6 xl:col-span-4"
          >
            <div>
              {/* Tech Stack Icon Badges */}
              <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                {/* React Native */}
                <div title="React Native" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#20232A] p-1">
                    <svg viewBox="-11.5 -10.23174 23 20.46348" className="h-4 w-4" fill="none">
                      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                      <g stroke="#61DAFB" strokeWidth="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Ionic */}
                <div title="Ionic" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#3880FF] p-1">
                    <svg viewBox="0 0 512 512" className="h-4 w-4" fill="white">
                      <circle cx="256" cy="256" r="96" />
                      <circle cx="412" cy="100" r="36" />
                      <path d="M256 80C159 80 80 159 80 256s79 176 176 176 176-79 176-176S353 80 256 80zm0 320c-79.4 0-144-64.6-144-144S176.6 112 256 112s144 64.6 144 144-64.6 144-144 144z" />
                    </svg>
                  </div>
                </div>

                {/* TypeScript */}
                <div title="TypeScript" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#3178C6] text-white">
                    <span className="font-mono text-[9px] sm:text-[10px] font-black tracking-tight">TS</span>
                  </div>
                </div>

                {/* Node.js */}
                <div title="Node.js" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-[#339933] p-1">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="white">
                      <path d="M12 1.85L2 7.39v9.22L12 22.15l10-5.54V7.39L12 1.85zm-1 15.48l-5-2.77V9.56l5 2.77v5zm1-6.96L7 7.6l5-2.77 5 2.77-5 2.77zm6 4.2-5 2.77v-5l5-2.77v5z" />
                    </svg>
                  </div>
                </div>

                {/* Chrome Extensions */}
                <div title="Chrome Extensions" className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[12px] sm:rounded-[14px] border border-[#CBD8E8] bg-white p-1.5 shadow-sm transition-transform hover:-translate-y-0.5 hover:z-10">
                  <div className="flex h-full w-full items-center justify-center rounded-[7px] bg-white p-0.5">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                      <circle cx="12" cy="12" r="4" fill="#4285F4" />
                      <path d="M12 8h8.66A10 10 0 1 0 3.5 20L7.75 13A5 5 0 0 1 12 8Z" fill="#EA4335" />
                      <path d="M12 8h8.66a10 10 0 0 1-4.16 13.66L12 16a5 5 0 0 0 4-3Z" fill="#FBBC04" />
                      <path d="M7.75 13 3.5 20A10 10 0 0 0 20.66 8H12a5 5 0 0 0-4.25 5Z" fill="#34A853" />
                      <circle cx="12" cy="12" r="4" fill="#4285F4" />
                    </svg>
                  </div>
                </div>
              </div>
              <h2 className="mt-4 text-[21px] sm:text-[23px] font-bold text-[#1B0638] group-hover:text-[#20C52B] transition-colors">
                Mobile Apps & Web Systems
              </h2>
              <p className="mt-1 text-[13px] sm:text-[13.5px] leading-relaxed text-[#171A1F]/70">
                Cross-platform mobile apps, internal company portals, and custom productivity tools.
              </p>
            </div>

            {/* Device Mockup Frames */}
            <div className="mt-5 flex items-end justify-center gap-2">
              <div className="h-16 w-11 rounded-[6px] border border-[#1B0638]/15 bg-white p-1 shadow-sm">
                <div className="h-2 w-full rounded-full bg-slate-200" />
                <div className="mt-1 h-8 w-full rounded bg-slate-100" />
              </div>
              <div className="h-20 w-24 rounded-[8px] border border-[#1B0638]/20 bg-[#0F172A] p-2 text-white shadow-md">
                <div className="font-mono text-[7px] text-[#20C52B]">HireHub Mobile</div>
                <div className="mt-1 h-3 w-full rounded bg-white/20" />
                <div className="mt-1 h-3 w-12 rounded bg-[#20C52B]" />
              </div>
              <div className="h-16 w-11 rounded-[6px] border border-[#1B0638]/15 bg-white p-1 shadow-sm">
                <div className="h-2 w-full rounded-full bg-purple-200" />
                <div className="mt-1 h-8 w-full rounded bg-purple-50" />
              </div>
            </div>
          </button>

        </div>

      </div>

      {/* Interactive Modal Walkthrough */}
      <ProjectWalkthroughModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* 3D Cylinder Rotating Drum Showcase Modal */}
      <SiteWorks3DModal
        open={showSiteWorks3D}
        onClose={() => setShowSiteWorks3D(false)}
        items={siteWorksGallery}
        title="Real apps, funnels and GHL builds you can open."
        subtitle="Everything here shipped. Open a card to walk through the work at full size."
      />

      {/* Coming Soon Modal — Mobile Apps & Web Systems */}
      <ComingSoonModal
        open={showComingSoon}
        onClose={() => setShowComingSoon(false)}
        title="Mobile Apps & Web Systems"
      />
    </div>
  );
};
