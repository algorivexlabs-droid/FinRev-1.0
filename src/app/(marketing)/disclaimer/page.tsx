import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';
import { BRAND, DISCLAIMERS } from '@/lib/utils/constants';
import {
  Shield,
  AlertTriangle,
  Scale,
  FileText,
  TrendingUp,
  AlertCircle,
  Gavel,
  Target,
  Lock,
  Info,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Disclaimer',
  description:
    'FinRev Solutions Disclaimer - Investment risks, calculator limitations, regulatory disclosures, and important legal notices.',
  path: '/disclaimer',
});

const lastUpdated = 'January 2024';

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Legal
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              <span className="text-brand-600 dark:text-brand-400">Disclaimer</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              Important legal disclosures, investment risk warnings, and regulatory disclosures for
              FinRev Solutions.
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="regulatory" aria-labelledby="regulatory-heading">
        <SectionHeader
          title="Regulatory Registration"
          subtitle="Official credentials and oversight"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          <DisclaimerCard
            icon={Shield}
            title="SEBI Registered Mutual Fund Distributor"
            items={[
              'ARN: 195797',
              'Registered with Securities and Exchange Board of India (SEBI)',
              'AMFI Registration Number: ARN-195797',
              'Founder: Panchanan Kumar',
              'Designation: Mutual Fund Distributor',
            ]}
            accent="brand"
          />
          <DisclaimerCard
            icon={Gavel}
            title="Compliance & Oversight"
            items={[
              'Subject to SEBI (Mutual Fund) Regulations, 1996',
              'Subject to AMFI Code of Conduct and Guidelines',
              'Subject to SEBI (Intermediaries) Regulations, 2008',
              'Regular audits and compliance reporting',
              'Grievance redressal mechanism in place',
            ]}
            accent="brand"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="investment-risks" aria-labelledby="risks-heading">
        <SectionHeader
          title="Investment Risk Warnings"
          subtitle="Fundamental risks every investor must understand"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          {[
            {
              icon: AlertTriangle,
              title: 'Market Risk',
              description:
                'All mutual fund investments are subject to market risks. NAV can fluctuate based on market conditions, economic factors, geopolitical events, and investor sentiment. There is no guarantee of capital protection.',
              severity: 'high' as const,
            },
            {
              icon: TrendingUp,
              title: 'No Guaranteed Returns',
              description:
                'Past performance does not guarantee future results. Historical returns shown are for illustrative purposes only. Actual returns will vary based on market conditions, fund selection, timing, and expenses.',
              severity: 'high' as const,
            },
            {
              icon: Scale,
              title: 'Risk-Return Tradeoff',
              description:
                'Higher potential returns come with higher risk. Equity funds carry higher volatility than debt funds. Understand your risk tolerance before investing. Never invest money you cannot afford to lose in high-risk products.',
              severity: 'high' as const,
            },
            {
              icon: FileText,
              title: 'Scheme-Specific Risks',
              description:
                'Each mutual fund scheme has unique risks documented in its Scheme Information Document (SID) and Key Information Memorandum (KIM). Read these carefully before investing. Risks include concentration risk, liquidity risk, credit risk, interest rate risk, and sectoral risk.',
              severity: 'medium' as const,
            },
          ].map((risk, index) => (
            <RiskCard key={risk.title} {...risk} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="calculator-disclaimer" aria-labelledby="calc-heading">
        <SectionHeader
          title="Calculator & Tool Limitations"
          subtitle="Understanding projection constraints"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DisclaimerCard
              icon={Target}
              title="Projections Are Illustrative"
              items={[
                'Results based on mathematical formulas and assumed inputs',
                'Default return rates are not recommendations or forecasts',
                'Inflation, taxes, and expenses are simplified or excluded',
                'Market volatility and sequence of returns not modeled',
              ]}
              accent="warning"
            />
            <DisclaimerCard
              icon={Info}
              title="Not Personalized Advice"
              items={[
                'Calculators do not consider your complete financial picture',
                'No account taken of existing assets, liabilities, or goals',
                'Tax calculations are simplified — consult a tax advisor',
                'Results should not be sole basis for investment decisions',
              ]}
              accent="warning"
            />
            <DisclaimerCard
              icon={Lock}
              title="Accuracy Disclaimer"
              items={[
                'No warranty of accuracy, completeness, or timeliness',
                'Formulas may have rounding or approximation errors',
                'Assumptions (returns, inflation, rates) may not materialize',
                'Verify all calculations independently before acting',
              ]}
              accent="warning"
            />
            <DisclaimerCard
              icon={Scale}
              title="Regulatory Disclaimer"
              items={[
                'Calculators are educational tools — not SEBI-approved projections',
                'Do not meet requirements for regulated financial advice',
                'AMFI/SEBI do not endorse or validate these tools',
                'Use at your own risk and discretion',
              ]}
              accent="warning"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="data-disclaimer" aria-labelledby="data-heading">
        <SectionHeader
          title="Fund Data & Market Information Disclaimer"
          subtitle="Data sources and limitations"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DisclaimerCard
              icon={FileText}
              title="Sample Data Only"
              items={[
                'Fund examples are clearly labeled as sample/illustrative data',
                'Not real-time NAVs, returns, or current AUM figures',
                'Expense ratios and fund details may be outdated',
                'Always verify with official AMC/AMFI sources',
              ]}
              accent="error"
            />
            <DisclaimerCard
              icon={TrendingUp}
              title="No Live Market Data"
              items={[
                'No live NAVs, real-time prices, or trading signals provided',
                'Market updates are editorial content — not live feeds',
                'Data sourced from public disclosures — may be delayed',
                'Verify with official SEBI/AMFI/AMC sources before investing',
              ]}
              accent="error"
            />
            <DisclaimerCard
              icon={AlertCircle}
              title="No Endorsement"
              items={[
                'Inclusion of any fund/AMC does not imply recommendation',
                'No commercial relationship with specific fund houses implied',
                'Selection for educational diversity, not performance ranking',
                'Consult your advisor for personalized fund selection',
              ]}
              accent="error"
            />
            <DisclaimerCard
              icon={Gavel}
              title="Regulatory Compliance"
              items={[
                'Data sourced from public disclosures (SEBI, AMFI, AMC websites)',
                'Not a substitute for official Scheme Information Documents',
                'Does not satisfy SEBI/AMFI disclosure requirements for distributors',
                'Always read SID/KIM before investing',
              ]}
              accent="error"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="tax-disclaimer" aria-labelledby="tax-heading">
        <SectionHeader
          title="Taxation Disclaimer"
          subtitle="Simplified tax treatment — consult a professional"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          <DisclaimerCard
            icon={Scale}
            title="Simplified Tax Calculations"
            items={[
              'Tax calculations in calculators are simplified for illustration',
              'Actual tax liability depends on your complete income profile',
              'LTCG/STCG rules, surcharge, cess not fully modeled',
              'Indexation benefits, exemptions, deductions may vary',
            ]}
            accent="warning"
          />
          <DisclaimerCard
            icon={Gavel}
            title="Consult a Tax Professional"
            items={[
              'Tax laws change frequently — verify current provisions',
              'Your residential status, income slab, and deductions matter',
              'International taxation, NRI rules not covered',
              'Tax planning should be done with qualified CA/tax advisor',
            ]}
            accent="warning"
          />
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="no-guarantee" aria-labelledby="no-guarantee-heading">
        <SectionHeader title="No Guarantees or Warranties" subtitle="Explicit disclaimers" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            FinRev Solutions makes the following explicit disclaimers:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>No Guaranteed Returns:</strong> We do not guarantee any returns on
              investments. All investments carry risk including potential loss of principal.
            </li>
            <li>
              <strong>No Performance Guarantee:</strong> We do not guarantee that any investment
              strategy, fund, or product will achieve its objectives.
            </li>
            <li>
              <strong>No Advisory Guarantee:</strong> General information on the Site does not
              constitute personalized investment advice.
            </li>
            <li>
              <strong>No Data Accuracy Guarantee:</strong> While we strive for accuracy, we do not
              warrant that all data is error-free, complete, or current.
            </li>
            <li>
              <strong>No Service Availability Guarantee:</strong> The Site may be temporarily
              unavailable for maintenance or technical reasons.
            </li>
            <li>
              <strong>No Liability for Third-Party Actions:</strong> We are not responsible for
              actions of AMCs, regulators, or third-party service providers.
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="advisory" aria-labelledby="advisory-heading">
        <SectionHeader
          title="Not Personalized Investment Advice"
          subtitle="Consult qualified professionals"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            <strong>
              This website provides general information only and does not constitute personalized
              investment advice.
            </strong>
          </p>
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Investment decisions should be based on your individual financial situation, goals, risk
            tolerance, and time horizon. Factors we cannot know include:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>Your complete financial picture (assets, liabilities, income, expenses)</li>
            <li>Your risk capacity and psychological risk tolerance</li>
            <li>Your specific short-term and long-term financial goals</li>
            <li>Your tax situation, estate planning, and insurance needs</li>
            <li>Your existing portfolio composition and concentration risks</li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Before making any investment decision, consult a{' '}
            <strong>SEBI-registered investment advisor (RIA)</strong> or a qualified financial
            planner who can assess your complete financial situation.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="grievance" aria-labelledby="grievance-heading">
        <SectionHeader title="Grievance Redressal" subtitle="How to raise concerns" />
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <DisclaimerCard
              icon={Info}
              title="Internal Escalation"
              items={[
                'Email: grievances@finrevsolutions.com',
                'Phone: +91-9835592142',
                'Response within 7 business days',
                'Written acknowledgment within 24 hours',
              ]}
              accent="brand"
            />
            <DisclaimerCard
              icon={Gavel}
              title="External Authorities"
              items={[
                'SEBI SCORES: scores.gov.in',
                'AMFI Investor Grievance: amfiindia.com/investor-corner',
                'Consumer Forum: consumerhelpline.gov.in',
                'Maintain records of all communications',
              ]}
              accent="error"
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="changes" aria-labelledby="changes-heading">
        <SectionHeader title="Changes to This Disclaimer" subtitle="Updates and notifications" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-300">
            We may update this Disclaimer periodically. Changes will be posted on this page with an
            updated "Last Updated" date. Material changes will be highlighted. We encourage you to
            review this page periodically.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="contact" aria-labelledby="contact-heading">
        <SectionHeader
          title="Contact for Disclaimer Queries"
          subtitle="Questions about these disclosures?"
        />
        <div className="mx-auto max-w-3xl">
          <Card variant="elevated" padding="lg">
            <div className="space-y-4">
              <p className="font-semibold text-neutral-900 dark:text-neutral-50">
                FinRev Solutions
              </p>
              <div className="space-y-2 text-neutral-700 dark:text-neutral-300">
                <p>
                  <strong>Founder:</strong> {BRAND.founder.name}
                </p>
                <p>
                  <strong>Designation:</strong> {BRAND.founder.designation}
                </p>
                <p>
                  <strong>ARN:</strong> {BRAND.founder.arn}
                </p>
                <p>
                  <strong>Email:</strong>{' '}
                  <a
                    href={`mailto:${BRAND.contact.email}`}
                    className="text-brand-600 hover:text-brand-700"
                  >
                    {BRAND.contact.email}
                  </a>
                </p>
                <p>
                  <strong>Phone:</strong>{' '}
                  <a
                    href={`tel:${BRAND.contact.phone}`}
                    className="text-brand-600 hover:text-brand-700"
                  >
                    {BRAND.contact.phone}
                  </a>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}

function DisclaimerCard({
  icon: Icon,
  title,
  items,
  accent,
}: {
  icon: React.ComponentType<any>;
  title: string;
  items: string[];
  accent: 'brand' | 'warning' | 'error';
}) {
  const accentColors = {
    brand: 'border-brand-200 bg-brand-50 dark:border-brand-800 dark:bg-brand-900/20',
    warning: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20',
    error: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
  };

  const iconColors = {
    brand: 'text-brand-600 dark:text-brand-400 bg-brand-100 dark:bg-brand-900/30',
    warning: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30',
    error: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30',
  };

  return (
    <Card variant="bordered" padding="lg" className={accentColors[accent]}>
      <div
        className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
        style={{
          backgroundColor:
            accent === 'brand'
              ? 'rgb(240 247 255)'
              : accent === 'warning'
                ? 'rgb(255 251 235)'
                : 'rgb(254 242 242)',
        }}
      >
        <Icon
          className="h-6 w-6"
          style={{
            color:
              accent === 'brand'
                ? 'rgb(0 102 204)'
                : accent === 'warning'
                  ? 'rgb(245 158 11)'
                  : 'rgb(239 68 68)',
          }}
          aria-hidden="true"
        />
      </div>
      <h3 className="mb-3 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{
                backgroundColor:
                  accent === 'brand'
                    ? 'rgb(0 102 204)'
                    : accent === 'warning'
                      ? 'rgb(245 158 11)'
                      : 'rgb(239 68 68)',
              }}
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

function RiskCard({
  icon: Icon,
  title,
  description,
  severity,
  index,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  severity: 'high' | 'medium';
  index: number;
}) {
  const severityColors = {
    high: 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20',
    medium: 'border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-900/20',
  };

  const iconColors = {
    high: 'text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/30',
    medium: 'text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30',
  };

  return (
    <Card
      variant="bordered"
      padding="lg"
      className={`${severityColors[severity]} animate-fade-in stagger-1`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex items-start gap-4">
        <div
          className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: severity === 'high' ? 'rgb(254 242 242)' : 'rgb(255 251 235)' }}
        >
          <Icon
            className="h-6 w-6"
            style={{ color: severity === 'high' ? 'rgb(239 68 68)' : 'rgb(245 158 11)' }}
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="mb-1 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
            {title}
          </h3>
          <span
            className={`rounded px-2 py-0.5 text-xs font-medium ${severity === 'high' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300'}`}
          >
            {severity === 'high' ? 'Critical Risk' : 'Significant Risk'}
          </span>
        </div>
      </div>
      <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">{description}</p>
    </Card>
  );
}
