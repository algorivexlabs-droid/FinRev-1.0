import Link from 'next/link';
import { Phone, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { NAVIGATION, BRAND, DISCLAIMERS } from '@/lib/utils/constants';
import { Badge } from '@/components/ui/Badge';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-900 bg-brand-950 text-neutral-100" role="contentinfo">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 md:col-span-2">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-2.5"
              aria-label={`${BRAND.name} - Home`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold-500 font-bold text-brand-900">
                F
              </div>
              <span className="font-display text-2xl font-bold tracking-tight text-white">
                FinRev <span className="text-teal-400">Solutions</span>
              </span>
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-neutral-300">
              {BRAND.tagline} — Professional wealth management & advisory solutions tailored for
              long-term goal planning.
            </p>

            <div className="mb-6 space-y-2 rounded-xl border border-brand-800 bg-brand-950/60 p-4">
              <div className="flex items-center gap-2">
                <Badge variant="gold" size="sm">
                  <ShieldCheck className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
                  {BRAND.founder.arn}
                </Badge>
                <span className="text-xs font-semibold text-neutral-300">AMFI Registered</span>
              </div>
              <p className="text-xs text-neutral-300">
                <strong className="text-white">Founder:</strong> {BRAND.founder.name} (
                {BRAND.founder.designation})
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${BRAND.contact.phone}`}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-gold-400"
              >
                <Phone className="h-4 w-4 text-teal-400" aria-hidden="true" />
                {BRAND.contact.phone}
              </a>
              <a
                href={`mailto:${BRAND.contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4 text-teal-400" aria-hidden="true" />
                {BRAND.contact.email}
              </a>
            </div>
          </div>

          <nav aria-label="Company links">
            <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-wider text-gold-400">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {NAVIGATION.footer.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Resources">
            <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-wider text-gold-400">
              Resources
            </h3>
            <ul className="space-y-3" role="list">
              {NAVIGATION.footer.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h3 className="mb-4 font-display text-xs font-bold uppercase tracking-wider text-gold-400">
              Legal & Risk
            </h3>
            <ul className="space-y-3" role="list">
              {NAVIGATION.footer.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-300 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-brand-800 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-neutral-400">
              © {currentYear} {BRAND.name}. All Rights Reserved. Mutual Fund investments are
              subject to market risks.
            </p>
            <p className="max-w-xl text-xs text-neutral-400">{DISCLAIMERS.general}</p>
            <a
              href="#main"
              className="inline-flex items-center gap-1 text-xs text-neutral-400 transition-colors hover:text-gold-400"
            >
              Back to top
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
