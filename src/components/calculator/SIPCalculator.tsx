'use client';

import * as React from 'react';
import { useState } from 'react';
import { NumberInput, CalculatorActions } from '@/components/calculator/CalculatorForm';
import {
  SummaryGrid,
  YearlyBreakdownTable,
  DisclaimerBox,
  FinancialGrowthChart,
} from '@/components/calculator/CalculatorResults';
import { calculateSIPReturns } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { TrendingUp, Coins, Target, MessageSquare, ArrowRight } from 'lucide-react';
import { DISCLAIMERS, BRAND } from '@/lib/utils/constants';

interface SIPInput {
  monthlyInvestment: number;
  annualReturnRate: number;
  years: number;
}

interface SIPResult {
  totalInvested: number;
  estimatedReturns: number;
  totalValue: number;
  yearlyBreakdown: Array<{
    year: number;
    invested: number;
    returns: number;
    totalValue: number;
  }>;
}

export function SIPCalculator() {
  const [input, setInput] = useState<SIPInput>({
    monthlyInvestment: 5000,
    annualReturnRate: 12,
    years: 10,
  });
  const [result, setResult] = useState<SIPResult | null>(() => calculateSIPReturns(5000, 12, 10));
  const [errors, setErrors] = useState<Partial<Record<keyof SIPInput, string>>>({});
  const [calculating, setCalculating] = useState(false);

  const validate = (values: SIPInput): Partial<Record<keyof SIPInput, string>> => {
    const errs: Partial<Record<keyof SIPInput, string>> = {};
    if (!values.monthlyInvestment || values.monthlyInvestment < 500) {
      errs.monthlyInvestment = 'Minimum monthly investment is ₹500';
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
      const res = calculateSIPReturns(input.monthlyInvestment, input.annualReturnRate, input.years);
      setResult(res);
      setCalculating(false);
    }, 150);
  };

  const handleReset = () => {
    setInput({ monthlyInvestment: 5000, annualReturnRate: 12, years: 10 });
    setResult(calculateSIPReturns(5000, 12, 10));
    setErrors({});
  };

  const handleChange = (key: keyof SIPInput, value: string | number) => {
    const numValue = typeof value === 'string' ? parseFloat(value) || 0 : value;
    setInput((prev) => {
      const updated = { ...prev, [key]: numValue };
      if (!validate(updated)[key]) {
        setResult(
          calculateSIPReturns(updated.monthlyInvestment, updated.annualReturnRate, updated.years)
        );
      }
      return updated;
    });
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  };

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div className="text-center">
        <Badge variant="teal" size="md" className="mb-3">
          Mutual Funds Tool
        </Badge>
        <h1 className="font-display text-3xl font-extrabold text-brand-600 dark:text-neutral-50 sm:text-4xl">
          SIP Calculator
        </h1>
        <p className="mx-auto mt-2 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-400">
          Calculate wealth accumulation via Systematic Investment Plans (SIP) with inflation &
          compounding estimates.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Controls Column */}
        <div className="lg:col-span-5">
          <Card variant="panel" padding="lg" className="space-y-6 shadow-sm">
            <h3 className="border-b border-neutral-200 pb-3 font-display text-lg font-bold text-brand-600 dark:border-brand-800 dark:text-neutral-50">
              Input Investment Parameters
            </h3>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <NumberInput
                label="Monthly Investment (₹)"
                name="monthlyInvestment"
                value={input.monthlyInvestment}
                onChange={(v) => handleChange('monthlyInvestment', v)}
                min={500}
                max={200000}
                step={500}
                placeholder="5000"
                prefix="₹"
                helpText="Min ₹500/month"
                error={errors.monthlyInvestment}
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
                helpText="Equity funds typically 10-15%"
                error={errors.annualReturnRate}
                required
              />
              <NumberInput
                label="Investment Horizon (Years)"
                name="years"
                value={input.years}
                onChange={(v) => handleChange('years', v)}
                min={1}
                max={40}
                step={1}
                placeholder="10"
                suffix="Yrs"
                helpText="Compounding multiplies with tenure"
                error={errors.years}
                required
              />

              <CalculatorActions
                onCalculate={handleCalculate}
                onReset={handleReset}
                calculating={calculating}
              />
            </form>
          </Card>
        </div>

        {/* Results & Visuals Column */}
        <div className="space-y-6 lg:col-span-7">
          {result && (
            <>
              <SummaryGrid
                columns={3}
                items={[
                  {
                    label: 'Total Invested',
                    value: result.totalInvested,
                    icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                  },
                  {
                    label: 'Est. Wealth Growth',
                    value: result.estimatedReturns,
                    type: 'positive',
                    icon: <TrendingUp className="h-5 w-5" aria-hidden="true" />,
                  },
                  {
                    label: 'Expected Total Corpus',
                    value: result.totalValue,
                    type: 'highlight',
                    icon: <Target className="h-5 w-5" aria-hidden="true" />,
                  },
                ]}
              />

              <FinancialGrowthChart
                title="SIP Wealth Growth Trajectory"
                data={result.yearlyBreakdown.map((row) => ({
                  year: `Year ${row.year}`,
                  invested: Math.round(row.invested),
                  returns: Math.round(row.returns),
                  totalValue: Math.round(row.totalValue),
                }))}
              />
            </>
          )}
        </div>
      </div>

      {result && (
        <>
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-brand-600 dark:text-neutral-50">
              Yearly Investment Breakdown Schedule
            </h3>
            <YearlyBreakdownTable
              headers={[
                'Year',
                'Total Invested (₹)',
                'Est. Growth Returns (₹)',
                'Total Portfolio Value (₹)',
              ]}
              rows={result.yearlyBreakdown.map((row) => [
                `Year ${row.year}`,
                row.invested,
                row.returns,
                row.totalValue,
              ])}
            />
          </div>

          <Card
            variant="panel"
            padding="lg"
            className="flex flex-col items-center justify-between gap-4 bg-brand-900 text-white sm:flex-row"
          >
            <div>
              <h4 className="font-display text-lg font-bold text-white">
                Want to start this SIP strategy?
              </h4>
              <p className="text-xs text-neutral-300">
                Consult with Panchanan Kumar (ARN-195797) to select top-rated mutual funds for your
                goal.
              </p>
            </div>
            <div className="flex w-full gap-3 sm:w-auto">
              <Button variant="gold" size="sm" asChild>
                <a href="/contact">
                  Start SIP
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>
              <Button variant="whatsapp" size="sm" asChild>
                <a href={BRAND.social.whatsapp} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-1.5 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </Card>

          <DisclaimerBox>
            <p className="mb-1 text-sm font-bold">Calculator Disclaimer</p>
            <p>
              {DISCLAIMERS.calculator} {DISCLAIMERS.advisory}
            </p>
          </DisclaimerBox>
        </>
      )}
    </div>
  );
}
