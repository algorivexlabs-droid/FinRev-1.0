'use client';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/utils/constants';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
}

export function CTAButton({
  variant = 'primary',
  size = 'md',
  className,
  asChild,
  children,
  ...props
}: CTAButtonProps) {
  return (
    <Button variant={variant} size={size} className={cn(className)} asChild={asChild} {...props}>
      {children}
    </Button>
  );
}
