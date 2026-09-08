'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface FocusRingProps extends React.HTMLAttributes<HTMLDivElement> {
  offset?: number;
}

const FocusRing = React.forwardRef<HTMLDivElement, FocusRingProps>(
  ({ className, offset = 2, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative', className)} {...props}>
        {children}
        <div
          className={cn(
            'pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity',
            'focus-visible:opacity-100',
            'ring-2 ring-brand-500',
            `ring-offset-${offset} ring-offset-white dark:ring-offset-neutral-950`
          )}
          aria-hidden="true"
        />
      </div>
    );
  }
);
FocusRing.displayName = 'FocusRing';

export { FocusRing };
