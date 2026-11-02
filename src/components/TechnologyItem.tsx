import { useState } from 'react';
import { Code2 } from 'lucide-react';
import { genericIconMap } from '../data/technologies';
import type { Technology } from '../data/technologies';

export const TechnologyLogo = ({ tech }: { tech: Technology }) => {
  const [failed, setFailed] = useState(false);
  if (tech.logo && !failed) {
    return (
      <img
        src={tech.logo}
        alt={`${tech.name} logo`}
        loading="lazy"
        className="h-[22px] w-[22px] shrink-0 object-contain"
        onError={() => setFailed(true)}
      />
    );
  }
  const Fallback = tech.genericIcon ? genericIconMap[tech.genericIcon] : Code2;
  return <Fallback className="h-[20px] w-[20px] shrink-0 text-[#20C52B]" strokeWidth={1.9} aria-hidden="true" />;
};

export const TechnologyItem = ({ tech }: { tech: Technology }) => (
  <span
    title={tech.name}
    className="inline-flex h-[40px] items-center gap-2 rounded-[11px] border border-[#1B0638]/10 bg-white px-3 py-2 text-[13px] font-medium text-[#1B0638] transition-all duration-200 hover:-translate-y-[2px] hover:border-[#20C52B]/35 hover:shadow-[0_10px_22px_-14px_rgba(23,26,31,0.4)]"
  >
    <TechnologyLogo tech={tech} />
    <span className="whitespace-nowrap">{tech.name}</span>
  </span>
);
