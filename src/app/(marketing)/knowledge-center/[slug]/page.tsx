import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { generateMetadata as createMetadata } from '@/lib/utils/seo';
import { KNOWLEDGE_CATEGORIES } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Clock,
  Calendar,
  User,
  Tag,
  Share2,
  AlertTriangle,
} from 'lucide-react';
import { getArticleBySlug, getArticlesByCategory } from '@/lib/knowledge/data';
import { formatDate } from '@/lib/utils/format';
import { Card } from '@/components/ui/Card';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const { getAllArticles } = await import('@/lib/knowledge/data');
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article)
    return createMetadata({ title: 'Article Not Found', path: `/knowledge-center/${slug}` });
  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/knowledge-center/${slug}`,
    type: 'article',
    publishedTime: article.date,
    authors: [article.author],
    tags: article.tags,
    ogImage: article.ogImage,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== slug)
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
                href="/knowledge-center"
                className="hover:text-brand-600 dark:hover:text-brand-400"
              >
                Knowledge Center
              </Link>
              <span aria-hidden="true">/</span>
              <Link
                href={`/knowledge-center/category/${KNOWLEDGE_CATEGORIES.find((c) => c.name === article.category)?.slug || article.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="hover:text-brand-600 dark:hover:text-brand-400"
              >
                {article.category}
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-neutral-900 dark:text-neutral-50" aria-current="page">
                {article.title}
              </span>
            </nav>

            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
                {article.category}
              </span>
              {article.featured && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
                  Featured
                </span>
              )}
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="font-display text-3xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-5xl">
              {article.title}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-600 dark:text-neutral-400">
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={article.date}>{formatDate(article.date)}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{article.readTime} min read</span>
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
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <div className="mt-12 border-t border-neutral-200 pt-8 dark:border-neutral-800">
              <h2 className="mb-6 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((related, index) => (
                  <RelatedArticleCard key={related.slug} article={related} index={index} />
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
                    <p className="mb-2 font-semibold">Disclaimer</p>
                    <p className="mb-2">
                      This article is for educational purposes only and does not constitute
                      personalized investment advice.
                    </p>
                    <p>
                      Information may not reflect current market conditions. Consult a qualified
                      financial advisor before making investment decisions.
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
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  <ul className="space-y-1">
                    {extractHeadings(article.content).map((heading, index) => (
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

              <Card variant="elevated" padding="lg">
                <h3 className="mb-4 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Author
                </h3>
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-900/30">
                    <span className="font-display text-xl font-bold text-brand-600 dark:text-brand-400">
                      {article.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-neutral-900 dark:text-neutral-50">
                      {article.author}
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                      Financial Education Team
                    </p>
                  </div>
                </div>
              </Card>

              <div className="rounded-lg border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
                <h3 className="mb-4 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  Talk to an Advisor
                </h3>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  Have questions about this topic? Get personalized guidance from our advisor.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn-primary w-full justify-center">
                    Schedule Consultation
                  </Link>
                  <a
                    href="https://wa.me/919835592142?text=Hello%2C%20I%20read%20your%20article%20on%20${encodeURIComponent(article.title)}%20and%20would%20like%20to%20know%20more."
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

interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: number;
  author: string;
  date: string;
}

function RelatedArticleCard({ article, index }: { article: Article; index: number }) {
  const authorInitials =
    article.author
      ?.split(' ')
      .map((n: string) => n[0])
      .join('') ?? '';
  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString('en-IN', {
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
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{formattedDate}</p>
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
