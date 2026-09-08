'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BRAND } from '@/lib/utils/constants';

export function HeroCTA() {
  return (
    <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
      <Button variant="gold" size="lg" className="group w-full shadow-md sm:w-auto" asChild>
        <a href="/contact">
          Start Your Investment Journey
          <ArrowRight
            className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </a>
      </Button>

      <Button
        variant="outline"
        size="lg"
        className="w-full border-neutral-300 font-bold text-brand-900 hover:bg-neutral-50 sm:w-auto"
        asChild
      >
        <a href={`tel:${BRAND.contact.phone}`}>
          <Phone className="mr-2 h-5 w-5 text-teal-600" aria-hidden="true" />
          Talk to Advisor
        </a>
      </Button>
    </div>
  );
}
