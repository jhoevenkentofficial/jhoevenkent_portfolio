import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CheckItem = ({ children }: { children: string }) => (
  <li className="flex items-center gap-2.5 text-[13.5px] font-medium text-[#171A1F]">
    <span className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#20C52B]/10 text-[#20C52B]">
      <Check className="h-3 w-3" strokeWidth={3} />
    </span>
    {children}
  </li>
);

export const ViewAll = ({ to }: { to: string }) => (
  <Link to={to} className="inline-flex items-center gap-1 text-[12.5px] font-semibold text-[#20C52B] hover:text-[#1B0638]">
    View All <span aria-hidden="true">→</span>
  </Link>
);
