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
        isDark ? 'border-[#F6F2E9]/15 bg-[#F6F2E9]/15' : 'border-[#0B1F33]/10 bg-[#0B1F33]/10'
      }`}
    >
      {items.map((stat) => (
        <div
          key={stat.id}
          className={`flex flex-col p-5 sm:p-6 ${isDark ? 'bg-[#0B1F33]' : 'bg-[#F6F2E9]'}`}
        >
          <span
            className={`text-[26px] font-bold tracking-[-0.025em] tabular-nums sm:text-[30px] ${
              isDark ? 'text-[#F6F2E9]' : 'text-[#0B1F33]'
            }`}
          >
            {stat.value}
          </span>
          <span
            className={`mt-1.5 text-[14px] font-semibold ${
              isDark ? 'text-[#72B7E6]' : 'text-[#174A7E]'
            }`}
          >
            {stat.label}
          </span>
          <span
            className={`mt-1 text-[13px] leading-[1.5] ${
              isDark ? 'text-[#F6F2E9]/60' : 'text-[#66717E]'
            }`}
          >
            {stat.subLabel}
          </span>
        </div>
      ))}
    </div>
  );
};