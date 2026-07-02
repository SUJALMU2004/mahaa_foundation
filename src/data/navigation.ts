export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNavigation: NavigationItem[] = [
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const mainNavigation: NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Work', href: '/our-work' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const workNavigation: NavigationItem[] = [
  {
    label: 'Our Work Overview',
    href: '/our-work',
    description: 'Ration, students, plantation, health support, and awareness work.',
  },
  {
    label: 'Tree Plantation',
    href: '/tree-plantation',
    description: '100 trees planted on Double Road, Mahalingpur.',
  },
  {
    label: 'Ration Distribution',
    href: '/ration-distribution',
    description: 'Monthly ration support for families and people in need.',
  },
  {
    label: 'Social Service',
    href: '/social-service',
    description: 'Student support, health camp support, cleanliness, and welfare.',
  },
];

export const actionNavigation: NavigationItem[] = [
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate' },
];
