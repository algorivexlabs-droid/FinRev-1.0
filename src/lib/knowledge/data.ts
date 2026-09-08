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
}

export const SAMPLE_ARTICLES: Article[] = [
  {
    slug: 'what-are-mutual-funds',
    title: "What Are Mutual Funds? A Beginner's Guide",
    category: 'Mutual Funds',
    author: 'FinRev Research Team',
    date: '2024-01-15',
    readTime: 8,
    description:
      'Understand the basics of mutual funds, how they work, and why they are a popular investment choice for millions of Indians.',
    tags: ['basics', 'beginner', 'mutual-funds'],
    featured: true,
    content: `
      <h2>Introduction</h2>
      <p>Mutual funds are investment vehicles that pool money from multiple investors to purchase a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who make investment decisions on behalf of the investors.</p>
      
      <h2>How Mutual Funds Work</h2>
      <p>When you invest in a mutual fund, you buy units of the fund. The value of these units is called the Net Asset Value (NAV), which changes daily based on the performance of the underlying securities.</p>
      
      <h2>Types of Mutual Funds</h2>
      <ul>
        <li><strong>Equity Funds:</strong> Invest primarily in stocks</li>
        <li><strong>Debt Funds:</strong> Invest in fixed-income securities</li>
        <li><strong>Hybrid Funds:</strong> Mix of equity and debt</li>
        <li><strong>Index Funds:</strong> Track a market index</li>
        <li><strong>Tax Saving Funds (ELSS):</strong> Equity funds with 3-year lock-in under Section 80C</li>
      </ul>
      
      <h2>Benefits of Mutual Funds</h2>
      <p>Mutual funds offer diversification, professional management, liquidity, and accessibility with low minimum investment amounts. They are regulated by SEBI, providing a layer of investor protection.</p>
      
      <h2>Risks to Consider</h2>
      <p>All mutual fund investments carry market risk. The value of your investment can go up or down. Past performance does not guarantee future results.</p>
    `,
  },
  {
    slug: 'how-to-choose-mutual-fund',
    title: 'How to Choose the Right Mutual Fund for Your Goals',
    category: 'Mutual Funds',
    author: 'FinRev Research Team',
    date: '2024-02-20',
    readTime: 10,
    description:
      'Learn the key factors to consider when selecting a mutual fund that aligns with your financial objectives and risk tolerance.',
    tags: ['selection', 'goals', 'risk-profile'],
    featured: false,
    content: `
      <h2>Define Your Investment Goal</h2>
      <p>Before selecting a fund, clearly define what you are investing for - retirement, child's education, buying a house, or wealth creation. Your goal determines the appropriate fund category.</p>
      
      <h2>Assess Your Risk Tolerance</h2>
      <p>Risk tolerance is your ability and willingness to endure fluctuations in the value of your investments. Equity funds carry higher risk but potential for higher returns, while debt funds are more stable.</p>
      
      <h2>Consider Time Horizon</h2>
      <p>Equity funds are suitable for 5+ years, hybrid funds for 3-5 years, and debt funds for shorter periods. Matching fund category to your time horizon is crucial.</p>
      
      <h2>Evaluate Fund Performance</h2>
      <p>Look at 3, 5, and 10-year returns compared to the benchmark and category average. Consistency matters more than recent outperformance.</p>
      
      <h2>Check Expense Ratio</h2>
      <p>Lower expense ratios mean more of your money stays invested. Compare within the same category - direct plans have lower expense ratios than regular plans.</p>
    `,
  },
  {
    slug: 'what-is-sip',
    title: 'What is SIP? Systematic Investment Plan Explained',
    category: 'SIP',
    author: 'FinRev Research Team',
    date: '2024-01-25',
    readTime: 7,
    description:
      'Learn how Systematic Investment Plans work, their benefits, and why they are the preferred way to invest in mutual funds.',
    tags: ['sip', 'systematic-investing', 'beginners'],
    featured: true,
    content: `
      <h2>What is a SIP?</h2>
      <p>A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly in a mutual fund scheme. It brings discipline to investing and eliminates the need to time the market.</p>
      
      <h2>How SIP Works</h2>
      <p>You choose a mutual fund, investment amount, and frequency (usually monthly). The amount is auto-debited from your bank account and units are allotted at the prevailing NAV.</p>
      
      <h2>Benefits of SIP</h2>
      <ul>
        <li><strong>Rupee Cost Averaging:</strong> You buy more units when prices are low and fewer when prices are high</li>
        <li><strong>Power of Compounding:</strong> Long-term regular investments grow exponentially</li>
        <li><strong>Discipline:</strong> Automated investing removes emotional decision-making</li>
        <li><strong>Affordability:</strong> Start with as low as ₹500 per month</li>
        <li><strong>Flexibility:</strong> Increase, decrease, or pause SIP anytime</li>
      </ul>
      
      <h2>SIP vs Lump Sum</h2>
      <p>SIP is ideal for regular income earners and volatile markets. Lump sum may be suitable when you have a large corpus and market valuations are attractive.</p>
    `,
  },
  {
    slug: 'step-up-sip-benefits',
    title: 'Step-Up SIP: Accelerate Your Wealth Creation',
    category: 'SIP',
    author: 'FinRev Research Team',
    date: '2024-03-10',
    readTime: 6,
    description:
      'Discover how increasing your SIP amount annually can significantly boost your long-term corpus.',
    tags: ['step-up-sip', 'wealth-creation', 'salary-hike'],
    featured: false,
    content: `
      <h2>What is Step-Up SIP?</h2>
      <p>A Step-Up SIP allows you to increase your SIP amount by a fixed percentage or amount at regular intervals, typically annually. This aligns your investments with your growing income.</p>
      
      <h2>Why Step-Up SIP Makes Sense</h2>
      <p>As your salary increases, your savings capacity grows. A Step-Up SIP ensures your investments keep pace with your earning potential, significantly enhancing your final corpus.</p>
      
      <h2>Example Impact</h2>
      <p>Investing ₹10,000/month at 12% for 20 years gives ~₹1 Cr. With 10% annual step-up, the same investment grows to ~₹2.3 Cr - more than double!</p>
    `,
  },
  {
    slug: 'investing-basics-compounding',
    title: 'The Power of Compounding: Why Time is Your Greatest Ally',
    category: 'Investing Basics',
    author: 'FinRev Research Team',
    date: '2024-02-05',
    readTime: 8,
    description:
      'Understand how compounding works and why starting early can make a massive difference to your wealth.',
    tags: ['compounding', 'time-value', 'long-term'],
    featured: true,
    content: `
      <h2>What is Compounding?</h2>
      <p>Compounding is the process where your investment earnings generate their own earnings. It creates a snowball effect where your wealth grows at an accelerating rate over time.</p>
      
      <h2>The Time Factor</h2>
      <p>Starting early is more important than investing large amounts. ₹5,000/month from age 25 to 60 at 12% gives ~₹3.2 Cr. The same amount from age 35 gives only ~₹95 Lakhs.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li>Start as early as possible</li>
        <li>Stay invested for the long term</li>
        <li>Don't interrupt the compounding process</li>
        <li>Reinvest all returns</li>
      </ul>
    `,
  },
  {
    slug: 'emergency-fund-importance',
    title: 'Building an Emergency Fund: Your Financial Safety Net',
    category: 'Personal Finance',
    author: 'FinRev Research Team',
    date: '2024-02-18',
    readTime: 6,
    description:
      'Learn why an emergency fund is essential, how much you need, and where to park it for safety and accessibility.',
    tags: ['emergency-fund', 'financial-planning', 'liquidity'],
    featured: false,
    content: `
      <h2>What is an Emergency Fund?</h2>
      <p>An emergency fund is a readily accessible pool of money set aside to cover unexpected expenses or income loss. It prevents you from dipping into long-term investments or taking high-interest debt.</p>
      
      <h2>How Much Do You Need?</h2>
      <p>Typically 6-12 months of essential expenses. For salaried employees, 6 months may suffice. For self-employed or single-income households, 12 months is safer.</p>
      
      <h2>Where to Park Emergency Funds</h2>
      <ul>
        <li>Savings account (instant access)</li>
        <li>Liquid funds (better returns, 1-day redemption)</li>
        <li>Ultra-short duration funds (slightly higher returns)</li>
      </ul>
      <p>Avoid equity funds, fixed deposits with lock-ins, or illiquid assets for emergency funds.</p>
    `,
  },
  {
    slug: 'tax-saving-investments',
    title: 'Tax-Saving Investments Under Section 80C',
    category: 'Tax Planning',
    author: 'FinRev Research Team',
    date: '2024-03-01',
    readTime: 9,
    description:
      'Explore all Section 80C investment options: ELSS, PPF, NSC, life insurance, and more. Compare returns, lock-ins, and tax treatment.',
    tags: ['80c', 'tax-saving', 'elss', 'ppf'],
    featured: true,
    content: `
      <h2>Section 80C Overview</h2>
      <p>Section 80C of the Income Tax Act allows deductions up to ₹1.5 lakh per financial year for specified investments and expenses.</p>
      
      <h2>Key Options</h2>
      <table>
        <thead>
          <tr><th>Instrument</th><th>Return</th><th>Lock-in</th><th>Tax on Returns</th><th>Risk</th></tr>
        </thead>
        <tbody>
          <tr><td>ELSS</td><td>Market-linked</td><td>3 years</td><td>LTCG 10% above ₹1L</td><td>High</td></tr>
          <tr><td>PPF</td><td>~7.1%</td><td>15 years</td><td>Tax-free</td><td>Very Low</td></tr>
          <tr><td>NSC</td><td>~7.7%</td><td>5 years</td><td>Taxable</td><td>Very Low</td></tr>
          <tr><td>Tax-saver FD</td><td>~6-7%</td><td>5 years</td><td>Taxable</td><td>Very Low</td></tr>
          <tr><td>Life Insurance</td><td>Varies</td><td>Policy term</td><td>Tax-free (conditions)</td><td>Low</td></tr>
        </tbody>
      </table>
      
      <h2>Choosing the Right Mix</h2>
      <p>Diversify across instruments based on your risk profile. ELSS offers highest potential returns but carries market risk. PPF provides guaranteed tax-free returns with long lock-in.</p>
    `,
  },
  {
    slug: 'retirement-planning-steps',
    title: 'Retirement Planning: A Step-by-Step Guide',
    category: 'Retirement Planning',
    author: 'FinRev Research Team',
    date: '2024-03-15',
    readTime: 12,
    description:
      'Comprehensive guide to planning your retirement: estimating expenses, calculating corpus, choosing investments, and monitoring progress.',
    tags: ['retirement', 'corpus', 'pension', 'swp'],
    featured: true,
    content: `
      <h2>Step 1: Estimate Retirement Expenses</h2>
      <p>Calculate your current monthly expenses and adjust for inflation. Consider healthcare, lifestyle, travel, and family obligations. A common rule: 70-80% of pre-retirement expenses.</p>
      
      <h2>Step 2: Calculate Required Corpus</h2>
      <p>Use the 4% withdrawal rule or calculate based on your expected lifespan and post-retirement returns. Factor in inflation during retirement years.</p>
      
      <h2>Step 3: Assess Current Savings</h2>
      <p>Evaluate EPF, PPF, NPS, mutual funds, and other assets. Project their value at retirement using realistic return assumptions.</p>
      
      <h2>Step 4: Determine Monthly Investment Needed</h2>
      <p>Use a retirement calculator to find the monthly SIP required to bridge the gap. Consider step-up SIPs to align with salary growth.</p>
      
      <h2>Step 5: Choose Appropriate Investments</h2>
      <p>Equity-oriented for accumulation phase (20+ years), balanced as you approach retirement, debt-heavy during withdrawal phase. NPS, EPF, mutual funds, and PPF all have roles.</p>
    `,
  },
  {
    slug: 'financial-planning-process',
    title: 'The Financial Planning Process: From Goals to Action',
    category: 'Financial Planning',
    author: 'FinRev Research Team',
    date: '2024-04-01',
    readTime: 10,
    description:
      'Understand the comprehensive financial planning process: goal setting, risk profiling, asset allocation, implementation, and review.',
    tags: ['financial-planning', 'goals', 'asset-allocation', 'review'],
    featured: false,
    content: `
      <h2>1. Goal Setting</h2>
      <p>Identify and quantify all financial goals - short-term (0-3 years), medium-term (3-7 years), and long-term (7+ years). Assign priority and timeline to each.</p>
      
      <h2>2. Risk Profiling</h2>
      <p>Assess your risk capacity (financial ability to take risk) and risk tolerance (psychological comfort with volatility). This determines your asset allocation.</p>
      
      <h2>3. Asset Allocation</h2>
      <p>Divide investments across equity, debt, gold, and cash based on goals and risk profile. Rebalance periodically to maintain target allocation.</p>
      
      <h2>4. Product Selection</h2>
      <p>Choose specific funds, deposits, and insurance products that fit your allocation. Prefer low-cost, tax-efficient, and transparent options.</p>
      
      <h2>5. Implementation & Review</h2>
      <p>Execute the plan systematically. Review annually or when life circumstances change - marriage, child birth, job change, inheritance, etc.</p>
    `,
  },
];

export function getArticlesByCategory(category: string): Article[] {
  return SAMPLE_ARTICLES.filter((article) => article.category === category);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return SAMPLE_ARTICLES.find((article) => article.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return SAMPLE_ARTICLES.filter((article) => article.featured);
}

export function getAllCategories(): string[] {
  return [...new Set(SAMPLE_ARTICLES.map((article) => article.category))];
}

export function getAllArticles(): Article[] {
  return SAMPLE_ARTICLES;
}
