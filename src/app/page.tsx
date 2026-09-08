import { Metadata } from 'next';
import { Hero } from '@/components/hero/Hero';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { CalculatorsPreview } from '@/components/sections/CalculatorsPreview';
import { WhyChooseFinRev } from '@/components/sections/WhyChooseFinRev';
import { InvestmentPhilosophy } from '@/components/sections/InvestmentPhilosophy';
import { KnowledgeCenterPreview } from '@/components/sections/KnowledgeCenterPreview';
import { MarketUpdatesPreview } from '@/components/sections/MarketUpdatesPreview';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { generateMetadata, siteConfig } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Invest Smart. Build Stronger Financial Futures.',
  description: siteConfig.description,
  path: '/',
  type: 'website',
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <CalculatorsPreview />
      <WhyChooseFinRev />
      <InvestmentPhilosophy />
      <KnowledgeCenterPreview />
      <MarketUpdatesPreview />
      <FinalCTA />
    </>
  );
}
