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
import { calculateSTPReturns } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, ArrowUpRight, Repeat } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface STPInput {
  sourceAmount: number;
  sourceReturnRate: number;
  targetReturnRate: number;
  monthlyTransfer: number;
  years: number;
}

interface STPResult {
  sourceFinalValue: number;
  targetFinalValue: number;
  totalTransferred: number;
  combinedValue: number;
  yearlyBreakdown: Array<{
    year: number;
    sourceValue: number;
    targetValue: number;
    totalValue: number;
  }>;
}

export function STPCalculator() {
  const [input, setInput] = useState<STPInput>({
    sourceAmount: 1000000,
    sourceReturnRate: 6,
    targetReturnRate: 12,
    monthlyTransfer: 10000,
    years: 5,
  });
  const [result, setResult] = useState<STPResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof STPInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: STPInput): Partial<Record<keyof STPInput, string>> => {
    const errs: Partial<Record<keyof STPInput, string>> = {};
    if (!values.sourceAmount || values.sourceAmount < 10000) {
      errs.sourceAmount = 'Minimum source amount is ₹10,000';
    }
    if (!values.sourceReturnRate || values.sourceReturnRate < 1 || values.sourceReturnRate > 20) {
      errs.sourceReturnRate = 'Source return must be between 1% and 20%';
    }
    if (!values.targetReturnRate || values.targetReturnRate < 1 || values.targetReturnRate > 30) {
      errs.targetReturnRate = 'Target return must be between 1% and 30%';
    }
    if (!values.monthlyTransfer || values.monthlyTransfer < 1000) {
      errs.monthlyTransfer = 'Minimum transfer is ₹1,000';
    }
    if (!values.years || values.years < 1 || values.years > 30) {
      errs.years = 'Transfer period must be between 1 and 30 years';
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
      const res = calculateSTPReturns(
        input.sourceAmount,
        input.sourceReturnRate,
        input.targetReturnRate,
        input.monthlyTransfer,
        input.years
      );
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({
      sourceAmount: 1000000,
      sourceReturnRate: 6,
      targetReturnRate: 12,
      monthlyTransfer: 10000,
      years: 5,
    });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof STPInput, value: string | number) => {
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
          STP Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Calculate Systematic Transfer Plan from debt to equity funds
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NumberInput
              label="Source Amount (₹)"
              name="sourceAmount"
              value={input.sourceAmount}
              onChange={(v) => handleChange('sourceAmount', v)}
              min={10000}
              max={100000000}
              step={10000}
              placeholder="1000000"
              prefix="₹"
              helpText="Amount in source fund (e.g., debt fund)"
              error={errors.sourceAmount}
              required
            />
            <NumberInput
              label="Source Fund Return (%)"
              name="sourceReturnRate"
              value={input.sourceReturnRate}
              onChange={(v) => handleChange('sourceReturnRate', v)}
              min={1}
              max={20}
              step={0.5}
              placeholder="6"
              suffix="%"
              helpText="Debt fund returns: 5-8%"
              error={errors.sourceReturnRate}
              required
            />
            <NumberInput
              label="Target Fund Return (%)"
              name="targetReturnRate"
              value={input.targetReturnRate}
              onChange={(v) => handleChange('targetReturnRate', v)}
              min={1}
              max={30}
              step={0.5}
              placeholder="12"
              suffix="%"
              helpText="Equity fund returns: 10-15%"
              error={errors.targetReturnRate}
              required
            />
            <NumberInput
              label="Monthly Transfer (₹)"
              name="monthlyTransfer"
              value={input.monthlyTransfer}
              onChange={(v) => handleChange('monthlyTransfer', v)}
              min={1000}
              max={1000000}
              step={1000}
              placeholder="10000"
              prefix="₹"
              helpText="Amount transferred each month"
              error={errors.monthlyTransfer}
              required
            />
            <NumberInput
              label="Transfer Period (Years)"
              name="years"
              value={input.years}
              onChange={(v) => handleChange('years', v)}
              min={1}
              max={30}
              step={1}
              placeholder="5"
              suffix="yrs"
              helpText="Duration of systematic transfer"
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
                  label: 'Source Final Value',
                  value: result.sourceFinalValue,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Target Final Value',
                  value: result.targetFinalValue,
                  prefix: '₹',
                  type: 'positive',
                  icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Total Transferred',
                  value: result.totalTransferred,
                  prefix: '₹',
                  type: 'highlight',
                  icon: <Repeat className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Combined Value',
                  value: result.combinedValue,
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
              headers={['Year', 'Source Value (₹)', 'Target Value (₹)', 'Total Value (₹)']}
              rows={result.yearlyBreakdown.map((row) => [
                row.year,
                formatNumber(row.sourceValue),
                formatNumber(row.targetValue),
                formatNumber(row.totalValue),
              ])}
            />
          </div>

          <ChartPlaceholder
            title="STP Growth Projection"
            description="Chart visualization would show source and target fund values over time"
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
