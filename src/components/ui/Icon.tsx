'use client';

import * as LucideIcons from 'lucide-react';
import { cn } from '@/lib/utils/cn';

type LucideIconName = keyof typeof LucideIcons;

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: LucideIconName;
  size?: number | string;
}

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

export function Icon({ name, size = 24, className, ...props }: IconProps) {
  const pascalName = toPascalCase(name as string) as LucideIconName;
  const IconComponent = (LucideIcons[name] || LucideIcons[pascalName]) as React.FC<React.SVGProps<SVGSVGElement>>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return (
    <IconComponent
      className={cn('inline-flex shrink-0', className)}
      width={size}
      height={size}
      strokeWidth={2}
      aria-hidden="true"
      {...props}
    />
  );
}

export const ICONS = {
  // Navigation
  menu: 'Menu',
  x: 'X',
  chevronDown: 'ChevronDown',
  chevronRight: 'ChevronRight',
  chevronLeft: 'ChevronLeft',

  // Actions
  arrowRight: 'ArrowRight',
  arrowLeft: 'ArrowLeft',
  arrowUpRight: 'ArrowUpRight',
  arrowDownRight: 'ArrowDownRight',
  download: 'Download',
  share: 'Share',
  search: 'Search',
  mail: 'Mail',
  phone: 'Phone',
  messageSquare: 'MessageSquare',

  // Finance
  trendingUp: 'TrendingUp',
  trendingDown: 'TrendingDown',
  dollarSign: 'DollarSign',
  coins: 'Coins',
  banknote: 'Banknote',
  piggyBank: 'PiggyBank',
  wallet: 'Wallet',
  creditCard: 'CreditCard',
  pieChart: 'PieChart',
  barChart: 'BarChart',
  scale: 'Scale',
  target: 'Target',
  gem: 'Gem',
  building2: 'Building2',
  briefcase: 'Briefcase',
  landmark: 'Landmark',
  shield: 'Shield',
  graduationCap: 'GraduationCap',
  heart: 'Heart',
  user: 'User',
  users: 'Users',

  // UI
  check: 'Check',
  checkCircle: 'CheckCircle',
  alertCircle: 'AlertCircle',
  info: 'Info',
  helpCircle: 'HelpCircle',
  alertTriangle: 'AlertTriangle',
  loader: 'Loader',
  rotateCw: 'RotateCw',
  refreshCw: 'RefreshCw',
  eye: 'Eye',
  eyeOff: 'EyeOff',
  copy: 'Copy',
  edit: 'Edit',
  trash: 'Trash',
  plus: 'Plus',
  minus: 'Minus',
  moreHorizontal: 'MoreHorizontal',
  moreVertical: 'MoreVertical',
  settings: 'Settings',
  home: 'Home',
  globe: 'Globe',
  link: 'Link',
  externalLink: 'ExternalLink',
  fileText: 'FileText',
  calendar: 'Calendar',
  clock: 'Clock',
  tag: 'Tag',
  filter: 'Filter',
  sortAsc: 'ArrowUpDown',
  sun: 'Sun',
  moon: 'Moon',
} as const satisfies Record<string, LucideIconName>;
