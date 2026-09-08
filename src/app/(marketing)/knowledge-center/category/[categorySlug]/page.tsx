import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { generateMetadata as createMetadata } from '@/lib/utils/seo';
import { KNOWLEDGE_CATEGORIES } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  BookOpen,
  GraduationCap,
  FileText,
  Lightbulb,
  Wallet,
  User,
  Target,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { getArticlesByCategory, getAllCategories } from '@/lib/knowledge/data';

interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  author: string;
  date: string;
}

interface CategoryPageProps {
  params: Promise<{ categorySlug: string }>;
}

export async function generateStaticParams() {
  return KNOWLEDGE_CATEGORIES.map((cat) => ({ categorySlug: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { categorySlug } = await params;
  const cat = KNOWLEDGE_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat)
    return createMetadata({
      title: 'Category Not Found',
      path: `/knowledge-center/category/${categorySlug}`,
    });
  return createMetadata({
    title: `${cat.name} Articles`,
    description: `Educational articles on ${cat.name.toLowerCase()}. ${cat.description}`,
    path: `/knowledge-center/category/${categorySlug}`,
  });
}

const categoryIcons: Record<string, string> = {
  'Mutual Funds': 'pie-chart',
  SIP: 'trending-up',
  'Investing Basics': 'book-open',
  'Personal Finance': 'wallet',
  'Tax Planning': 'file-text',
  'Retirement Planning': 'user',
  'Financial Planning': 'target',
};

export default async function KnowledgeCategoryPage({ params }: CategoryPageProps) {
  const { categorySlug } = await params;
  const cat = KNOWLEDGE_CATEGORIES.find((c) => c.slug === categorySlug);
  if (!cat) notFound();

  const articles = getArticlesByCategory(cat.name);
  const allCategories = getAllCategories();

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

      <SectionWrapper id="articles" aria-labelledby="articles-heading">
        <SectionHeader
          title={`${cat.name} Articles`}
          subtitle={`${articles.length} educational resources available`}
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={article.slug} article={article} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="related-categories" aria-labelledby="related-heading">
        <SectionHeader
          title="Explore Other Topics"
          subtitle="Continue your financial education journey"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {allCategories
            .filter((c) => c !== cat.name)
            .map((categoryName, index) => {
              const catData = KNOWLEDGE_CATEGORIES.find((c) => c.name === categoryName);
              return catData ? (
                <CategoryCard key={catData.slug} category={catData} index={index} />
              ) : null;
            })}
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
                <p className="mb-2 font-semibold">Educational Content Disclaimer</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>
                    Articles are for educational purposes only and do not constitute personalized
                    investment advice.
                  </li>
                  <li>
                    Information may not reflect current market conditions or regulatory changes.
                  </li>
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
