import type { Stat } from '../types';

interface StatStripProps {
  items: Stat[];
  variant?: 'light' | 'dark';
}

export const StatStrip = ({ items, variant = 'light' }: StatStripProps) => {
  const isDark = variant === 'dark';

  return (
    <div
      className={`grid grid-cols-2 gap-px overflow-hidden rounded-[14px] border lg:grid-cols-4 ${
        isDark ? 'border-white/15 bg-white/15' : 'border-[#1B0638]/10 bg-[#1B0638]/10'
      }`}
    >
      {items.map((stat) => (
        <div
          key={stat.id}
          className={`flex flex-col p-5 sm:p-6 ${isDark ? 'bg-[#1B0638]' : 'bg-[#F4F5F6]'}`}
        >
          <span
            className={`text-[26px] font-bold tracking-[-0.025em] tabular-nums sm:text-[30px] ${
              isDark ? 'text-white' : 'text-[#1B0638]'
            }`}
          >
            {stat.value}
          </span>
          <span
            className={`mt-1.5 text-[14px] font-semibold ${
              isDark ? 'text-[#20C52B]' : 'text-[#20C52B]'
            }`}
          >
            {stat.label}
          </span>
          <span
            className={`mt-1 text-[13px] leading-[1.5] ${
              isDark ? 'text-white/60' : 'text-[#171A1F]/65'
            }`}
          >
            {stat.subLabel}
          </span>
        </div>
      ))}
    </div>
  );
};
