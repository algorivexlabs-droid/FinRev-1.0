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
import { calculateRetirementNeeds } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, User, AlertTriangle } from 'lucide-react';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  lifeExpectancy: number;
  currentMonthlyExpenses: number;
  inflationRate: number;
  preRetirementReturn: number;
  postRetirementReturn: number;
  existingSavings: number;
  monthlyInvestment: number;
}

interface RetirementResult {
  requiredCorpus: number;
  projectedSavings: number;
  shortfall: number;
  monthlyWithdrawal: number;
  yearlyBreakdown: Array<{
    age: number;
    savings: number;
    withdrawal?: number;
    corpus?: number;
  }>;
}

export function RetirementCalculator() {
  const [input, setInput] = useState<RetirementInput>({
    currentAge: 30,
    retirementAge: 60,
    lifeExpectancy: 85,
    currentMonthlyExpenses: 50000,
    inflationRate: 6,
    preRetirementReturn: 12,
    postRetirementReturn: 8,
    existingSavings: 500000,
    monthlyInvestment: 15000,
  });
  const [result, setResult] = useState<RetirementResult | null>(null);
  const [errors, setErrors] = useState<Partial<Record<keyof RetirementInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: RetirementInput): Partial<Record<keyof RetirementInput, string>> => {
    const errs: Partial<Record<keyof RetirementInput, string>> = {};
    if (!values.currentAge || values.currentAge < 18 || values.currentAge > 80) {
      errs.currentAge = 'Current age must be between 18 and 80';
    }
    if (
      !values.retirementAge ||
      values.retirementAge <= values.currentAge ||
      values.retirementAge > 80
    ) {
      errs.retirementAge = 'Retirement age must be greater than current age and less than 80';
    }
    if (
      !values.lifeExpectancy ||
      values.lifeExpectancy <= values.retirementAge ||
      values.lifeExpectancy > 100
    ) {
      errs.lifeExpectancy = 'Life expectancy must be greater than retirement age';
    }
    if (!values.currentMonthlyExpenses || values.currentMonthlyExpenses < 5000) {
      errs.currentMonthlyExpenses = 'Minimum monthly expenses is ₹5,000';
    }
    if (!values.inflationRate || values.inflationRate < 1 || values.inflationRate > 15) {
      errs.inflationRate = 'Inflation rate must be between 1% and 15%';
    }
    if (
      !values.preRetirementReturn ||
      values.preRetirementReturn < 1 ||
      values.preRetirementReturn > 20
    ) {
      errs.preRetirementReturn = 'Pre-retirement return must be between 1% and 20%';
    }
    if (
      !values.postRetirementReturn ||
      values.postRetirementReturn < 1 ||
      values.postRetirementReturn > 15
    ) {
      errs.postRetirementReturn = 'Post-retirement return must be between 1% and 15%';
    }
    if (values.existingSavings < 0) {
      errs.existingSavings = 'Existing savings cannot be negative';
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
      const res = calculateRetirementNeeds(
        input.currentAge,
        input.retirementAge,
        input.lifeExpectancy,
        input.currentMonthlyExpenses,
        input.inflationRate,
        input.preRetirementReturn,
        input.postRetirementReturn,
        input.existingSavings,
        input.monthlyInvestment
      );
      setResult(res);
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setInput({
      currentAge: 30,
      retirementAge: 60,
      lifeExpectancy: 85,
      currentMonthlyExpenses: 50000,
      inflationRate: 6,
      preRetirementReturn: 12,
      postRetirementReturn: 8,
      existingSavings: 500000,
      monthlyInvestment: 15000,
    });
    setResult(null);
    setErrors({});
  };

  const handleChange = (key: keyof RetirementInput, value: string | number) => {
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
          Goals
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          Retirement Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Plan your retirement corpus and monthly withdrawals
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <NumberInput
              label="Current Age"
              name="currentAge"
              value={input.currentAge}
              onChange={(v) => handleChange('currentAge', v)}
              min={18}
              max={80}
              step={1}
              placeholder="30"
              suffix="yrs"
              error={errors.currentAge}
              required
            />
            <NumberInput
              label="Retirement Age"
              name="retirementAge"
              value={input.retirementAge}
              onChange={(v) => handleChange('retirementAge', v)}
              min={input.currentAge + 1}
              max={80}
              step={1}
              placeholder="60"
              suffix="yrs"
              error={errors.retirementAge}
              required
            />
            <NumberInput
              label="Life Expectancy"
              name="lifeExpectancy"
              value={input.lifeExpectancy}
              onChange={(v) => handleChange('lifeExpectancy', v)}
              min={input.retirementAge + 1}
              max={100}
              step={1}
              placeholder="85"
              suffix="yrs"
              error={errors.lifeExpectancy}
              required
            />
            <NumberInput
              label="Current Monthly Expenses (₹)"
              name="currentMonthlyExpenses"
              value={input.currentMonthlyExpenses}
              onChange={(v) => handleChange('currentMonthlyExpenses', v)}
              min={5000}
              max={10000000}
              step={1000}
              placeholder="50000"
              prefix="₹"
              error={errors.currentMonthlyExpenses}
              required
            />
            <NumberInput
              label="Inflation Rate (%)"
              name="inflationRate"
              value={input.inflationRate}
              onChange={(v) => handleChange('inflationRate', v)}
              min={1}
              max={15}
              step={0.5}
              placeholder="6"
              suffix="%"
              error={errors.inflationRate}
              required
            />
            <NumberInput
              label="Pre-Retirement Return (%)"
              name="preRetirementReturn"
              value={input.preRetirementReturn}
              onChange={(v) => handleChange('preRetirementReturn', v)}
              min={1}
              max={20}
              step={0.5}
              placeholder="12"
              suffix="%"
              error={errors.preRetirementReturn}
              required
            />
            <NumberInput
              label="Post-Retirement Return (%)"
              name="postRetirementReturn"
              value={input.postRetirementReturn}
              onChange={(v) => handleChange('postRetirementReturn', v)}
              min={1}
              max={15}
              step={0.5}
              placeholder="8"
              suffix="%"
              error={errors.postRetirementReturn}
              required
            />
            <NumberInput
              label="Existing Savings (₹)"
              name="existingSavings"
              value={input.existingSavings}
              onChange={(v) => handleChange('existingSavings', v)}
              min={0}
              max={1000000000}
              step={10000}
              placeholder="500000"
              prefix="₹"
              error={errors.existingSavings}
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
                  label: 'Required Corpus',
                  value: result.requiredCorpus,
                  prefix: '₹',
                  type: 'highlight',
                  icon: <Target className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Projected Savings',
                  value: result.projectedSavings,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Shortfall',
                  value: result.shortfall,
                  prefix: '₹',
                  type: result.shortfall > 0 ? 'negative' : 'positive',
                  icon: <AlertTriangle className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Monthly Withdrawal',
                  value: result.monthlyWithdrawal,
                  prefix: '₹',
                  icon: <User className="h-5 w-5" aria-hidden="true" />,
                },
              ]}
            />
          </div>

          <div className="animate-fade-in stagger-1">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Yearly Projection
            </h2>
            <YearlyBreakdownTable
              headers={['Age', 'Corpus (₹)', 'Annual Withdrawal (₹)']}
              rows={result.yearlyBreakdown.map((row) => [
                row.age,
                formatNumber(row.savings),
                row.withdrawal ? formatNumber(row.withdrawal) : '-',
              ])}
            />
          </div>

          <ChartPlaceholder
            title="Retirement Corpus Projection"
            description="Chart visualization would show accumulation and decumulation phases"
          />

          {result.shortfall > 0 && (
            <div className="animate-fade-in stagger-2 mb-6 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-800 dark:bg-amber-900/20">
              <p className="font-medium text-amber-700 dark:text-amber-300">
                ⚠ There is a shortfall of {formatNumber(result.shortfall)}. Consider increasing
                monthly investment or adjusting retirement age.
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
