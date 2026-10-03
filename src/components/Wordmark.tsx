import { Link } from 'react-router-dom';

interface WordmarkProps {
  light?: boolean;
  className?: string;
}

export const Wordmark = ({ light = false, className = '' }: WordmarkProps) => {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 ${className}`}
      aria-label="Jhoeven Kent Escobal — home"
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] font-mono text-[14px] font-medium transition-colors ${
          light
            ? 'bg-[#F6F2E9] text-[#0B1F33] group-hover:bg-[#72B7E6]'
            : 'bg-[#0B1F33] text-[#F6F2E9] group-hover:bg-[#174A7E]'
        }`}
      >
        JKE
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-[15.5px] font-bold tracking-[-0.015em] ${
            light ? 'text-[#F6F2E9]' : 'text-[#0B1F33]'
          }`}
        >
          Jhoeven Kent Escobal
        </span>
        <span
          className={`font-mono text-[10.5px] uppercase tracking-[0.13em] ${
            light ? 'text-[#72B7E6]' : 'text-[#174A7E]'
          }`}
        >
          Full Stack Developer
        </span>
      </span>
    </Link>
  );
};