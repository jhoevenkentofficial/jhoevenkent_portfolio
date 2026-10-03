import type { ComponentType, ReactNode } from 'react';
import {
  Briefcase,
  Code,
  Cpu,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';

export type IconName =
  | 'code'
  | 'cpu'
  | 'briefcase'
  | 'shopping-bag'
  | 'trending-up'
  | 'megaphone'
  | 'mail'
  | 'phone'
  | 'location';

const iconMap: Record<IconName, ComponentType<{ className?: string; strokeWidth?: number }>> = {
  code: Code,
  cpu: Cpu,
  briefcase: Briefcase,
  'shopping-bag': ShoppingBag,
  'trending-up': TrendingUp,
  megaphone: Megaphone,
  mail: Mail,
  phone: Phone,
  location: MapPin,
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export const Icon = ({ name, className, strokeWidth = 1.75 }: IconProps): ReactNode => {
  const Cmp = iconMap[name];
  return <Cmp className={className} strokeWidth={strokeWidth} />;
};