export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon key
  price?: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  subLabel: string;
  iconName: string; // Lucide icon key
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export type MeetingStatus = 'pending' | 'scheduled' | 'ongoing' | 'completed' | 'cancelled' | 'rescheduled';

export interface MeetingLog {
  id: string;
  action: string;
  note: string;
  timestamp: string;
  previousStatus?: MeetingStatus;
  newStatus?: MeetingStatus;
}

export interface Brief {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  timeline: string;
  goals: string;
  message: string;
  submittedAt: string;
  status: MeetingStatus;
  meetingDate?: string;
  meetingNotes?: string;
  meetingLogs: MeetingLog[];
}