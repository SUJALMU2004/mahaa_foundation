import { site } from './site';

export type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

export type MediaPlaceholder = {
  image: string;
  alt: string;
  label: string;
};

export const home = {
  hero: {
    eyebrow: 'Mahaa Foundation Mahalingpur',
    title: 'Serving People, Supporting Students and Growing a Greener Mahalingpur',
    kannadaLine:
      'ಜನಸೇವೆ, ವಿದ್ಯಾರ್ಥಿ ಸಹಾಯ ಮತ್ತು ಹಸಿರು ಮಹಾಲಿಂಗಪುರಕ್ಕಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್',
    kannadaLine: 'Mahaa Foundation Mahalingpur',
    description:
      'Mahaa Foundation Mahalingpur is a social service NGO in Bagalkot, Karnataka, working for ration distribution, student support, tree plantation, health camp support, cleanliness awareness, and community welfare. We bring volunteers and supporters together to help families, students, children, and local communities.',
    phrase: 'Serve a Family. Support a Student. Plant a Tree.',
    ctas: [
      { label: 'Become a Volunteer', href: '/volunteer' },
      { label: 'Donate Now', href: '/donate' },
    ],
    media: {
      image: '/images/placeholders/ngo-hero-placeholder.jpg',
      alt: 'Mahaa Foundation volunteers supporting ration, student, health, and tree plantation work',
      label: 'Future homepage image or video area',
    },
  },

  impactStats: [
    {
      value: '100+',
      label: 'Trees Planted',
      description: 'Trees planted on both sides of Double Road, Mahalingpur.',
    },
    {
      value: '50+',
      label: 'Families Supported',
      description: 'Ration and community welfare support for families in need.',
    },
    {
      value: '200+',
      label: 'Students Supported',
      description: 'Notebook and pen distribution for government school students.',
    },
    {
      value: '10+',
      label: 'Volunteers',
      description: 'Volunteer participation in service, awareness, and support activities.',
    },
  ],

  missionCards: [
    {
      title: 'Serve Families',
      description:
        'Supporting poor families, backward-class communities, daily wage families, and people in need through ration and welfare support.',
    },
    {
      title: 'Support Students',
      description:
        'Helping government school students with notebooks, pens, stationery, and basic school requirements.',
    },
    {
      title: 'Grow Greener Communities',
      description:
        'Planting trees, encouraging cleanliness awareness, and promoting plastic-free habits in Mahalingpur.',
    },
  ],

  workHighlights: [
    {
      title: 'Ration Distribution',
      href: '/ration-distribution',
      description:
        'Monthly ration support with one-month food supplies, groceries, and medical support items wherever required.',
      image: '/images/work/ration-distribution-card.jpg',
      imageAlt: 'Ration distribution activity placeholder',
    },
    {
      title: 'Student Support',
      href: '/social-service',
      description:
        'Notebook, pen, stationery, and basic school support for government school students.',
      image: '/images/work/student-aid-card.jpg',
      imageAlt: 'Student support activity placeholder',
    },
    {
      title: 'Tree Plantation',
      href: '/tree-plantation',
      description:
        '100 trees planted on both sides of Double Road, Mahalingpur, through foundation contribution.',
      image: '/images/work/tree-plantation-card.jpg',
      imageAlt: 'Tree plantation activity placeholder',
    },
    {
      title: 'Health Camp Support',
      href: '/social-service',
      description:
        'Health awareness, medical camp support, and polio vaccination camp coordination with health department guidance.',
      image: '/images/work/health-camp-support-card.jpg',
      imageAlt: 'Health camp support placeholder',
    },
    {
      title: 'Social Service and Awareness',
      href: '/social-service',
      description:
        'Cleanliness awareness, plastic-free awareness, community welfare, and volunteer-based social service.',
      image: '/images/work/social-service-card.jpg',
      imageAlt: 'Social service activity placeholder',
    },
  ],

  focusedWorkSections: {
    treePlantation: {
      eyebrow: 'Tree Plantation in Mahalingpur',
      title: '100 Trees Planted on Double Road',
      content:
        'Mahaa Foundation Mahalingpur planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution. This initiative supports greenery, public responsibility, and awareness about caring for planted trees.',
      bullets: [
        '100 verified trees planted',
        'Double Road, Mahalingpur',
        'Foundation team contribution',
        'Tree care and public responsibility awareness',
      ],
      primaryCta: { label: 'View Tree Plantation Work', href: '/tree-plantation' },
      secondaryCta: { label: 'Volunteer With Us', href: '/volunteer' },
      media: {
        image: '/images/work/tree-plantation-home.jpg',
        alt: 'Tree plantation on Double Road Mahalingpur placeholder image',
        label: 'Tree plantation media placeholder',
      },
    },
    rationSupport: {
      eyebrow: 'Ration Distribution in Mahalingpur',
      title: 'Monthly Support for Families in Need',
      content:
        'Mahaa Foundation supports backward-class families and people in need by providing monthly ration support. The ration kits include one-month food supplies, essential groceries, and medical support items wherever required.',
      bullets: [
        '50+ families supported',
        '100+ ration kits distributed',
        'Monthly ration distribution',
        'Groceries and medical support items where required',
      ],
      primaryCta: { label: 'Support Ration Distribution', href: '/ration-distribution' },
      secondaryCta: { label: 'Donate Now', href: '/donate' },
      media: {
        image: '/images/work/ration-distribution-home.jpg',
        alt: 'Ration distribution support placeholder image',
        label: 'Ration support media placeholder',
      },
    },
  },

  trustCards: [
    {
      title: site.foundedDisplay,
      description:
        'Public display uses Active Since 2025 and does not claim one year of service.',
    },
    {
      title: 'Founder-Led Service',
      description:
        'Founded by Anilkumar Ullagaddi with a focus on serving families, students, and public welfare.',
    },
    {
      title: 'Verified Impact Numbers',
      description:
        'The site uses provided public impact numbers and avoids unverified awards or legal claims.',
    },
    {
      title: 'Volunteer Participation',
      description:
        'Students, local residents, groups, companies, and schools can contact Mahaa Foundation for collaboration.',
    },
  ],

  galleryPreview: [
    {
      image: '/images/gallery/tree-plantation/double-road-tree-plantation.jpg',
      alt: 'Tree plantation activity on Double Road Mahalingpur placeholder',
      caption: 'Tree plantation in Mahalingpur',
    },
    {
      image: '/images/gallery/ration-distribution/monthly-ration-support.jpg',
      alt: 'Monthly ration support placeholder',
      caption: 'Ration distribution support',
    },
    {
      image: '/images/gallery/student-aid/notebook-pen-distribution.jpg',
      alt: 'Notebook and pen distribution placeholder',
      caption: 'Student support',
    },
    {
      image: '/images/gallery/health-camp/polio-camp-support.jpg',
      alt: 'Polio vaccination camp support placeholder',
      caption: 'Health camp support',
    },
    {
      image: '/images/gallery/awareness/plastic-free-awareness.jpg',
      alt: 'Plastic-free awareness talk placeholder',
      caption: 'Awareness programs',
    },
    {
      image: '/images/gallery/team/team-service-work.jpg',
      alt: 'Mahaa Foundation team work placeholder',
      caption: 'Team service work',
    },
  ],

  blogPreview: [
    {
      title: 'Importance of Tree Plantation in Mahalingpur',
      category: 'Tree Plantation',
      excerpt:
        'Learn how tree plantation supports greener public spaces and environmental responsibility in Mahalingpur.',
      href: '/blog',
    },
    {
      title: 'Why Student Support Matters for Government School Children',
      category: 'Student Support',
      excerpt:
        'Understand how notebooks, pens, and school essentials help students continue learning with dignity.',
      href: '/blog',
    },
    {
      title: 'Importance of Cleanliness and Plastic-Free Awareness',
      category: 'Awareness',
      excerpt:
        'Explore why cleanliness awareness and reducing plastic use matter for responsible communities.',
      href: '/blog',
    },
  ],

  ctas: {
    volunteer: {
      title: 'Become a Volunteer for Mahalingpur',
      content:
        'Anyone above 15 years can volunteer with Mahaa Foundation. Students, working professionals, community groups, schools, and local residents are welcome to join.',
      primaryCta: { label: 'Join as Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
    },
    donate: {
      title: 'Your Support Can Help Families and Students',
      content:
        'Donate through UPI or bank transfer to support ration kits, student notebooks, tree plantation, health camp support, awareness programs, and social service.',
      supportPhrase: 'Serve a Family. Support a Student. Plant a Tree.',
      primaryCta: { label: 'Donate to Support Our Work', href: '/donate' },
      secondaryCta: { label: 'Support Ration Distribution', href: '/ration-distribution' },
    },
    final: {
      title: 'Join Hands with Mahaa Foundation Mahalingpur',
      content:
        'Support ration distribution, student help, tree plantation, health awareness, cleanliness awareness, and community welfare.',
      whatsappMessage:
        'Hello Mahaa Foundation, I want to know more about your NGO work.',
    },
  },
} as const;

export const homeWebsiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.siteName,
  url: site.url,
  description: site.description,
  publisher: {
    '@type': site.organizationType,
    name: site.siteName,
    url: site.url,
  },
};
