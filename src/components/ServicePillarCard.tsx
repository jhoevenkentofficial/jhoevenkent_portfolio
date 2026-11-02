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
      className="group scroll-mt-28 rounded-[14px] border border-[#1B0638]/10 bg-white/70 p-6 transition-all duration-200 hover:border-[#20C52B]/35 hover:shadow-[0_18px_40px_-28px_rgba(23,26,31,0.55)] sm:p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-[11px] bg-[#1B0638]/[0.06] text-[#20C52B] transition-colors group-hover:bg-[#20C52B] group-hover:text-white">
          <Icon name={pillar.iconName} className="h-[22px] w-[22px]" />
        </span>
        <span className="font-mono text-[12px] font-medium tabular-nums text-[#20C52B]">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <h3 className="mt-5 text-[20px] font-bold leading-snug tracking-[-0.015em] text-[#1B0638]">
        {pillar.title}
      </h3>
      <p className="mt-2.5 text-[15px] leading-[1.65] text-[#090B0D]/78">{pillar.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {pillar.capabilities.slice(0, 6).map((item) => (
          <li
            key={item}
            className="rounded-full border border-[#1B0638]/12 bg-[#F4F5F6] px-2.5 py-1 text-[12.5px] font-medium text-[#090B0D]/75"
          >
            {item}
          </li>
        ))}
      </ul>

      {pillar.capabilities.length > 6 && (
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.1em] text-[#20C52B]">
          +{pillar.capabilities.length - 6} more capabilities
        </p>
      )}
    </article>
  );
};
