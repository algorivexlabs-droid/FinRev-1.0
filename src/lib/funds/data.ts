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
  description: string;
  fundManager: string;
  inceptionDate: string;
  minInvestment: number;
  exitLoad: string;
}

export const SAMPLE_FUNDS: Fund[] = [
  {
    id: 'equity-large-cap-1',
    name: 'Sample Large Cap Equity Fund',
    category: 'Equity Funds',
    riskLevel: 'High',
    nav: 58.42,
    returns: {
      '1Y': 14.2,
      '3Y': 15.8,
      '5Y': 13.5,
      '10Y': 12.9,
    },
    aum: 28500,
    expenseRatio: 1.85,
    isSampleData: true,
    description:
      'A diversified equity fund investing primarily in large-cap companies with strong track records and market leadership positions.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2010-01-15',
    minInvestment: 5000,
    exitLoad: '1% if redeemed within 1 year',
  },
  {
    id: 'equity-mid-cap-1',
    name: 'Sample Mid Cap Equity Fund',
    category: 'Equity Funds',
    riskLevel: 'Very High',
    nav: 42.18,
    returns: {
      '1Y': 18.5,
      '3Y': 19.2,
      '5Y': 16.8,
      '10Y': 15.4,
    },
    aum: 12400,
    expenseRatio: 2.1,
    isSampleData: true,
    description:
      'Focuses on mid-cap companies with high growth potential. Suitable for aggressive investors with long-term horizon.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2012-03-20',
    minInvestment: 5000,
    exitLoad: '1% if redeemed within 1 year',
  },
  {
    id: 'equity-flexi-cap-1',
    name: 'Sample Flexi Cap Fund',
    category: 'Equity Funds',
    riskLevel: 'High',
    nav: 36.75,
    returns: {
      '1Y': 16.8,
      '3Y': 17.5,
      '5Y': 14.9,
      '10Y': 13.8,
    },
    aum: 21300,
    expenseRatio: 1.95,
    isSampleData: true,
    description:
      'Invests across market capitalizations with flexibility to allocate based on market opportunities.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2015-07-10',
    minInvestment: 5000,
    exitLoad: '1% if redeemed within 1 year',
  },
  {
    id: 'debt-liquid-1',
    name: 'Sample Liquid Fund',
    category: 'Debt Funds',
    riskLevel: 'Low',
    nav: 3250.45,
    returns: {
      '1M': 0.55,
      '3M': 1.65,
      '6M': 3.4,
      '1Y': 6.8,
    },
    aum: 45600,
    expenseRatio: 0.25,
    isSampleData: true,
    description:
      'Invests in money market instruments with maturity up to 91 days. Ideal for parking surplus funds for short periods.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2008-11-05',
    minInvestment: 1000,
    exitLoad: 'Nil',
  },
  {
    id: 'debt-corporate-bond-1',
    name: 'Sample Corporate Bond Fund',
    category: 'Debt Funds',
    riskLevel: 'Low to Moderate',
    nav: 18.92,
    returns: {
      '1Y': 7.2,
      '3Y': 7.8,
      '5Y': 7.5,
      '10Y': 7.9,
    },
    aum: 8900,
    expenseRatio: 0.55,
    isSampleData: true,
    description:
      'Invests primarily in high-quality corporate bonds. Suitable for investors seeking stable returns with moderate risk.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2014-02-28',
    minInvestment: 5000,
    exitLoad: '0.5% if redeemed within 6 months',
  },
  {
    id: 'hybrid-aggressive-1',
    name: 'Sample Aggressive Hybrid Fund',
    category: 'Hybrid Funds',
    riskLevel: 'High',
    nav: 48.33,
    returns: {
      '1Y': 13.5,
      '3Y': 14.2,
      '5Y': 12.8,
      '10Y': 12.1,
    },
    aum: 15600,
    expenseRatio: 1.95,
    isSampleData: true,
    description:
      'Invests 65-80% in equity and 20-35% in debt. Suitable for investors seeking equity growth with some downside protection.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2011-09-12',
    minInvestment: 5000,
    exitLoad: '1% if redeemed within 1 year',
  },
  {
    id: 'hybrid-balanced-1',
    name: 'Sample Balanced Advantage Fund',
    category: 'Hybrid Funds',
    riskLevel: 'Moderate',
    nav: 28.67,
    returns: {
      '1Y': 10.8,
      '3Y': 11.5,
      '5Y': 10.2,
      '10Y': 9.8,
    },
    aum: 32100,
    expenseRatio: 1.75,
    isSampleData: true,
    description:
      'Dynamically manages equity-debt allocation based on market valuations. Aims to provide equity-like returns with lower volatility.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2013-05-18',
    minInvestment: 5000,
    exitLoad: '1% if redeemed within 1 year',
  },
  {
    id: 'index-nifty50-1',
    name: 'Sample Nifty 50 Index Fund',
    category: 'Index Funds',
    riskLevel: 'Market Linked',
    nav: 142.56,
    returns: {
      '1Y': 15.2,
      '3Y': 15.8,
      '5Y': 13.9,
      '10Y': 12.7,
    },
    aum: 56700,
    expenseRatio: 0.18,
    isSampleData: true,
    description:
      "Tracks the Nifty 50 index with minimal tracking error. Low-cost way to invest in India's top 50 companies.",
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2016-01-20',
    minInvestment: 1000,
    exitLoad: 'Nil',
  },
  {
    id: 'index-nifty-next50-1',
    name: 'Sample Nifty Next 50 Index Fund',
    category: 'Index Funds',
    riskLevel: 'Market Linked',
    nav: 18.42,
    returns: {
      '1Y': 18.2,
      '3Y': 18.8,
      '5Y': 16.5,
    },
    aum: 8900,
    expenseRatio: 0.22,
    isSampleData: true,
    description:
      'Tracks the Nifty Next 50 index - the 50 companies next in line to enter the Nifty 50.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2019-08-15',
    minInvestment: 1000,
    exitLoad: 'Nil',
  },
  {
    id: 'tax-saving-elss-1',
    name: 'Sample ELSS Tax Saver Fund',
    category: 'Tax Saving Funds (ELSS)',
    riskLevel: 'High',
    nav: 34.21,
    returns: {
      '1Y': 16.5,
      '3Y': 17.2,
      '5Y': 15.1,
      '10Y': 14.2,
    },
    aum: 9800,
    expenseRatio: 2.0,
    isSampleData: true,
    description:
      'Equity Linked Savings Scheme with 3-year lock-in under Section 80C. Provides tax benefit up to ₹1.5 lakh per year.',
    fundManager: 'Sample Fund Manager',
    inceptionDate: '2014-12-01',
    minInvestment: 500,
    exitLoad: 'Locked in for 3 years',
  },
];

export function getFundsByCategory(category: string): Fund[] {
  return SAMPLE_FUNDS.filter((fund) => fund.category === category);
}

export function getFundById(id: string): Fund | undefined {
  return SAMPLE_FUNDS.find((fund) => fund.id === id);
}

export function getAllCategories(): string[] {
  return [...new Set(SAMPLE_FUNDS.map((fund) => fund.category))];
}
