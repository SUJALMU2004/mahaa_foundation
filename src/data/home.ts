import { site } from './site';
import type { ImageMetadata } from 'astro';
import heroImage from '../assets/home/hero.png';
import rationDistributionCardImage from '../assets/home/ration-distribution-card.png';
import studentSupportCardImage from '../assets/home/student-support-card.png';
import treePlantationCardImage from '../assets/home/tree-plantation-card.png';
import healthCampSupportCardImage from '../assets/home/health-camp-support-card.jpeg';
import socialServiceAwarenessCardImage from '../assets/home/social-service-awareness-card.jpeg';
import treePlantationFeatureImage from '../assets/home/tree-plantation-feature.jpeg';
import rationSupportFeatureImage from '../assets/home/ration-support-feature.png';
import studentSupportPreviewImage from '../assets/home/student-support-preview.png';
import healthCampPreviewImage from '../assets/home/health-camp-preview.jpeg';
import awarenessProgramsPreviewImage from '../assets/home/awareness-programs-preview.png';
import teamServiceWorkPreviewImage from '../assets/home/team-service-work-preview.jpeg';

export type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

export type MediaPlaceholder = {
  image: ImageMetadata;
  alt: string;
  label: string;
};

export const home = {
  hero: {
    eyebrow: 'Community-led service in North Karnataka',
    title: 'Local hands. Lasting change in Mahalingpur.',
    kannadaLine: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ',
    description:
      'We bring volunteers and supporters together to help families, equip government-school students, plant trees, and strengthen community welfare across Mahalingpur and nearby areas.',
    phrase: 'Serve a Family. Support a Student. Plant a Tree.',
    ctas: [
      { label: 'Become a Volunteer', href: '/volunteer' },
      { label: 'Donate Now', href: '/donate' },
    ],
    media: {
      image: heroImage,
      alt: 'Mahaa Foundation Mahalingpur team members and volunteers supporting social service work',
      label: 'Mahaa Foundation Mahalingpur service work',
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
      image: rationDistributionCardImage,
      imageAlt: 'Ration distribution support by Mahaa Foundation Mahalingpur',
    },
    {
      title: 'Student Support',
      href: '/social-service',
      description:
        'Notebook, pen, stationery, and basic school support for government school students.',
      image: studentSupportCardImage,
      imageAlt: 'Student support activity by Mahaa Foundation Mahalingpur',
    },
    {
      title: 'Tree Plantation',
      href: '/tree-plantation',
      description:
        '100 trees planted on both sides of Double Road, Mahalingpur, through foundation contribution.',
      image: treePlantationCardImage,
      imageAlt: 'Tree plantation work in Mahalingpur by Mahaa Foundation',
    },
    {
      title: 'Health Camp Support',
      href: '/social-service',
      description:
        'Health awareness, medical camp support, and polio vaccination camp coordination with health department guidance.',
      image: healthCampSupportCardImage,
      imageAlt: 'Health camp support activity by Mahaa Foundation Mahalingpur',
    },
    {
      title: 'Social Service and Awareness',
      href: '/social-service',
      description:
        'Cleanliness awareness, plastic-free awareness, community welfare, and volunteer-based social service.',
      image: socialServiceAwarenessCardImage,
      imageAlt: 'Social service and awareness activity by Mahaa Foundation Mahalingpur',
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
        image: treePlantationFeatureImage,
        alt: 'Tree plantation work on Double Road Mahalingpur',
        label: 'Tree plantation in Mahalingpur',
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
        image: rationSupportFeatureImage,
        alt: 'Ration distribution support for families in need',
        label: 'Ration support in Mahalingpur',
      },
    },
  },

  trustCards: [
    {
      title: site.foundedDisplay,
      description:
        'A young, locally rooted foundation built around practical service and consistent community participation.',
    },
    {
      title: 'Founder-Led Service',
      description:
        'Founded by Anilkumar Ullagaddi with a focus on serving families, students, and public welfare.',
    },
    {
      title: 'Clear, Responsible Updates',
      description:
        'We share specific activity details and public impact numbers so supporters can understand the work they help make possible.',
    },
    {
      title: 'Volunteer Participation',
      description:
        'Students, local residents, groups, companies, and schools can contact Mahaa Foundation for collaboration.',
    },
  ],

  galleryPreview: [
    {
      image: treePlantationFeatureImage,
      alt: 'Tree plantation activity on Double Road Mahalingpur',
      caption: 'Tree plantation in Mahalingpur',
    },
    {
      image: rationDistributionCardImage,
      alt: 'Monthly ration support by Mahaa Foundation Mahalingpur',
      caption: 'Ration distribution support',
    },
    {
      image: studentSupportPreviewImage,
      alt: 'Student support activity by Mahaa Foundation Mahalingpur',
      caption: 'Student support',
    },
    {
      image: healthCampPreviewImage,
      alt: 'Health camp support activity in Mahalingpur',
      caption: 'Health camp support',
    },
    {
      image: awarenessProgramsPreviewImage,
      alt: 'Cleanliness and plastic-free awareness activity by Mahaa Foundation',
      caption: 'Awareness programs',
    },
    {
      image: teamServiceWorkPreviewImage,
      alt: 'Mahaa Foundation Mahalingpur team service work',
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
