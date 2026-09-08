import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CALCULATORS } from '@/lib/utils/constants';
import { generateMetadata as createMetadata } from '@/lib/utils/seo';
import { CalculatorPageClient } from './CalculatorPageClient';

interface CalculatorPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CALCULATORS.map((calc) => ({ slug: calc.slug }));
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const calc = CALCULATORS.find((c) => c.slug === slug);
  if (!calc) return createMetadata({ title: 'Calculator Not Found', path: `/calculators/${slug}` });
  return createMetadata({
    title: calc.name,
    description: calc.description,
    path: `/calculators/${slug}`,
  });
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { slug } = await params;
  const calc = CALCULATORS.find((c) => c.slug === slug);

  if (!calc) notFound();

  return <CalculatorPageClient calculator={calc} />;
}
