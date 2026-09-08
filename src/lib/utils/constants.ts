export const BRAND = {
  name: 'FinRev Solutions',
  tagline: 'Secure Today. Stronger Tomorrow.',
  founder: {
    name: 'Panchanan Kumar',
    designation: 'Mutual Fund Distributor',
    arn: 'ARN-195797',
  },
  contact: {
    phone: '9835592142',
    email: 'info@finrevsolutions.com',
    whatsappMessage:
      'Hello, I would like to know more about investment solutions offered by FinRev Solutions.',
  },
  social: {
    whatsapp:
      'https://wa.me/919835592142?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20investment%20solutions%20offered%20by%20FinRev%20Solutions.',
  },
} as const;

export const NAVIGATION = {
  main: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Calculators', href: '/calculators' },
    { label: 'Funds', href: '/funds' },
    { label: 'Knowledge Center', href: '/knowledge-center' },
    { label: 'Market Updates', href: '/market-updates' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: {
    company: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Calculators', href: '/calculators' },
      { label: 'Knowledge Center', href: '/knowledge-center' },
      { label: 'Market Updates', href: '/market-updates' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Disclaimer', href: '/disclaimer' },
    ],
  },
} as const;

export const SERVICES = [
  {
    slug: 'mutual-funds',
    name: 'Mutual Funds',
    shortDescription:
      'Diversified investment solutions across equity, debt, and hybrid categories.',
    icon: 'pie-chart',
    features: [
      'Goal-based fund selection',
      'Regular portfolio review',
      'SIP & lump sum options',
      'Tax-efficient investing',
    ],
    suitableFor: ['Wealth creation', 'Retirement planning', 'Tax saving', 'Short-term goals'],
    considerations: ['Market risk', 'No guaranteed returns', 'Expense ratio impact'],
    cta: 'Explore Mutual Funds',
  },
  {
    slug: 'insurance',
    name: 'Insurance',
    shortDescription: 'Comprehensive life and health insurance solutions for financial protection.',
    icon: 'shield',
    features: [
      'Term life insurance',
      'Health & critical illness',
      'ULIP options',
      'Claim assistance',
    ],
    suitableFor: ['Family protection', 'Tax benefits', 'Risk coverage', 'Long-term savings'],
    considerations: [
      'Policy terms & conditions',
      'Premium affordability',
      'Claim settlement ratio',
    ],
    cta: 'View Insurance Plans',
  },
  {
    slug: 'bonds',
    name: 'Bonds',
    shortDescription: 'Fixed income instruments for stable returns and capital preservation.',
    icon: 'landmark',
    features: [
      'Government & corporate bonds',
      'Tax-free bond options',
      'Regular income',
      'Capital protection',
    ],
    suitableFor: [
      'Conservative investors',
      'Regular income',
      'Portfolio stability',
      'Short-term parking',
    ],
    considerations: ['Interest rate risk', 'Credit risk', 'Liquidity constraints'],
    cta: 'Browse Bonds',
  },
  {
    slug: 'pms',
    name: 'PMS',
    shortDescription: 'Professional portfolio management for high-net-worth individuals.',
    icon: 'briefcase',
    features: [
      'Customized portfolios',
      'Dedicated fund manager',
      'Direct equity ownership',
      'Transparent reporting',
    ],
    suitableFor: ['HNIs (>₹50L)', 'Active management', 'Concentrated portfolios', 'Tax efficiency'],
    considerations: ['Higher minimum investment', 'Market risk', 'Management fees'],
    cta: 'Learn About PMS',
  },
  {
    slug: 'aif',
    name: 'AIF',
    shortDescription:
      'Alternative Investment Funds for sophisticated investors seeking diversification.',
    icon: 'gem',
    features: [
      'Category I, II, III funds',
      'Private equity & venture capital',
      'Real estate & infrastructure',
      'Hedge fund strategies',
    ],
    suitableFor: [
      'Sophisticated investors',
      'Portfolio diversification',
      'Higher risk appetite',
      'Long-term horizon',
    ],
    considerations: [
      'High minimum investment',
      'Lock-in periods',
      'Complex structures',
      'Illiquidity',
    ],
    cta: 'Explore AIF Options',
  },
  {
    slug: 'unlisted-equity',
    name: 'Unlisted Equity',
    shortDescription: 'Pre-IPO and private company investment opportunities.',
    icon: 'building-2',
    features: [
      'Early-stage access',
      'High growth potential',
      'Pre-IPO opportunities',
      'Portfolio diversification',
    ],
    suitableFor: [
      'Aggressive growth',
      'Long-term horizon',
      'Risk tolerance',
      'Accredited investors',
    ],
    considerations: ['High risk', 'Illiquid', 'Valuation uncertainty', 'Lock-up periods'],
    cta: 'View Opportunities',
  },
  {
    slug: 'fixed-deposits',
    name: 'Fixed Deposits',
    shortDescription: 'Guaranteed return products from trusted banks and NBFCs.',
    icon: 'banknote',
    features: ['Assured returns', 'Flexible tenures', 'Senior citizen rates', 'Loan against FD'],
    suitableFor: [
      'Capital preservation',
      'Risk-averse investors',
      'Short-term goals',
      'Emergency fund',
    ],
    considerations: [
      'Inflation risk',
      'Tax on interest',
      'Premature withdrawal penalty',
      'Lower returns',
    ],
    cta: 'Compare FD Rates',
  },
] as const;

export const CALCULATORS = [
  {
    slug: 'sip',
    name: 'SIP Calculator',
    description: 'Calculate returns on Systematic Investment Plans',
    icon: 'trending-up',
    category: 'Mutual Funds',
  },
  {
    slug: 'lumpsum',
    name: 'Lumpsum Calculator',
    description: 'Calculate returns on one-time investments',
    icon: 'coins',
    category: 'Mutual Funds',
  },
  {
    slug: 'step-up-sip',
    name: 'Step-Up SIP Calculator',
    description: 'Calculate SIP with annual increment',
    icon: 'arrow-up-right',
    category: 'Mutual Funds',
  },
  {
    slug: 'swp',
    name: 'SWP Calculator',
    description: 'Calculate Systematic Withdrawal Plan',
    icon: 'arrow-down-right',
    category: 'Retirement',
  },
  {
    slug: 'stp',
    name: 'STP Calculator',
    description: 'Calculate Systematic Transfer Plan',
    icon: 'repeat',
    category: 'Mutual Funds',
  },
  {
    slug: 'xirr',
    name: 'XIRR Calculator',
    description: 'Calculate actual returns on irregular cash flows',
    icon: 'calculator',
    category: 'Advanced',
  },
  {
    slug: 'retirement',
    name: 'Retirement Calculator',
    description: 'Plan your retirement corpus and withdrawals',
    icon: 'user',
    category: 'Goals',
  },
  {
    slug: 'child-education',
    name: 'Child Education Planner',
    description: "Plan for your child's education expenses",
    icon: 'graduation-cap',
    category: 'Goals',
  },
  {
    slug: 'marriage-goal',
    name: 'Marriage Goal Planner',
    description: 'Plan for marriage expenses',
    icon: 'heart',
    category: 'Goals',
  },
  {
    slug: 'financial-goal',
    name: 'Financial Goal Planner',
    description: 'Plan for any financial goal',
    icon: 'target',
    category: 'Goals',
  },
  {
    slug: 'inflation',
    name: 'Inflation Calculator',
    description: 'Calculate future value adjusted for inflation',
    icon: 'dollar-sign',
    category: 'Planning',
  },
  {
    slug: 'mf-vs-fd',
    name: 'MF vs FD Calculator',
    description: 'Compare mutual fund vs fixed deposit returns',
    icon: 'scale',
    category: 'Comparison',
  },
] as const;

export const FUND_CATEGORIES = [
  {
    slug: 'equity',
    name: 'Equity Funds',
    description: 'Invest primarily in stocks for long-term capital appreciation.',
    risk: 'High',
    icon: 'trending-up',
  },
  {
    slug: 'debt',
    name: 'Debt Funds',
    description: 'Invest in fixed income securities for stable returns.',
    risk: 'Low to Moderate',
    icon: 'shield',
  },
  {
    slug: 'hybrid',
    name: 'Hybrid Funds',
    description: 'Balanced mix of equity and debt for moderate growth.',
    risk: 'Moderate',
    icon: 'scale',
  },
  {
    slug: 'index',
    name: 'Index Funds',
    description: 'Low-cost funds tracking market indices like Nifty 50.',
    risk: 'Market Linked',
    icon: 'bar-chart',
  },
  {
    slug: 'tax-saving',
    name: 'Tax Saving Funds (ELSS)',
    description: 'Equity funds with 3-year lock-in under Section 80C.',
    risk: 'High',
    icon: 'file-text',
  },
] as const;

export const KNOWLEDGE_CATEGORIES = [
  {
    slug: 'mutual-funds',
    name: 'Mutual Funds',
    description: 'Learn about mutual fund types, selection, and investing.',
    icon: 'pie-chart',
  },
  {
    slug: 'sip',
    name: 'SIP',
    description: 'Everything about Systematic Investment Plans.',
    icon: 'trending-up',
  },
  {
    slug: 'investing-basics',
    name: 'Investing Basics',
    description: 'Fundamental concepts for new investors.',
    icon: 'book-open',
  },
  {
    slug: 'personal-finance',
    name: 'Personal Finance',
    description: 'Budgeting, saving, and money management.',
    icon: 'wallet',
  },
  {
    slug: 'tax-planning',
    name: 'Tax Planning',
    description: 'Tax-efficient investment strategies.',
    icon: 'file-text',
  },
  {
    slug: 'retirement-planning',
    name: 'Retirement Planning',
    description: 'Build a secure retirement corpus.',
    icon: 'user',
  },
  {
    slug: 'financial-planning',
    name: 'Financial Planning',
    description: 'Comprehensive financial life planning.',
    icon: 'target',
  },
] as const;

export const MARKET_UPDATE_CATEGORIES = [
  {
    slug: 'market-news',
    name: 'Market News',
    description: 'Latest developments in financial markets.',
    icon: 'globe',
  },
  {
    slug: 'mutual-fund-updates',
    name: 'Mutual Fund Updates',
    description: 'NAV changes, new fund offers, and fund news.',
    icon: 'pie-chart',
  },
  {
    slug: 'economic-updates',
    name: 'Economic Updates',
    description: 'Macroeconomic indicators and policy changes.',
    icon: 'bar-chart',
  },
  {
    slug: 'market-insights',
    name: 'Market Insights',
    description: 'Expert analysis and market perspectives.',
    icon: 'lightbulb',
  },
  {
    slug: 'investor-education',
    name: 'Investor Education',
    description: 'Educational content for informed investing.',
    icon: 'graduation-cap',
  },
] as const;

export const INVESTMENT_INTERESTS = [
  { value: 'mutual-funds', label: 'Mutual Funds' },
  { value: 'sip', label: 'SIP' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'bonds', label: 'Bonds' },
  { value: 'pms', label: 'PMS' },
  { value: 'aif', label: 'AIF' },
  { value: 'unlisted-equity', label: 'Unlisted Equity' },
  { value: 'fixed-deposits', label: 'Fixed Deposits' },
  { value: 'general-enquiry', label: 'General Enquiry' },
] as const;

export const DISCLAIMERS = {
  general:
    'Investments in securities market are subject to market risks. Read all scheme related documents carefully before investing.',
  calculator:
    'Calculator results are illustrative only. Actual returns vary based on market conditions. Past performance does not guarantee future results.',
  fundData:
    'Fund data shown is for educational purposes only and may not reflect current values. Not a recommendation to buy or sell.',
  noGuarantee:
    'FinRev Solutions does not guarantee any returns on investments. All investments carry risk including potential loss of principal.',
  advisory:
    'This website provides general information only and does not constitute personalized investment advice. Consult a qualified advisor before making investment decisions.',
} as const;
