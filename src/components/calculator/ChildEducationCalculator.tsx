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
import { calculateGoalPlanner } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, GraduationCap, AlertTriangle } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface GoalInput {
  goalAmount: number;
  years: number;
  annualReturnRate: number;
  currentSavings: number;
  monthlyInvestment: number;
}

interface GoalResult {
  projectedValue: number;
  shortfall: number;
  requiredMonthlyInvestment: number;
  yearlyBreakdown: Array<{
    year: number;
    value: number;
    invested: number;
    returns: number;
  }>;
}

export function ChildEducationCalculator() {
  const [input, setInput] = useState<GoalInput>({
    goalAmount: 5000000,
    years: 15,
    annualReturnRate: 12,
    currentSavings: 100000,
    monthlyInvestment: 15000,
  });
  const [result, setResult] = useState<GoalResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof GoalInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: GoalInput): Partial<Record<keyof GoalInput, string>> => {
    const errs: Partial<Record<keyof GoalInput, string>> = {};
    if (!values.goalAmount || values.goalAmount < 100000) {
      errs.goalAmount = 'Goal amount must be at least ₹1,00,000';
    }
    if (!values.years || values.years < 1 || values.years > 30) {
      errs.years = 'Time horizon must be between 1 and 30 years';
    }
    if (!values.annualReturnRate || values.annualReturnRate < 1 || values.annualReturnRate > 20) {
      errs.annualReturnRate = 'Expected return must be between 1% and 20%';
    }
    if (values.currentSavings < 0) {
      errs.currentSavings = 'Current savings cannot be negative';
    }
    if (!values.monthlyInvestment || values.monthlyInvestment < 0) {
      errs.monthlyInvestment = 'Monthly investment cannot be negative';
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
      const res = calculateGoalPlanner(
        input.goalAmount,
        input.years,
        input.annualReturnRate,
        input.currentSavings,
        input.monthlyInvestment
      );
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({
      goalAmount: 5000000,
      years: 15,
      annualReturnRate: 12,
      currentSavings: 100000,
      monthlyInvestment: 15000,
    });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof GoalInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInput((prev) => ({ ...prev, [key]: numValue }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
          Goals
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Child Education Planner
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Plan for your child's education expenses with systematic investing
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NumberInput
              label="Education Goal Amount (₹)"
              name="goalAmount"
              value={input.goalAmount}
              onChange={(v) => handleChange('goalAmount', v)}
              min={100000}
              max={1000000000}
              step={50000}
              placeholder="5000000"
              prefix="₹"
              error={errors.goalAmount}
              required
            />
            <NumberInput
              label="Years Until Education"
              name="years"
              value={input.years}
              onChange={(v) => handleChange('years', v)}
              min={1}
              max={30}
              step={1}
              placeholder="15"
              suffix="yrs"
              error={errors.years}
              required
            />
            <NumberInput
              label="Expected Annual Return (%)"
              name="annualReturnRate"
              value={input.annualReturnRate}
              onChange={(v) => handleChange('annualReturnRate', v)}
              min={1}
              max={20}
              step={0.5}
              placeholder="12"
              suffix="%"
              error={errors.annualReturnRate}
              required
            />
            <NumberInput
              label="Current Savings (₹)"
              name="currentSavings"
              value={input.currentSavings}
              onChange={(v) => handleChange('currentSavings', v)}
              min={0}
              max={1000000000}
              step={10000}
              placeholder="100000"
              prefix="₹"
              error={errors.currentSavings}
              required
            />
            <NumberInput
              label="Monthly Investment (₹)"
              name="monthlyInvestment"
              value={input.monthlyInvestment}
              onChange={(v) => handleChange('monthlyInvestment', v)}
              min={0}
              max={10000000}
              step={500}
              placeholder="15000"
              prefix="₹"
              error={errors.monthlyInvestment}
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
                  label: 'Goal Amount',
                  value: input.goalAmount,
                  prefix: '₹',
                  icon: <Target className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Projected Value',
                  value: result.projectedValue,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Shortfall / Surplus',
                  value: result.shortfall,
                  prefix: '₹',
                  type: result.shortfall > 0 ? 'negative' : 'positive',
                  icon: <AlertTriangle className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Required Monthly SIP',
                  value: result.requiredMonthlyInvestment,
                  prefix: '₹',
                  type: 'highlight',
                  icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
                },
              ]}
            />
          </div>

          <div className="animate-fade-in stagger-1">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Yearly Projection
            </h2>
            <YearlyBreakdownTable
              headers={['Year', 'Total Value (₹)', 'Total Invested (₹)', 'Returns (₹)']}
              rows={result.yearlyBreakdown.map((row) => [
                row.year,
                formatNumber(row.value),
                formatNumber(row.invested),
                formatNumber(row.returns),
              ])}
            />
          </div>

          <ChartPlaceholder
            title="Education Fund Growth Projection"
            description="Chart visualization would show corpus growth towards education goal"
          />

          {result.shortfall > 0 && (
            <div className="animate-fade-in stagger-2 mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <p className="font-medium text-amber-700 dark:text-amber-300">
                ⚠ There is a shortfall of {formatNumber(result.shortfall)}. You need to invest ₹
                {formatNumber(result.requiredMonthlyInvestment)} monthly to meet the goal.
              </p>
            </div>
          )}

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
