'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';
import { formatNumber } from '@/lib/utils/format';
import { Card } from '@/components/ui/Card';
import { AlertTriangle, TrendingUp } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from 'recharts';

interface ResultCardProps {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  type?: 'positive' | 'negative' | 'neutral' | 'highlight';
  icon?: React.ReactNode;
  className?: string;
}

export function ResultCard({
  label,
  value,
  prefix = '',
  suffix = '',
  type = 'neutral',
  icon,
  className,
}: ResultCardProps) {
  const formatValue = (val: string | number): string => {
    if (typeof val === 'number') {
      if (val >= 10000000) {
        return `₹${(val / 10000000).toFixed(2)} Cr`;
      }
      if (val >= 100000) {
        return `₹${(val / 100000).toFixed(2)} Lakh`;
      }
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return val;
  };

  const typeClasses = {
    positive: 'bg-emerald-50/70 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800',
    negative: 'bg-rose-50/70 border-rose-200 dark:bg-rose-950/30 dark:border-rose-800',
    highlight: 'bg-gold-50/70 border-gold-300 dark:bg-gold-950/30 dark:border-gold-800',
    neutral: 'bg-white border-neutral-200 dark:bg-brand-900 dark:border-brand-800',
  };

  return (
    <Card
      variant="bordered"
      padding="none"
      className={cn(
        'rounded-xl p-5 shadow-sm transition-all hover:shadow-md',
        typeClasses[type],
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
            {label}
          </p>
          <div className="mt-1 flex items-baseline gap-1">
            <span
              className={cn('font-mono text-2xl font-bold tracking-tight', {
                'text-emerald-700 dark:text-emerald-400': type === 'positive',
                'text-rose-700 dark:text-rose-400': type === 'negative',
                'text-brand-600 dark:text-gold-400': type === 'highlight',
                'text-brand-600 dark:text-neutral-50': type === 'neutral',
              })}
            >
              {prefix}
              {formatValue(value)}
              {suffix}
            </span>
          </div>
        </div>
        {icon && <div className="flex-shrink-0 text-teal-600 dark:text-teal-400">{icon}</div>}
      </div>
    </Card>
  );
}

interface SummaryGridProps {
  items: Array<{
    label: string;
    value: string | number;
    prefix?: string;
    suffix?: string;
    type?: 'positive' | 'negative' | 'neutral' | 'highlight';
    icon?: React.ReactNode;
  }>;
  columns?: 2 | 3 | 4;
  className?: string;
}

export function SummaryGrid({ items, columns = 3, className }: SummaryGridProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-4 sm:grid-cols-2',
        {
          'lg:grid-cols-2': columns === 2,
          'lg:grid-cols-3': columns === 3,
          'lg:grid-cols-4': columns === 4,
        },
        className
      )}
    >
      {items.map((item, index) => (
        <ResultCard key={`${item.label}-${index}`} {...item} />
      ))}
    </div>
  );
}

interface FinancialGrowthChartProps {
  data: Array<{
    year: number | string;
    invested?: number;
    returns?: number;
    totalValue?: number;
    [key: string]: any;
  }>;
  title?: string;
  height?: number;
}

export function FinancialGrowthChart({
  data,
  title = 'Wealth Accumulation Projection',
  height = 320,
}: FinancialGrowthChartProps) {
  if (!data || data.length === 0) return null;

  return (
    <Card variant="bordered" padding="lg" className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-base font-bold text-brand-600 dark:text-neutral-50">
          {title}
        </h3>
        <span className="text-xs font-semibold text-neutral-500">Interactive Projection</span>
      </div>

      <div style={{ height: `${height}px` }} className="w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorInvested" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#102A43" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#102A43" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="colorReturns" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1B5B63" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1B5B63" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#D9E2EC" opacity={0.5} />
            <XAxis dataKey="year" tick={{ fontSize: 12 }} />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={(val) =>
                val >= 10000000
                  ? `₹${(val / 10000000).toFixed(1)}Cr`
                  : val >= 100000
                    ? `₹${(val / 100000).toFixed(0)}L`
                    : `₹${val}`
              }
            />
            <Tooltip
              formatter={(val: number) => [`₹${val.toLocaleString('en-IN')}`, '']}
              contentStyle={{
                backgroundColor: '#102A43',
                color: '#fff',
                borderRadius: '8px',
                fontSize: '12px',
              }}
            />
            <Legend />
            {data[0]?.invested !== undefined && (
              <Area
                type="monotone"
                dataKey="invested"
                name="Total Invested"
                stroke="#102A43"
                fillOpacity={1}
                fill="url(#colorInvested)"
              />
            )}
            {data[0]?.returns !== undefined && (
              <Area
                type="monotone"
                dataKey="returns"
                name="Est. Growth / Returns"
                stroke="#1B5B63"
                fillOpacity={1}
                fill="url(#colorReturns)"
              />
            )}
            {data[0]?.totalValue !== undefined && data[0]?.invested === undefined && (
              <Area
                type="monotone"
                dataKey="totalValue"
                name="Portfolio Value"
                stroke="#1B5B63"
                fillOpacity={1}
                fill="url(#colorReturns)"
              />
            )}
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}

interface ChartPlaceholderProps {
  title: string;
  description?: string;
  height?: number;
  className?: string;
}

export function ChartPlaceholder({
  title,
  description,
  height = 300,
  className,
}: ChartPlaceholderProps) {
  return (
    <Card variant="bordered" padding="lg" className={className}>
      <div
        style={{ height: `${height}px` }}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-600 dark:bg-teal-400/20 dark:text-teal-400">
          <TrendingUp className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="font-display text-base font-bold text-brand-600 dark:text-neutral-50">
          {title}
        </h3>
        {description && (
          <p className="mt-1 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
}

interface YearlyBreakdownTableProps {
  headers: string[];
  rows: Array<Array<string | number>>;
  className?: string;
}

export function YearlyBreakdownTable({ headers, rows, className }: YearlyBreakdownTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200 shadow-sm dark:border-brand-800">
      <table className="w-full" role="table">
        <thead>
          <tr className="bg-brand-900 text-white">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-gold-400"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-200 dark:divide-brand-800">
          {rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={
                rowIndex % 2 === 0
                  ? 'bg-white dark:bg-brand-950'
                  : 'bg-neutral-50/70 dark:bg-brand-900/50'
              }
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="whitespace-nowrap px-4 py-3 font-mono text-xs font-medium text-neutral-800 dark:text-neutral-200"
                >
                  {typeof cell === 'number' ? formatNumber(cell) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface DisclaimerBoxProps {
  children: React.ReactNode;
  className?: string;
}

export function DisclaimerBox({ children, className }: DisclaimerBoxProps) {
  return (
    <Card
      variant="bordered"
      padding="lg"
      className={cn(
        'border-amber-300/80 bg-amber-50/60 dark:border-amber-800 dark:bg-amber-950/30',
        className
      )}
      role="alert"
    >
      <div className="flex gap-3">
        <AlertTriangle
          className="mt-0.5 h-5 w-5 flex-shrink-0 text-amber-600 dark:text-amber-400"
          aria-hidden="true"
        />
        <div className="prose prose-xs dark:prose-invert max-w-none leading-relaxed text-amber-900 dark:text-amber-100">
          {children}
        </div>
      </div>
    </Card>
  );
}
