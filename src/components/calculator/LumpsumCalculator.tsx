'use client';

import * as React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { formatNumber } from '@/lib/utils/format';
import { NumberInput, CalculatorActions } from '@/components/calculator/CalculatorForm';
import {
  SummaryGrid,
  YearlyBreakdownTable,
  DisclaimerBox,
  ChartPlaceholder,
} from '@/components/calculator/CalculatorResults';
import { calculateLumpsumReturns } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface LumpsumInput {
  principal: number;
  annualReturnRate: number;
  years: number;
}

interface LumpsumResult {
  totalValue: number;
  estimatedReturns: number;
  yearlyBreakdown: Array<{
    year: number;
    value: number;
    returns: number;
  }>;
}

export function LumpsumCalculator() {
  const [input, setInput] = useState<LumpsumInput>({
    principal: 100000,
    annualReturnRate: 12,
    years: 10,
  });
  const [result, setResult] = useState<LumpsumResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof LumpsumInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: LumpsumInput): Partial<Record<keyof LumpsumInput, string>> => {
    const errs: Partial<Record<keyof LumpsumInput, string>> = {};
    if (!values.principal || values.principal < 1000) {
      errs.principal = 'Minimum investment is ₹1,000';
    }
    if (!values.annualReturnRate || values.annualReturnRate < 1 || values.annualReturnRate > 30) {
      errs.annualReturnRate = 'Expected return must be between 1% and 30%';
    }
    if (!values.years || values.years < 1 || values.years > 50) {
      errs.years = 'Investment period must be between 1 and 50 years';
    }
    return errs;
  };

  const handleCalculate = () => {
    const errs = validate(input);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setCalculating(true);
    setTimeout(() => {
      const res = calculateLumpsumReturns(input.principal, input.annualReturnRate, input.years);
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({ principal: 100000, annualReturnRate: 12, years: 10 });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof LumpsumInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInput((prev) => ({ ...prev, [key]: numValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-medium text-brand-700 dark:bg-brand-900/30 dark:text-brand-300">
          Mutual Funds
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Lumpsum Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Calculate the future value of your one-time investment
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <NumberInput
              label="One-time Investment (₹)"
              name="principal"
              value={input.principal}
              onChange={(v) => handleChange('principal', v)}
              min={1000}
              max={100000000}
              step={1000}
              placeholder="100000"
              prefix="₹"
              helpText="Minimum ₹1,000"
              error={errors.principal}
              required
            />
            <NumberInput
              label="Expected Annual Return (%)"
              name="annualReturnRate"
              value={input.annualReturnRate}
              onChange={(v) => handleChange('annualReturnRate', v)}
              min={1}
              max={30}
              step={0.5}
              placeholder="12"
              suffix="%"
              helpText="Typical equity fund returns: 10-15%"
              error={errors.annualReturnRate}
              required
            />
            <NumberInput
              label="Investment Period (Years)"
              name="years"
              value={input.years}
              onChange={(v) => handleChange('years', v)}
              min={1}
              max={50}
              step={1}
              placeholder="10"
              suffix="yrs"
              helpText="Longer periods benefit from compounding"
              error={errors.years}
              required
            />
          </div>

          <CalculatorActions
            onCalculate={handleCalculate}
            onReset={handleReset}
            calculating={calculating}
          />
        </form>
      </Card>

      {result && (
        <>
          <div className="animate-fade-in">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Results
            </h2>
            <SummaryGrid
              items={[
                {
                  label: 'Invested Amount',
                  value: input.principal,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Estimated Returns',
                  value: result.estimatedReturns,
                  prefix: '₹',
                  type: 'positive',
                  icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Total Value',
                  value: result.totalValue,
                  prefix: '₹',
                  type: 'highlight',
                  icon: <Target className="h-5 w-5" aria-hidden="true" />,
                },
              ]}
            />
          </div>

          <div className="animate-fade-in stagger-1">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Yearly Breakdown
            </h2>
            <YearlyBreakdownTable
              headers={['Year', 'Value (₹)', 'Returns (₹)']}
              rows={result.yearlyBreakdown.map((row) => [
                row.year,
                formatNumber(row.value),
                formatNumber(row.returns),
              ])}
            />
          </div>

          <ChartPlaceholder
            title="Investment Growth Projection"
            description="Chart visualization would show principal growth over time"
          />

          <DisclaimerBox>
            <p className="mb-2 font-semibold">Important Disclaimer</p>
            <p className="mb-2">{DISCLAIMERS.calculator}</p>
            <p>{DISCLAIMERS.advisory}</p>
          </DisclaimerBox>
        </>
      )}
    </div>
  );
}
