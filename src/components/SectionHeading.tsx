import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  rightElement?: ReactNode;
  className?: string;
  light?: boolean;
  align?: 'left' | 'center';
  id?: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  rightElement,
  className = '',
  light = false,
  align = 'left',
  id,
}: SectionHeadingProps) => {
  const isCentered = align === 'center';

  return (
    <div
      className={`flex flex-col gap-6 ${
        !isCentered && rightElement ? 'lg:flex-row lg:items-end lg:justify-between' : ''
      } ${className}`}
    >
      <div className={isCentered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
        {eyebrow && (
          <p
            className={`font-mono text-[12px] font-medium uppercase tracking-[0.16em] ${
              light ? 'text-[#20C52B]' : 'text-[#20C52B]'
            }`}
          >
            {eyebrow}
          </p>
        )}
        <h2
          id={id}
          className={`mt-3 text-[30px] font-bold leading-[1.14] tracking-[-0.02em] text-balance sm:text-[38px] lg:text-[42px] ${
            light ? 'text-white' : 'text-[#1B0638]'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p
            className={`mt-4 text-[16.5px] leading-[1.68] ${
              light ? 'text-white/75' : 'text-[#090B0D]/80'
            }`}
          >
            {description}
          </p>
        )}
      </div>

      {rightElement && <div className="shrink-0">{rightElement}</div>}
    </div>
  );
};
