'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'gold' | 'teal';
  size?: 'sm' | 'md';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'badge',
          {
            'badge-primary': variant === 'default' || variant === 'info',
            'badge-gold': variant === 'gold',
            'badge-teal': variant === 'teal',
            'badge-success': variant === 'success',
            'badge-warning': variant === 'warning',
            'badge-error': variant === 'error',
            'px-2.5 py-0.5 text-xs font-semibold': size === 'sm',
            'px-3.5 py-1 text-sm font-semibold': size === 'md',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = 'Badge';

export { Badge };
