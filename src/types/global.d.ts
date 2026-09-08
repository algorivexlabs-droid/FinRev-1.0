/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare module '*.mdx' {
  let MDXComponent: (props: Record<string, unknown>) => JSX.Element;
  export default MDXComponent;
}

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SITE_URL: string;
    NEXT_PUBLIC_SITE_NAME: string;
    NEXT_PUBLIC_GA_ID: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
    RESEND_API_KEY: string;
    CONTACT_EMAIL_TO: string;
    CONTACT_EMAIL_FROM: string;
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: string;
    TURNSTILE_SECRET_KEY: string;
    UPSTASH_REDIS_REST_URL: string;
    UPSTASH_REDIS_REST_TOKEN: string;
  }
}

interface Window {
  gtag: (...args: unknown[]) => void;
  dataLayer: unknown[];
}
