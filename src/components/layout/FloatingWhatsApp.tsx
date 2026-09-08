'use client';

import * as React from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';
import { BRAND } from '@/lib/utils/constants';

export function FloatingWhatsApp() {
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setExpanded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(BRAND.social.whatsapp, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {expanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="fixed bottom-6 right-6 z-[var(--z-fixed)] flex items-center gap-2"
        >
          <div className="hidden sm:block">
            <button
              onClick={handleClick}
              className="flex items-center gap-2 rounded-xl border border-neutral-200 bg-white/95 px-3.5 py-2.5 text-xs font-bold text-brand-600 shadow-lg backdrop-blur-md transition-all hover:bg-neutral-50 dark:border-brand-800 dark:bg-brand-900 dark:text-neutral-50"
            >
              <span>Consult Advisor on WhatsApp</span>
            </button>
          </div>

          <button
            onClick={handleClick}
            className={cn(
              'relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl',
              'transition-all duration-200 hover:scale-105 active:scale-95',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2'
            )}
            aria-label="Chat on WhatsApp with FinRev Advisor"
          >
            <MessageSquare className="h-7 w-7" aria-hidden="true" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-500 text-[10px] font-black text-brand-900 shadow-sm">
              1
            </span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setExpanded(false);
            }}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-neutral-200 text-neutral-600 hover:bg-neutral-300 dark:bg-brand-800 dark:text-neutral-300"
            aria-label="Close WhatsApp prompt"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
