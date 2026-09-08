import type { Metadata } from 'next';

export const siteConfig = {
  name: 'FinRev Solutions',
  tagline: 'Secure Today. Stronger Tomorrow.',
  url: 'https://finrevsolutions.com',
  ogImage: '/og/default.png',
  description:
    'Personalized investment solutions and financial guidance designed to help you move confidently toward your financial goals. Mutual Fund Distributor ARN-195797.',
  keywords: [
    'FinRev Solutions',
    'Mutual Fund Distributor',
    'Mutual Fund Investment',
    'SIP Investment',
    'Financial Planning',
    'Investment Guidance',
    'ARN-195797',
    'Panchanan Kumar',
  ],
  author: 'FinRev Solutions',
  creator: '@finrevsolutions',
  publisher: 'FinRev Solutions',
  robots: 'index, follow',
  themeColor: '#0066cc',
  contact: {
    phone: '9835592142',
    email: 'info@finrevsolutions.com',
    whatsapp:
      'https://wa.me/919835592142?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20investment%20solutions%20offered%20by%20FinRev%20Solutions.',
  },
  founder: {
    name: 'Panchanan Kumar',
    designation: 'Mutual Fund Distributor',
    arn: 'ARN-195797',
  },
};

export interface SEOProps {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  noIndex?: boolean;
  noFollow?: boolean;
}

export function generateMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  ogImage,
  type = 'website',
  publishedTime,
  modifiedTime,
  authors,
  tags,
  noIndex = false,
  noFollow = false,
}: SEOProps): Metadata {
  const url = `${siteConfig.url}${path}`;
  const image = ogImage ? `${siteConfig.url}${ogImage}` : `${siteConfig.url}${siteConfig.ogImage}`;

  return {
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    robots: { index: !noIndex, follow: !noFollow },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: siteConfig.creator,
    },
    other: {
      ...(tags && { keywords: tags.join(', ') }),
      'theme-color': siteConfig.themeColor,
    },
  };
}

export function generateArticleStructuredData({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  authors,
  publisherName = siteConfig.name,
  publisherLogo = `${siteConfig.url}/logo.png`,
}: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedTime: string;
  modifiedTime?: string;
  authors: string[];
  publisherName?: string;
  publisherLogo?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    image,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: authors.map((name) => ({
      '@type': 'Person',
      name,
    })),
    publisher: {
      '@type': 'Organization',
      name: publisherName,
      logo: {
        '@type': 'ImageObject',
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: siteConfig.name,
    alternateName: 'FinRev',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.designation,
      identifier: siteConfig.founder.arn,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+91-${siteConfig.contact.phone}`,
      contactType: 'customer service',
      availableLanguage: ['English', 'Hindi'],
      areaServed: 'IN',
    },
    sameAs: [`https://wa.me/91${siteConfig.contact.phone}`, `mailto:${siteConfig.contact.email}`],
    areaServed: 'IN',
    serviceType: [
      'Mutual Fund Distribution',
      'Insurance Advisory',
      'Bond Investment',
      'Portfolio Management Services',
      'Alternative Investment Funds',
      'Unlisted Equity',
      'Fixed Deposits',
    ],
    knowsAbout: [
      'Financial Planning',
      'Investment Advisory',
      'Wealth Management',
      'Retirement Planning',
      'Tax Planning',
      'Goal-based Investing',
    ],
  };
}

export function generateServiceStructuredData(
  name: string,
  description: string,
  url: string,
  providerName = siteConfig.name
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url,
    provider: {
      '@type': 'Organization',
      name: providerName,
    },
    areaServed: 'IN',
    serviceType: 'Financial Advisory',
  };
}

export function generateFAQStructuredData(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function generateBreadcrumbStructuredData(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateWebSiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
