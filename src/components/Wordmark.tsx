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
            ? 'bg-white text-[#1B0638] group-hover:bg-[#20C52B]'
            : 'bg-[#1B0638] text-white group-hover:bg-[#20C52B]'
        }`}
      >
        JKE
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={`text-[15.5px] font-bold tracking-[-0.015em] ${
            light ? 'text-white' : 'text-[#1B0638]'
          }`}
        >
          Jhoeven Kent Escobal
        </span>
        <span
          className={`font-mono text-[10.5px] uppercase tracking-[0.13em] ${
            light ? 'text-[#20C52B]' : 'text-[#20C52B]'
          }`}
        >
          Full Stack Developer
        </span>
      </span>
    </Link>
  );
};
