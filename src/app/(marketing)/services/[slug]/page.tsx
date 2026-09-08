import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES } from '@/lib/utils/constants';
import { generateMetadata as createMetadata } from '@/lib/utils/seo';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/Accordion';
import Link from 'next/link';
import { ArrowRight, AlertTriangle, CheckCircle2, ShieldCheck, MessageSquare } from 'lucide-react';
import { BRAND, DISCLAIMERS } from '@/lib/utils/constants';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return createMetadata({ title: 'Service Not Found', path: `/services/${slug}` });
  return createMetadata({
    title: service.name,
    description: service.shortDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-neutral-50 py-20 dark:from-brand-950 dark:via-brand-900 dark:to-brand-950 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2">
              <Badge variant="gold" size="md">
                <ShieldCheck className="mr-1.5 inline h-4 w-4" />
                AMFI Registered • {BRAND.founder.arn}
              </Badge>
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-600 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              {service.name}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="overview" aria-labelledby="overview-heading">
        <SectionHeader
          title="Service Overview"
          subtitle="Key objectives & wealth creation potential"
        />
        <Card variant="panel" padding="xl" className="mx-auto max-w-4xl">
          <p className="text-lg leading-relaxed text-brand-600 dark:text-neutral-200">
            {service.shortDescription} At FinRev Solutions, we match every {service.name} allocation
            directly to your cash flow requirements, horizon, and tax status.
          </p>
        </Card>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="features" aria-labelledby="features-heading">
        <SectionHeader
          title="Key Features & Benefits"
          subtitle="Why investors choose this asset class"
        />
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {service.features.map((feature, index) => (
            <Card
              key={feature}
              variant="interactive"
              padding="lg"
              className="flex items-center gap-3"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 dark:bg-teal-400/20 dark:text-teal-400">
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-brand-600 dark:text-neutral-200">
                {feature}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="suitable" aria-labelledby="suitable-heading">
        <SectionHeader
          title="Suitable Investor Profiles"
          subtitle="Who should consider this allocation"
        />
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {service.suitableFor.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-brand-800 dark:bg-brand-900"
              >
                <CheckCircle2
                  className="h-5 w-5 flex-shrink-0 text-teal-600 dark:text-teal-400"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold text-brand-600 dark:text-neutral-200">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        variant="alternate"
        id="considerations"
        aria-labelledby="considerations-heading"
      >
        <SectionHeader
          title="Risk & Important Considerations"
          subtitle="Essential factors to evaluate before investing"
        />
        <div className="mx-auto max-w-4xl space-y-4">
          {service.considerations.map((consideration, index) => (
            <Accordion key={consideration} type="single" collapsible className="w-full">
              <AccordionItem
                value={`consideration-${index}`}
                className="rounded-xl border border-neutral-200 bg-white px-4 dark:border-brand-800 dark:bg-brand-900"
              >
                <AccordionTrigger className="flex items-center gap-3 py-4 hover:no-underline">
                  <AlertTriangle
                    className="h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400"
                    aria-hidden="true"
                  />
                  <span className="text-base font-bold text-brand-600 dark:text-neutral-100">
                    {consideration}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {getConsiderationDetail(service.slug, consideration)}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="disclaimer" aria-labelledby="disclaimer-heading">
        <SectionHeader
          title="Regulatory & Risk Disclaimer"
          subtitle="SEBI / AMFI advisory disclosure"
        />
        <div className="mx-auto max-w-4xl">
          <Card
            variant="bordered"
            padding="lg"
            className="border-amber-300/60 bg-amber-50/70 dark:border-amber-800 dark:bg-amber-950/40"
          >
            <div className="flex gap-4">
              <AlertTriangle
                className="mt-0.5 h-6 w-6 flex-shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
              <div className="prose prose-sm dark:prose-invert max-w-none space-y-2 text-xs leading-relaxed text-amber-900 dark:text-amber-100">
                <p className="text-sm font-bold">Regulatory Notice</p>
                <p>{DISCLAIMERS.calculator}</p>
                <p>{DISCLAIMERS.noGuarantee}</p>
                <p>{DISCLAIMERS.advisory}</p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper
        variant="dark"
        id="cta"
        aria-labelledby="cta-heading"
        className="bg-brand-900 text-white"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-extrabold text-white">
            Interested in {service.name}?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-neutral-300">
            Consult directly with Panchanan Kumar (ARN-195797) to evaluate how {service.name} fits
            into your overall wealth roadmap.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="gold" asChild>
              <Link href="/contact">
                Talk to an Advisor
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button variant="whatsapp" size="lg" asChild>
              <a href={BRAND.social.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="mr-2 h-5 w-5" aria-hidden="true" />
                WhatsApp Direct
              </a>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

function getConsiderationDetail(serviceSlug: string, consideration: string): string {
  const details: Record<string, Record<string, string>> = {
    'mutual-funds': {
      'Market risk':
        'Mutual fund investments are subject to market risks. NAV can fluctuate based on broader market volatility.',
      'No guaranteed returns':
        'Past performance does not guarantee future returns. Mutual fund returns are market-linked.',
      'Expense ratio impact':
        'Annual expense ratios reduce net returns over time. Compare costs across direct and regular schemes.',
    },
    insurance: {
      'Policy terms & conditions':
        'Coverage is subject to policy terms, conditions, and exclusions. Read the scheme information document carefully.',
      'Premium affordability':
        'Ensure premiums remain affordable over long horizons to prevent policy lapse.',
      'Claim settlement ratio':
        'Check insurer track records and settlement efficiency prior to purchasing policy.',
    },
    bonds: {
      'Interest rate risk':
        'Bond prices move inversely to benchmark interest rates. Rising interest rates reduce bond capital values.',
      'Credit risk':
        'Issuer credit default risk varies. Sovereign bonds carry minimal credit risk while corporate bonds carry higher risk.',
      'Liquidity constraints': 'Secondary market liquidity varies across corporate issues.',
    },
    pms: {
      'Higher minimum investment':
        'PMS requires a minimum investment threshold of ₹50 lakhs under SEBI regulations.',
      'Market risk':
        'Direct equity portfolios experience price volatility based on stock selections.',
      'Management fees': 'Fixed management fees and performance fee share structures apply.',
    },
    aif: {
      'High minimum investment':
        'Category I & II AIFs require a minimum commitment of ₹1 crore as mandated by SEBI.',
      'Lock-in periods': 'Capital commitment may be locked in for 3 to 10 years.',
      'Complex structures': 'Investments involve non-standard valuation models and fee structures.',
      Illiquidity: 'AIF units are unlisted and non-transferable on secondary stock exchanges.',
    },
    'unlisted-equity': {
      'High risk': 'Early-stage private business valuations involve significant capital risk.',
      Illiquid: 'Exits depend on company IPOs, secondary buybacks, or strategic acquisitions.',
      'Valuation uncertainty':
        'Fair market pricing is unlisted and illiquid until liquidity events.',
      'Lock-up periods': 'Post-IPO statutory lock-up periods apply.',
    },
    'fixed-deposits': {
      'Inflation risk': 'Fixed yields may underperform post-tax inflation rates.',
      'Tax on interest': 'Interest income is taxable under your applicable income tax slab.',
      'Premature withdrawal penalty':
        'Early withdrawal breaks tenure and incurs premature penalty fees.',
      'Lower returns':
        'Guaranteed return products yield lower wealth accumulation compared to equity over long periods.',
    },
  };

  return (
    details[serviceSlug]?.[consideration] ||
    'Please consult your FinRev advisor for detailed information regarding this risk consideration.'
  );
}
