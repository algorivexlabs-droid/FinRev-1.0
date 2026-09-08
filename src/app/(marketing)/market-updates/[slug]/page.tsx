import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as createMetadata } from '@/lib/utils/seo';
import { MARKET_UPDATE_CATEGORIES } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  Globe,
  Clock,
  Calendar,
  User,
  Tag,
  Share2,
  BookOpen,
  Newspaper,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { getMarketUpdateBySlug, getMarketUpdatesByCategory } from '@/lib/market/data';
import { formatDate } from '@/lib/utils/format';
import { Card } from '@/components/ui/Card';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { getAllMarketUpdates } = await import('@/lib/market/data');
  return getAllMarketUpdates().map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const update = getMarketUpdateBySlug(slug);
  if (!update)
    return createMetadata({ title: 'Update Not Found', path: `/market-updates/${slug}` });
  return createMetadata({
    title: update.title,
    description: update.description,
    path: `/market-updates/${slug}`,
    type: 'article',
    publishedTime: update.date,
    authors: [update.author],
    tags: update.tags,
    ogImage: update.ogImage,
  });
}

export default async function MarketUpdatePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const update = getMarketUpdateBySlug(slug);
  if (!update) notFound();

  const relatedUpdates = getMarketUpdatesByCategory(update.category)
    .filter((u) => u.slug !== slug)
    .slice(0, 3);

  return (
    <article className="min-h-screen">
      <header className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <nav
              className="mb-6 flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400"
              aria-label="Breadcrumb"
            >
              <Link
                href="/market-updates"
                className="hover:text-brand-600 dark:hover:text-brand-400"
              >
                Market Updates
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={`/market-updates/category/${MARKET_UPDATE_CATEGORIES.find((c) => c.name === update.category)?.slug || update.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-brand-600 dark:hover:text-brand-400"
              >
                {update.category}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-900 dark:text-neutral-50" aria-current="page">
                {update.title}
              </span>
            </nav>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                {update.category}
              </span>
              {update.featured && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  Featured
                </span>
              )}
              {update.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-5xl">
              {update.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>{update.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={update.date}>{formatDate(update.date)}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{update.readTime} min read</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                className="flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                aria-label="Share article"
              >
                <Share2 className="h-4 w-4" aria-hidden="true" />
                Share
              </button>
              <button
                className="flex items-center gap-1.5 rounded-lg border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                aria-label="Bookmark article"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Save
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: update.content }} />
            </div>

            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <h2 className="mb-6 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                Related Updates
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedUpdates.map((related, index) => (
                  <RelatedUpdateCard key={related.slug} update={related} index={index} />
                ))}
              </div>
            </div>

            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
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
                    <p className="mb-2">
                      This content is for educational and informational purposes only. It is not
                      live market data, trading signals, or investment recommendations.
                    </p>
                    <p>
                      Market data, NAVs, and statistics may be delayed or illustrative. Past
                      performance does not guarantee future results. Consult a qualified financial
                      advisor before making investment decisions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card variant="elevated" padding="lg">
                <h3 className="mb-4 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  <ul className="space-y-1">
                    {extractHeadings(update.content).map((heading, index) => (
                      <li key={index}>
                        <a
                          href={`#${heading.id}`}
                          className="text-sm text-neutral-600 transition-colors hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-400"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Card>

              <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-4 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Talk to an Advisor
                </h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Have questions about this market update? Get personalized guidance from our
                  advisor.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Schedule Consultation
                  </Link>
                  <a
                    href={`https://wa.me/919835592142?text=Hello%2C%20I%20read%20your%20market%20update%20on%20${encodeURIComponent(update.title)}%20and%20would%20like%20to%20know%20more.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline w-full justify-center"
                  >
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
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

function RelatedUpdateCard({ update, index }: { update: MarketUpdate; index: number }) {
  const authorInitials =
    update.author
      ?.split(' ')
      .map((n: string) => n[0])
      .join('') ?? '';
  const formattedDate = update.date
    ? new Date(update.date).toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })
    : '';
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
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{formattedDate}</p>
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

function extractHeadings(content: string): Array<{ id: string; text: string; level: number }> {
  const headings: Array<{ id: string; text: string; level: number }> = [];
  const headingRegex = /<h([2-3])[^>]*>(.*?)<\/h[2-3]>/g;
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const levelStr = match[1];
    const textContent = match[2];
    if (!levelStr || !textContent) continue;
    const level = parseInt(levelStr, 10);
    const text = textContent.replace(/<[^>]*>/g, '');
    const id = text.toLowerCase().replace(/[^\w]+/g, '-');
    headings.push({ id, text, level });
  }
  return headings;
}
