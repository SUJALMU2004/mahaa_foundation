export type NavigationItem = {
  label: string;
  href: string;
  description?: string;
};

export const primaryNavigation = {
  en: [
    { label: 'About', href: '/about' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  kn: [
    { label: 'ನಮ್ಮ ಬಗ್ಗೆ', href: '/about' },
    { label: 'ನಮ್ಮ ಕೆಲಸ', href: '/our-work' },
    { label: 'ಗ್ಯಾಲರಿ', href: '/gallery' },
    { label: 'ಬ್ಲಾಗ್', href: '/blog' },
    { label: 'ಸಂಪರ್ಕಿಸಿ', href: '/contact' },
  ],
};

export const mainNavigation = {
  en: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Donate', href: '/donate' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  kn: [
    { label: 'ಮುಖಪುಟ', href: '/' },
    { label: 'ನಮ್ಮ ಬಗ್ಗೆ', href: '/about' },
    { label: 'ನಮ್ಮ ಕೆಲಸ', href: '/our-work' },
    { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
    { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
    { label: 'ಗ್ಯಾಲರಿ', href: '/gallery' },
    { label: 'ಬ್ಲಾಗ್', href: '/blog' },
    { label: 'ಸಂಪರ್ಕಿಸಿ', href: '/contact' },
  ],
};

export const workNavigation = {
  en: [
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
  ],
  kn: [
    {
      label: 'ನಮ್ಮ ಕೆಲಸದ ಅವಲೋಕನ',
      href: '/our-work',
      description: 'ಪಡಿತರ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೆರವು, ಮರ ನೆಡುವುದು, ಆರೋಗ್ಯ ಬೆಂಬಲ ಮತ್ತು ಜಾಗೃತಿ ಕೆಲಸ.',
    },
    {
      label: 'ಮರ ನೆಡುವಿಕೆ',
      href: '/tree-plantation',
      description: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ೧೦೦ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ.',
    },
    {
      label: 'ಪಡಿತರ ವಿತರಣೆ',
      href: '/ration-distribution',
      description: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಮತ್ತು ಜನರಿಗೆ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲ.',
    },
    {
      label: 'ಸಮಾಜ ಸೇವೆ',
      href: '/social-service',
      description: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತೆ ಮತ್ತು ಕಲ್ಯಾಣ.',
    },
  ],
};

export const actionNavigation = {
  en: [
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Donate', href: '/donate' },
  ],
  kn: [
    { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
    { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
  ],
};
