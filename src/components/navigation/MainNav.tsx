'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils/cn';
import { NAVIGATION } from '@/lib/utils/constants';

interface MainNavProps {
  className?: string;
}

export function MainNav({ className }: MainNavProps) {
  return (
    <nav className={cn('flex items-center gap-6', className)} aria-label="Main navigation">
      <ul className="flex items-center gap-1" role="list">
        {NAVIGATION.main.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-600 dark:text-neutral-300 dark:hover:text-brand-400"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
