export interface Article {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  description: string;
  tags: string[];
  featured: boolean;
  ogImage?: string;
  content: string;
  structuredData?: Record<string, unknown>;
}

export interface Fund {
  id: string;
  name: string;
  category: string;
  riskLevel: string;
  nav: number;
  returns: Record<string, number>;
  aum: number;
  expenseRatio: number;
  isSampleData: boolean;
}

export interface MarketUpdate {
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: number;
  description: string;
  tags: string[];
  featured: boolean;
  ogImage?: string;
  content: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  icon: string;
  features: string[];
  suitableFor: string[];
  considerations: string[];
  cta: string;
}

export interface CalculatorConfig {
  slug: string;
  name: string;
  description: string;
  icon: string;
  category: string;
}
