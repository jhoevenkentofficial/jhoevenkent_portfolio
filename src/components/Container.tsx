import type { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'nav' | 'header' | 'footer';
}

export const Container = ({ children, className = '', as: Tag = 'div' }: ContainerProps) => {
  return <Tag className={`w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 ${className}`}>{children}</Tag>;
};