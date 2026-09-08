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

export const SAMPLE_MARKET_UPDATES: MarketUpdate[] = [
  {
    slug: 'market-outlook-q2-2024',
    title: 'Market Outlook Q2 2024: Navigating Volatility',
    category: 'Market News',
    author: 'FinRev Research Team',
    date: '2024-04-01',
    readTime: 8,
    description:
      'Analysis of key market drivers for Q2 2024 including election impact, global cues, and sector rotation strategies.',
    tags: ['market-outlook', 'q2-2024', 'volatility', 'elections'],
    featured: true,
    content: `
      <h2>Executive Summary</h2>
      <p>As we enter Q2 2024, Indian equity markets face a unique confluence of domestic and global factors. The upcoming general elections, evolving global interest rate expectations, and corporate earnings trajectory will be key drivers.</p>
      
      <h2>Key Themes</h2>
      <ul>
        <li><strong>Election Dynamics:</strong> Historical data suggests markets typically rally pre-elections and consolidate post-results.</li>
        <li><strong>Global Rate Cycle:</strong> Potential Fed rate cuts in H2 2024 could support emerging market flows.</li>
        <li><strong>Earnings Growth:</strong> Nifty earnings estimated to grow 15-18% in FY25.</li>
      </ul>
      
      <h2>Sectoral Preferences</h2>
      <p>Financials, capital goods, and consumption sectors appear well-positioned. IT sector faces near-term headwinds from global demand uncertainty.</p>
      
      <h2>Investment Strategy</h2>
      <p>Maintain balanced allocation with slight overweight on domestic cyclicals. Use market dips to add quality names. SIPs remain the preferred route for equity allocation.</p>
      
      <p><em>Disclaimer: This is educational content based on historical patterns and analyst views. Not a recommendation to buy or sell.</em></p>
    `,
  },
  {
    slug: 'nifty-valuation-analysis',
    title: 'Nifty 50 Valuation Analysis: Are Markets Expensive?',
    category: 'Market Insights',
    author: 'FinRev Research Team',
    date: '2024-03-15',
    readTime: 10,
    description:
      'Deep dive into Nifty 50 P/E, P/B, and earnings yield metrics compared to historical averages and global peers.',
    tags: ['valuation', 'nifty-50', 'pe-ratio', 'market-analysis'],
    featured: true,
    content: `
      <h2>Current Valuation Snapshot</h2>
      <p>As of March 2024, Nifty 50 trades at approximately 22x trailing P/E, modestly above the 15-year median of 20x. However, forward P/E based on FY25 estimates stands at around 19x.</p>
      
      <h2>Key Metrics</h2>
      <ul>
        <li><strong>Trailing P/E:</strong> ~22x (median: 20x)</li>
        <li><strong>Forward P/E (FY25E):</strong> ~19x</li>
        <li><strong>P/B Ratio:</strong> ~3.2x</li>
        <li><strong>Earnings Yield:</strong> ~4.5% vs 10Y G-sec ~7.1%</li>
      </ul>
      
      <h2>Interpretation</h2>
      <p>Valuations are not cheap but not excessively expensive either. The premium to historical averages is justified by stronger earnings growth trajectory, improved corporate balance sheets, and structural economic reforms.</p>
      
      <h2>What This Means for Investors</h2>
      <p>Lump sum investors may consider staggered deployment. SIP investors should continue uninterrupted. Focus on quality and reasonable valuations within portfolios.</p>
    `,
  },
  {
    slug: 'new-fund-offers-march-2024',
    title: 'New Fund Offers (NFOs) in March 2024: What You Need to Know',
    category: 'Mutual Fund Updates',
    author: 'FinRev Research Team',
    date: '2024-03-10',
    readTime: 7,
    description:
      'Review of recent NFOs across categories - thematic, sectoral, and passive funds. Key factors to evaluate before investing.',
    tags: ['nfo', 'mutual-funds', 'new-funds', 'march-2024'],
    featured: false,
    content: `
      <h2>March 2024 NFO Overview</h2>
      <p>Several AMCs launched new funds in March 2024, including thematic funds (manufacturing, green energy), sectoral funds (banking, IT), and passive index funds.</p>
      
      <h2>Key Considerations Before Investing in NFOs</h2>
      <ol>
        <li><strong>Track Record:</strong> NFOs have no performance history. Evaluate the AMC's expertise in the strategy.</li>
        <li><strong>Portfolio Overlap:</strong> Check if the NFO duplicates existing holdings.</li>
        <li><strong>Expense Ratio:</strong> NFOs often launch at higher expense ratios that may reduce later.</li>
        <li><strong>Investment Objective:</strong> Ensure the fund's mandate aligns with your goals.</li>
      </ol>
      
      <h2>Our View</h2>
      <p>Most investors are better served by existing funds with proven track records. Consider NFOs only if they offer a genuinely unique strategy not available in existing funds.</p>
    `,
  },
  {
    slug: 'rbi-monetary-policy-feb-2024',
    title: 'RBI Monetary Policy February 2024: Status Quo Maintained',
    category: 'Economic Updates',
    author: 'FinRev Research Team',
    date: '2024-02-08',
    readTime: 6,
    description:
      'RBI keeps repo rate unchanged at 6.5%. Analysis of inflation outlook, growth projections, and implications for debt fund investors.',
    tags: ['rbi', 'monetary-policy', 'repo-rate', 'inflation', 'debt-funds'],
    featured: false,
    content: `
      <h2>Policy Decision</h2>
      <p>The RBI Monetary Policy Committee (MPC) voted to keep the repo rate unchanged at 6.5% for the sixth consecutive meeting, maintaining a 'withdrawal of accommodation' stance.</p>
      
      <h2>Key Takeaways</h2>
      <ul>
        <li><strong>Inflation Outlook:</strong> CPI inflation projected at 5.4% for FY24 and 4.5% for FY25.</li>
        <li><strong>Growth Projection:</strong> Real GDP growth estimated at 7% for FY25.</li>
        <li><strong>Liquidity Management:</strong> RBI to continue variable rate reverse repo auctions.</li>
      </ul>
      
      <h2>Implications for Debt Fund Investors</h2>
      <p>Status quo on rates is positive for medium-to-long duration debt funds. Short-term funds continue to offer attractive risk-adjusted returns. The yield curve remains flat, favoring roll-down strategies.</p>
    `,
  },
  {
    slug: 'sip-flows-january-2024',
    title: 'SIP Flows Hit Record High in January 2024',
    category: 'Mutual Fund Updates',
    author: 'FinRev Research Team',
    date: '2024-02-12',
    readTime: 5,
    description:
      'Monthly SIP contributions cross ₹20,000 crore for the first time. Analysis of retail participation trends and category-wise flows.',
    tags: ['sip', 'flows', 'mutual-funds', 'retail-investors'],
    featured: true,
    content: `
      <h2>Record SIP Inflows</h2>
      <p>SIP contributions reached ₹20,500 crore in January 2024, marking the highest monthly inflow ever. Total SIP AUM crossed ₹9 lakh crore.</p>
      
      <h2>Key Trends</h2>
      <ul>
        <li>SIP registrations: 4.2 crore active SIPs</li>
        <li>Average ticket size: ~₹2,700 per SIP</li>
        <li>Equity funds dominate: 85% of flows</li>
        <li>New SIP registrations: 30+ lakh in January</li>
      </ul>
      
      <h2>What This Indicates</h2>
      <p>Growing financial awareness, digital onboarding, and consistent market returns are driving retail participation. The SIP culture is becoming mainstream across age groups and geographies.</p>
    `,
  },
  {
    slug: 'budget-2024-impact-investors',
    title: 'Interim Budget 2024: Key Takeaways for Investors',
    category: 'Market News',
    author: 'FinRev Research Team',
    date: '2024-02-01',
    readTime: 8,
    description:
      'Analysis of tax proposals, capital expenditure push, fiscal consolidation, and sectoral implications from the Interim Budget.',
    tags: ['budget-2024', 'tax', 'capex', 'fiscal-deficit', 'sectors'],
    featured: false,
    content: `
      <h2>Budget Highlights</h2>
      <p>The Interim Budget 2024 focused on fiscal consolidation (targeting 5.1% fiscal deficit for FY25), continued capex push (₹11.1 lakh crore), and no major tax changes.</p>
      
      <h2>Investor Implications</h2>
      <ul>
        <li><strong>No Tax Changes:</strong> Continuity for equity and debt taxation.</li>
        <li><strong>Capex Boost:</strong> Positive for capital goods, infrastructure, defence, railways.</li>
        <li><strong>Housing:</strong> Extension of tax benefits for affordable housing.</li>
        <li><strong>Green Energy:</strong> Support for rooftop solar, EV ecosystem.</li>
      </ul>
      
      <h2>Portfolio Positioning</h2>
      <p>Budget is broadly market-neutral to positive. Continue with existing allocation. Consider incremental exposure to capex beneficiaries.</p>
    `,
  },
  {
    slug: 'debt-fund-taxation-changes',
    title: "Understanding Debt Fund Taxation: What Changed and What Didn't",
    category: 'Investor Education',
    author: 'FinRev Research Team',
    date: '2024-01-20',
    readTime: 9,
    description:
      'Clear explanation of debt fund taxation rules post-April 2023 changes. Impact on liquid, ultra-short, corporate bond, and gilt funds.',
    tags: ['debt-funds', 'taxation', 'capital-gains', 'indexation', 'ltcg'],
    featured: true,
    content: `
      <h2>The Change</h2>
      <p>From April 1, 2023, debt mutual funds (with less than 35% equity exposure) no longer enjoy indexation benefit on long-term capital gains. All gains are taxed at slab rate regardless of holding period.</p>
      
      <h2>Impact by Category</h2>
      <table>
        <thead>
          <tr><th>Fund Type</th><th>Pre-April 2023</th><th>Post-April 2023</th></tr>
        </thead>
        <tbody>
          <tr><td>Liquid/Ultra-short</td><td>Slab rate (STCG)</td><td>Slab rate (no change)</td></tr>
          <tr><td>Corporate Bond</td><td>20% with indexation (LTCG)</td><td>Slab rate (no indexation)</td></tr>
          <tr><td>Gilt Funds</td><td>20% with indexation (LTCG)</td><td>Slab rate (no indexation)</td></tr>
          <tr><td>Banking & PSU</td><td>20% with indexation (LTCG)</td><td>Slab rate (no indexation)</td></tr>
        </tbody>
      </table>
      
      <h2>Planning Implications</h2>
      <p>For investors in higher tax brackets, the post-tax return advantage of debt funds over FDs has narrowed. Consider: shorter duration funds, target maturity funds for predictable outcomes, and arbitrage funds for tax efficiency.</p>
    `,
  },
  {
    slug: 'elss-vs-ppf-tax-saving',
    title: 'ELSS vs PPF: Which is Better for Tax Saving Under Section 80C?',
    category: 'Tax Planning',
    author: 'FinRev Research Team',
    date: '2024-01-10',
    readTime: 8,
    description:
      'Compare ELSS and PPF across returns, lock-in, risk, tax treatment, and suitability for different investor profiles.',
    tags: ['elss', 'ppf', '80c', 'tax-saving', 'comparison'],
    featured: false,
    content: `
      <h2>Quick Comparison</h2>
      <table>
        <thead>
          <tr><th>Parameter</th><th>ELSS</th><th>PPF</th></tr>
        </thead>
        <tbody>
          <tr><td>Returns</td><td>Market-linked (12-15% historical)</td><td>Fixed (~7.1% currently)</td></tr>
          <tr><td>Lock-in</td><td>3 years</td><td>15 years (partial withdrawal from year 7)</td></tr>
          <tr><td>Risk</td><td>High (equity)</td><td>Sovereign guarantee</td></tr>
          <tr><td>Tax on Returns</td><td>LTCG 10% above ₹1L</td><td>Tax-free (EEE)</td></tr>
          <tr><td>Max Investment</td><td>No limit (80C up to ₹1.5L)</td><td>₹1.5L per year</td></tr>
        </tbody>
      </table>
      
      <h2>When to Choose ELSS</h2>
      <ul>
        <li>Long-term horizon (5+ years)</li>
        <li>Higher risk appetite</li>
        <li>Goal: wealth creation with tax benefit</li>
      </ul>
      
      <h2>When to Choose PPF</h2>
      <ul>
        <li>Risk-averse, capital protection priority</li>
        <li>Very long horizon (15+ years)</li>
        <li>Tax-free corpus for retirement/children</li>
      </ul>
      
      <h2>Optimal Strategy</h2>
      <p>Many investors benefit from allocating to both - ELSS for growth, PPF for stability. Split based on risk profile and goal timelines.</p>
    `,
  },
  {
    slug: 'market-volatility-investor-guide',
    title: "Market Volatility: An Investor's Guide to Staying the Course",
    category: 'Investor Education',
    author: 'FinRev Research Team',
    date: '2024-01-05',
    readTime: 7,
    description:
      'Practical strategies to handle market corrections: asset allocation, SIP discipline, rebalancing, and avoiding behavioral pitfalls.',
    tags: ['volatility', 'correction', 'behavioral-finance', 'sip', 'asset-allocation'],
    featured: false,
    content: `
      <h2>Understanding Volatility</h2>
      <p>Market corrections of 10-20% are normal and occur almost every year. Bear markets (20%+ decline) happen every 3-5 years. Volatility is the price of admission for equity returns.</p>
      
      <h2>What Not to Do</h2>
      <ul>
        <li>Stop SIPs during downturns</li>
        <li>Switch to cash waiting for bottom</li>
        <li>Check portfolio daily</li>
        <li>Follow social media predictions</li>
      </ul>
      
      <h2>What to Do</h2>
      <ul>
        <li>Continue SIPs - they buy more units at lower prices</li>
        <li>Rebalance if allocation drifts >5%</li>
        <li>Review asset allocation annually</li>
        <li>Focus on goals, not daily NAVs</li>
      </ul>
      
      <h2>Historical Perspective</h2>
      <p>Every past correction has been followed by recovery and new highs. The Indian market has rewarded patient investors through multiple cycles - 2008, 2011, 2015, 2020, 2022.</p>
    `,
  },
];

export function getMarketUpdatesByCategory(category: string): MarketUpdate[] {
  return SAMPLE_MARKET_UPDATES.filter((update) => update.category === category);
}

export function getMarketUpdateBySlug(slug: string): MarketUpdate | undefined {
  return SAMPLE_MARKET_UPDATES.find((update) => update.slug === slug);
}

export function getFeaturedMarketUpdates(): MarketUpdate[] {
  return SAMPLE_MARKET_UPDATES.filter((update) => update.featured);
}

export function getAllMarketCategories(): string[] {
  return [...new Set(SAMPLE_MARKET_UPDATES.map((update) => update.category))];
}

export function getAllMarketUpdates(): MarketUpdate[] {
  return SAMPLE_MARKET_UPDATES;
}
