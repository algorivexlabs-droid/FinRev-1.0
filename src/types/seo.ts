import type { Metadata } from 'next';

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

export type PageMetadata = Metadata;
