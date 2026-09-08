'use client';

import { BRAND } from '@/lib/utils/constants';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="animate-slide-up space-y-6">
      <div className="inline-flex items-center gap-2">
        <Badge variant="gold" size="md" className="shadow-sm">
          <ShieldCheck className="mr-1.5 h-4 w-4 text-gold-600" aria-hidden="true" />
          AMFI Registered Mutual Fund Distributor • {BRAND.founder.arn}
        </Badge>
      </div>

      <h1
        id="hero-heading"
        className="font-display text-4xl font-extrabold leading-[1.15] tracking-tight text-brand-950 sm:text-5xl lg:text-6xl"
      >
        Invest Smart. <span className="text-teal-600">Build Stronger Financial Futures.</span>
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
        Personalized, goal-aligned wealth management solutions for families and individuals. Guided
        by disciplined asset allocation and direct advisor engagement across India.
      </p>

      <div className="flex items-center gap-2 pt-1">
        <span className="h-2.5 w-2.5 rounded-full bg-gold-500 shadow-sm" aria-hidden="true" />
        <p className="font-display text-sm font-bold tracking-wide text-brand-900 sm:text-base">
          "{BRAND.tagline}"
        </p>
      </div>
    </div>
  );
}
