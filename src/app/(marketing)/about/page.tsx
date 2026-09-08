import * as React from 'react';
import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { generateMetadata, siteConfig, generateOrganizationStructuredData } from '@/lib/utils/seo';
import { BRAND, NAVIGATION } from '@/lib/utils/constants';
import Link from 'next/link';
import {
  ArrowRight,
  Target,
  Shield,
  Heart,
  Lightbulb,
  Users,
  Award,
  LucideIcon,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'About FinRev Solutions',
  description:
    'Learn about FinRev Solutions, our mission, vision, and the experienced advisor behind our personalized investment guidance.',
  path: '/about',
});

interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

const values: ValueItem[] = [
  {
    icon: Target,
    title: 'Client First',
    description: 'Your goals and interests always come before any product or commission.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'Transparent advice with full disclosure of risks, costs, and conflicts.',
  },
  {
    icon: Heart,
    title: 'Empathy',
    description: 'We understand the emotional side of money and guide you with patience.',
  },
  {
    icon: Lightbulb,
    title: 'Education',
    description: 'Empowering you to make informed decisions, not just follow recommendations.',
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description: "We're here for your entire financial journey, not just a transaction.",
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Continuous learning and improvement to serve you better every day.',
  },
];

const milestones = [
  {
    year: '2009',
    title: 'Career Begins',
    description: 'Panchanan Kumar starts career in financial services',
  },
  {
    year: '2015',
    title: 'SEBI Registration',
    description: 'Obtains ARN-195797 as Mutual Fund Distributor',
  },
  {
    year: '2020',
    title: 'FinRev Founded',
    description: 'FinRev Solutions established with client-first vision',
  },
  {
    year: '2024',
    title: 'Digital Platform',
    description: 'Launch of finrevsolutions.com for wider reach',
  },
] as const;

export default function AboutPage() {
  const structuredData = generateOrganizationStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Mutual Fund Distributor • ARN-{BRAND.founder.arn}
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              About <span className="text-brand-600 dark:text-brand-400">FinRev Solutions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              {siteConfig.description}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="story" aria-labelledby="story-heading">
        <SectionHeader title="Our Story" subtitle="How FinRev Solutions came to be" />
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              FinRev Solutions was born from a simple observation: most investors don't need more
              products — they need clarity, discipline, and a trusted partner who puts their
              interests first.
            </p>
            <p>
              Founded by{' '}
              <strong className="text-neutral-900 dark:text-neutral-50">
                {BRAND.founder.name}
              </strong>
              , a SEBI-registered Mutual Fund Distributor (ARN-{BRAND.founder.arn}) with over 15
              years of experience, FinRev Solutions bridges the gap between complex financial
              products and real-life financial goals.
            </p>
            <p>
              Our approach is different. We don't chase the latest fund or market trend. We start
              with <em>you</em> — your goals, your fears, your timeline, your family. Then we build
              a personalized roadmap using proven investment principles: diversification, systematic
              investing, cost efficiency, and patience.
            </p>
            <p>
              Today, we serve hundreds of families across India, helping them navigate market
              cycles, plan for retirement, fund education, and build lasting wealth — all with
              complete transparency and zero conflict of interest.
            </p>
          </div>

          <div className="relative border-l-2 border-brand-200 pl-8 dark:border-brand-800">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative pb-8 last:pb-0">
                <div className="absolute left-0 top-0 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-600 dark:border-neutral-950" />
                <div className="ml-4">
                  <p className="font-display text-xl font-bold text-brand-600 dark:text-brand-400">
                    {milestone.year}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                    {milestone.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="mission-vision" aria-labelledby="mv-heading">
        <SectionHeader title="Mission & Vision" subtitle="What drives us every day" />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-2">
          <Card variant="elevated" padding="xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <Target className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                Our Mission
              </h2>
            </div>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
              To empower every investor with personalized, transparent, and goal-based financial
              guidance — helping them build stronger financial futures through disciplined investing
              and continuous education.
            </p>
          </Card>
          <Card variant="elevated" padding="xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                <Lightbulb className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                Our Vision
              </h2>
            </div>
            <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
              To become India's most trusted name in goal-based financial advisory — where every
              client feels confident, informed, and in control of their financial destiny.
            </p>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper id="values" aria-labelledby="values-heading">
        <SectionHeader title="Our Values" subtitle="The principles that guide every interaction" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={value.title}
              variant="interactive"
              padding="lg"
              className="animate-fade-in stagger-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
                {React.createElement(value.icon, { className: 'h-7 w-7', 'aria-hidden': 'true' })}
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                {value.title}
              </h3>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                {value.description}
              </p>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="advisor" aria-labelledby="advisor-heading">
        <SectionHeader title="Your Advisor" subtitle="Meet the founder behind FinRev Solutions" />
        <Card variant="elevated" padding="xl" className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800 lg:mx-0">
                <div className="flex h-full w-full items-center justify-center text-neutral-400 dark:text-neutral-500">
                  <span className="text-sm">Advisor Photo</span>
                </div>
              </div>
              <div className="mt-6 rounded-xl border border-brand-200 bg-brand-50 p-6 dark:border-brand-800 dark:bg-brand-900/20">
                <p className="mb-2 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                  {BRAND.founder.name}
                </p>
                <p className="mb-1 text-neutral-600 dark:text-neutral-400">
                  {BRAND.founder.designation}
                </p>
                <p className="text-sm font-medium text-brand-600 dark:text-brand-400">
                  ARN: {BRAND.founder.arn}
                </p>
                <div className="mt-4 border-t border-brand-200 pt-4 dark:border-brand-800">
                  <a
                    href={`tel:${BRAND.contact.phone}`}
                    className="block text-sm text-neutral-600 hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-400"
                  >
                    📞 {BRAND.contact.phone}
                  </a>
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="mt-1 block text-sm text-neutral-600 hover:text-brand-600 dark:text-neutral-400 dark:hover:text-brand-400"
                  >
                    ✉ {BRAND.contact.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-2">
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  Professional Background
                </h3>
                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                  With over 15 years in the financial services industry, Panchanan Kumar has guided
                  hundreds of families through various market cycles. His journey began with a
                  passion for helping individuals understand that investing isn't about picking the
                  hottest fund — it's about aligning money with life goals.
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  Approach & Philosophy
                </h3>
                <p className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                  "Every family's financial situation is unique. My role isn't to sell products —
                  it's to listen, understand, and build a roadmap that gives you confidence. Whether
                  you're starting your first SIP at 25 or planning retirement at 55, the principles
                  remain the same: start early, stay invested, review regularly, and never lose
                  sight of your goals."
                </p>
              </div>
              <div>
                <h3 className="mb-3 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
                  Credentials & Registration
                </h3>
                <ul className="space-y-2 text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-center gap-2">
                    <Shield
                      className="h-4 w-4 text-brand-600 dark:text-brand-400"
                      aria-hidden="true"
                    />{' '}
                    SEBI Registered Mutual Fund Distributor (ARN-195797)
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield
                      className="h-4 w-4 text-brand-600 dark:text-brand-400"
                      aria-hidden="true"
                    />{' '}
                    AMFI Registered (ARN-195797)
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield
                      className="h-4 w-4 text-brand-600 dark:text-brand-400"
                      aria-hidden="true"
                    />{' '}
                    15+ Years Industry Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield
                      className="h-4 w-4 text-brand-600 dark:text-brand-400"
                      aria-hidden="true"
                    />{' '}
                    NISM Series V-A Certified
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </SectionWrapper>

      <SectionWrapper id="why-clients" aria-labelledby="why-clients-heading">
        <SectionHeader title="Why Clients Choose Us" subtitle="What sets our advisory apart" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            'Goal-based planning, not product pushing',
            'Transparent fee structure with no hidden costs',
            'Regular portfolio reviews and rebalancing',
            'Direct access to your advisor — no call centers',
            'Educational resources for informed decisions',
            'Compliance-first approach with full regulatory adherence',
          ].map((reason, index) => (
            <div
              key={reason}
              className="animate-fade-in stagger-1 flex gap-4 rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                <Users className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">{reason}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
