import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';
import { KNOWLEDGE_CATEGORIES } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileText,
  Lightbulb,
  Wallet,
  FileText as FileTextIcon,
  User,
  Target,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { getFeaturedArticles, getAllCategories } from '@/lib/knowledge/data';

export const metadata: Metadata = generateMetadata({
  title: 'Knowledge Center',
  description:
    'Educational resources to empower your investment decisions. Articles on mutual funds, SIP, investing basics, personal finance, tax planning, retirement planning, and financial planning.',
  path: '/knowledge-center',
});

const categoryIcons: Record<string, string> = {
  'Mutual Funds': 'pie-chart',
  SIP: 'trending-up',
  'Investing Basics': 'book-open',
  'Personal Finance': 'wallet',
  'Tax Planning': 'file-text',
  'Retirement Planning': 'user',
  'Financial Planning': 'target',
};

export default function KnowledgeCenterPage() {
  const featuredArticles = getFeaturedArticles();
  const categories = KNOWLEDGE_CATEGORIES;

  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Financial Education
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Knowledge <span className="text-brand-600 dark:text-brand-400">Center</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              Empower yourself with financial literacy. Our curated articles cover everything from
              mutual fund basics to advanced retirement planning strategies.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="featured-articles" aria-labelledby="featured-heading">
        <SectionHeader
          title="Featured Articles"
          subtitle="Start with our most popular educational content"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/knowledge-center/all"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-600 px-6 py-3 font-medium text-brand-600 transition-colors hover:bg-brand-50 dark:hover:bg-brand-900/20"
          >
            View All Articles
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="categories" aria-labelledby="categories-heading">
        <SectionHeader
          title="Browse by Category"
          subtitle="Explore topics that matter to your financial journey"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <CategoryCard key={category.slug} category={category} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="newsletter" aria-labelledby="newsletter-heading">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 dark:border-brand-800 dark:bg-brand-900/20">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
              <BookOpen className="h-8 w-8 text-brand-600 dark:text-brand-400" aria-hidden="true" />
            </div>
            <h2 className="mb-3 font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Stay Informed
            </h2>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              Get the latest articles, market insights, and financial planning tips delivered to
              your inbox.
            </p>
            <form
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
              action="/contact"
              method="POST"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input flex-1"
                required
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-neutral-500">
              By subscribing, you agree to our{' '}
              <a href="/privacy-policy" className="underline hover:text-brand-600">
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  author: string;
  date: string;
}

function ArticleCard({ article, index }: { article: Article; index: number }) {
  const authorInitials =
    article.author
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
          {article.category}
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {article.readTime} min read
        </span>
      </div>
      <h3 className="mb-2 line-clamp-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        <Link
          href={`/knowledge-center/${article.slug}`}
          className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
        >
          {article.title}
        </Link>
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        {article.description}
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
              {article.author}
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              {new Date(article.date).toLocaleDateString('en-IN', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
        <Link
          href={`/knowledge-center/${article.slug}`}
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
  const iconName = categoryIcons[category.name] || 'book-open';
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
        href={`/knowledge-center/category/${category.slug}`}
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
