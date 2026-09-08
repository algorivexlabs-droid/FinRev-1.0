'use client';

import * as React from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CALCULATORS } from '@/lib/utils/constants';
import {
  SIPCalculator,
  LumpsumCalculator,
  StepUpSIPCalculator,
  SWPCalculator,
  STPCalculator,
  XIRRCalculator,
  RetirementCalculator,
  ChildEducationCalculator,
  MarriageGoalCalculator,
  FinancialGoalCalculator,
  InflationCalculator,
  MFvsFDCalculator,
} from '@/components/calculator';

const calculatorComponents: Record<string, React.FC> = {
  sip: SIPCalculator,
  lumpsum: LumpsumCalculator,
  'step-up-sip': StepUpSIPCalculator,
  swp: SWPCalculator,
  stp: STPCalculator,
  xirr: XIRRCalculator,
  retirement: RetirementCalculator,
  'child-education': ChildEducationCalculator,
  'marriage-goal': MarriageGoalCalculator,
  'financial-goal': FinancialGoalCalculator,
  inflation: InflationCalculator,
  'mf-vs-fd': MFvsFDCalculator,
};

interface CalculatorPageClientProps {
  calculator: (typeof CALCULATORS)[number];
}

export function CalculatorPageClient({ calculator }: CalculatorPageClientProps) {
  const Component = calculatorComponents[calculator.slug];

  if (!Component) {
    return (
      <div className="container-custom py-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
            Calculator
          </span>
          <h1 className="mb-4 font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            {calculator.name}
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            {calculator.description}
          </p>
          <Card variant="bordered" padding="xl" className="text-left">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Coming Soon
            </h2>
            <p className="mb-6 text-neutral-600 dark:text-neutral-400">
              This calculator is under development. Please check back later or{' '}
              <a href="/contact" className="text-brand-600 underline hover:text-brand-700">
                contact us
              </a>{' '}
              for personalized calculations.
            </p>
            <Button variant="primary" asChild>
              <a href="/calculators">← Back to Calculators</a>
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-8">
      <div className="mb-8">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          {calculator.category}
        </span>
        <h1 className="font-display text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
          {calculator.name}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
          {calculator.description}
        </p>
      </div>
      <Component />
    </div>
  );
}
