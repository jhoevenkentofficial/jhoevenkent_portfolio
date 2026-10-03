import { Icon } from './Icon';
import type { ServicePillar } from '../types';

interface ServicePillarCardProps {
  pillar: ServicePillar;
  index: number;
}

export const ServicePillarCard = ({ pillar, index }: ServicePillarCardProps) => {
  return (
    <article
      id={pillar.id}
      className="group scroll-mt-28 rounded-[14px] border border-[#0B1F33]/10 bg-white/70 p-6 transition-all duration-200 hover:border-[#174A7E]/35 hover:shadow-[0_18px_40px_-28px_rgba(11,31,51,0.55)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#0B1F33]/[0.06] text-[#174A7E] transition-colors group-hover:bg-[#174A7E] group-hover:text-[#F6F2E9]">
          <Icon name={pillar.iconName} className="h-[22px] w-[22px]" />
        </span>
        <span className="font-mono text-[12px] font-medium tabular-nums text-[#D29A42]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-[20px] font-bold leading-snug tracking-[-0.015em] text-[#0B1F33]">
        {pillar.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.65] text-[#111827]/78">{pillar.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {pillar.capabilities.slice(0, 6).map((item) => (
          <li
            key={item}
            className="rounded-full border border-[#0B1F33]/12 bg-[#F6F2E9] px-2.5 py-1 text-[12.5px] font-medium text-[#111827]/75"
          >
            {item}
          </li>
        ))}
      </ul>

      {pillar.capabilities.length > 6 && (
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-[#174A7E]">
          +{pillar.capabilities.length - 6} more capabilities
        </p>
      )}
    </article>
  );
};