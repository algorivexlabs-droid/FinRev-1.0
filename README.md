# FinRev Solutions 1.0

Premium financial services website for FinRev Solutions.

## Project Overview

**Brand:** FinRev Solutions  
**Founder:** Panchanan Kumar (Mutual Fund Distributor, ARN-195797)  
**Tagline:** Secure Today. Stronger Tomorrow.  
**Website:** finrevsolutions.com

## Pages

- **Home** - Hero, services overview, calculators preview, knowledge center, market updates, CTA
- **About** - Company story, mission/vision, values, advisor profile, why choose us
- **Services** - 7 services (Mutual Funds, Insurance, Bonds, PMS, AIF, Unlisted Equity, Fixed Deposits)
- **Calculators** - 12 financial calculators (SIP, Lumpsum, Step-Up SIP, SWP, STP, XIRR, Retirement, Child Education, Marriage Goal, Financial Goal, Inflation, MF vs FD)
- **Funds** - Fund categories and listings
- **Knowledge Center** - Educational articles by category
- **Market Updates** - Market news and insights
- **Contact** - Contact form and information
- **Privacy Policy** - Legal page
- **Terms & Conditions** - Legal page
- **Disclaimer** - Legal page
- **Custom 404** - Friendly error page

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI primitives
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Charts:** Recharts
- **Font:** Inter (sans), Plus Jakarta Sans (display), JetBrains Mono (mono)
- **Linting:** ESLint + Prettier
- **Testing:** Vitest + Playwright

## Getting Started

### Prerequisites

- Node.js >= 20.0.0
- npm >= 9.0.0

### Installation

```bash
cd "F:\Self\FinRev\FinRev 1.0"
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Build

```bash
npm run build
```

### Type Check

```bash
npm run typecheck
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run format
```

### Test

```bash
npm run test          # Unit tests
npm run test:watch    # Watch mode
npm run test:e2e      # E2E tests
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (marketing)/       # Marketing route group
│   │   ├── about/
│   │   ├── calculators/
│   │   ├── services/
│   │   ├── funds/
│   │   ├── knowledge-center/
│   │   ├── market-updates/
│   │   ├── contact/
│   │   ├── privacy-policy/
│   │   ├── terms-conditions/
│   │   ├── disclaimer/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── ui/                # Base UI components (Button, Card, Badge, etc.)
│   ├── layout/            # Layout components (Header, Footer, etc.)
│   ├── navigation/        # Navigation components
│   ├── hero/              # Hero section components
│   ├── sections/          # Reusable section components
│   └── providers/         # Context providers (Theme, Analytics)
├── lib/
│   └── utils/             # Utility functions (cn, seo, format, constants)
├── styles/
│   ├── globals.css        # Global styles + Tailwind layers
│   ├── variables.css      # CSS custom properties (design tokens)
│   └── typography.css     # Prose/typography styles
└── types/                 # TypeScript type definitions
```

## Design System

### Colors

- **Brand:** Professional blue (#0066cc)
- **Accent:** Green (#00a86b) for positive actions
- **Neutral:** Gray scale for text and backgrounds
- **Semantic:** Error (red), Warning (amber)

### Typography

- **Sans:** Inter Variable - body text
- **Display:** Plus Jakarta Sans Variable - headings
- **Mono:** JetBrains Mono Variable - code/numbers

### Spacing

4px base unit (--space-1 = 0.25rem)

### Border Radius

--radius-sm (4px) to --radius-2xl (24px) + --radius-full

### Shadows

Subtle, premium shadows (--shadow-sm to --shadow-xl)

### Breakpoints

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1440px

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values:

```bash
cp .env.example .env.local
```

### Required for Production

- `NEXT_PUBLIC_SITE_URL` - Production URL
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `RESEND_API_KEY` - For contact form emails
- `CONTACT_EMAIL_TO` - Contact form recipient
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Cloudflare Turnstile (spam protection)
- `TURNSTILE_SECRET_KEY` - Turnstile secret

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

## Phase 1 - Foundation (Complete)

- [x] Project initialization
- [x] Next.js 14 + TypeScript setup
- [x] Tailwind CSS configuration
- [x] Basic folder architecture
- [x] Global CSS foundation
- [x] Design tokens / CSS variables
- [x] Typography system
- [x] Reusable UI components (Button, Card, Badge, Accordion, Tabs, etc.)
- [x] Layout components (Header, Footer, MobileDrawer, SkipLink)
- [x] Theme provider (light/dark/system)
- [x] SEO metadata configuration
- [x] Responsive container and breakpoints
- [x] .env.example
- [x] README documentation

## Phase 2+ (Future)

- Complete all page implementations
- Calculator functionality
- Content management (MDX)
- Contact form with email
- Search functionality
- Performance optimization
- Analytics integration
