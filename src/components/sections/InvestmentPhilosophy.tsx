'use client';

import { Shield, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { BRAND } from '@/lib/utils/constants';

const principles = [
  {
    icon: Shield,
    title: 'Capital Preservation First',
    description:
      'Protecting your core principal is our highest priority. We structure portfolios designed to navigate full market cycles.',
  },
  {
    icon: TrendingUp,
    title: 'Disciplined Compounding',
    description:
      'Systematic investing via SIPs and STPs removes emotion, market timing risk, and behavioral biases from your roadmap.',
  },
  {
    icon: Heart,
    title: 'Goal-Aligned Allocation',
    description:
      'Asset allocation is driven strictly by your personal milestones, liquidity needs, and risk tolerance — not financial product quotas.',
  },
  {
    icon: Lightbulb,
    title: 'Continuous Advisory Engagement',
    description:
      'We monitor regulatory updates, tax implications, and economic trends to optimize your wealth strategy over time.',
  },
] as const;

export function InvestmentPhilosophy() {
  return (
    <SectionWrapper id="philosophy" aria-labelledby="philosophy-heading" className="bg-slate-50/70">
      <SectionHeader
        title="Our Investment Philosophy"
        subtitle="Core principles that guide every advisory decision made by Panchanan Kumar (ARN-195797)"
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {principles.map((principle, index) => (
          <Card
            key={principle.title}
            variant="interactive"
            padding="lg"
            className="border-neutral-200/80 bg-white shadow-sm transition-all hover:border-teal-600/30 hover:shadow-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
              <principle.icon className="h-6 w-6" aria-hidden="true" />
            </div>
            <h3 className="mb-2 font-display text-lg font-bold text-brand-950">
              {principle.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600">{principle.description}</p>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-neutral-200/80 bg-white p-8 shadow-sm">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-xl font-bold leading-relaxed text-brand-950 sm:text-2xl">
            "Personalized wealth guidance built on trust, transparency, and 15+ years of capital
            markets experience."
          </p>
          <p className="mt-4 text-sm font-semibold text-neutral-600">
            Dedicated Advisor: {BRAND.founder.name} ({BRAND.founder.arn} • AMFI Registered MFD)
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
