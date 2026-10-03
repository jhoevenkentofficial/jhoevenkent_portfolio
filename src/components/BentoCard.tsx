import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { ReactNode } from 'react';

interface BentoCardProps {
  title: string;
  description?: string;
  href?: string;
  to?: string;
  children?: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BentoCard = ({ title, description, href, to, children, className = '', size = 'md' }: BentoCardProps) => {
  const cardContent = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-[18px] border border-[#0B1F33]/10 bg-white p-6 shadow-[0_1px_1px_rgba(11,31,51,0.01),0_10px_40px_-20px_rgba(11,31,51,0.25)] transition-transform duration-200 hover:-translate-y-0.5 ${
        size === 'lg' ? 'col-span-2 row-span-2' : size === 'sm' ? 'row-span-1' : 'row-span-1'
      } ${className}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[18px] font-bold tracking-[-0.02em]">{title}</h3>
          {description && <p className="mt-2 text-[14px] leading-relaxed text-[#111827]/70">{description}</p>}
        </div>
        {(href || to) && <ArrowUpRight className="h-5 w-5 text-[#111827]/40 transition-colors group-hover:text-[#111827]" />}
      </div>
      {children && <div className="mt-4 flex-1">{children}</div>}
    </div>
  );

  if (to) {
    return <Link to={to}>{cardContent}</Link>;
  }
  if (href) {
    return (
      <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {cardContent}
      </a>
    );
  }
  return cardContent;
};
