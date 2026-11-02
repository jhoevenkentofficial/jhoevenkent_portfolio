export interface NavLink {
  label: string;
  href: string;
}

export interface ContactDetail {
  label: string;
  value: string;
  href: string;
  icon: 'mail' | 'phone' | 'location';
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  subLabel: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  description: string;
  iconName: 'code' | 'cpu' | 'briefcase' | 'shopping-bag' | 'trending-up' | 'megaphone';
  capabilities: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  period: string;
  deployment: string;
  description: string;
  tags: string[];
  summaryPoints: string[];
  demoUrl?: string;
  featured?: boolean;
}

export interface StackGroup {
  id: string;
  category: string;
  items: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
}

export interface TimelineEntry {
  id: string;
  year: string;
  title: string;
  detail: string;
}
