import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';
import { CALCULATORS } from '@/lib/utils/constants';
import Link from 'next/link';
import { ArrowRight, Calculator } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Financial Calculators',
  description:
    'Plan your investments with our suite of financial calculators: SIP, Lumpsum, Step-Up SIP, SWP, STP, XIRR, Retirement, Child Education, Marriage Goal, Financial Goal, Inflation, and MF vs FD.',
  path: '/calculators',
});

export default function CalculatorsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Plan with Precision
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Financial <span className="text-brand-600 dark:text-brand-400">Calculators</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              Make informed investment decisions with our comprehensive suite of calculators. From
              SIP planning to retirement corpus estimation — plan every goal with confidence.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="all-calculators" aria-labelledby="calculators-heading">
        <SectionHeader title="All Calculators" subtitle="Choose a calculator to start planning" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CALCULATORS.map((calc, index) => (
            <Card
              key={calc.slug}
              variant="interactive"
              padding="lg"
              className="animate-fade-in stagger-1 flex h-full flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <Icon name={calc.icon as any} className="h-7 w-7" aria-hidden="true" />
              </div>
              <div className="mb-2 flex items-center gap-1.5">
                <span className="rounded bg-brand-100 px-2 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                  {calc.category}
                </span>
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {calc.name}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {calc.description}
              </p>
              <Link
                href={`/calculators/${calc.slug}`}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
              >
                Calculate
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="disclaimer" aria-labelledby="disclaimer-heading">
        <SectionHeader title="Important Disclaimer" />
        <div className="mx-auto max-w-3xl">
          <Card
            variant="bordered"
            padding="lg"
            className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20"
          >
            <div className="flex gap-4">
              <Calculator
                className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
              <div className="prose prose-sm dark:prose-invert max-w-none text-amber-900 dark:text-amber-100">
                <p className="mb-2 font-semibold">Calculator Results Are Illustrative Only</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Calculator outputs are based on mathematical formulas and assumed rates of
                    return.
                  </li>
                  <li>
                    Actual returns will vary based on market conditions, fund performance, and
                    timing.
                  </li>
                  <li>Past performance does not guarantee future results.</li>
                  <li>Mutual fund investments are subject to market risks.</li>
                  <li>These calculators do not constitute personalized investment advice.</li>
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
