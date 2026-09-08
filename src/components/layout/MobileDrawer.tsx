'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, Phone, MessageSquare, ChevronRight, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import NextLink from 'next/link';
import { NAVIGATION, BRAND } from '@/lib/utils/constants';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="data-[state=open]:animate-fade-in data-[state=closed]:animate-fade-out fixed inset-0 z-[var(--z-modal-backdrop)] bg-brand-950/60 backdrop-blur-sm" />
        <DialogPrimitive.Content
          className={cn(
            'data-[state=open]:animate-slide-in-right data-[state=closed]:animate-slide-out-right fixed inset-y-0 right-0 z-[var(--z-modal)] w-full max-w-xs bg-white shadow-2xl dark:bg-brand-950',
            'flex flex-col'
          )}
        >
          <div className="flex h-16 items-center justify-between border-b border-neutral-200 px-5 dark:border-brand-800">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-900 text-sm font-bold text-gold-500">
                F
              </div>
              <span className="font-display text-base font-bold text-brand-600 dark:text-neutral-50">
                FinRev <span className="text-teal-600 dark:text-teal-400">Solutions</span>
              </span>
            </div>
            <DialogPrimitive.Close
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-neutral-500 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-brand-900"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </DialogPrimitive.Close>
          </div>

          <div className="flex items-center justify-between bg-brand-900 px-5 py-3 text-white">
            <Badge variant="gold" size="sm">
              <ShieldCheck className="mr-1 inline h-3 w-3" />
              {BRAND.founder.arn}
            </Badge>
            <span className="text-[11px] font-medium text-neutral-300">AMFI Registered</span>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4" aria-label="Mobile navigation">
            <ul className="space-y-1" role="list">
              {NAVIGATION.main.map((item) => (
                <li key={item.href}>
                  <NextLink
                    href={item.href}
                    onClick={onClose}
                    className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-semibold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-brand-600 dark:text-neutral-200 dark:hover:bg-brand-900 dark:hover:text-gold-400"
                  >
                    {item.label}
                    <ChevronRight className="h-4 w-4 text-neutral-400" aria-hidden="true" />
                  </NextLink>
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-3 border-t border-neutral-200 pt-6 dark:border-brand-800">
              <a
                href={`tel:${BRAND.contact.phone}`}
                className="flex items-center gap-3 rounded-lg border border-neutral-200 px-4 py-3 text-base font-semibold text-brand-600 transition-colors hover:bg-neutral-50 dark:border-brand-800 dark:text-neutral-200 dark:hover:bg-brand-900"
              >
                <Phone className="h-5 w-5 text-teal-600" aria-hidden="true" />
                Call {BRAND.contact.phone}
              </a>

              <Button variant="whatsapp" className="w-full justify-center gap-2" asChild>
                <a
                  href={BRAND.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                >
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                  WhatsApp Advisor
                </a>
              </Button>

              <Button variant="primary" className="w-full justify-center" asChild>
                <NextLink href="/contact" onClick={onClose}>
                  Talk to an Advisor
                </NextLink>
              </Button>
            </div>
          </nav>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
