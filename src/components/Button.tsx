import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Variant = 'primary' | 'navy' | 'white' | 'outline-dark' | 'outline-light' | 'secondary';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  variant?: Variant;
  size?: Size;
  showArrow?: boolean;
  external?: boolean;
  className?: string;
  disabled?: boolean;
  ariaLabel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-[#1B0638] text-white border border-[#1B0638] hover:bg-[#171A1F] hover:border-[#171A1F] hover:shadow-[0_10px_24px_-12px_rgba(23,26,31,0.5)]',
  navy: 'bg-[#1B0638] text-white border border-[#1B0638] hover:bg-[#171A1F] hover:border-[#171A1F] hover:shadow-[0_10px_24px_-12px_rgba(23,26,31,0.5)]',
  white:
    'bg-white text-[#1B0638] border border-[#1B0638]/10 hover:border-[#1B0638]/30 hover:shadow-[0_10px_24px_-14px_rgba(23,26,31,0.35)]',
  secondary:
    'bg-[#20C52B] text-white border border-[#20C52B] hover:bg-[#171A1F] hover:border-[#171A1F]',
  'outline-dark':
    'bg-transparent text-[#1B0638] border border-[#1B0638]/25 hover:border-[#1B0638] hover:bg-[#1B0638] hover:text-white',
  'outline-light':
    'bg-transparent text-white border border-white/35 hover:border-white hover:bg-white hover:text-[#1B0638]',
};

const sizeClasses: Record<Size, string> = {
  sm: 'text-[13.5px] px-4 py-2.5 gap-2',
  md: 'text-[14.5px] px-5 py-3 gap-2.5',
  lg: 'text-[15px] px-6 py-3.5 gap-2.5',
};

export const Button = ({
  children,
  href,
  to,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  showArrow = false,
  external = false,
  className = '',
  disabled = false,
  ariaLabel,
}: ButtonProps) => {
  const base = `group inline-flex items-center justify-center rounded-[12px] font-semibold tracking-[-0.01em] transition-all duration-200 ${
    disabled ? 'opacity-50 pointer-events-none' : ''
  } ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      {children}
      {showArrow && (
        <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-[3px]" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={base} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={base}
        aria-label={ariaLabel}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base} aria-label={ariaLabel} disabled={disabled}>
      {content}
    </button>
  );
};
