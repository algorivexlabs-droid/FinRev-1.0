'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/ui/Icon';
import { SectionWrapper, SectionHeader } from './SectionWrapper';
import { SERVICES } from '@/lib/utils/constants';

export function ServicesOverview() {
  return (
    <SectionWrapper variant="default" id="services-overview" aria-labelledby="services-heading">
      <SectionHeader
        title="Comprehensive Advisory Services"
        subtitle="Goal-aligned wealth solutions tailored across mutual funds, insurance, bonds, and alternative asset classes"
        action={
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-teal-700"
          >
            View All Services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        }
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {SERVICES.slice(0, 4).map((service, index) => (
          <Card
            key={service.slug}
            variant="interactive"
            padding="lg"
            className="flex flex-col justify-between border-neutral-200/80 bg-white shadow-sm transition-all hover:border-teal-600/30 hover:shadow-md"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div>
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                <Icon name={service.icon as any} className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-brand-950">{service.name}</h3>
              <p className="mb-6 text-sm leading-relaxed text-neutral-600">
                {service.shortDescription}
              </p>
            </div>
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-600 hover:text-teal-700"
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
      <div className="mt-12 text-center">
        <Link
          href="/services"
          className="btn-outline inline-flex items-center gap-2 border-neutral-300 font-bold text-brand-900 hover:bg-neutral-50"
        >
          Explore All {SERVICES.length} Financial Services
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </SectionWrapper>
  );
}
