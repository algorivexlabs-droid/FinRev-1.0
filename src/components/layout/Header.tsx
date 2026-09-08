'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { MobileDrawer } from './MobileDrawer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { NAVIGATION, BRAND } from '@/lib/utils/constants';

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-[var(--z-sticky)] w-full transition-all duration-300',
        scrolled
          ? 'border-b border-neutral-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-brand-800 dark:bg-brand-950/95'
          : 'border-b border-neutral-200/50 bg-white/80 backdrop-blur-sm dark:border-brand-900 dark:bg-brand-950/80'
      )}
    >
      {/* Top Advisory Bar */}
      <div className="hidden bg-brand-900 px-4 py-1.5 text-xs text-neutral-300 sm:block">
        <div className="container-custom flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-semibold text-gold-400">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
              ARN-195797
            </span>
            <span className="text-neutral-500">•</span>
            <span>AMFI Registered Mutual Fund Distributor</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BRAND.contact.phone}`}
              className="flex items-center gap-1 text-neutral-300 transition-colors hover:text-gold-400"
            >
              <Phone className="h-3 w-3" aria-hidden="true" />
              <span>{BRAND.contact.phone}</span>
            </a>
            <span className="text-neutral-500">•</span>
            <span>Founder: {BRAND.founder.name}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label={`${BRAND.name} - Home`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-900 text-gold-500 shadow-sm transition-transform duration-200 group-hover:scale-105">
                <span className="font-display text-xl font-black">F</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold tracking-tight text-brand-600 dark:text-neutral-50">
                  FinRev <span className="text-teal-600 dark:text-teal-400">Solutions</span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  {BRAND.tagline}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-1.5 xl:gap-2">
            {NAVIGATION.main.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200',
                    isActive
                      ? 'bg-neutral-100 text-brand-600 dark:bg-brand-900 dark:text-gold-400'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-brand-600 dark:text-neutral-300 dark:hover:bg-brand-900/50 dark:hover:text-neutral-50'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right Desktop CTA Buttons */}
          <div className="flex items-center gap-2.5">
            <Badge variant="gold" size="sm" className="hidden xl:inline-flex">
              SEBI Registered
            </Badge>

            <Button variant="outline" size="sm" className="hidden gap-2 sm:inline-flex" asChild>
              <a href={`tel:${BRAND.contact.phone}`}>
                <Phone className="h-4 w-4 text-teal-600" aria-hidden="true" />
                <span>Call Us</span>
              </a>
            </Button>

            <Button variant="primary" size="sm" className="hidden gap-2 sm:inline-flex" asChild>
              <Link href="/contact">
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                <span>Talk to Advisor</span>
              </Link>
            </Button>

            {/* Mobile Hamburger Menu */}
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-white text-brand-600 shadow-sm hover:bg-neutral-50 dark:border-brand-800 dark:bg-brand-900 dark:text-neutral-200 lg:hidden"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <MobileDrawer isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <FloatingWhatsApp />
    </header>
  );
}
