import type { Engagement } from '../types';

interface EngagementCardProps {
  engagement: Engagement;
}

export const EngagementCard = ({ engagement }: EngagementCardProps) => {
  return (
    <article className="relative rounded-[14px] border border-[#0B1F33]/10 bg-white/70 p-6 transition-all duration-200 hover:border-[#174A7E]/30 sm:p-7">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-[20px] font-bold leading-snug tracking-[-0.015em] text-[#0B1F33]">
            {engagement.role}
          </h3>
          <p className="mt-1 text-[15.5px] font-semibold text-[#174A7E]">{engagement.company}</p>
        </div>
        <div className="sm:text-right">
          <p className="font-mono text-[12.5px] text-[#0B1F33]">{engagement.period}</p>
          <p className="mt-1 font-mono text-[12px] text-[#66717E]">{engagement.location}</p>
        </div>
      </div>

      <p className="mt-4 text-[15.5px] leading-[1.68] text-[#111827]/80">{engagement.summary}</p>

      <ul className="mt-5 space-y-3 border-t border-[#0B1F33]/10 pt-5">
        {engagement.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-3 text-[15px] leading-[1.62] text-[#111827]/78">
            <span className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#D29A42]" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};