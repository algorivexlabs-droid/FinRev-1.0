import { Metadata } from 'next';
import { SectionWrapper, SectionHeader } from '@/components/sections/SectionWrapper';
import { Card } from '@/components/ui/Card';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';
import { BRAND } from '@/lib/utils/constants';
import {
  Shield,
  FileText,
  Lock,
  User,
  Globe,
  Clock,
  AlertTriangle,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Privacy Policy',
  description:
    'FinRev Solutions Privacy Policy - How we collect, use, and protect your personal information.',
  path: '/privacy-policy',
});

const lastUpdated = 'January 2024';

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Legal
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Privacy <span className="text-brand-600 dark:text-brand-400">Policy</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              How FinRev Solutions collects, uses, and protects your personal information.
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="introduction" aria-labelledby="intro-heading">
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <h2
            id="intro-heading"
            className="mb-4 font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50"
          >
            1. Introduction
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            FinRev Solutions ("we", "our", "us") is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard your information
            when you visit our website finrevsolutions.com (the "Site") or use our services.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            By accessing the Site, you agree to the collection and use of information in accordance
            with this policy. If you do not agree, please do not use the Site.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="information-collected" aria-labelledby="info-heading">
        <SectionHeader title="2. Information We Collect" subtitle="Types of data we gather" />
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <LegalCard
              icon={User}
              title="Personal Information"
              items={[
                'Name, email, phone number (via contact form)',
                'Investment interests and preferences',
                'Communication records (email, WhatsApp, calls)',
              ]}
            />
            <LegalCard
              icon={Globe}
              title="Automatic Data"
              items={[
                'IP address, browser type, operating system',
                'Pages visited, time spent, referral source',
                'Device information and cookies',
              ]}
            />
            <LegalCard
              icon={Lock}
              title="Financial Information"
              items={[
                'Risk profile and investment goals (voluntary)',
                'Calculator inputs (not stored permanently)',
                'No bank details or transaction passwords collected',
              ]}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="use-of-information" aria-labelledby="use-heading">
        <SectionHeader
          title="3. How We Use Your Information"
          subtitle="Purposes for data processing"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <ul className="list-inside list-disc space-y-3">
            <li>To respond to your inquiries and provide investment guidance</li>
            <li>To schedule and conduct consultation sessions</li>
            <li>To send relevant educational content and market updates (with consent)</li>
            <li>To improve our website, services, and user experience</li>
            <li>To comply with legal obligations and regulatory requirements (SEBI, AMFI)</li>
            <li>To prevent fraud and ensure security</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="sharing" aria-labelledby="sharing-heading">
        <SectionHeader
          title="4. Information Sharing & Disclosure"
          subtitle="When and with whom we share data"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            We do not sell your personal information. We may share information only in these
            circumstances:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Service Providers:</strong> Third parties who help operate our website
              (hosting, analytics, email) under strict confidentiality agreements.
            </li>
            <li>
              <strong>Regulatory Authorities:</strong> SEBI, AMFI, or other regulators when legally
              required.
            </li>
            <li>
              <strong>Legal Requirements:</strong> To comply with court orders, legal processes, or
              protect rights/safety.
            </li>
            <li>
              <strong>Business Transfers:</strong> In case of merger, acquisition, or sale of assets
              (with notice).
            </li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            We do not share your financial details or investment interests with product providers
            for marketing without your explicit consent.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="cookies" aria-labelledby="cookies-heading">
        <SectionHeader title="5. Cookies & Tracking Technologies" subtitle="How we use cookies" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            We use cookies and similar technologies to enhance your experience:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Essential Cookies:</strong> Required for site functionality (session
              management, security).
            </li>
            <li>
              <strong>Analytics Cookies:</strong> Google Analytics to understand site usage
              (anonymized IP).
            </li>
            <li>
              <strong>Preference Cookies:</strong> Remember your theme, language, and calculator
              settings.
            </li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            You can manage cookie preferences via your browser settings. Disabling essential cookies
            may impair site functionality.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="data-security" aria-labelledby="security-heading">
        <SectionHeader title="6. Data Security" subtitle="How we protect your information" />
        <div className="mx-auto max-w-3xl space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <LegalCard
              icon={Shield}
              title="Technical Measures"
              items={[
                'HTTPS encryption for all data transmission',
                'Secure form submissions with CSRF protection',
                'Regular security audits and updates',
                'Access controls and authentication',
              ]}
            />
            <LegalCard
              icon={Lock}
              title="Organizational Measures"
              items={[
                'Limited access to personal data (need-to-know basis)',
                'Staff training on data protection',
                'Data processing agreements with vendors',
                'Incident response procedures',
              ]}
            />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="retention" aria-labelledby="retention-heading">
        <SectionHeader title="7. Data Retention" subtitle="How long we keep your data" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <ul className="list-inside list-disc space-y-3">
            <li>Contact form data: Retained for 2 years after last interaction</li>
            <li>Consultation records: Retained for 5 years per regulatory requirements</li>
            <li>Analytics data: Anonymized after 14 months (Google Analytics default)</li>
            <li>Email communications: Retained for 3 years</li>
            <li>
              You can request deletion of your data at any time (subject to legal obligations)
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="rights" aria-labelledby="rights-heading">
        <SectionHeader title="8. Your Rights" subtitle="Control over your personal information" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Access:</strong> Request a copy of your personal data
            </li>
            <li>
              <strong>Rectification:</strong> Correct inaccurate or incomplete data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion (subject to legal obligations)
            </li>
            <li>
              <strong>Restriction:</strong> Limit processing of your data
            </li>
            <li>
              <strong>Portability:</strong> Receive data in a structured, machine-readable format
            </li>
            <li>
              <strong>Objection:</strong> Object to processing for direct marketing
            </li>
            <li>
              <strong>Withdraw Consent:</strong> Where processing is based on consent
            </li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            To exercise these rights, contact us at{' '}
            <a
              href={`mailto:${BRAND.contact.email}`}
              className="text-brand-600 hover:text-brand-700"
            >
              {BRAND.contact.email}
            </a>
            .
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="third-party" aria-labelledby="third-party-heading">
        <SectionHeader
          title="9. Third-Party Links & Services"
          subtitle="External websites and tools"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Our Site may contain links to third-party websites (AMC websites, regulatory portals,
            financial tools). This Privacy Policy does not apply to those sites. We encourage you to
            review their privacy policies.
          </p>
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            We use Google Analytics for site analytics. Google's privacy policy governs their data
            practices. You can opt out via the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 hover:text-brand-700"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="changes" aria-labelledby="changes-heading">
        <SectionHeader title="10. Changes to This Policy" subtitle="Policy updates" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            We may update this Privacy Policy periodically. Changes will be posted on this page with
            an updated "Last Updated" date. Material changes will be communicated via email or
            prominent site notice.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            We encourage you to review this policy periodically.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" aria-labelledby="contact-heading">
        <SectionHeader title="11. Contact Us" subtitle="Questions about this policy?" />
        <div className="mx-auto max-w-3xl">
          <Card variant="elevated" padding="lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="text-brand-600 hover:text-brand-700"
                >
                  {BRAND.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="text-brand-600 hover:text-brand-700"
                >
                  {BRAND.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
                <span className="text-neutral-700 dark:text-neutral-300">
                  FinRev Solutions, India
                </span>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="disclaimer" aria-labelledby="disclaimer-heading">
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
                <p className="mb-2 font-semibold">Legal Disclaimer</p>
                <p>
                  This Privacy Policy is for informational purposes and does not create contractual
                  rights. FinRev Solutions complies with applicable Indian data protection laws and
                  SEBI/AMFI regulations. For specific legal advice, consult a qualified attorney.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}

function LegalCard({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<any>;
  title: string;
  items: string[];
}) {
  return (
    <Card variant="elevated" padding="lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mb-3 font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
        {title}
      </h3>
      <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-500"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}
