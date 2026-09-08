import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#163A5F',
          600: '#102A43', // Primary Navy
          700: '#0B1F33',
          800: '#0B1B2B', // Deep Canvas
          900: '#07121E',
          950: '#040A12',
        },
        teal: {
          50: '#E8F4F5',
          100: '#C2E2E5',
          200: '#99CFD5',
          300: '#6FBBC4',
          400: '#46A8B4',
          500: '#247B85',
          600: '#1B5B63', // Base Growth Teal Accent
          700: '#14444A',
          800: '#0E2D31',
          900: '#071618',
        },
        gold: {
          50: '#FEF8E6',
          100: '#FDEEB8',
          200: '#FCE38A',
          300: '#FBD95C',
          400: '#FAC82E',
          500: '#F2B705', // Wealth Gold Accent
          600: '#D49E00',
          700: '#B78103',
          800: '#8C6202',
          900: '#593E01',
        },
        accent: {
          50: '#E8F4F5',
          100: '#C2E2E5',
          500: '#1B5B63',
          600: '#14444A',
        },
        neutral: {
          50: '#F5F7F8',
          100: '#F0F4F8',
          200: '#D9E2EC',
          300: '#BCCCDC',
          400: '#829AB1',
          500: '#526777',
          600: '#334E68',
          700: '#243B53',
          800: '#102A43',
          900: '#0B1B2B',
          950: '#07121E',
        },
        error: {
          50: '#FEF2F2',
          500: '#E11D48',
          600: '#BE123C',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['var(--text-xs)', { lineHeight: 'var(--leading-normal)' }],
        sm: ['var(--text-sm)', { lineHeight: 'var(--leading-normal)' }],
        base: ['var(--text-base)', { lineHeight: 'var(--leading-relaxed)' }],
        lg: ['var(--text-lg)', { lineHeight: 'var(--leading-relaxed)' }],
        xl: ['var(--text-xl)', { lineHeight: 'var(--leading-snug)' }],
        '2xl': ['var(--text-2xl)', { lineHeight: 'var(--leading-snug)' }],
        '3xl': ['var(--text-3xl)', { lineHeight: 'var(--leading-tight)' }],
        '4xl': ['var(--text-4xl)', { lineHeight: 'var(--leading-tight)' }],
        '5xl': ['var(--text-5xl)', { lineHeight: 'var(--leading-tight)' }],
        '6xl': ['var(--text-6xl)', { lineHeight: 'var(--leading-tight)' }],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        'tactile-primary':
          '0 4px 14px -2px rgba(16,42,67,0.45), 0 1px 2px rgba(0,0,0,0.15), inset 0 1px rgba(255,255,255,0.2)',
        'tactile-teal':
          '0 4px 14px -2px rgba(27,91,99,0.4), 0 1px 2px rgba(0,0,0,0.12), inset 0 1px rgba(255,255,255,0.25)',
        'tactile-card':
          '0 2px 6px -1px rgba(16,42,67,0.08), 0 1px 2px rgba(16,42,67,0.05), inset 0 1px #ffffff',
        'tactile-card-hover':
          '0 8px 20px -4px rgba(27,91,99,0.15), 0 2px 6px rgba(16,42,67,0.05), inset 0 1px #ffffff',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '2rem',
          lg: '3rem',
          xl: '4rem',
          '2xl': '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
    },
  },
  plugins: [],
};

export default config;
