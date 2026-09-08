'use client';

import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SectionWrapper } from './SectionWrapper';
import { BRAND } from '@/lib/utils/constants';

export function FinalCTA() {
  return (
    <SectionWrapper
      variant="dark"
      id="final-cta"
      aria-labelledby="cta-heading"
      className="bg-brand-950 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-4 inline-block rounded-full bg-gold-500/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-400">
          Personalized Advisory
        </span>
        <h2
          id="cta-heading"
          className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Ready to Secure Your Financial Future?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-neutral-300 sm:text-xl">
          Schedule a direct consultation with Panchanan Kumar (ARN-195797) to build a custom
          portfolio aligned with your family goals.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" variant="gold" className="w-full shadow-md sm:w-auto" asChild>
            <a href="/contact">
              Talk to an Advisor
              <ArrowRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </Button>
          <Button variant="whatsapp" size="lg" className="w-full shadow-md sm:w-auto" asChild>
            <a href={BRAND.social.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
              WhatsApp Us Direct
            </a>
          </Button>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-300">
          <Phone className="h-4 w-4 text-gold-400" aria-hidden="true" />
          <span>Call directly:</span>
          <a
            href={`tel:${BRAND.contact.phone}`}
            className="font-bold text-white underline hover:text-gold-400"
          >
            {BRAND.contact.phone}
          </a>
        </p>
      </div>
    </SectionWrapper>
  );
}
