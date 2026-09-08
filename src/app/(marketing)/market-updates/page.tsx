import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';
import { MARKET_UPDATE_CATEGORIES } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  Globe,
  PieChart,
  BarChart,
  Lightbulb,
  GraduationCap,
  Newspaper,
  TrendingUp,
  Clock,
  Calendar,
  User,
  Share2,
  BookOpen,
  AlertTriangle,
} from 'lucide-react';
import { getFeaturedMarketUpdates, getAllMarketCategories } from '@/lib/market/data';

export const metadata: Metadata = generateMetadata({
  title: 'Market Updates',
  description:
    'Stay informed with curated market insights, mutual fund updates, economic news, and investor education from FinRev Solutions.',
  path: '/market-updates',
});

const categoryIcons: Record<string, string> = {
  'Market News': 'globe',
  'Mutual Fund Updates': 'pie-chart',
  'Economic Updates': 'bar-chart',
  'Market Insights': 'lightbulb',
  'Investor Education': 'graduation-cap',
};

export default function MarketUpdatesPage() {
  const featuredUpdates = getFeaturedMarketUpdates();
  const categories = MARKET_UPDATE_CATEGORIES;

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Market Intelligence
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Market <span className="text-brand-600 dark:text-brand-400">Updates</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              Curated market insights, fund updates, and economic analysis to keep you informed.
              Educational content - not live trading data.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="featured-updates" aria-labelledby="featured-heading">
        <SectionHeader
          title="Latest Highlights"
          subtitle="Our most recent featured market updates"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredUpdates.map((update, index) => (
            <MarketUpdateCard key={update.slug} update={update} index={index} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/market-updates/all"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 px-6 py-3 font-medium text-brand-600 transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/20"
          >
            View All Updates
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="categories" aria-labelledby="categories-heading">
        <SectionHeader title="Browse by Category" subtitle="Explore market updates by topic" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="disclaimer" aria-labelledby="disclaimer-heading">
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
                <p className="mb-2 font-semibold">Market Updates Disclaimer</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>Content is for educational and informational purposes only.</li>
                  <li>Not live market data, trading signals, or investment recommendations.</li>
                  <li>Market data, NAVs, and statistics may be delayed or illustrative.</li>
                  <li>Past performance does not guarantee future results.</li>
                  <li>Consult a qualified advisor before making investment decisions.</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}

interface MarketUpdate {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  author: string;
  date: string;
}

function MarketUpdateCard({ update, index }: { update: MarketUpdate; index: number }) {
  const authorInitials =
    update.author
      ?.split(' ')
      .map((n: string) => n[0])
      .join('') ?? '';
  return (
    <Card
      variant="interactive"
      padding="lg"
      className="animate-fade-in stagger-1 flex h-full flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          {update.category}
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {update.readTime} min read
        </span>
      </div>
      <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        <Link
          href={`/market-updates/${update.slug}`}
          className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
        >
          {update.title}
        </Link>
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {update.description}
      </p>
      <div className="flex items-center justify-between border-t border-neutral-200 pt-4 dark:border-neutral-800">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-700">
            <span className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
              {authorInitials}
            </span>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
              {update.author}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {new Date(update.date).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
        <Link
          href={`/market-updates/${update.slug}`}
          className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
        >
          Read More
          <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Card>
  );
}

function CategoryCard({ category, index }: { category: any; index: number }) {
  const iconName = categoryIcons[category.name] || 'newspaper';
  return (
    <Card
      variant="interactive"
      padding="lg"
      className="animate-fade-in stagger-1 text-center"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
        <Icon name={iconName as any} className="h-7 w-7" aria-hidden="true" />
      </div>
      <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {category.name}
      </h3>
      <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">{category.description}</p>
      <Link
        href={`/market-updates/category/${category.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
      >
        Explore
        <ArrowRight
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </Link>
    </Card>
  );
}
