'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';

export interface NumberInputProps {
  label: string;
  name: string;
  value: number | string;
  onChange: (value: number | string) => void;
  type?: 'number';
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  suffix?: string;
  prefix?: string;
  helpText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  showSlider?: boolean;
  className?: string;
}

export function NumberInput({
  label,
  name,
  value,
  onChange,
  type = 'number',
  min = 0,
  max = 100,
  step = 1,
  placeholder,
  suffix,
  prefix,
  helpText,
  error,
  required,
  disabled,
  showSlider = true,
  className,
}: NumberInputProps) {
  const numVal = typeof value === 'number' ? value : parseFloat(value) || 0;

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <Label
          htmlFor={name}
          required={required}
          className="text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-300"
        >
          {label}
        </Label>
        {suffix && (
          <span className="font-mono text-xs font-bold text-teal-600 dark:text-teal-400">
            {prefix}
            {numVal.toLocaleString('en-IN')} {suffix}
          </span>
        )}
      </div>

      <div className="relative">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            {prefix}
          </span>
        )}
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          className={cn(
            'font-mono text-base font-semibold transition-colors',
            prefix && 'pl-8',
            suffix && 'pr-12',
            error && 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
          )}
          disabled={disabled}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${name}-error` : helpText ? `${name}-help` : undefined}
        />
        {suffix && (
          <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-500 dark:text-neutral-400">
            {suffix}
          </span>
        )}
      </div>

      {showSlider && min !== undefined && max !== undefined && (
        <div className="pt-1">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={numVal}
            onChange={(e) => onChange(parseFloat(e.target.value))}
            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-neutral-200 accent-teal-600 dark:bg-brand-800 dark:accent-teal-400"
            aria-label={`${label} slider`}
          />
        </div>
      )}

      {error && (
        <p id={`${name}-error`} className="text-xs font-semibold text-rose-600" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${name}-help`} className="text-xs text-neutral-500 dark:text-neutral-400">
          {helpText}
        </p>
      )}
    </div>
  );
}

export interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  helpText?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  helpText,
  error,
  required,
  disabled,
  className,
}: SelectInputProps) {
  return (
    <div className={cn('space-y-1.5', className)}>
      <Label
        htmlFor={name}
        required={required}
        className="text-xs uppercase tracking-wider text-neutral-600 dark:text-neutral-300"
      >
        {label}
      </Label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'input appearance-none bg-right bg-no-repeat pr-10 font-semibold',
          'bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23102A43%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E")]',
          'bg-[length:20px_20px]',
          'bg-[right:12px_center]',
          error && 'border-error-500 focus:border-error-500 focus:ring-error-500/20'
        )}
        disabled={disabled}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${name}-error` : helpText ? `${name}-help` : undefined}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p id={`${name}-error`} className="text-xs font-semibold text-rose-600" role="alert">
          {error}
        </p>
      )}
      {helpText && !error && (
        <p id={`${name}-help`} className="text-xs text-neutral-500 dark:text-neutral-400">
          {helpText}
        </p>
      )}
    </div>
  );
}

export interface CalculatorActionsProps {
  onCalculate: () => void;
  onReset: () => void;
  calculating?: boolean;
  className?: string;
}

export function CalculatorActions({
  onCalculate,
  onReset,
  calculating,
  className,
}: CalculatorActionsProps) {
  return (
    <div className={cn('flex flex-col gap-3 pt-4 sm:flex-row', className)}>
      <Button
        size="lg"
        variant="primary"
        onClick={onCalculate}
        disabled={calculating}
        className="w-full shadow-tactile-primary sm:w-auto"
      >
        {calculating ? 'Calculating...' : 'Calculate Returns'}
      </Button>
      <Button
        size="lg"
        variant="outline"
        onClick={onReset}
        disabled={calculating}
        className="w-full sm:w-auto"
      >
        Reset Inputs
      </Button>
    </div>
  );
}
