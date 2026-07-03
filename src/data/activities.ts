import { site } from './site';
import { absoluteUrl } from '../utils/seo';

export type ActivityMedia = {
  title: string;
  image: string;
  imageAlt: string;
  caption: string;
};

export type ActivityLink = {
  label: string;
  href: string;
};

export type ActivityDetail = {
  title: string;
  content: string;
};

export type ActivityItem = {
  slug: string;
  title: string;
  kannadaTitle?: string;
  description: string;
  category: string;
  dateLabel: string;
  date?: string;
  endDate?: string;
  time?: string;
  sortOrder: number;
  location: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  draft?: boolean;
  tags: string[];
  overviewTitle: string;
  overview: string;
  purposeTitle: string;
  purpose: string;
  details: ActivityDetail[];
  impactHighlights?: string[];
  gallery: ActivityMedia[];
  videos?: string[];
  relatedLinks: ActivityLink[];
};

export const activities: ActivityItem[] = [
  {
    slug: 'koppal-pravachana-parking-service',
    title: 'Parking Service During Koppal Gavi Siddeshwar Appaji Pravachana',
    kannadaTitle: 'ಕೊಪ್ಪಳ ಗವಿ ಸಿದ್ದೇಶ್ವರ ಅಪ್ಪಾಜಿಯವರ ಪ್ರವಚನ ಪಾರ್ಕಿಂಗ್ ಸೇವೆ',
    category: 'Social Service',
    dateLabel: '22 November 2025 to 30 November 2025',
    date: '2025-11-22',
    endDate: '2025-11-30',
    sortOrder: 1,
    location: 'Koppal',
    description:
      'Before the formal launch of Mahaa Foundation Mahalingpur, the founding team supported the nine-day Koppal Gavi Siddeshwar Appaji Pravachana program by providing parking service from 22 November 2025 to 30 November 2025.',
    image: '/images/activities/koppal-pravachana-parking-service.jpg',
    imageAlt: 'Parking service during Koppal Gavi Siddeshwar Appaji Pravachana program',
    featured: true,
    draft: false,
    tags: ['parking service', 'social service', 'volunteer support', 'koppal'],
    overviewTitle: 'About This Parking Service',
    overview:
      'Before the formal launch of Mahaa Foundation Mahalingpur, the founding team supported the nine-day Koppal Gavi Siddeshwar Appaji Pravachana program by providing parking service from 22 November 2025 to 30 November 2025.',
    purposeTitle: 'Purpose of the Support',
    purpose:
      'The purpose was to support public coordination during the nine-day program through practical parking service. This page does not claim that Mahaa Foundation organized the program.',
    details: [
      {
        title: 'Service Provided',
        content:
          'The founding team provided parking service support during the Koppal program.',
      },
      {
        title: 'Safe Date Context',
        content:
          'This activity happened before the formal foundation date of 1 December 2025, so it is described as founding team support.',
      },
    ],
    impactHighlights: ['Parking service support', 'Nine-day program', 'Founding team service'],
    gallery: [
      {
        title: 'Parking Service Support',
        image: '/images/activities/koppal-pravachana-parking-service-1.jpg',
        imageAlt: 'Parking service support at Koppal',
        caption: 'Parking service support during the nine-day program.',
      },
      {
        title: 'Volunteer Coordination',
        image: '/images/activities/koppal-pravachana-parking-service-2.jpg',
        imageAlt: 'Volunteer coordination at Koppal',
        caption: 'Founding team service support placeholder.',
      },
    ],
    videos: ['koppal-pravachana-parking-service'],
    relatedLinks: [
      { label: 'Social Service', href: '/social-service' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Activities', href: '/activities' },
    ],
  },
  {
    slug: 'double-road-tree-plantation-mahalingpur',
    title: '100 Trees Planted on Double Road, Mahalingpur',
    kannadaTitle: 'ಮಹಾಲಿಂಗಪುರ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ 100 ಗಿಡಗಳ ನೆಡುವಿಕೆ',
    category: 'Tree Plantation',
    dateLabel: 'Recent Activity',
    sortOrder: 2,
    location: 'Double Road, Mahalingpur',
    description:
      'Mahaa Foundation planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution to support greenery and public environmental responsibility.',
    image: '/images/activities/double-road-tree-plantation-mahalingpur.jpg',
    imageAlt: '100 trees planted on Double Road Mahalingpur',
    draft: false,
    tags: ['tree plantation', 'mahalingpur', 'green community work'],
    overviewTitle: 'About This Tree Plantation Work',
    overview:
      'Mahaa Foundation planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution to support greenery and public environmental responsibility.',
    purposeTitle: 'Purpose of the Plantation',
    purpose:
      'The activity was started to improve greenery, encourage public responsibility, and create awareness about caring for planted trees.',
    details: [
      {
        title: 'Verified Number',
        content: 'The verified public number for this activity is 100 trees planted.',
      },
      {
        title: 'Location',
        content: 'The plantation work took place on both sides of Double Road, Mahalingpur.',
      },
    ],
    impactHighlights: ['100 trees planted', 'Double Road, Mahalingpur', 'Foundation contribution'],
    gallery: [
      {
        title: 'Double Road Plantation',
        image: '/images/activities/double-road-tree-plantation-1.jpg',
        imageAlt: 'Trees planted on Double Road Mahalingpur',
        caption: 'Tree plantation on Double Road, Mahalingpur.',
      },
      {
        title: 'Tree Care Awareness',
        image: '/images/activities/double-road-tree-plantation-2.jpg',
        imageAlt: 'Tree care awareness activity in Mahalingpur',
        caption: 'Awareness about caring for planted trees.',
      },
    ],
    videos: ['tree-plantation-drive-highlights'],
    relatedLinks: [
      { label: 'Tree Plantation', href: '/tree-plantation' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Donate', href: '/donate' },
    ],
  },
  {
    slug: 'polio-vaccination-camp-support-mahalingpur-bus-stand',
    title: 'Polio Vaccination Camp Support at Mahalingpur Bus Stand',
    kannadaTitle: 'ಮಹಾಲಿಂಗಪುರ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿ ಪೋಲಿಯೋ ಲಸಿಕಾ ಶಿಬಿರ ಸಹಾಯ',
    category: 'Health Support',
    dateLabel: '28 June 2026',
    date: '2026-06-28',
    time: '8:00 AM to 5:00 PM',
    sortOrder: 3,
    location: 'Mahalingpur Bus Stand',
    description:
      'On Sunday, 28 June 2026, Mahaa Foundation supported a polio vaccination activity at Mahalingpur Bus Stand with health department guidance. The activity helped reach 70 children below the age of five.',
    image: '/images/activities/polio-vaccination-camp-support.jpg',
    imageAlt: 'Polio vaccination camp support at Mahalingpur Bus Stand',
    draft: false,
    tags: ['health support', 'polio vaccination support', 'children', 'mahalingpur'],
    overviewTitle: 'About This Health Support Activity',
    overview:
      'On Sunday, 28 June 2026, Mahaa Foundation supported a polio vaccination activity at Mahalingpur Bus Stand with health department guidance. The activity helped reach 70 children below the age of five.',
    purposeTitle: 'Purpose of the Support',
    purpose:
      'The purpose was to help coordinate a child health support activity responsibly with health department guidance.',
    details: [
      {
        title: 'Safe Medical Wording',
        content:
          'Mahaa Foundation supported and helped coordinate the activity. This page does not state that foundation members medically administered vaccines.',
      },
      {
        title: 'Time and Reach',
        content: 'The activity ran from 8:00 AM to 5:00 PM and helped reach 70 children below age five.',
      },
    ],
    impactHighlights: ['70 children reached', 'Health department guidance', '8:00 AM to 5:00 PM'],
    gallery: [
      {
        title: 'Camp Support',
        image: '/images/activities/polio-vaccination-camp-support-1.jpg',
        imageAlt: 'Polio vaccination camp support activity',
        caption: 'Health support activity at Mahalingpur Bus Stand.',
      },
      {
        title: 'Children Health Support',
        image: '/images/activities/polio-vaccination-camp-support-2.jpg',
        imageAlt: 'Child health support activity',
        caption: 'Child health support with health department guidance.',
      },
    ],
    videos: ['polio-vaccination-camp-support', 'health-camp-support'],
    relatedLinks: [
      { label: 'Social Service', href: '/social-service' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    slug: 'free-ration-stationery-medicine-support',
    title: 'Free Ration, Stationery and Medicine Support for People in Need',
    kannadaTitle: 'ಬಡ ಜನರಿಗೆ ಉಚಿತ ರೇಷನ್, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧಿ ಸಹಾಯ',
    category: 'Community Welfare',
    dateLabel: 'Recent Activity',
    sortOrder: 4,
    location: 'Mahalingpur and Nearby Areas',
    description:
      'Mahaa Foundation has provided free ration, stationery, and medicine support to poor families and people in need as part of its community welfare work.',
    image: '/images/activities/free-ration-stationery-medicine-support.jpg',
    imageAlt: 'Free ration stationery and medicine support for people in need',
    draft: false,
    tags: ['community welfare', 'ration support', 'stationery support', 'medicine support'],
    overviewTitle: 'About This Community Welfare Support',
    overview:
      'Mahaa Foundation has provided free ration, stationery, and medicine support to poor families and people in need as part of its community welfare work.',
    purposeTitle: 'Purpose of Community Welfare',
    purpose:
      'The purpose is to support people in need with practical help that can reduce immediate hardship and encourage community responsibility.',
    details: [
      {
        title: 'Support Areas',
        content: 'The activity includes free ration, stationery, and medicine support.',
      },
      {
        title: 'Communities Served',
        content: 'The support focuses on poor families and people in need in Mahalingpur and nearby areas.',
      },
    ],
    impactHighlights: ['Ration support', 'Stationery support', 'Medicine support'],
    gallery: [
      {
        title: 'Community Welfare Support',
        image: '/images/activities/free-ration-stationery-medicine-support-1.jpg',
        imageAlt: 'Community welfare support items',
        caption: 'Free ration, stationery, and medicine support.',
      },
    ],
    relatedLinks: [
      { label: 'Ration Distribution', href: '/ration-distribution' },
      { label: 'Social Service', href: '/social-service' },
      { label: 'Donate', href: '/donate' },
    ],
  },
  {
    slug: 'notebook-pen-distribution-government-school-students',
    title: 'Notebook and Pen Distribution for 200 Government School Students',
    kannadaTitle: 'ಸರ್ಕಾರಿ ಶಾಲೆಯ 200 ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್ ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ',
    category: 'Student Support',
    dateLabel: 'Recent Activity',
    sortOrder: 5,
    location: 'Government School, Mahalingpur Area',
    description:
      'Mahaa Foundation distributed notebooks and pens to 200 government school students to support their basic educational needs.',
    image: '/images/activities/notebook-pen-distribution-students.jpg',
    imageAlt: 'Notebook and pen distribution for government school students',
    draft: false,
    tags: ['student support', 'government school', 'notebook distribution', 'education support'],
    overviewTitle: 'About This Student Support Activity',
    overview:
      'Mahaa Foundation distributed notebooks and pens to 200 government school students to support their basic educational needs.',
    purposeTitle: 'Purpose of Student Support',
    purpose:
      'The purpose is to help students with basic learning materials and encourage continued education.',
    details: [
      {
        title: 'Students Supported',
        content: 'The verified public number for this activity is 200 government school students.',
      },
      {
        title: 'Items Distributed',
        content: 'Notebooks and pens were distributed to support basic educational needs.',
      },
    ],
    impactHighlights: ['200 students supported', 'Notebook distribution', 'Pen distribution'],
    gallery: [
      {
        title: 'Student Support',
        image: '/images/activities/notebook-pen-distribution-1.jpg',
        imageAlt: 'Notebook and pen distribution for students',
        caption: 'Notebook and pen support for government school students.',
      },
    ],
    relatedLinks: [
      { label: 'Social Service', href: '/social-service' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Donate', href: '/donate' },
    ],
  },
  {
    slug: 'monthly-plastic-free-cleanliness-awareness-talks',
    title: 'Monthly Awareness Talks on Plastic-Free Living and Cleanliness',
    kannadaTitle: 'ಸರ್ಕಾರಿ ಶಾಲೆಯಲ್ಲಿ ಪ್ಲಾಸ್ಟಿಕ್ ನಿಷೇಧ ಮತ್ತು ಸ್ವಚ್ಛತೆ ಜಾಗೃತಿ ಉಪನ್ಯಾಸ',
    category: 'Awareness',
    dateLabel: 'Monthly Activity',
    sortOrder: 6,
    location: 'Government Schools',
    description:
      'Mahaa Foundation conducts monthly awareness talks in government schools to educate students about reducing plastic use, maintaining cleanliness, and building responsible habits.',
    image: '/images/activities/monthly-plastic-free-cleanliness-awareness.jpg',
    imageAlt: 'Plastic-free living and cleanliness awareness talks in government schools',
    draft: false,
    tags: ['awareness', 'plastic-free awareness', 'cleanliness', 'government schools'],
    overviewTitle: 'About These Monthly Awareness Talks',
    overview:
      'Mahaa Foundation conducts monthly awareness talks in government schools to educate students about reducing plastic use, maintaining cleanliness, and building responsible habits.',
    purposeTitle: 'Purpose of Awareness Talks',
    purpose:
      'The purpose is to help students build responsible habits around cleanliness, reducing plastic use, and caring for public spaces.',
    details: [
      {
        title: 'School Awareness',
        content: 'The talks are conducted in government schools as a monthly activity.',
      },
      {
        title: 'Focus Topics',
        content: 'Students learn about reducing plastic use, maintaining cleanliness, and building responsible habits.',
      },
    ],
    impactHighlights: ['Monthly activity', 'Plastic-free awareness', 'Cleanliness awareness'],
    gallery: [
      {
        title: 'Awareness Talk',
        image: '/images/activities/monthly-plastic-free-cleanliness-awareness-1.jpg',
        imageAlt: 'School awareness talk about plastic-free living and cleanliness',
        caption: 'Plastic-free living and cleanliness awareness talk.',
      },
    ],
    videos: ['awareness-programs'],
    relatedLinks: [
      { label: 'Social Service', href: '/social-service' },
      { label: 'Volunteer', href: '/volunteer' },
      { label: 'Blog', href: '/blog' },
    ],
  },
];

export const activitiesSummary =
  'Mahaa Foundation continues to organize many more social service, education support, health awareness, and community welfare activities.';

export function getActivitySchemas(activity: ActivityItem, socialImage = activity.image) {
  const activityUrl = absoluteUrl(`/activities/${activity.slug}`);
  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: activity.title,
    description: activity.description,
    image: absoluteUrl(socialImage),
    author: {
      '@type': 'Organization',
      name: site.siteName,
    },
    publisher: {
      '@type': 'Organization',
      name: site.siteName,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl(site.logo),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': activityUrl,
    },
    articleSection: activity.category,
  };

  if (activity.date) {
    articleSchema.datePublished = activity.date;
  }

  return [
    articleSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Activities', item: absoluteUrl('/activities') },
        { '@type': 'ListItem', position: 3, name: activity.title, item: activityUrl },
      ],
    },
  ];
}
