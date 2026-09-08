export interface CalculatorInput {
  [key: string]: number | string;
}

export interface CalculatorResult {
  summary: Array<{ label: string; value: string | number }>;
  chartData?: ChartDataPoint[];
  breakdown?: BreakdownItem[];
  disclaimer: string;
  calculatedAt: Date;
}

export interface ChartDataPoint {
  name: string;
  [key: string]: string | number;
}

export interface BreakdownItem {
  year?: number;
  month?: number;
  [key: string]: string | number | undefined;
}

export interface InputField {
  key: string;
  label: string;
  type: 'number' | 'select' | 'radio';
  placeholder?: string;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  suffix?: string;
  options?: Array<{ value: string; label: string }>;
  helpText?: string;
  required: boolean;
}

export interface Calculator<TInput extends CalculatorInput, TResult extends CalculatorResult> {
  id: string;
  name: string;
  description: string;
  inputs: InputField[];
  validate: (input: TInput) => ValidationResult;
  calculate: (input: TInput) => TResult;
  formatResult: (result: TResult) => React.ReactNode;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}
