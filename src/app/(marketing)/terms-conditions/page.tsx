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
  Scale,
  Gavel,
  AlertCircle,
} from 'lucide-react';

export const metadata: Metadata = generateMetadata({
  title: 'Terms & Conditions',
  description:
    'FinRev Solutions Terms & Conditions - Website usage, informational content, intellectual property, and user responsibilities.',
  path: '/terms-conditions',
});

const lastUpdated = 'January 2024';

export default function TermsConditionsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-b from-brand-50 to-white py-20 dark:from-neutral-950 dark:to-neutral-900 lg:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
              Legal
            </span>
            <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
              Terms & <span className="text-brand-600 dark:text-brand-400">Conditions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
              Terms governing your use of finrevsolutions.com and our services.
            </p>
            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-500">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper id="acceptance" aria-labelledby="acceptance-heading">
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <h2 className="mb-4 font-display text-2xl font-bold text-neutral-900 dark:text-neutral-50">
            1. Acceptance of Terms
          </h2>
          <p className="text-neutral-700 dark:text-neutral-300">
            By accessing and using finrevsolutions.com ("the Site"), you acknowledge that you have
            read, understood, and agree to be bound by these Terms & Conditions ("Terms"), our{' '}
            <a href="/privacy-policy" className="text-brand-600 hover:text-brand-700">
              Privacy Policy
            </a>
            , and{' '}
            <a href="/disclaimer" className="text-brand-600 hover:text-brand-700">
              Disclaimer
            </a>
            . If you do not agree, please do not use the Site.
          </p>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            We reserve the right to modify these Terms at any time. Changes will be effective
            immediately upon posting. Your continued use constitutes acceptance of revised Terms.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        variant="alternate"
        id="informational-nature"
        aria-labelledby="informational-heading"
      >
        <SectionHeader
          title="2. Informational Nature of Content"
          subtitle="Educational purpose only"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            All content on the Site — including articles, calculators, market updates, fund
            information, and tools — is for{' '}
            <strong>educational and informational purposes only</strong>.
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              Content does not constitute personalized investment advice, financial planning, tax
              advice, or legal advice.
            </li>
            <li>
              Calculator results are mathematical projections based on assumed inputs — not
              guaranteed outcomes.
            </li>
            <li>
              Fund data shown is sample/illustrative and may not reflect current NAVs, returns, or
              AUM.
            </li>
            <li>
              Market updates are editorial content based on publicly available information — not
              live trading data.
            </li>
            <li>
              Past performance mentioned anywhere on the Site does not guarantee future results.
            </li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Always consult a SEBI-registered investment advisor, tax professional, or legal counsel
            before making financial decisions.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="no-advisory" aria-labelledby="no-advisory-heading">
        <SectionHeader title="3. No Advisory Relationship" subtitle="No fiduciary duty created" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Use of the Site, calculators, or contact forms does <strong>not</strong> create an
            advisory relationship, fiduciary duty, or client-advisor relationship between you and
            FinRev Solutions.
          </p>
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Personalized advisory services require a separate written engagement agreement, KYC
            completion, and risk profiling as per SEBI regulations.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            Free tools and content are provided as a public service to promote financial literacy.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="intellectual-property" aria-labelledby="ip-heading">
        <SectionHeader
          title="4. Intellectual Property"
          subtitle="Content ownership and usage rights"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            All content on the Site — text, graphics, logos, calculators, code, design, and
            arrangement — is the property of FinRev Solutions or its licensors and protected by
            Indian and international copyright laws.
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              You may view, download, and print content for personal, non-commercial use only.
            </li>
            <li>
              You may not reproduce, distribute, modify, create derivative works, or publicly
              display content without written permission.
            </li>
            <li>
              "FinRev Solutions", "FinRev", the logo, and tagline "Secure Today. Stronger Tomorrow."
              are trademarks of FinRev Solutions.
            </li>
            <li>Calculator algorithms and proprietary methodologies are trade secrets.</li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Requests for permission to use content should be directed to{' '}
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

      <SectionWrapper id="user-responsibilities" aria-labelledby="user-responsibilities-heading">
        <SectionHeader
          title="5. User Responsibilities"
          subtitle="Your obligations when using the Site"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            You agree to use the Site lawfully and responsibly. You shall not:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>Use the Site for any unlawful purpose or in violation of applicable laws</li>
            <li>Attempt to gain unauthorized access to any part of the Site or its systems</li>
            <li>Scrape, crawl, or extract data systematically without permission</li>
            <li>Transmit viruses, malware, or harmful code</li>
            <li>Impersonate any person or entity, or misrepresent your affiliation</li>
            <li>Use calculators or tools for commercial purposes without authorization</li>
            <li>Interfere with other users' access or enjoyment of the Site</li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            We reserve the right to restrict access for violations of these Terms.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="calculators" aria-labelledby="calculators-heading">
        <SectionHeader
          title="6. Calculator & Tool Usage"
          subtitle="Specific terms for financial tools"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Financial calculators on the Site are provided as educational tools with the following
            conditions:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>Results are based on mathematical formulas and user-provided assumptions</li>
            <li>Default return rates are illustrative — not recommendations or forecasts</li>
            <li>Tax calculations are simplified — consult a tax advisor for actual liability</li>
            <li>Inflation, expense ratios, and market conditions are not fully modeled</li>
            <li>No guarantee of accuracy, completeness, or suitability for your situation</li>
            <li>You are solely responsible for decisions based on calculator outputs</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="fund-data" aria-labelledby="fund-data-heading">
        <SectionHeader
          title="7. Fund Data & Market Information"
          subtitle="Data sources and limitations"
        />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Fund categories, sample fund data, and market updates are compiled from publicly
            available sources and internal research.
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Sample Data:</strong> Fund examples are clearly labeled as illustrative — not
              real-time or current
            </li>
            <li>
              <strong>No Live Data:</strong> We do not provide live NAVs, real-time prices, or
              trading signals
            </li>
            <li>
              <strong>Sources:</strong> AMFI, SEBI, AMC websites, financial news portals, public
              disclosures
            </li>
            <li>
              <strong>Timeliness:</strong> Data may be delayed; always verify with official sources
              before investing
            </li>
            <li>
              <strong>No Endorsement:</strong> Inclusion of any fund or AMC does not imply
              recommendation
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper
        variant="alternate"
        id="external-links"
        aria-labelledby="external-links-heading"
      >
        <SectionHeader title="8. External Links" subtitle="Third-party websites" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            The Site may contain links to third-party websites (AMC portals, SEBI, AMFI, stock
            exchanges, financial tools). These links are provided for convenience only.
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>We do not control, endorse, or assume responsibility for third-party content</li>
            <li>Linked sites have their own terms and privacy policies</li>
            <li>We are not liable for any loss or damage from use of external links</li>
            <li>
              Exercise caution when providing personal/financial information on external sites
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="limitation" aria-labelledby="limitation-heading">
        <SectionHeader title="9. Limitation of Liability" subtitle="Legal protections" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            To the fullest extent permitted by applicable law:
          </p>
          <ul className="list-inside list-disc space-y-3">
            <li>The Site is provided "as is" and "as available" without warranties of any kind</li>
            <li>We do not warrant uninterrupted, error-free, or secure access</li>
            <li>
              We are not liable for any direct, indirect, incidental, consequential, or punitive
              damages arising from your use of the Site
            </li>
            <li>
              Total liability shall not exceed the amount you paid for services (if any), or ₹10,000
            </li>
            <li>
              This limitation applies regardless of legal theory (contract, tort, negligence, etc.)
            </li>
          </ul>
          <p className="mt-4 text-neutral-700 dark:text-neutral-300">
            Some jurisdictions do not allow certain limitations; the above may not apply to you
            fully.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper
        variant="alternate"
        id="indemnification"
        aria-labelledby="indemnification-heading"
      >
        <SectionHeader title="10. Indemnification" subtitle="Your agreement to protect us" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="text-neutral-700 dark:text-neutral-300">
            You agree to indemnify, defend, and hold harmless FinRev Solutions, its founder,
            officers, and agents from any claims, losses, liabilities, damages, costs, and expenses
            (including legal fees) arising from:
          </p>
          <ul className="mt-4 list-inside list-disc space-y-3">
            <li>Your use of the Site in violation of these Terms</li>
            <li>Your investment decisions based on Site content</li>
            <li>Your violation of any law or third-party rights</li>
            <li>Unauthorized use of your account or information</li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="governing-law" aria-labelledby="governing-heading">
        <SectionHeader title="11. Governing Law & Dispute Resolution" subtitle="Legal framework" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <ul className="list-inside list-disc space-y-3">
            <li>
              <strong>Governing Law:</strong> Laws of India
            </li>
            <li>
              <strong>Jurisdiction:</strong> Courts of [City/State where FinRev is registered] shall
              have exclusive jurisdiction
            </li>
            <li>
              <strong>Dispute Resolution:</strong> Good faith negotiation → Mediation (per
              Arbitration and Conciliation Act, 1996) → Arbitration
            </li>
            <li>
              <strong>Language:</strong> English
            </li>
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper id="termination" aria-labelledby="termination-heading">
        <SectionHeader title="12. Termination" subtitle="End of access" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            We may suspend or terminate your access to the Site at any time, with or without cause,
            including for breach of these Terms.
          </p>
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            Upon termination, your right to use the Site ceases immediately. Provisions that should
            survive (IP, liability, indemnification, governing law) will remain in effect.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="alternate" id="severability" aria-labelledby="severability-heading">
        <SectionHeader title="13. Severability & Waiver" subtitle="Legal enforceability" />
        <div className="prose prose-lg dark:prose-invert mx-auto max-w-3xl">
          <p className="mb-4 text-neutral-700 dark:text-neutral-300">
            If any provision is found unenforceable, the remaining provisions continue in full
            force. Failure to enforce any right does not constitute a waiver of that or any other
            right.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" aria-labelledby="contact-heading">
        <SectionHeader title="14. Contact Information" subtitle="Questions about these Terms?" />
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
                  These Terms & Conditions are for informational purposes and do not constitute
                  legal advice. FinRev Solutions is a SEBI-registered Mutual Fund Distributor
                  (ARN-195797). For specific legal matters, consult a qualified attorney.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </SectionWrapper>
    </>
  );
}
