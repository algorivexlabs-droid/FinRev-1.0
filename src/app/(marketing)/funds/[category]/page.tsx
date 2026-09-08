import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { generateMetadata as createMetadata } from '@/lib/utils/seo';
import { FUND_CATEGORIES, DISCLAIMERS, BRAND } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  TrendingUp,
  Shield,
  Scale,
  BarChart,
  FileText,
  Coins,
  Target,
  Users,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { getFundsByCategory, SAMPLE_FUNDS } from '@/lib/funds/data';
import { formatNumber, formatCurrency, formatPercentage } from '@/lib/utils/format';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return FUND_CATEGORIES.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const cat = FUND_CATEGORIES.find((c) => c.slug === category);
  if (!cat) return createMetadata({ title: 'Category Not Found', path: `/funds/${category}` });
  return createMetadata({
    title: `${cat.name} | Fund Categories`,
    description: `Explore ${cat.name} mutual funds with risk profiles, returns, and fund details. ${cat.description}`,
    path: `/funds/${category}`,
  });
}

export default async function FundCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const cat = FUND_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  const funds = getFundsByCategory(cat.name);

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              {cat.name}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              {cat.name}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              {cat.description}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="fund-list" aria-labelledby="fund-list-heading">
        <SectionHeader title={`All ${cat.name}`} subtitle={`Risk Level: ${cat.risk}`} />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {funds.map((fund, index) => (
            <Card
              key={fund.id}
              variant="interactive"
              padding="lg"
              className="animate-fade-in stagger-1 flex h-full flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    {fund.name}
                  </h3>
                  <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                    Risk: {fund.riskLevel}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {fund.description}
                </p>
              </div>

              <div className="mb-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-neutral-500 dark:text-neutral-400">NAV</p>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {formatCurrency(fund.nav)}
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500 dark:text-neutral-400">AUM</p>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    ₹{formatNumber(fund.aum)} Cr
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500 dark:text-neutral-400">Expense Ratio</p>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {fund.expenseRatio}%
                  </p>
                </div>
                <div>
                  <p className="text-neutral-500 dark:text-neutral-400">Min Investment</p>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                    {formatCurrency(fund.minInvestment)}
                  </p>
                </div>
              </div>

              <div className="mb-4 rounded-lg bg-neutral-50 p-4 dark:bg-neutral-800/50">
                <p className="mb-2 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Returns
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(fund.returns).map(([period, returnVal]) => (
                    <div key={period} className="flex justify-between">
                      <span className="text-neutral-600 dark:text-neutral-400">{period}</span>
                      <span className="font-semibold text-neutral-900 dark:text-neutral-50">
                        {returnVal >= 0 ? '+' : ''}
                        {formatPercentage(returnVal / 100)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto space-y-2 text-sm">
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Fund Manager</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">
                    {fund.fundManager}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Inception</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">
                    {new Date(fund.inceptionDate).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                </div>
                <div className="flex justify-between text-neutral-600 dark:text-neutral-400">
                  <span>Exit Load</span>
                  <span className="font-medium text-neutral-900 dark:text-neutral-50">
                    {fund.exitLoad}
                  </span>
                </div>
              </div>

              <div className="mt-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                <div className="dark:text-error-400 mb-2 text-xs text-error-500">
                  ⚠ This is sample/illustrative data only. Not real-time fund data.
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  Talk to an Advisor
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="category-overview" aria-labelledby="overview-heading">
        <SectionHeader title="Category Overview" subtitle="Key characteristics" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Target,
              title: 'Investment Objective',
              description: cat.name.includes('Equity')
                ? 'Long-term capital appreciation through equity investments'
                : cat.name.includes('Debt')
                  ? 'Stable returns with capital preservation'
                  : cat.name.includes('Hybrid')
                    ? 'Balanced growth with moderate risk'
                    : cat.name.includes('Index')
                      ? 'Replicate index performance at low cost'
                      : 'Tax saving with equity growth potential',
            },
            {
              icon: Shield,
              title: 'Risk Profile',
              description: cat.risk,
            },
            {
              icon: Scale,
              title: 'Typical Allocation',
              description: cat.name.includes('Equity')
                ? '65-100% Equity, 0-35% Debt'
                : cat.name.includes('Debt')
                  ? '0-10% Equity, 90-100% Debt'
                  : cat.name.includes('Hybrid')
                    ? '40-75% Equity, 25-60% Debt'
                    : cat.name.includes('Index')
                      ? '100% Index Securities'
                      : '80-100% Equity',
            },
            {
              icon: Clock,
              title: 'Ideal Horizon',
              description:
                cat.name.includes('Equity') || cat.name.includes('Tax Saving')
                  ? '5+ years'
                  : cat.name.includes('Debt')
                    ? '6 months - 3 years'
                    : cat.name.includes('Hybrid')
                      ? '3-5 years'
                      : '5+ years',
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
                <p className="mb-2 font-semibold">Fund Data Disclaimer</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    All fund data shown is <strong>sample/illustrative data only</strong> and does
                    not represent real-time or actual fund values.
                  </li>
                  <li>
                    This is <strong>not a recommendation</strong> to buy, sell, or hold any specific
                    fund.
                  </li>
                  <li>
                    Risk levels are indicative and may vary significantly by specific fund and
                    market conditions.
                  </li>
                  <li>
                    Returns shown are historical/illustrative and{' '}
                    <strong>do not guarantee future performance</strong>.
                  </li>
                  <li>
                    NAV, AUM, expense ratios, and returns change daily. Always check the latest fund
                    factsheet.
                  </li>
                  <li>
                    Mutual fund investments are subject to market risks. Read all scheme related
                    documents carefully.
                  </li>
                  <li>
                    Consult a qualified financial advisor before making any investment decisions.
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
