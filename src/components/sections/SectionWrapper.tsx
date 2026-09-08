import { cn } from '@/lib/utils/cn';

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'default' | 'alternate' | 'dark';
  className?: string;
}

export function SectionWrapper({
  children,
  variant = 'default',
  className,
  id,
  ...props
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-wrapper',
        {
          'bg-neutral-100/60 dark:bg-brand-950/80': variant === 'alternate',
          'bg-brand-900 text-white dark:bg-brand-950': variant === 'dark',
        },
        className
      )}
      {...props}
    >
      <div className="container-custom">{children}</div>
    </section>
  );
}

export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  action?: React.ReactNode;
}

export function SectionHeader({ title, subtitle, className, action }: SectionHeaderProps) {
  return (
    <header className={cn('section-header', className)}>
      {action && <div className="mb-4 flex justify-end">{action}</div>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
