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
import { calculateMFvsFD } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, Scale, Banknote, AlertTriangle } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface MFvsFDInput {
  investmentAmount: number;
  years: number;
  mfReturnRate: number;
  fdReturnRate: number;
  mfExpenseRatio: number;
  taxBracket: number;
}

interface MFvsFDResult {
  mfFinalValue: number;
  fdFinalValue: number;
  mfPostTaxValue: number;
  fdPostTaxValue: number;
  difference: number;
  yearlyBreakdown: Array<{
    year: number;
    mfValue: number;
    fdValue: number;
    mfPostTax: number;
    fdPostTax: number;
  }>;
}

export function MFvsFDCalculator() {
  const [input, setInput] = useState<MFvsFDInput>({
    investmentAmount: 1000000,
    years: 10,
    mfReturnRate: 12,
    fdReturnRate: 7,
    mfExpenseRatio: 1.5,
    taxBracket: 30,
  });
  const [result, setResult] = useState<MFvsFDResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof MFvsFDInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: MFvsFDInput): Partial<Record<keyof MFvsFDInput, string>> => {
    const errs: Partial<Record<keyof MFvsFDInput, string>> = {};
    if (!values.investmentAmount || values.investmentAmount < 10000) {
      errs.investmentAmount = 'Investment amount must be at least ₹10,000';
    }
    if (!values.years || values.years < 1 || values.years > 30) {
      errs.years = 'Investment period must be between 1 and 30 years';
    }
    if (!values.mfReturnRate || values.mfReturnRate < 1 || values.mfReturnRate > 30) {
      errs.mfReturnRate = 'MF return must be between 1% and 30%';
    }
    if (!values.fdReturnRate || values.fdReturnRate < 1 || values.fdReturnRate > 15) {
      errs.fdReturnRate = 'FD return must be between 1% and 15%';
    }
    if (values.mfExpenseRatio < 0 || values.mfExpenseRatio > 5) {
      errs.mfExpenseRatio = 'Expense ratio must be between 0% and 5%';
    }
    if (!values.taxBracket || values.taxBracket < 0 || values.taxBracket > 45) {
      errs.taxBracket = 'Tax bracket must be between 0% and 45%';
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
      const res = calculateMFvsFD(
        input.investmentAmount,
        input.years,
        input.mfReturnRate,
        input.fdReturnRate,
        input.mfExpenseRatio,
        input.taxBracket
      );
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({
      investmentAmount: 1000000,
      years: 10,
      mfReturnRate: 12,
      fdReturnRate: 7,
      mfExpenseRatio: 1.5,
      taxBracket: 30,
    });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof MFvsFDInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInput((prev) => ({ ...prev, [key]: numValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
          Comparison
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Mutual Fund vs FD Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Compare mutual fund returns vs fixed deposit returns post-tax
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NumberInput
              label="Investment Amount (₹)"
              name="investmentAmount"
              value={input.investmentAmount}
              onChange={(v) => handleChange('investmentAmount', v)}
              min={10000}
              max={100000000}
              step={10000}
              placeholder="1000000"
              prefix="₹"
              error={errors.investmentAmount}
              required
            />
            <NumberInput
              label="Investment Period (Years)"
              name="years"
              value={input.years}
              onChange={(v) => handleChange('years', v)}
              min={1}
              max={30}
              step={1}
              placeholder="10"
              suffix="yrs"
              error={errors.years}
              required
            />
            <NumberInput
              label="MF Expected Return (%)"
              name="mfReturnRate"
              value={input.mfReturnRate}
              onChange={(v) => handleChange('mfReturnRate', v)}
              min={1}
              max={30}
              step={0.5}
              placeholder="12"
              suffix="%"
              error={errors.mfReturnRate}
              required
            />
            <NumberInput
              label="FD Interest Rate (%)"
              name="fdReturnRate"
              value={input.fdReturnRate}
              onChange={(v) => handleChange('fdReturnRate', v)}
              min={1}
              max={15}
              step={0.5}
              placeholder="7"
              suffix="%"
              error={errors.fdReturnRate}
              required
            />
            <NumberInput
              label="MF Expense Ratio (%)"
              name="mfExpenseRatio"
              value={input.mfExpenseRatio}
              onChange={(v) => handleChange('mfExpenseRatio', v)}
              min={0}
              max={5}
              step={0.1}
              placeholder="1.5"
              suffix="%"
              error={errors.mfExpenseRatio}
              required
            />
            <NumberInput
              label="Your Tax Bracket (%)"
              name="taxBracket"
              value={input.taxBracket}
              onChange={(v) => handleChange('taxBracket', v)}
              min={0}
              max={45}
              step={5}
              placeholder="30"
              suffix="%"
              error={errors.taxBracket}
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
              columns={4}
              items={[
                {
                  label: 'MF Final Value',
                  value: result.mfFinalValue,
                  prefix: '₹',
                  type: 'highlight',
                  icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'FD Final Value',
                  value: result.fdFinalValue,
                  prefix: '₹',
                  icon: <Banknote className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'MF Post-Tax',
                  value: result.mfPostTaxValue,
                  prefix: '₹',
                  type: 'positive',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'FD Post-Tax',
                  value: result.fdPostTaxValue,
                  prefix: '₹',
                  icon: <Banknote className="h-5 w-5" aria-hidden="true" />,
                },
              ]}
            />
          </div>

          <div className="animate-fade-in stagger-1 mb-6 rounded-lg border border-brand-200 bg-brand-50 p-4 dark:border-brand-800 dark:bg-brand-900/20">
            <p className="font-medium text-brand-700 dark:text-brand-300">
              <strong>Difference:</strong> Mutual Funds are{' '}
              {result.difference >= 0 ? 'better by' : 'worse by'}{' '}
              <strong>{formatNumber(Math.abs(result.difference))}</strong> over {input.years} years
            </p>
          </div>

          <div className="animate-fade-in stagger-1">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Yearly Comparison
            </h2>
            <YearlyBreakdownTable
              headers={[
                'Year',
                'MF Value (₹)',
                'FD Value (₹)',
                'MF Post-Tax (₹)',
                'FD Post-Tax (₹)',
              ]}
              rows={result.yearlyBreakdown.map((row) => [
                row.year,
                formatNumber(row.mfValue),
                formatNumber(row.fdValue),
                formatNumber(row.mfPostTax),
                formatNumber(row.fdPostTax),
              ])}
            />
          </div>

          <ChartPlaceholder
            title="MF vs FD Growth Comparison"
            description="Chart visualization would show mutual fund and FD growth over time"
          />

          <DisclaimerBox>
            <p className="mb-2 font-semibold">Important Disclaimer</p>
            <p className="mb-2">{DISCLAIMERS.calculator}</p>
            <p className="mb-2">{DISCLAIMERS.noGuarantee}</p>
            <p className="mb-2">{DISCLAIMERS.advisory}</p>
            <p className="mt-2">
              <strong>Note:</strong> Mutual fund returns are subject to market risks. FD returns are
              guaranteed. Post-tax calculations assume interest income is taxed at slab rate. MF
              long-term capital gains (over 1 year) are taxed at 10% above ₹1 lakh. This is a
              simplified comparison.
            </p>
          </DisclaimerBox>
        </>
      )}
    </div>
  );
}
