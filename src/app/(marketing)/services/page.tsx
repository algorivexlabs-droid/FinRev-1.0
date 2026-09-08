import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
import { generateMetadata } from '@/lib/utils/seo';
import { SERVICES } from '@/lib/utils/constants';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Our Investment Services',
  description:
    'Explore comprehensive financial services including Mutual Funds, Insurance, Bonds, PMS, AIF, Unlisted Equity, and Fixed Deposits by FinRev Solutions.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-neutral-50 py-20 dark:from-brand-950 dark:via-brand-900 dark:to-brand-950 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2">
              <Badge variant="teal" size="md">
                Comprehensive Investment Solutions
              </Badge>
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-brand-600 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Our <span className="text-teal-600 dark:text-teal-400">Financial Services</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-xl">
              From goal-based mutual fund investing to sophisticated alternative asset classes — we
              offer a full spectrum of wealth solutions tailored to your life stage.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="all-services" aria-labelledby="services-heading">
        <SectionHeader
          title="All Investment Solutions"
          subtitle="Choose a service to explore features, suitability, and advisor guidance"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Card
              key={service.slug}
              variant="interactive"
              padding="lg"
              className="flex h-full flex-col justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-600 dark:bg-teal-400/20 dark:text-teal-400">
                  <Icon name={service.icon as any} className="h-7 w-7" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand-600 dark:text-neutral-50">
                  {service.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {service.shortDescription}
                </p>
                <ul className="mb-6 space-y-2 border-t border-neutral-100 pt-4 dark:border-brand-800">
                  {service.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs font-medium text-neutral-600 dark:text-neutral-300"
                    >
                      <CheckCircle2
                        className="h-3.5 w-3.5 flex-shrink-0 text-teal-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-teal-700 dark:text-teal-400"
              >
                Explore {service.name}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="how-we-work" aria-labelledby="how-heading">
        <SectionHeader
          title="Our Advisory Process"
          subtitle="A structured 4-step roadmap to achieve your financial objectives"
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              step: 1,
              title: 'Discover',
              description:
                'Understand your life goals, risk profile, cash flows, and current portfolio',
            },
            {
              step: 2,
              title: 'Plan',
              description:
                'Create a tailored investment roadmap aligned with realistic return expectations',
            },
            {
              step: 3,
              title: 'Implement',
              description:
                'Execute the strategy through systematic SIPs or lump sum allocations in top schemes',
            },
            {
              step: 4,
              title: 'Review',
              description: 'Continuous portfolio tracking, rebalancing, and goal milestone reviews',
            },
          ].map((item) => (
            <Card key={item.title} variant="interactive" padding="lg" className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-900 text-gold-500 shadow-md">
                <span className="font-display text-2xl font-black">0{item.step}</span>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-brand-600 dark:text-neutral-50">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Start Your Financial Journey
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
