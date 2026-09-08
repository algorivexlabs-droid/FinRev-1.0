'use client';

import { Target, Shield, Lightbulb, Users, CheckCircle2, Award, Briefcase } from 'lucide-react';
import { HeroContent } from './HeroContent';
import { HeroCTA } from './HeroCTA';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { BRAND } from '@/lib/utils/constants';

const trustSignals = [
  {
    icon: Target,
    label: 'Goal-Based Planning',
    description: 'Your life goals drive every recommendation',
  },
  {
    icon: Shield,
    label: 'SEBI Registered',
    description: 'ARN-195797 • AMFI Registered MFD',
  },
  {
    icon: Lightbulb,
    label: 'Investor Education',
    description: 'Calculators, research & market insights',
  },
  {
    icon: Users,
    label: 'Personal Advisor',
    description: 'Direct advisory with Panchanan Kumar',
  },
] as const;

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-neutral-50/60 py-12 sm:py-16 lg:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-teal-500/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-custom relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7">
            <HeroContent />
            <div className="mt-8">
              <HeroCTA />
            </div>
          </div>

          {/* Right Advisor Spotlight Panel */}
          <div className="lg:col-span-5">
            <Card
              variant="panel"
              padding="lg"
              className="relative overflow-hidden border-neutral-200/90 bg-white p-6 shadow-md transition-all sm:p-8"
            >
              <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-gold-500/10 blur-xl" />

              <div className="flex items-center gap-4 border-b border-neutral-100 pb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-950 font-display text-2xl font-black text-gold-400 shadow-sm">
                  PK
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-950">
                    {BRAND.founder.name}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wider text-teal-600">
                    {BRAND.founder.designation}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <Badge variant="gold" size="sm">
                      {BRAND.founder.arn}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <Briefcase className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                  <span>15+ Years Dedicated Capital Markets Experience</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <Award className="h-4 w-4 flex-shrink-0 text-teal-600" aria-hidden="true" />
                  <span>AMFI Registered Mutual Fund Distributor</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-neutral-700">
                  <CheckCircle2
                    className="h-4 w-4 flex-shrink-0 text-teal-600"
                    aria-hidden="true"
                  />
                  <span>100% Client-Aligned & Non-Speculative Focus</span>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-neutral-100 bg-neutral-50/80 p-4 text-xs leading-relaxed text-neutral-600">
                "Our single focus is helping your family achieve real life financial goals through
                structured, disciplined asset allocation."
              </div>
            </Card>
          </div>
        </div>

        {/* Verified Trust Strip */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {trustSignals.map((signal, index) => (
            <div
              key={signal.label}
              className="flex items-start gap-4 rounded-xl border border-neutral-200/80 bg-white p-5 shadow-sm transition-all hover:shadow-md"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                <signal.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-base font-bold text-brand-950">{signal.label}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-neutral-600">
                  {signal.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
