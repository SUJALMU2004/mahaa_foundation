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

const en = {
  hero: {
    eyebrow: 'Community-led service in North Karnataka',
    title: 'Local hands. Lasting change in Mahalingpur.',
    kannadaLine: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ',
    description:
      'We bring volunteers and supporters together to help families, equip government-school students, plant trees, and strengthen community welfare across Mahalingpur and nearby areas.',
    phrase: 'Serve a Family. Support a Student. Plant a Tree.',
    focusPrefix: 'Focus:',
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

  impactStatsSection: {
    eyebrow: 'Impact',
    title: 'Our Growing Impact',
    description: 'Every tree planted, every ration kit shared, and every volunteer hour brings us closer to a cleaner, kinder, and stronger community.',
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

  missionSection: {
    eyebrow: 'Mission',
    title: 'Serving People. Supporting Education. Growing Greener Communities.',
    description: 'Our mission is to serve communities in need through ration support, student assistance, health awareness, tree plantation, and volunteer-driven social service activities in Mahalingpur and nearby areas.',
    btnLearnMore: 'Learn About Our NGO',
  },

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

  workHighlightsSection: {
    title: 'Our Work for Society and Mahalingpur',
    description: 'From ration distribution to student support, tree plantation, health camp support, and awareness programs, our work focuses on practical community impact.',
    btnSeeAll: 'See All Work',
    btnExplorePrefix: 'Explore',
  },

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

  trustSection: {
    eyebrow: 'Why Join Us',
    title: 'Why People Join Our Mission',
    description: 'Our work is built on community participation, transparent intentions, and a strong commitment to people and nature.',
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

  gallerySection: {
    eyebrow: 'Activity Moments',
    title: 'Moments from Our Activities',
    description: 'A glimpse of our plantation drives, ration distribution activities, environmental campaigns, and volunteer work.',
    viewGalleryBtn: 'View Gallery',
    viewActivitiesBtn: 'View Activities',
  },
  blogSection: {
    eyebrow: 'NGO Blog',
    title: 'Latest From Our NGO Blog',
    description: 'Read updates, awareness articles, and stories about social service, tree plantation, student support, health support, awareness, and community welfare.',
    visitBlogBtn: 'Visit Blog',
    readUpdatesText: 'Read updates on the blog',
  },
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
      eyebrow: 'Volunteer for NGO',
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
      eyebrow: 'Take Action',
      title: 'Join Hands with Mahaa Foundation Mahalingpur',
      content:
        'Support ration distribution, student help, tree plantation, health awareness, cleanliness awareness, and community welfare.',
      whatsappMessage:
        'Hello Mahaa Foundation, I want to know more about your NGO work.',
      btnVolunteer: 'Become a Volunteer',
      btnDonate: 'Donate Now',
      btnContact: 'Contact Us',
      btnWhatsapp: 'WhatsApp Us',
    },
  },
};

const kn = {
  hero: {
    eyebrow: 'ಉತ್ತರ ಕರ್ನಾಟಕದ ಸೇವೆ, ಸಮುದಾಯದ ಬೆಳವಣಿಗೆ, ಮಾನವೀಯತೆಗೆ ನಮ್ಮ ಸಂಕಲ್ಪ',
    title: 'ಸ್ನೇಹದಿಂದ ಕೈಜೋಡಿಸಿ, ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಶಾಶ್ವತ ಬದಲಾವಣೆ ಸೃಷ್ಟಿಸೋಣ.',
    kannadaLine: '',
    description:
      'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಶಿಕ್ಷಣ, ಪರಿಸರ, ಆರೋಗ್ಯ ಮತ್ತು ಸಮಾಜ ಸೇವೆ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಸಮುದಾಯದೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ ಸ್ಥಿರ ಬದಲಾವಣೆಗೆ ಶ್ರಮಿಸುತ್ತಿದೆ.',
    phrase: '',
    focusPrefix: '',
    ctas: [
      { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
    ],
    media: {
      image: heroImage,
      alt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ ತಂಡ ಮತ್ತು ಸ್ವಯಂಸೇವಕರು ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ತೊಡಗಿದ್ದಾರೆ',
      label: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ ಸೇವಾ ಕಾರ್ಯ',
    },
  },

  impactStatsSection: {
    eyebrow: 'ಪ್ರಭಾವ',
    title: 'ನಮ್ಮ ಬೆಳೆಯುತ್ತಿರುವ ಪ್ರಭಾವ',
    description: 'ಪ್ರತಿ ನೆಟ್ಟ ಮರ, ಹಂಚಿದ ಪ್ರತಿ ಪಡಿತರ ಕಿಟ್, ಮತ್ತು ಪ್ರತಿ ಸ್ವಯಂಸೇವಕ ಗಂಟೆಯು ನಮ್ಮನ್ನು ಸ್ವಚ್ಛ, ದಯೆಯ ಮತ್ತು ಬಲವಾದ ಸಮುದಾಯಕ್ಕೆ ಹತ್ತಿರ ತರುತ್ತದೆ.',
  },

  impactStats: [
    {
      value: '೧೦೦+',
      label: 'ನೆಟ್ಟ ಮರಗಳು',
      description: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ ನೆಟ್ಟ ಮರಗಳು.',
    },
    {
      value: '೫೦+',
      label: 'ಬೆಂಬಲಿತ ಕುಟುಂಬಗಳು',
      description: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಪಡಿತರ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಬೆಂಬಲ.',
    },
    {
      value: '೨೦೦+',
      label: 'ಬೆಂಬಲಿತ ವಿದ್ಯಾರ್ಥಿಗಳು',
      description: 'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ.',
    },
    {
      value: '೧೦+',
      label: 'ಸ್ವಯಂಸೇವಕರು',
      description: 'ಸೇವೆ, ಜಾಗೃತಿ ಮತ್ತು ಬೆಂಬಲ ಚಟುವಟಿಕೆಗಳಲ್ಲಿ ಸ್ವಯಂಸೇವಕರ ಭಾಗವಹಿಸುವಿಕೆ.',
    },
  ],

  missionSection: {
    eyebrow: 'ಗುರಿ',
    title: 'ಜನಸೇವೆ. ಶಿಕ್ಷಣಕ್ಕೆ ಬೆಂಬಲ. ಹಸಿರು ಸಮುದಾಯಗಳ ನಿರ್ಮಾಣ.',
    description: 'ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಹತ್ತಿರದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪಡಿತರ ಬೆಂಬಲ, ವಿದ್ಯಾರ್ಥಿ ಸಹಾಯ, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ಮರ ನೆಡುವಿಕೆ ಮತ್ತು ಸ್ವಯಂಸೇವಕ ಚಾಲಿತ ಸಮಾಜ ಸೇವಾ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ಅಗತ್ಯವಿರುವ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವುದು ನಮ್ಮ ಉದ್ದೇಶವಾಗಿದೆ.',
    btnLearnMore: 'ನಮ್ಮ ಎನ್‌ಜಿಒ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ',
  },

  missionCards: [
    {
      title: 'ಕುಟುಂಬಗಳಿಗೆ ಸೇವೆ',
      description:
        'ಪಡಿತರ ಮತ್ತು ಕಲ್ಯಾಣ ಬೆಂಬಲದ ಮೂಲಕ ಬಡ ಕುಟುಂಬಗಳು, ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಸಮುದಾಯಗಳು, ದಿನಗೂಲಿ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಬೆಂಬಲ ನೀಡುವುದು.',
    },
    {
      title: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ',
      description:
        'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್‌ಗಳು, ಪೆನ್ನುಗಳು, ಸ್ಟೇಷನರಿ ಮತ್ತು ಮೂಲ ಶಾಲಾ ಅವಶ್ಯಕತೆಗಳೊಂದಿಗೆ ಸಹಾಯ ಮಾಡುವುದು.',
    },
    {
      title: 'ಹಸಿರು ಸಮುದಾಯಗಳ ನಿರ್ಮಾಣ',
      description:
        'ಮರಗಳನ್ನು ನೆಡುವುದು, ಸ್ವಚ್ಛತೆಯ ಜಾಗೃತಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು ಮತ್ತು ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಅಭ್ಯಾಸಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು.',
    },
  ],

  workHighlightsSection: {
    title: 'ಸಮಾಜ ಮತ್ತು ಮಹಾಲಿಂಗಪುರಕ್ಕಾಗಿ ನಮ್ಮ ಕೆಲಸ',
    description: 'ಪಡಿತರ ವಿತರಣೆಯಿಂದ ಹಿಡಿದು ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ ಮತ್ತು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳವರೆಗೆ, ನಮ್ಮ ಕೆಲಸವು ಪ್ರಾಯೋಗಿಕ ಸಮುದಾಯದ ಪ್ರಭಾವವನ್ನು ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ.',
    btnSeeAll: 'ಎಲ್ಲಾ ಕೆಲಸಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
    btnExplorePrefix: 'ಅನ್ವೇಷಿಸಿ',
  },

  workHighlights: [
    {
      title: 'ಪಡಿತರ ವಿತರಣೆ',
      href: '/ration-distribution',
      description:
        'ಅಗತ್ಯವಿರುವ ಕಡೆಗಳಲ್ಲಿ ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ, ದಿನಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳೊಂದಿಗೆ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲ.',
      image: rationDistributionCardImage,
      imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ಪಡಿತರ ವಿತರಣೆ ಬೆಂಬಲ',
    },
    {
      title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ',
      href: '/social-service',
      description:
        'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್, ಪೆನ್, ಸ್ಟೇಷನರಿ ಮತ್ತು ಮೂಲ ಶಾಲಾ ಬೆಂಬಲ.',
      image: studentSupportCardImage,
      imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಚಟುವಟಿಕೆ',
    },
    {
      title: 'ಮರ ನೆಡುವಿಕೆ',
      href: '/tree-plantation',
      description:
        'ಫೌಂಡೇಶನ್ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡೂ ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ.',
      image: treePlantationCardImage,
      imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ವತಿಯಿಂದ ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವ ಕಾರ್ಯ',
    },
    {
      title: 'ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ',
      href: '/social-service',
      description:
        'ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಆರೋಗ್ಯ ಜಾಗೃತಿ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ ಮತ್ತು ಪೋಲಿಯೊ ಲಸಿಕೆ ಶಿಬಿರ ಸಮನ್ವಯ.',
      image: healthCampSupportCardImage,
      imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ ಚಟುವಟಿಕೆ',
    },
    {
      title: 'ಸಮಾಜ ಸೇವೆ ಮತ್ತು ಜಾಗೃತಿ',
      href: '/social-service',
      description:
        'ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ, ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ, ಸಮುದಾಯ ಕಲ್ಯಾಣ ಮತ್ತು ಸ್ವಯಂಸೇವಕ ಆಧಾರಿತ ಸಮಾಜ ಸೇವೆ.',
      image: socialServiceAwarenessCardImage,
      imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ಸಮಾಜ ಸೇವೆ ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆ',
    },
  ],

  focusedWorkSections: {
    treePlantation: {
      eyebrow: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ',
      title: 'ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ೧೦೦ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ',
      content:
        'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡೂ ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ. ಈ ಉಪಕ್ರಮವು ಹಸಿರು, ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ ಮತ್ತು ನೆಟ್ಟ ಮರಗಳ ಆರೈಕೆಯ ಬಗ್ಗೆ ಜಾಗೃತಿಯನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.',
      bullets: [
        '100 ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ',
        'ಡಬಲ್ ರಸ್ತೆ, ಮಹಾಲಿಂಗಪುರ',
        'ಫೌಂಡೇಶನ್ ತಂಡದ ಕೊಡುಗೆ',
        'ಮರಗಳ ಆರೈಕೆ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ ಜಾಗೃತಿ',
      ],
      primaryCta: { label: 'ಮರ ನೆಡುವ ಕಾರ್ಯವನ್ನು ವೀಕ್ಷಿಸಿ', href: '/tree-plantation' },
      secondaryCta: { label: 'ನಮ್ಮೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      media: {
        image: treePlantationFeatureImage,
        alt: 'ಡಬಲ್ ರಸ್ತೆ ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವ ಕಾರ್ಯ',
        label: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ',
      },
    },
    rationSupport: {
      eyebrow: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಪಡಿತರ ವಿತರಣೆ',
      title: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಮಾಸಿಕ ಬೆಂಬಲ',
      content:
        'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಬೆಂಬಲ ನೀಡುತ್ತದೆ. ಪಡಿತರ ಕಿಟ್‌ಗಳು ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ, ಅಗತ್ಯ ದಿನಸಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಕಡೆಗಳಲ್ಲಿ ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ.',
      bullets: [
        '50+ ಕುಟುಂಬಗಳಿಗೆ ಬೆಂಬಲ',
        '100+ ಪಡಿತರ ಕಿಟ್‌ಗಳ ವಿತರಣೆ',
        'ಮಾಸಿಕ ಪಡಿತರ ವಿತರಣೆ',
        'ಅಗತ್ಯವಿರುವಲ್ಲಿ ದಿನಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳು',
      ],
      primaryCta: { label: 'ಪಡಿತರ ವಿತರಣೆಯನ್ನು ಬೆಂಬಲಿಸಿ', href: '/ration-distribution' },
      secondaryCta: { label: 'ಈಗ ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
      media: {
        image: rationSupportFeatureImage,
        alt: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಪಡಿತರ ವಿತರಣೆ ಬೆಂಬಲ',
        label: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಪಡಿತರ ಬೆಂಬಲ',
      },
    },
  },

  trustSection: {
    eyebrow: 'ನಮ್ಮನ್ನು ಏಕೆ ಸೇರಬೇಕು',
    title: 'ಜನರು ನಮ್ಮ ಮಿಷನ್ ಅನ್ನು ಏಕೆ ಸೇರುತ್ತಾರೆ',
    description: 'ನಮ್ಮ ಕೆಲಸವು ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆ, ಪಾರದರ್ಶಕ ಉದ್ದೇಶಗಳು ಮತ್ತು ಜನರು ಮತ್ತು ಪ್ರಕೃತಿಯ ಮೇಲಿನ ಬಲವಾದ ಬದ್ಧತೆಯ ಮೇಲೆ ನಿರ್ಮಿತವಾಗಿದೆ.',
  },

  trustCards: [
    {
      title: site.foundedDisplay,
      description:
        'ಪ್ರಾಯೋಗಿಕ ಸೇವೆ ಮತ್ತು ಸ್ಥಿರವಾದ ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯ ಸುತ್ತ ನಿರ್ಮಿಸಲಾದ ಯುವ, ಸ್ಥಳೀಯವಾಗಿ ಬೇರೂರಿರುವ ಅಡಿಪಾಯ.',
    },
    {
      title: 'ಸ್ಥಾಪಕ-ನೇತೃತ್ವದ ಸೇವೆ',
      description:
        'ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಉದ್ದೇಶದಿಂದ ಅನಿಲ್ ಕುಮಾರ್ ಉಳ್ಳಗಡ್ಡಿ ಅವರಿಂದ ಸ್ಥಾಪಿಸಲಾಗಿದೆ.',
    },
    {
      title: 'ಸ್ಪಷ್ಟ, ಜವಾಬ್ದಾರಿಯುತ ನವೀಕರಣಗಳು',
      description:
        'ನಾವು ನಿರ್ದಿಷ್ಟ ಚಟುವಟಿಕೆಯ ವಿವರಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪ್ರಭಾವದ ಸಂಖ್ಯೆಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತೇವೆ ಇದರಿಂದ ಬೆಂಬಲಿಗರು ತಾವು ಸಾಧ್ಯವಾಗಿಸಲು ಸಹಾಯ ಮಾಡುವ ಕೆಲಸವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಬಹುದು.',
    },
    {
      title: 'ಸ್ವಯಂಸೇವಕರ ಭಾಗವಹಿಸುವಿಕೆ',
      description:
        'ವಿದ್ಯಾರ್ಥಿಗಳು, ಸ್ಥಳೀಯ ನಿವಾಸಿಗಳು, ಗುಂಪುಗಳು, ಕಂಪನಿಗಳು ಮತ್ತು ಶಾಲೆಗಳು ಸಹಯೋಗಕ್ಕಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.',
    },
  ],

  gallerySection: {
    eyebrow: 'ಚಟುವಟಿಕೆಯ ಕ್ಷಣಗಳು',
    title: 'ನಮ್ಮ ಚಟುವಟಿಕೆಗಳ ಕ್ಷಣಗಳು',
    description: 'ನಮ್ಮ ಸಸಿ ನೆಡುವ ಅಭಿಯಾನಗಳು, ರೇಷನ್ ವಿತರಣೆ ಚಟುವಟಿಕೆಗಳು, ಪರಿಸರ ಅಭಿಯಾನಗಳು ಮತ್ತು ಸ್ವಯಂಸೇವಕ ಕಾರ್ಯಗಳ ಒಂದು ನೋಟ.',
    viewGalleryBtn: 'ಗ್ಯಾಲರಿ ವೀಕ್ಷಿಸಿ',
    viewActivitiesBtn: 'ಚಟುವಟಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ',
  },
  blogSection: {
    eyebrow: 'ಎನ್‌ಜಿಒ ಬ್ಲಾಗ್',
    title: 'ನಮ್ಮ ಎನ್‌ಜಿಒ ಬ್ಲಾಗ್‌ನ ಇತ್ತೀಚಿನ ಸುದ್ದಿಗಳು',
    description: 'ಸಮಾಜ ಸೇವೆ, ಮರ ನೆಡುವಿಕೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಬೆಂಬಲ, ಜಾಗೃತಿ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣದ ಕುರಿತು ನವೀಕರಣಗಳು, ಜಾಗೃತಿ ಲೇಖನಗಳು ಮತ್ತು ಕಥೆಗಳನ್ನು ಓದಿ.',
    visitBlogBtn: 'ಬ್ಲಾಗ್ ಭೇಟಿ ನೀಡಿ',
    readUpdatesText: 'ಬ್ಲಾಗ್‌ನಲ್ಲಿ ನವೀಕರಣಗಳನ್ನು ಓದಿ',
  },
  galleryPreview: [
    {
      image: treePlantationFeatureImage,
      alt: 'ಡಬಲ್ ರಸ್ತೆ ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವ ಚಟುವಟಿಕೆ',
      caption: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ',
    },
    {
      image: rationDistributionCardImage,
      alt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲ',
      caption: 'ಪಡಿತರ ವಿತರಣೆ ಬೆಂಬಲ',
    },
    {
      image: studentSupportPreviewImage,
      alt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಚಟುವಟಿಕೆ',
      caption: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ',
    },
    {
      image: healthCampPreviewImage,
      alt: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ ಚಟುವಟಿಕೆ',
      caption: 'ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ',
    },
    {
      image: awarenessProgramsPreviewImage,
      alt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ವತಿಯಿಂದ ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ ಚಟುವಟಿಕೆ',
      caption: 'ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು',
    },
    {
      image: teamServiceWorkPreviewImage,
      alt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ ತಂಡದ ಸೇವಾ ಕಾರ್ಯ',
      caption: 'ತಂಡದ ಸೇವಾ ಕಾರ್ಯ',
    },
  ],

  blogPreview: [
    {
      title: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆಯ ಪ್ರಾಮುಖ್ಯತೆ',
      category: 'ಮರ ನೆಡುವಿಕೆ',
      excerpt:
        'ಮರ ನೆಡುವಿಕೆಯು ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಹಸಿರು ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳು ಮತ್ತು ಪರಿಸರ ಜವಾಬ್ದಾರಿಯನ್ನು ಹೇಗೆ ಬೆಂಬಲಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಿರಿ.',
      href: '/blog',
    },
    {
      title: 'ಸರ್ಕಾರಿ ಶಾಲಾ ಮಕ್ಕಳಿಗೆ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಏಕೆ ಮುಖ್ಯ',
      category: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ',
      excerpt:
        'ನೋಟ್‌ಬುಕ್‌ಗಳು, ಪೆನ್ನುಗಳು ಮತ್ತು ಶಾಲಾ ಅಗತ್ಯಗಳು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಘನತೆಯಿಂದ ಕಲಿಯುವುದನ್ನು ಮುಂದುವರಿಸಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತವೆ ಎಂಬುದನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಿ.',
      href: '/blog',
    },
    {
      title: 'ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿಯ ಪ್ರಾಮುಖ್ಯತೆ',
      category: 'ಜಾಗೃತಿ',
      excerpt:
        'ಜವಾಬ್ದಾರಿಯುತ ಸಮುದಾಯಗಳಿಗೆ ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಏಕೆ ಮುಖ್ಯ ಎಂಬುದನ್ನು ಅನ್ವೇಷಿಸಿ.',
      href: '/blog',
    },
  ],

  ctas: {
    volunteer: {
      eyebrow: 'ಎನ್‌ಜಿಒಗಾಗಿ ಸ್ವಯಂಸೇವಕರು',
      title: 'ಮಹಾಲಿಂಗಪುರಕ್ಕಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ',
      content:
        '15 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಯಾರಾದರೂ ಮಹಾ ಫೌಂಡೇಶನ್‌ನೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಬಹುದು. ವಿದ್ಯಾರ್ಥಿಗಳು, ವೃತ್ತಿಪರರು, ಸಮುದಾಯ ಗುಂಪುಗಳು, ಶಾಲೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ನಿವಾಸಿಗಳು ಸೇರಲು ಸ್ವಾಗತ.',
      primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ', href: '/volunteer' },
      secondaryCta: { label: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ', href: '/contact' },
    },
    donate: {
      title: 'ನಿಮ್ಮ ಬೆಂಬಲವು ಕುಟುಂಬಗಳು ಮತ್ತು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡಬಹುದು',
      content:
        'ಪಡಿತರ ಕಿಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳ ನೋಟ್‌ಬುಕ್‌ಗಳು, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಲು UPI ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ದೇಣಿಗೆ ನೀಡಿ.',
      supportPhrase: 'ಒಂದು ಕುಟುಂಬಕ್ಕೆ ಸೇವೆ. ಒಬ್ಬ ವಿದ್ಯಾರ್ಥಿಗೆ ಬೆಂಬಲ. ಒಂದು ಮರ ನೆಡಿ.',
      primaryCta: { label: 'ನಮ್ಮ ಕೆಲಸವನ್ನು ಬೆಂಬಲಿಸಲು ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
      secondaryCta: { label: 'ಪಡಿತರ ವಿತರಣೆಯನ್ನು ಬೆಂಬಲಿಸಿ', href: '/ration-distribution' },
    },
    final: {
      eyebrow: 'ಕ್ರಮ ಕೈಗೊಳ್ಳಿ',
      title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದೊಂದಿಗೆ ಕೈಜೋಡಿಸಿ',
      content:
        'ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿಗಳ ಸಹಾಯ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣವನ್ನು ಬೆಂಬಲಿಸಿ.',
      whatsappMessage:
        'ನಮಸ್ಕಾರ ಮಹಾ ಫೌಂಡೇಶನ್, ನಾನು ನಿಮ್ಮ ಎನ್‌ಜಿಒ ಕೆಲಸದ ಬಗ್ಗೆ ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಲು ಬಯಸುತ್ತೇನೆ.',
      btnVolunteer: 'ಸ್ವಯಂಸೇವಕರಾಗಿ',
      btnDonate: 'ಈಗ ದೇಣಿಗೆ ನೀಡಿ',
      btnContact: 'ಸಂಪರ್ಕಿಸಿ',
      btnWhatsapp: 'ವಾಟ್ಸಾಪ್ ಮಾಡಿ',
    },
  },
};

export const home = { en, kn } as const;

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
