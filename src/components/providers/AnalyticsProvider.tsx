'use client';

import * as React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && pathname) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams]);

  // Don't render children during static generation if searchParams is not available
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return <>{children}</>;
}
