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
import { calculateInflationImpact } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, DollarSign, ArrowDownRight } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface InflationInput {
  currentValue: number;
  years: number;
  inflationRate: number;
}

interface InflationResult {
  futureValue: number;
  purchasingPower: number;
  yearlyBreakdown: Array<{
    year: number;
    nominalValue: number;
    realValue: number;
  }>;
}

export function InflationCalculator() {
  const [input, setInput] = useState<InflationInput>({
    currentValue: 100000,
    years: 10,
    inflationRate: 6,
  });
  const [result, setResult] = useState<InflationResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof InflationInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: InflationInput): Partial<Record<keyof InflationInput, string>> => {
    const errs: Partial<Record<keyof InflationInput, string>> = {};
    if (!values.currentValue || values.currentValue < 1000) {
      errs.currentValue = 'Current value must be at least ₹1,000';
    }
    if (!values.years || values.years < 1 || values.years > 50) {
      errs.years = 'Time period must be between 1 and 50 years';
    }
    if (!values.inflationRate || values.inflationRate < 1 || values.inflationRate > 20) {
      errs.inflationRate = 'Inflation rate must be between 1% and 20%';
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
      const res = calculateInflationImpact(input.currentValue, input.years, input.inflationRate);
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({ currentValue: 100000, years: 10, inflationRate: 6 });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof InflationInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInput((prev) => ({ ...prev, [key]: numValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-medium text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
          Planning
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Inflation Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Calculate future value adjusted for inflation and purchasing power erosion
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-3">
            <NumberInput
              label="Current Value (₹)"
              name="currentValue"
              value={input.currentValue}
              onChange={(v) => handleChange('currentValue', v)}
              min={1000}
              max={1000000000}
              step={1000}
              placeholder="100000"
              prefix="₹"
              error={errors.currentValue}
              required
            />
            <NumberInput
              label="Time Period (Years)"
              name="years"
              value={input.years}
              onChange={(v) => handleChange('years', v)}
              min={1}
              max={50}
              step={1}
              placeholder="10"
              suffix="yrs"
              error={errors.years}
              required
            />
            <NumberInput
              label="Annual Inflation Rate (%)"
              name="inflationRate"
              value={input.inflationRate}
              onChange={(v) => handleChange('inflationRate', v)}
              min={1}
              max={20}
              step={0.5}
              placeholder="6"
              suffix="%"
              error={errors.inflationRate}
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
              columns={3}
              items={[
                {
                  label: 'Current Value',
                  value: input.currentValue,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Future Nominal Value',
                  value: result.futureValue,
                  prefix: '₹',
                  type: 'negative',
                  icon: <ArrowDownRight className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Purchasing Power',
                  value: `${result.purchasingPower.toFixed(1)}%`,
                  suffix: '',
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
              headers={['Year', 'Nominal Value (₹)', 'Real Value (₹)']}
              rows={result.yearlyBreakdown.map((row) => [
                row.year,
                formatNumber(row.nominalValue),
                formatNumber(row.realValue),
              ])}
            />
          </div>

          <ChartPlaceholder
            title="Purchasing Power Erosion"
            description="Chart visualization would show purchasing power declining over time due to inflation"
          />

          <DisclaimerBox>
            <p className="mb-2 font-semibold">Important Disclaimer</p>
            <p className="mb-2">{DISCLAIMERS.calculator}</p>
            <p>{DISCLAIMERS.advisory}</p>
            <p className="mt-2">
              Inflation reduces the purchasing power of money over time. This calculator helps you
              understand how much more money you'll need in the future to buy the same goods and
              services.
            </p>
          </DisclaimerBox>
        </>
      )}
    </div>
  );
}
