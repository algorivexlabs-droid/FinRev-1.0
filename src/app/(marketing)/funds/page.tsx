import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';
import { FUND_CATEGORIES } from '@/lib/utils/constants';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Shield, Scale, BarChart, FileText } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Fund Categories',
  description:
    'Explore mutual fund categories: Equity, Debt, Hybrid, Index, and Tax Saving (ELSS) funds with risk profiles and descriptions.',
  path: '/funds',
});

export default function FundsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Mutual Fund Categories
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Fund <span className="text-brand-600 dark:text-brand-400">Categories</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              Understand different types of mutual funds to build a diversified portfolio aligned
              with your risk profile and goals.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="fund-categories" aria-labelledby="fund-categories-heading">
        <SectionHeader title="Fund Categories" subtitle="Choose a category to learn more" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FUND_CATEGORIES.map((category, index) => (
            <Card
              key={category.slug}
              variant="interactive"
              padding="lg"
              className="animate-fade-in stagger-1 flex h-full flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <Icon name={category.icon as any} className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  Risk: {category.risk}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {category.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {category.description}
              </p>
              <Link
                href={`/funds/${category.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                Explore {category.name}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="how-to-choose" aria-labelledby="how-choose-heading">
        <SectionHeader title="How to Choose the Right Fund" subtitle="Key factors to consider" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: 'Investment Goal',
              description:
                'Match fund type to your objective — wealth creation, income, or tax saving.',
            },
            {
              icon: Shield,
              title: 'Risk Tolerance',
              description:
                'Equity for high risk appetite, debt for capital preservation, hybrid for balance.',
            },
            {
              icon: Clock,
              title: 'Time Horizon',
              description: 'Equity for 5+ years, hybrid for 3-5 years, debt for under 3 years.',
            },
            {
              icon: TrendingUp,
              title: 'Fund Performance',
              description: 'Look at 3, 5, 10-year returns vs benchmark and category average.',
            },
            {
              icon: Scale,
              title: 'Expense Ratio',
              description: 'Lower costs mean higher net returns. Compare within the same category.',
            },
            {
              icon: Users,
              title: 'Fund Manager',
              description: 'Experienced manager with consistent track record across market cycles.',
            },
          ].map((item, index) => (
            <Card
              key={item.title}
              variant="elevated"
              padding="lg"
              className="animate-fade-in stagger-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="disclaimer" aria-labelledby="disclaimer-heading">
        <SectionHeader title="Important Disclaimer" />
        <div className="mx-auto max-w-3xl">
          <Card
            variant="bordered"
            padding="lg"
            className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"
          >
            <div className="flex gap-4">
              <AlertTriangle
                className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
              <div className="prose prose-sm dark:prose-invert max-w-none text-amber-900 dark:text-amber-100">
                <p className="mb-2 font-semibold">Fund Information Disclaimer</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Fund categories shown are for educational purposes only.</li>
                  <li>This is not a recommendation to buy or sell any specific fund.</li>
                  <li>Risk levels are indicative and may vary by specific fund.</li>
                  <li>Past performance does not guarantee future results.</li>
                  <li>Consult a qualified financial advisor before making investment decisions.</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}

import { Target, Clock, Users, AlertTriangle } from 'lucide-react';
