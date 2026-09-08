'use client';

import * as React from 'react';
import { useState } from 'react';
import { cn } from '@/lib/utils/cn';
import { formatNumber } from '@/lib/utils/format';
import { CalculatorActions } from '@/components/calculator/CalculatorForm';
import {
  SummaryGrid,
  DisclaimerBox,
  ChartPlaceholder,
} from '@/components/calculator/CalculatorResults';
import { calculateXIRR } from '@/lib/calculators/math';
import { Card } from '@/components/ui/Card';
import { TrendingUp, Coins, Target, Calculator, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { DISCLAIMERS } from '@/lib/utils/constants';

interface CashflowEntry {
  date: string;
  amount: number;
  type: 'investment' | 'withdrawal';
}

interface XIRRInput {
  cashflows: CashflowEntry[];
}

interface XIRRResult {
  xirr: number | null;
  totalInvested: number;
  totalWithdrawn: number;
  currentValue: number;
}

export function XIRRCalculator() {
  const today = new Date().toISOString().split('T')[0] ?? new Date().toISOString().slice(0, 10);
  const [cashflows, setCashflows] = useState<CashflowEntry[]>([
    { date: today, amount: 100000, type: 'investment' },
    { date: '', amount: 0, type: 'withdrawal' },
  ]);
  const [result, setResult] = useState<XIRRResult | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [calculating, setCalculating] = useState(false);

  const validate = (entries: CashflowEntry[]): string[] => {
    const errs: string[] = [];
    const validEntries = entries.filter((e) => e.date && e.amount > 0);
    if (validEntries.length < 2) {
      errs.push(
        'At least 2 cashflow entries (one investment and one withdrawal/current value) are required'
      );
    }
    const hasInvestment = validEntries.some((e) => e.type === 'investment');
    const hasWithdrawal = validEntries.some((e) => e.type === 'withdrawal');
    if (!hasInvestment) {
      errs.push('At least one investment entry is required');
    }
    if (!hasWithdrawal) {
      errs.push('At least one withdrawal/current value entry is required');
    }
    return errs;
  };

  const handleCalculate = () => {
    const errs = validate(cashflows);
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }
    setErrors([]);
    setCalculating(true);
    setTimeout(() => {
      const validEntries = cashflows.filter((e) => e.date && e.amount > 0);
      const cashflowData = validEntries.map((e) => ({
        date: new Date(e.date),
        amount: e.type === 'investment' ? -e.amount : e.amount,
      }));

      const xirr = calculateXIRR(cashflowData);
      const totalInvested = validEntries
        .filter((e) => e.type === 'investment')
        .reduce((sum, e) => sum + e.amount, 0);
      const totalWithdrawn = validEntries
        .filter((e) => e.type === 'withdrawal')
        .reduce((sum, e) => sum + e.amount, 0);
      const currentValue = totalWithdrawn;

      setResult({
        xirr,
        totalInvested,
        totalWithdrawn,
        currentValue,
      });
      setCalculating(false);
    }, 300);
  };

  const handleReset = () => {
    setCashflows([
      { date: today, amount: 100000, type: 'investment' },
      { date: '', amount: 0, type: 'withdrawal' },
    ]);
    setResult(null);
    setErrors([]);
  };

  const addCashflow = () => {
    setCashflows((prev) => [...prev, { date: '', amount: 0, type: 'investment' }]);
  };

  const removeCashflow = (index: number) => {
    if (cashflows.length <= 2) return;
    setCashflows((prev) => prev.filter((_, i) => i !== index));
  };

  const updateCashflow = (index: number, field: keyof CashflowEntry, value: string | number) => {
    setCashflows((prev) => prev.map((cf, i) => (i === index ? { ...cf, [field]: value } : cf)));
  };

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="mb-8 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
          Advanced
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
          XIRR Calculator
        </h1>
        <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
          Calculate actual returns on irregular cash flows (Extended Internal Rate of Return)
        </p>
      </div>

      <Card variant="elevated" padding="xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold text-neutral-900 dark:text-neutral-50">
                Cashflow Entries
              </h3>
              <Button
                variant="outline"
                size="sm"
                type="button"
                onClick={addCashflow}
                className="gap-2"
              >
                <Plus className="h-4 w-4" aria-hidden="true" />
                Add Entry
              </Button>
            </div>

            {cashflows.map((cf, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-700 dark:bg-neutral-800/50 sm:flex-row"
              >
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Type
                  </label>
                  <select
                    value={cf.type}
                    onChange={(e) => updateCashflow(index, 'type', e.target.value)}
                    className="input w-full"
                    aria-label="Cashflow type"
                  >
                    <option value="investment">Investment (Money Out)</option>
                    <option value="withdrawal">Withdrawal / Current Value (Money In)</option>
                  </select>
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Date
                  </label>
                  <input
                    type="date"
                    value={cf.date}
                    onChange={(e) => updateCashflow(index, 'date', e.target.value)}
                    className="input w-full"
                    aria-label="Transaction date"
                  />
                </div>
                <div className="flex-1">
                  <label className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={cf.amount}
                    onChange={(e) =>
                      updateCashflow(index, 'amount', parseFloat(e.target.value) || 0)
                    }
                    min={0}
                    step={100}
                    className="input w-full"
                    placeholder="10000"
                    aria-label="Amount in rupees"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    type="button"
                    onClick={() => removeCashflow(index)}
                    className="text-error-500 hover:text-error-600"
                    aria-label="Remove cashflow entry"
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {errors.length > 0 && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-900/20">
              <ul className="list-inside list-disc space-y-1 text-red-700 dark:text-red-300">
                {errors.map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

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
                  label: 'Total Invested',
                  value: result.totalInvested,
                  prefix: '₹',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Total Withdrawn',
                  value: result.totalWithdrawn,
                  prefix: '₹',
                  type: 'negative',
                  icon: <Coins className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'Current Value',
                  value: result.currentValue,
                  prefix: '₹',
                  icon: <Target className="h-5 w-5" aria-hidden="true" />,
                },
                {
                  label: 'XIRR',
                  value: result.xirr !== null ? `${result.xirr.toFixed(2)}%` : 'N/A',
                  type: result.xirr !== null && result.xirr > 0 ? 'positive' : 'neutral',
                  icon: <Calculator className="h-5 w-5" aria-hidden="true" />,
                },
              ]}
            />
          </div>

          <div className="animate-fade-in stagger-1">
            <h2 className="mb-4 font-display text-xl font-semibold text-neutral-900 dark:text-neutral-50">
              Cashflow Summary
            </h2>
            <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
              <table className="w-full" role="table">
                <thead>
                  <tr className="bg-neutral-50 dark:bg-neutral-800/50">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                      Amount (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                  {cashflows
                    .filter((e) => e.date && e.amount > 0)
                    .map((cf, i) => (
                      <tr
                        key={i}
                        className={
                          i % 2 === 0
                            ? 'bg-white dark:bg-neutral-900'
                            : 'bg-neutral-50 dark:bg-neutral-800/50'
                        }
                      >
                        <td className="px-4 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300">
                          {cf.type === 'investment' ? 'Investment' : 'Withdrawal'}
                        </td>
                        <td className="px-4 py-3 text-sm text-neutral-700 dark:text-neutral-300">
                          {new Date(cf.date).toLocaleDateString('en-IN')}
                        </td>
                        <td className="px-4 py-3 font-mono text-sm text-neutral-700 dark:text-neutral-300">
                          {cf.type === 'investment' ? '-' : '+'}
                          {formatNumber(cf.amount)}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>

          <ChartPlaceholder
            title="XIRR Cashflow Timeline"
            description="Chart visualization would show cashflows over time with XIRR calculation"
          />

          <DisclaimerBox>
            <p className="mb-2 font-semibold">Important Disclaimer</p>
            <p className="mb-2">{DISCLAIMERS.calculator}</p>
            <p>{DISCLAIMERS.advisory}</p>
            <p className="mt-2">
              XIRR calculation assumes cashflows are irregular. For regular intervals, use IRR
              instead. Results are illustrative and should not be considered as financial advice.
            </p>
          </DisclaimerBox>
        </>
      )}
    </div>
  );
}
