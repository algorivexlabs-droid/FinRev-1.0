import { Metadata } from 'next';
import { generateMetadata } from '@/lib/utils/seo';

export const metadata: Metadata = generateMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with FinRev Solutions for personalized investment guidance. Schedule a consultation with our SEBI-registered advisor.',
  path: '/contact',
});
