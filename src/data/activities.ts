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

const en: ActivityItem[] = [
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

const kn: ActivityItem[] = [
  {
    slug: 'koppal-pravachana-parking-service',
    title: 'ಕೊಪ್ಪಳ ಗವಿ ಸಿದ್ದೇಶ್ವರ ಅಪ್ಪಾಜಿಯವರ ಪ್ರವಚನದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವೆ',
    kannadaTitle: 'ಕೊಪ್ಪಳ ಗವಿ ಸಿದ್ದೇಶ್ವರ ಅಪ್ಪಾಜಿಯವರ ಪ್ರವಚನ ಪಾರ್ಕಿಂಗ್ ಸೇವೆ',
    category: 'ಸಮಾಜ ಸೇವೆ',
    dateLabel: '೨೨ ನವೆಂಬರ್ ೨೦೨೫ ರಿಂದ ೩೦ ನವೆಂಬರ್ ೨೦೨೫',
    date: '2025-11-22',
    endDate: '2025-11-30',
    sortOrder: 1,
    location: 'ಕೊಪ್ಪಳ',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದ ಅಧಿಕೃತ ಪ್ರಾರಂಭದ ಮೊದಲು, ಸ್ಥಾಪಕ ತಂಡವು 22 ನವೆಂಬರ್ 2025 ರಿಂದ 30 ನವೆಂಬರ್ 2025 ರವರೆಗೆ ಒಂಬತ್ತು ದಿನಗಳ ಕೊಪ್ಪಳ ಗವಿ ಸಿದ್ದೇಶ್ವರ ಅಪ್ಪಾಜಿ ಪ್ರವಚನ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವೆಯನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಬೆಂಬಲ ನೀಡಿತು.',
    image: '/images/activities/koppal-pravachana-parking-service.jpg',
    imageAlt: 'ಕೊಪ್ಪಳ ಗವಿ ಸಿದ್ದೇಶ್ವರ ಅಪ್ಪಾಜಿ ಪ್ರವಚನ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವೆ',
    featured: true,
    draft: false,
    tags: ['parking service', 'social service', 'volunteer support', 'koppal'],
    overviewTitle: 'ಈ ಪಾರ್ಕಿಂಗ್ ಸೇವೆಯ ಬಗ್ಗೆ',
    overview: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದ ಅಧಿಕೃತ ಪ್ರಾರಂಭದ ಮೊದಲು, ಸ್ಥಾಪಕ ತಂಡವು 22 ನವೆಂಬರ್ 2025 ರಿಂದ 30 ನವೆಂಬರ್ 2025 ರವರೆಗೆ ಒಂಬತ್ತು ದಿನಗಳ ಕೊಪ್ಪಳ ಗವಿ ಸಿದ್ದೇಶ್ವರ ಅಪ್ಪಾಜಿ ಪ್ರವಚನ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವೆಯನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಬೆಂಬಲ ನೀಡಿತು.',
    purposeTitle: 'ಬೆಂಬಲದ ಉದ್ದೇಶ',
    purpose: 'ಪ್ರಾಯೋಗಿಕ ಪಾರ್ಕಿಂಗ್ ಸೇವೆಯ ಮೂಲಕ ಒಂಬತ್ತು ದಿನಗಳ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಸಾರ್ವಜನಿಕ ಸಮನ್ವಯವನ್ನು ಬೆಂಬಲಿಸುವುದು ಇದರ ಉದ್ದೇಶವಾಗಿತ್ತು. ಈ ಪುಟವು ಮಹಾ ಫೌಂಡೇಶನ್ ಈ ಕಾರ್ಯಕ್ರಮವನ್ನು ಆಯೋಜಿಸಿದೆ ಎಂದು ಹೇಳಿಕೊಳ್ಳುವುದಿಲ್ಲ.',
    details: [
      { title: 'ಒದಗಿಸಿದ ಸೇವೆ', content: 'ಸ್ಥಾಪಕ ತಂಡವು ಕೊಪ್ಪಳ ಕಾರ್ಯಕ್ರಮದ ಸಮಯದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವಾ ಬೆಂಬಲವನ್ನು ಒದಗಿಸಿತು.' },
      { title: 'ಸುರಕ್ಷಿತ ದಿನಾಂಕದ ಸಂದರ್ಭ', content: 'ಈ ಚಟುವಟಿಕೆಯು ಡಿಸೆಂಬರ್ 1, 2025 ರ ಔಪಚಾರಿಕ ಅಡಿಪಾಯ ದಿನಾಂಕಕ್ಕಿಂತ ಮುಂಚೆಯೇ ಸಂಭವಿಸಿದೆ, ಆದ್ದರಿಂದ ಇದನ್ನು ಸ್ಥಾಪಕ ತಂಡದ ಬೆಂಬಲ ಎಂದು ವಿವರಿಸಲಾಗಿದೆ.' },
    ],
    impactHighlights: ['ಪಾರ್ಕಿಂಗ್ ಸೇವಾ ಬೆಂಬಲ', 'ಒಂಬತ್ತು ದಿನಗಳ ಕಾರ್ಯಕ್ರಮ', 'ಸ್ಥಾಪಕ ತಂಡದ ಸೇವೆ'],
    gallery: [
      { title: 'ಪಾರ್ಕಿಂಗ್ ಸೇವಾ ಬೆಂಬಲ', image: '/images/activities/koppal-pravachana-parking-service-1.jpg', imageAlt: 'ಕೊಪ್ಪಳದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವಾ ಬೆಂಬಲ', caption: 'ಒಂಬತ್ತು ದಿನಗಳ ಕಾರ್ಯಕ್ರಮದಲ್ಲಿ ಪಾರ್ಕಿಂಗ್ ಸೇವಾ ಬೆಂಬಲ.' },
      { title: 'ಸ್ವಯಂಸೇವಕರ ಸಮನ್ವಯ', image: '/images/activities/koppal-pravachana-parking-service-2.jpg', imageAlt: 'ಕೊಪ್ಪಳದಲ್ಲಿ ಸ್ವಯಂಸೇವಕರ ಸಮನ್ವಯ', caption: 'ಸ್ಥಾಪಕ ತಂಡದ ಸೇವಾ ಬೆಂಬಲ.' },
    ],
    videos: ['koppal-pravachana-parking-service'],
    relatedLinks: [
      { label: 'ಸಮಾಜ ಸೇವೆ', href: '/social-service' },
      { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      { label: 'ಚಟುವಟಿಕೆಗಳು', href: '/activities' },
    ],
  },
  {
    slug: 'double-road-tree-plantation-mahalingpur',
    title: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ೧೦೦ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ',
    kannadaTitle: 'ಮಹಾಲಿಂಗಪುರ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ 100 ಗಿಡಗಳ ನೆಡುವಿಕೆ',
    category: 'ಮರ ನೆಡುವಿಕೆ',
    dateLabel: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
    sortOrder: 2,
    location: 'ಡಬಲ್ ರಸ್ತೆ, ಮಹಾಲಿಂಗಪುರ',
    description: 'ಹಸಿರು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪರಿಸರ ಜವಾಬ್ದಾರಿಯನ್ನು ಬೆಂಬಲಿಸಲು ಮಹಾ ಫೌಂಡೇಶನ್ ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ.',
    image: '/images/activities/double-road-tree-plantation-mahalingpur.jpg',
    imageAlt: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ',
    draft: false,
    tags: ['tree plantation', 'mahalingpur', 'green community work'],
    overviewTitle: 'ಈ ಮರ ನೆಡುವ ಕಾರ್ಯದ ಬಗ್ಗೆ',
    overview: 'ಹಸಿರು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪರಿಸರ ಜವಾಬ್ದಾರಿಯನ್ನು ಬೆಂಬಲಿಸಲು ಮಹಾ ಫೌಂಡೇಶನ್ ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ.',
    purposeTitle: 'ನೆಡುವಿಕೆಯ ಉದ್ದೇಶ',
    purpose: 'ಹಸಿರನ್ನು ಸುಧಾರಿಸಲು, ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಲು ಮತ್ತು ನೆಟ್ಟ ಮರಗಳನ್ನು ಕಾಳಜಿ ವಹಿಸುವ ಬಗ್ಗೆ ಜಾಗೃತಿ ಮೂಡಿಸಲು ಈ ಚಟುವಟಿಕೆಯನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ.',
    details: [
      { title: 'ಪರಿಶೀಲಿಸಿದ ಸಂಖ್ಯೆ', content: 'ಈ ಚಟುವಟಿಕೆಯ ಪರಿಶೀಲಿಸಿದ ಸಾರ್ವಜನಿಕ ಸಂಖ್ಯೆ 100 ಮರಗಳು.' },
      { title: 'ಸ್ಥಳ', content: 'ನೆಡುವಿಕೆಯ ಕಾರ್ಯವು ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ ನಡೆಯಿತು.' },
    ],
    impactHighlights: ['100 ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ', 'ಡಬಲ್ ರಸ್ತೆ, ಮಹಾಲಿಂಗಪುರ', 'ಫೌಂಡೇಶನ್ ಕೊಡುಗೆ'],
    gallery: [
      { title: 'ಡಬಲ್ ರಸ್ತೆ ನೆಡುವಿಕೆ', image: '/images/activities/double-road-tree-plantation-1.jpg', imageAlt: 'ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ', caption: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ.' },
      { title: 'ಮರಗಳ ಆರೈಕೆ ಜಾಗೃತಿ', image: '/images/activities/double-road-tree-plantation-2.jpg', imageAlt: 'ಮರಗಳ ಆರೈಕೆ ಜಾಗೃತಿ ಚಟುವಟಿಕೆ', caption: 'ನೆಟ್ಟ ಮರಗಳ ಆರೈಕೆಯ ಬಗ್ಗೆ ಜಾಗೃತಿ.' },
    ],
    videos: ['tree-plantation-drive-highlights'],
    relatedLinks: [
      { label: 'ಮರ ನೆಡುವಿಕೆ', href: '/tree-plantation' },
      { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
    ],
  },
  {
    slug: 'polio-vaccination-camp-support-mahalingpur-bus-stand',
    title: 'ಮಹಾಲಿಂಗಪುರ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿ ಪೋಲಿಯೋ ಲಸಿಕಾ ಶಿಬಿರ ಬೆಂಬಲ',
    kannadaTitle: 'ಮಹಾಲಿಂಗಪುರ ಬಸ್ ಸ್ಟ್ಯಾಂಡ್‌ನಲ್ಲಿ ಪೋಲಿಯೋ ಲಸಿಕಾ ಶಿಬಿರ ಸಹಾಯ',
    category: 'ಆರೋಗ್ಯ ಬೆಂಬಲ',
    dateLabel: '೨೮ ಜೂನ್ ೨೦೨೬',
    date: '2026-06-28',
    time: 'ಬೆಳಿಗ್ಗೆ ೮:೦೦ ರಿಂದ ಸಂಜೆ ೫:೦೦',
    sortOrder: 3,
    location: 'ಮಹಾಲಿಂಗಪುರ ಬಸ್ ನಿಲ್ದಾಣ',
    description: 'ಭಾನುವಾರ, 28 ಜೂನ್ 2026 ರಂದು, ಮಹಾ ಫೌಂಡೇಶನ್ ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಮಹಾಲಿಂಗಪುರ ಬಸ್ ನಿಲ್ದಾಣದಲ್ಲಿ ಪೋಲಿಯೊ ಲಸಿಕೆ ಚಟುವಟಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಿತು. ಈ ಚಟುವಟಿಕೆಯು ಐದು ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ವಯಸ್ಸಿನ 70 ಮಕ್ಕಳನ್ನು ತಲುಪಲು ಸಹಾಯ ಮಾಡಿತು.',
    image: '/images/activities/polio-vaccination-camp-support.jpg',
    imageAlt: 'ಮಹಾಲಿಂಗಪುರ ಬಸ್ ನಿಲ್ದಾಣದಲ್ಲಿ ಪೋಲಿಯೋ ಲಸಿಕಾ ಶಿಬಿರ ಬೆಂಬಲ',
    draft: false,
    tags: ['health support', 'polio vaccination support', 'children', 'mahalingpur'],
    overviewTitle: 'ಈ ಆರೋಗ್ಯ ಬೆಂಬಲ ಚಟುವಟಿಕೆಯ ಬಗ್ಗೆ',
    overview: 'ಭಾನುವಾರ, 28 ಜೂನ್ 2026 ರಂದು, ಮಹಾ ಫೌಂಡೇಶನ್ ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಮಹಾಲಿಂಗಪುರ ಬಸ್ ನಿಲ್ದಾಣದಲ್ಲಿ ಪೋಲಿಯೊ ಲಸಿಕೆ ಚಟುವಟಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಿತು. ಈ ಚಟುವಟಿಕೆಯು ಐದು ವರ್ಷಕ್ಕಿಂತ ಕಡಿಮೆ ವಯಸ್ಸಿನ 70 ಮಕ್ಕಳನ್ನು ತಲುಪಲು ಸಹಾಯ ಮಾಡಿತು.',
    purposeTitle: 'ಬೆಂಬಲದ ಉದ್ದೇಶ',
    purpose: 'ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಮಗುವಿನ ಆರೋಗ್ಯ ಬೆಂಬಲ ಚಟುವಟಿಕೆಯನ್ನು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡುವುದು ಇದರ ಉದ್ದೇಶವಾಗಿತ್ತು.',
    details: [
      { title: 'ಸುರಕ್ಷಿತ ವೈದ್ಯಕೀಯ ವಿವರಣೆ', content: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಚಟುವಟಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಿತು ಮತ್ತು ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡಿತು. ಫೌಂಡೇಶನ್ ಸದಸ್ಯರು ವೈದ್ಯಕೀಯವಾಗಿ ಲಸಿಕೆಗಳನ್ನು ನೀಡಿದ್ದಾರೆ ಎಂದು ಈ ಪುಟವು ಹೇಳುವುದಿಲ್ಲ.' },
      { title: 'ಸಮಯ ಮತ್ತು ತಲುಪುವಿಕೆ', content: 'ಚಟುವಟಿಕೆಯು ಬೆಳಿಗ್ಗೆ 8:00 ರಿಂದ ಸಂಜೆ 5:00 ರವರೆಗೆ ನಡೆಯಿತು ಮತ್ತು ಐದು ವರ್ಷದೊಳಗಿನ 70 ಮಕ್ಕಳನ್ನು ತಲುಪಲು ಸಹಾಯ ಮಾಡಿತು.' },
    ],
    impactHighlights: ['70 ಮಕ್ಕಳನ್ನು ತಲುಪಲಾಗಿದೆ', 'ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನ', 'ಬೆಳಿಗ್ಗೆ 8:00 ರಿಂದ ಸಂಜೆ 5:00'],
    gallery: [
      { title: 'ಶಿಬಿರ ಬೆಂಬಲ', image: '/images/activities/polio-vaccination-camp-support-1.jpg', imageAlt: 'ಪೋಲಿಯೊ ಲಸಿಕೆ ಶಿಬಿರ ಬೆಂಬಲ ಚಟುವಟಿಕೆ', caption: 'ಮಹಾಲಿಂಗಪುರ ಬಸ್ ನಿಲ್ದಾಣದಲ್ಲಿ ಆರೋಗ್ಯ ಬೆಂಬಲ ಚಟುವಟಿಕೆ.' },
      { title: 'ಮಕ್ಕಳ ಆರೋಗ್ಯ ಬೆಂಬಲ', image: '/images/activities/polio-vaccination-camp-support-2.jpg', imageAlt: 'ಮಗುವಿನ ಆರೋಗ್ಯ ಬೆಂಬಲ ಚಟುವಟಿಕೆ', caption: 'ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಮಕ್ಕಳ ಆರೋಗ್ಯ ಬೆಂಬಲ.' },
    ],
    videos: ['polio-vaccination-camp-support', 'health-camp-support'],
    relatedLinks: [
      { label: 'ಸಮಾಜ ಸೇವೆ', href: '/social-service' },
      { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      { label: 'ಸಂಪರ್ಕಿಸಿ', href: '/contact' },
    ],
  },
  {
    slug: 'free-ration-stationery-medicine-support',
    title: 'ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಉಚಿತ ಪಡಿತರ, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲ',
    kannadaTitle: 'ಬಡ ಜನರಿಗೆ ಉಚಿತ ರೇಷನ್, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧಿ ಸಹಾಯ',
    category: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ',
    dateLabel: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
    sortOrder: 4,
    location: 'ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳು',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ತನ್ನ ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯದ ಭಾಗವಾಗಿ ಬಡ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಉಚಿತ ಪಡಿತರ, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲವನ್ನು ಒದಗಿಸಿದೆ.',
    image: '/images/activities/free-ration-stationery-medicine-support.jpg',
    imageAlt: 'ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಉಚಿತ ಪಡಿತರ ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲ',
    draft: false,
    tags: ['community welfare', 'ration support', 'stationery support', 'medicine support'],
    overviewTitle: 'ಈ ಸಮುದಾಯ ಕಲ್ಯಾಣ ಬೆಂಬಲದ ಬಗ್ಗೆ',
    overview: 'ಮಹಾ ಫೌಂಡೇಶನ್ ತನ್ನ ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯದ ಭಾಗವಾಗಿ ಬಡ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಉಚಿತ ಪಡಿತರ, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲವನ್ನು ಒದಗಿಸಿದೆ.',
    purposeTitle: 'ಸಮುದಾಯ ಕಲ್ಯಾಣದ ಉದ್ದೇಶ',
    purpose: 'ತಕ್ಷಣದ ಕಷ್ಟಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಮತ್ತು ಸಮುದಾಯದ ಜವಾಬ್ದಾರಿಯನ್ನು ಉತ್ತೇಜಿಸುವ ಪ್ರಾಯೋಗಿಕ ಸಹಾಯದೊಂದಿಗೆ ಅಗತ್ಯವಿರುವ ಜನರನ್ನು ಬೆಂಬಲಿಸುವುದು ಇದರ ಉದ್ದೇಶವಾಗಿದೆ.',
    details: [
      { title: 'ಬೆಂಬಲ ಕ್ಷೇತ್ರಗಳು', content: 'ಚಟುವಟಿಕೆಯು ಉಚಿತ ಪಡಿತರ, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲವನ್ನು ಒಳಗೊಂಡಿದೆ.' },
      { title: 'ಸೇವೆ ಸಲ್ಲಿಸಿದ ಸಮುದಾಯಗಳು', content: 'ಬೆಂಬಲವು ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಬಡ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.' },
    ],
    impactHighlights: ['ಪಡಿತರ ಬೆಂಬಲ', 'ಸ್ಟೇಷನರಿ ಬೆಂಬಲ', 'ಔಷಧ ಬೆಂಬಲ'],
    gallery: [
      { title: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ ಬೆಂಬಲ', image: '/images/activities/free-ration-stationery-medicine-support-1.jpg', imageAlt: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ ಬೆಂಬಲ ವಸ್ತುಗಳು', caption: 'ಉಚಿತ ಪಡಿತರ, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲ.' },
    ],
    relatedLinks: [
      { label: 'ಪಡಿತರ ವಿತರಣೆ', href: '/ration-distribution' },
      { label: 'ಸಮಾಜ ಸೇವೆ', href: '/social-service' },
      { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
    ],
  },
  {
    slug: 'notebook-pen-distribution-government-school-students',
    title: '೨೦೦ ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ',
    kannadaTitle: 'ಸರ್ಕಾರಿ ಶಾಲೆಯ 200 ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್ ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ',
    category: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ',
    dateLabel: 'ಇತ್ತೀಚಿನ ಚಟುವಟಿಕೆ',
    sortOrder: 5,
    location: 'ಸರ್ಕಾರಿ ಶಾಲೆ, ಮಹಾಲಿಂಗಪುರ ಪ್ರದೇಶ',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ 200 ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅವರ ಮೂಲ ಶೈಕ್ಷಣಿಕ ಅಗತ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸಲು ನೋಟ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಪೆನ್ನುಗಳನ್ನು ವಿತರಿಸಿತು.',
    image: '/images/activities/notebook-pen-distribution-students.jpg',
    imageAlt: 'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ',
    draft: false,
    tags: ['student support', 'government school', 'notebook distribution', 'education support'],
    overviewTitle: 'ಈ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಚಟುವಟಿಕೆಯ ಬಗ್ಗೆ',
    overview: 'ಮಹಾ ಫೌಂಡೇಶನ್ 200 ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅವರ ಮೂಲ ಶೈಕ್ಷಣಿಕ ಅಗತ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸಲು ನೋಟ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಪೆನ್ನುಗಳನ್ನು ವಿತರಿಸಿತು.',
    purposeTitle: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲದ ಉದ್ದೇಶ',
    purpose: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮೂಲಭೂತ ಕಲಿಕಾ ಸಾಮಗ್ರಿಗಳೊಂದಿಗೆ ಸಹಾಯ ಮಾಡುವುದು ಮತ್ತು ಮುಂದುವರಿದ ಶಿಕ್ಷಣವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು ಇದರ ಉದ್ದೇಶವಾಗಿದೆ.',
    details: [
      { title: 'ಬೆಂಬಲಿತ ವಿದ್ಯಾರ್ಥಿಗಳು', content: 'ಈ ಚಟುವಟಿಕೆಯ ಪರಿಶೀಲಿಸಿದ ಸಾರ್ವಜನಿಕ ಸಂಖ್ಯೆ 200 ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳು.' },
      { title: 'ವಿತರಿಸಿದ ವಸ್ತುಗಳು', content: 'ಮೂಲ ಶೈಕ್ಷಣಿಕ ಅಗತ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸಲು ನೋಟ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಪೆನ್ನುಗಳನ್ನು ವಿತರಿಸಲಾಯಿತು.' },
    ],
    impactHighlights: ['200 ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ', 'ನೋಟ್‌ಬುಕ್ ವಿತರಣೆ', 'ಪೆನ್ ವಿತರಣೆ'],
    gallery: [
      { title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ', image: '/images/activities/notebook-pen-distribution-1.jpg', imageAlt: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ', caption: 'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ಬೆಂಬಲ.' },
    ],
    relatedLinks: [
      { label: 'ಸಮಾಜ ಸೇವೆ', href: '/social-service' },
      { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
    ],
  },
  {
    slug: 'monthly-plastic-free-cleanliness-awareness-talks',
    title: 'ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜೀವನ ಮತ್ತು ಸ್ವಚ್ಛತೆಯ ಕುರಿತು ಮಾಸಿಕ ಜಾಗೃತಿ ಉಪನ್ಯಾಸಗಳು',
    kannadaTitle: 'ಸರ್ಕಾರಿ ಶಾಲೆಯಲ್ಲಿ ಪ್ಲಾಸ್ಟಿಕ್ ನಿಷೇಧ ಮತ್ತು ಸ್ವಚ್ಛತೆ ಜಾಗೃತಿ ಉಪನ್ಯಾಸ',
    category: 'ಜಾಗೃತಿ',
    dateLabel: 'ಮಾಸಿಕ ಚಟುವಟಿಕೆ',
    sortOrder: 6,
    location: 'ಸರ್ಕಾರಿ ಶಾಲೆಗಳು',
    description: 'ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು, ಸ್ವಚ್ಛತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಅಭ್ಯಾಸಗಳನ್ನು ಬೆಳೆಸುವ ಬಗ್ಗೆ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಿಕ್ಷಣ ನೀಡಲು ಮಹಾ ಫೌಂಡೇಶನ್ ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಮಾಸಿಕ ಜಾಗೃತಿ ಉಪನ್ಯಾಸಗಳನ್ನು ನಡೆಸುತ್ತದೆ.',
    image: '/images/activities/monthly-plastic-free-cleanliness-awareness.jpg',
    imageAlt: 'ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜೀವನ ಮತ್ತು ಸ್ವಚ್ಛತೆ ಜಾಗೃತಿ ಮಾತುಕತೆಗಳು',
    draft: false,
    tags: ['awareness', 'plastic-free awareness', 'cleanliness', 'government schools'],
    overviewTitle: 'ಈ ಮಾಸಿಕ ಜಾಗೃತಿ ಉಪನ್ಯಾಸಗಳ ಬಗ್ಗೆ',
    overview: 'ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು, ಸ್ವಚ್ಛತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಅಭ್ಯಾಸಗಳನ್ನು ಬೆಳೆಸುವ ಬಗ್ಗೆ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಶಿಕ್ಷಣ ನೀಡಲು ಮಹಾ ಫೌಂಡೇಶನ್ ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಮಾಸಿಕ ಜಾಗೃತಿ ಉಪನ್ಯಾಸಗಳನ್ನು ನಡೆಸುತ್ತದೆ.',
    purposeTitle: 'ಜಾಗೃತಿ ಉಪನ್ಯಾಸಗಳ ಉದ್ದೇಶ',
    purpose: 'ಸ್ವಚ್ಛತೆ, ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳನ್ನು ಕಾಪಾಡುವ ಬಗ್ಗೆ ಜವಾಬ್ದಾರಿಯುತ ಅಭ್ಯಾಸಗಳನ್ನು ಬೆಳೆಸಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡುವುದು ಇದರ ಉದ್ದೇಶವಾಗಿದೆ.',
    details: [
      { title: 'ಶಾಲಾ ಜಾಗೃತಿ', content: 'ಉಪನ್ಯಾಸಗಳನ್ನು ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಮಾಸಿಕ ಚಟುವಟಿಕೆಯಾಗಿ ನಡೆಸಲಾಗುತ್ತದೆ.' },
      { title: 'ಗಮನಹರಿಸುವ ವಿಷಯಗಳು', content: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು, ಸ್ವಚ್ಛತೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳುವುದು ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಅಭ್ಯಾಸಗಳನ್ನು ನಿರ್ಮಿಸುವ ಬಗ್ಗೆ ಕಲಿಯುತ್ತಾರೆ.' },
    ],
    impactHighlights: ['ಮಾಸಿಕ ಚಟುವಟಿಕೆ', 'ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ', 'ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ'],
    gallery: [
      { title: 'ಜಾಗೃತಿ ಉಪನ್ಯಾಸ', image: '/images/activities/monthly-plastic-free-cleanliness-awareness-1.jpg', imageAlt: 'ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜೀವನ ಮತ್ತು ಸ್ವಚ್ಛತೆಯ ಕುರಿತು ಶಾಲಾ ಜಾಗೃತಿ ಮಾತುಕತೆ', caption: 'ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜೀವನ ಮತ್ತು ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಉಪನ್ಯಾಸ.' },
    ],
    videos: ['awareness-programs'],
    relatedLinks: [
      { label: 'ಸಮಾಜ ಸೇವೆ', href: '/social-service' },
      { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      { label: 'ಬ್ಲಾಗ್', href: '/blog' },
    ],
  },
];

export const activities = { en, kn } as const;

export const activitiesSummary = {
  en: 'Mahaa Foundation continues to organize many more social service, education support, health awareness, and community welfare activities.',
  kn: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಇನ್ನೂ ಅನೇಕ ಸಮಾಜ ಸೇವೆ, ಶಿಕ್ಷಣ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಜಾಗೃತಿ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸುವುದನ್ನು ಮುಂದುವರೆಸಿದೆ.',
};

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
