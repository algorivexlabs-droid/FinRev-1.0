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
import { calculateSWPReturns } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, ArrowDownRight } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface SWPInput {
  initialInvestment: number;
  annualReturnRate: number;
  monthlyWithdrawal: number;
  years: number;
}

interface SWPResult {
  finalValue: number;
  totalWithdrawn: number;
  totalReturns: number;
  yearlyBreakdown: Array<{
    year: number;
    openingValue: number;
    withdrawn: number;
    returns: number;
    closingValue: number;
  }>;
  depleted: boolean;
  depletedAtMonth?: number;
}

export function SWPCalculator() {
  const [input, setInput] = useState<SWPInput>({
    initialInvestment: 10000000,
    annualReturnRate: 10,
    monthlyWithdrawal: 50000,
    years: 20,
  });
  const [result, setResult] = useState<SWPResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof SWPInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: SWPInput): Partial<Record<keyof SWPInput, string>> => {
    const errs: Partial<Record<keyof SWPInput, string>> = {};
    if (!values.initialInvestment || values.initialInvestment < 100000) {
      errs.initialInvestment = 'Minimum investment is ₹1,00,000';
    }
    if (!values.annualReturnRate || values.annualReturnRate < 1 || values.annualReturnRate > 30) {
      errs.annualReturnRate = 'Expected return must be between 1% and 30%';
    }
    if (!values.monthlyWithdrawal || values.monthlyWithdrawal < 1000) {
      errs.monthlyWithdrawal = 'Minimum withdrawal is ₹1,000';
    }
    if (!values.years || values.years < 1 || values.years > 50) {
      errs.years = 'Withdrawal period must be between 1 and 50 years';
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
      const res = calculateSWPReturns(
        input.initialInvestment,
        input.annualReturnRate,
        input.monthlyWithdrawal,
        input.years
      );
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({
      initialInvestment: 10000000,
      annualReturnRate: 10,
      monthlyWithdrawal: 50000,
      years: 20,
    });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof SWPInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInput((prev) => ({ ...prev, [key]: numValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-medium text-amber-700 dark:bg-amber-900/30 dark:text-amber-300">
          Retirement
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          SWP Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Calculate Systematic Withdrawal Plan for regular income
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <NumberInput
              label="Initial Investment (₹)"
              name="initialInvestment"
              value={input.initialInvestment}
              onChange={(v) => handleChange('initialInvestment', v)}
              min={100000}
              max={1000000000}
              step={10000}
              placeholder="10000000"
              prefix="₹"
              helpText="Minimum ₹1,00,000"
              error={errors.initialInvestment}
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
              placeholder="10"
              suffix="%"
              helpText="Conservative estimate for withdrawal phase"
              error={errors.annualReturnRate}
              required
            />
            <NumberInput
              label="Monthly Withdrawal (₹)"
              name="monthlyWithdrawal"
              value={input.monthlyWithdrawal}
              onChange={(v) => handleChange('monthlyWithdrawal', v)}
              min={1000}
              max={10000000}
              step={1000}
              placeholder="50000"
              prefix="₹"
              helpText="Amount you want to withdraw monthly"
              error={errors.monthlyWithdrawal}
              required
            />
            <NumberInput
              label="Withdrawal Period (Years)"
              name="years"
              value={input.years}
              onChange={(v) => handleChange('years', v)}
              min={1}
              max={50}
              step={1}
              placeholder="20"
              suffix="yrs"
              helpText="How long you need the income"
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
              columns={4}
              items={[
                {
                  label: 'Initial Investment',
                  value: input.initialInvestment,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Total Withdrawn',
                  value: result.totalWithdrawn,
                  prefix: '₹',
                  type: 'negative',
                  icon: <ArrowDownRight className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Total Returns',
                  value: result.totalReturns,
                  prefix: '₹',
                  type: 'positive',
                  icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Final Corpus',
                  value: result.finalValue,
                  prefix: '₹',
                  type: result.depleted ? 'negative' : 'highlight',
                  icon: <Target className="h-5 w-5" aria-hidden="true" />,
                },
              ]}
            />
          </div>

          {result.depleted && (
            <div className="animate-fade-in stagger-1 mb-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <p className="font-medium text-red-700 dark:text-red-300">
                ⚠ Corpus depleted at month {result.depletedAtMonth}. Consider reducing withdrawal
                amount or increasing initial investment.
              </p>
            </div>
          )}

          <div className="animate-fade-in stagger-1">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Yearly Breakdown
            </h2>
            <YearlyBreakdownTable
              headers={[
                'Year',
                'Opening Value (₹)',
                'Withdrawn (₹)',
                'Returns (₹)',
                'Closing Value (₹)',
              ]}
              rows={result.yearlyBreakdown.map((row) => [
                row.year,
                formatNumber(row.openingValue),
                formatNumber(row.withdrawn),
                formatNumber(row.returns),
                formatNumber(row.closingValue),
              ])}
            />
          </div>

          <ChartPlaceholder
            title="Corpus Depletion Projection"
            description="Chart visualization would show corpus value over time with withdrawals"
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
