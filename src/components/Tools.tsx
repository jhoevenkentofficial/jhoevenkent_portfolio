import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface Tool {
  name: string;
  icon?: string;
  color?: string;
  emoji?: string;
}

interface ToolCategory {
  id: string;
  label: string;
  emoji: string;
  textOnly?: boolean; // if true, render as plain text pills
  tools: Tool[];
}

const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: 'web-dev',
    label: 'Web Development',
    emoji: '💻',
    textOnly: true,
    tools: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'React' },
      { name: 'React Native' },
      { name: 'Node.js' },
      { name: 'PHP' },
      { name: 'Python' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'jQuery' },
      { name: 'Bootstrap 5' },
      { name: 'Angular' },
      { name: 'Ionic' },
      { name: 'MySQL' },
      { name: 'SQL' },
      { name: 'MongoDB' },
      { name: 'Firebase' },
      { name: 'CodeIgniter 5' },
      { name: 'Git (Version Control)' },
      { name: 'API Integration' },
      { name: 'Booking API Integration' },
    ]
  },
  {
    id: 'cms-web',
    label: 'CMS & Web Platforms',
    emoji: '🌐',
    tools: [
      { name: 'WordPress', icon: 'wordpress', color: '21759B' },
      { name: 'GoDaddy', icon: 'godaddy', color: '1BDBDB' },
      { name: 'Wix', icon: 'wix', color: '0C6EFC' },
      { name: 'Shopify', icon: 'shopify', color: '96BF48' },
    ]
  },
  {
    id: 'pm-crm',
    label: 'Project Management & CRM',
    emoji: '📋',
    tools: [
      { name: 'Trello', icon: 'trello', color: '0052CC' },
      { name: 'Notion', icon: 'notion', color: '000000' },
      { name: 'Asana', icon: 'asana', color: 'F06A6A' },
      { name: 'ClickUp', icon: 'clickup', color: '7B68EE' },
      { name: 'Monday.com', icon: 'mondaydotcom', color: 'F2255A' },
      { name: 'HubSpot', icon: 'hubspot', color: 'FF7A59' },
      { name: 'GoHighLevel', emoji: '🚀' },
      { name: 'Tradify', emoji: '🔧' },
    ]
  },
  {
    id: 'marketing-automation',
    label: 'Marketing & Automation',
    emoji: '⚡',
    tools: [
      { name: 'Zapier', icon: 'zapier', color: 'FF4A00' },
      { name: 'Mailchimp', icon: 'mailchimp', color: 'FFE01B' },
      { name: 'Klaviyo', emoji: '📧' },
      { name: 'Brevo', emoji: '💌' },
    ]
  },
  {
    id: 'ecommerce-payment',
    label: 'E-commerce & Payments',
    emoji: '🛒',
    tools: [
      { name: 'Amazon', icon: 'amazon', color: 'FF9900' },
      { name: 'Etsy', icon: 'etsy', color: 'F56400' },
      { name: 'PayPal', icon: 'paypal', color: '00457C' },
      { name: 'Stripe', icon: 'stripe', color: '635BFF' },
      { name: 'Apple Pay', icon: 'applepay', color: '000000' },
      { name: 'Google Pay', icon: 'googlepay', color: '4285F4' },
      { name: 'Gorgias', emoji: '💬' },
    ]
  },
  {
    id: 'design-content',
    label: 'Design & Content Creation',
    emoji: '🎨',
    tools: [
      { name: 'Canva', icon: 'canva', color: '00C4CC' },
      { name: 'Figma', icon: 'figma', color: 'F24E1E' },
      { name: 'Adobe Photoshop', icon: 'adobephotoshop', color: '31A8FF' },
      { name: 'CapCut', icon: 'capcut', color: '000000' },
      { name: 'Gamma', emoji: '✨' },
      { name: 'Meta Business Suite', icon: 'meta', color: '0081FB' },
    ]
  },
  {
    id: 'communication',
    label: 'Communication',
    emoji: '💬',
    tools: [
      { name: 'Slack', icon: 'slack', color: '4A154B' },
      { name: 'Zoom', icon: 'zoom', color: '2D8CFF' },
      { name: 'MS Teams', icon: 'microsoftteams', color: '6264A7' },
      { name: 'Google Meet', icon: 'googlemeet', color: '00897B' },
      { name: 'Telegram', icon: 'telegram', color: '2AABEE' },
      { name: 'WhatsApp', icon: 'whatsapp', color: '25D366' },
      { name: 'Ring Central', emoji: '📞' },
      { name: 'Viber', icon: 'viber', color: '7360F2' },
    ]
  },
  {
    id: 'productivity-ai',
    label: 'Admin, Productivity & AI',
    emoji: '🤖',
    tools: [
      { name: 'Google Workspace', icon: 'google', color: '4285F4' },
      { name: 'Microsoft Office', icon: 'microsoftoffice', color: 'D83B01' },
      { name: 'OneDrive', icon: 'microsoftonedrive', color: '0078D4' },
      { name: 'Calendly', icon: 'calendly', color: '006BFF' },
      { name: 'HubStaff', emoji: '⏱️' },
      { name: 'Time Doctor', emoji: '🕒' },
      { name: 'Docusign', icon: 'docusign', color: '26D07C' },
      { name: 'ChatGPT', icon: 'openai', color: '412991' },
      { name: 'Google Gemini', icon: 'googlegemini', color: '4285F4' },
      { name: 'Jasper AI', emoji: '🤖' },
      { name: 'Claude AI', icon: 'anthropic', color: 'D97757' },
      { name: 'GitHub Copilot', icon: 'githubcopilot', color: '8957E5' },
    ]
  },
];

const INITIAL_VISIBLE_TEXT = 8;
const INITIAL_VISIBLE_ICON = 6;

// ─── Text Pill (for Web Dev) ────────────────────────────────────────────────
function TextPill({ name }: { name: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
      className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-white border border-[#EADCD0]/60 text-sm font-sans font-semibold text-brand-navy shadow-sm hover:border-[#FF7824]/40 hover:text-[#FF7824] hover:bg-[#FFF5EF] transition-all duration-200 cursor-default"
    >
      {name}
    </motion.span>
  );
}

// ─── Icon Badge (for other categories) ──────────────────────────────────────
function IconBadge({ tool }: { tool: Tool }) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.15 }}
      whileHover={{ y: -3, scale: 1.06 }}
      className="flex flex-col items-center gap-2 group cursor-default"
      title={tool.name}
    >
      <div className="w-12 h-12 rounded-2xl bg-white border border-[#EADCD0]/50 shadow-sm flex items-center justify-center overflow-hidden group-hover:shadow-md group-hover:border-[#FF7824]/30 transition-all duration-200">
        {tool.icon && !imgError ? (
          <img
            src={`https://cdn.simpleicons.org/${tool.icon}/${tool.color || '555555'}`}
            alt={tool.name}
            className="w-6 h-6 object-contain"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <span className="text-xl">{tool.emoji || '🔧'}</span>
        )}
      </div>
      <span className="text-[10px] font-sans font-semibold text-slate-500 text-center leading-tight max-w-[60px] group-hover:text-[#FF7824] transition-colors">
        {tool.name}
      </span>
    </motion.div>
  );
}

// ─── Category Card ────────────────────────────────────────────────────────────
function CategoryCard({ category, index }: { category: ToolCategory; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const limit = category.textOnly ? INITIAL_VISIBLE_TEXT : INITIAL_VISIBLE_ICON;
  const hasMore = category.tools.length > limit;
  const visible = expanded ? category.tools : category.tools.slice(0, limit);
  const remaining = category.tools.length - limit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="bg-white/80 backdrop-blur-sm border border-[#EADCD0]/40 rounded-2xl p-6 shadow-sm"
      id={`tools-cat-${category.id}`}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-5">
        <h3 className="text-base font-bold font-sans text-brand-navy tracking-tight">
          {category.label}
        </h3>
        <span className="ml-auto text-[10px] font-mono font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full border border-slate-100">
          {category.tools.length} tools
        </span>
      </div>

      {/* Tools — text pills OR icon badges */}
      {category.textOnly ? (
        <div className="flex flex-wrap gap-2">
          <AnimatePresence initial={false}>
            {visible.map((tool, i) => (
              <TextPill key={i} name={tool.name} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-wrap gap-5">
          <AnimatePresence initial={false}>
            {visible.map((tool, i) => (
              <IconBadge key={i} tool={tool} />
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* See More / See Less */}
      {hasMore && (
        <button
          onClick={() => setExpanded(prev => !prev)}
          className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#FF7824] hover:text-[#E05E12] transition-colors cursor-pointer"
          id={`btn-tools-toggle-${category.id}`}
        >
          {expanded ? (
            <><ChevronUp className="w-3.5 h-3.5" />See Less</>
          ) : (
            <><ChevronDown className="w-3.5 h-3.5" />See {remaining} More</>
          )}
        </button>
      )}
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────
export default function Tools() {
  return (
    <section id="tools" className="py-20 px-6 md:px-12 bg-brand-beige relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#FF7824]/5 rounded-full pointer-events-none blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#FCECDD]/60 rounded-full pointer-events-none blur-2xl" />

      <div className="max-w-7xl mx-auto relative">

        {/* Header */}
        <div className="text-center md:text-left mb-12" id="tools-header">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF7824] font-bold text-sm tracking-widest uppercase mb-2"
          >
            Tech Stack
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-4xl md:text-5xl font-black font-display text-brand-navy tracking-tight"
          >
            Tools & Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-slate-600 mt-4 leading-relaxed font-sans max-w-2xl"
          >
            A comprehensive set of tools and platforms I use across development, operations, marketing, and AI workflows.
          </motion.p>
        </div>

        {/* Grid of Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="tools-categories-container">
          {TOOL_CATEGORIES.map((category, idx) => (
            <CategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
