export type SeoEntry = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
};

const en = {
  home: {
    title: 'Mahaa Foundation Mahalingpur | NGO in Bagalkot, Karnataka',
    description:
      'Mahaa Foundation Mahalingpur is an NGO in Bagalkot, Karnataka, working for ration distribution, tree plantation, student support, health camps, and social service.',
    canonical: '/',
    ogImage: '/images/og/home-og.jpg',
  },
  about: {
    title: 'About Mahaa Foundation | Social Service NGO in Mahalingpur',
    description:
      'Learn about Mahaa Foundation Mahalingpur, an NGO supporting poor families, students, tree plantation, health awareness, and community welfare in Bagalkot, Karnataka.',
    canonical: '/about',
    ogImage: '/images/og/about-og.jpg',
  },
  ourWork: {
    title: 'Our Work | Ration Distribution, Student Support & Tree Plantation',
    description:
      'Explore Mahaa Foundation activities including ration distribution, student stationery support, tree plantation, health camp support, cleanliness awareness, and social service.',
    canonical: '/our-work',
    ogImage: '/images/og/our-work-og.jpg',
  },
  treePlantation: {
    title: 'Tree Plantation NGO in Mahalingpur | Mahaa Foundation',
    description:
      'Mahaa Foundation planted 100 trees on Double Road, Mahalingpur, to support greenery, public responsibility, and community-based environmental care.',
    canonical: '/tree-plantation',
    ogImage: '/images/og/tree-plantation-og.jpg',
  },
  rationDistribution: {
    title: 'Ration Distribution NGO in Mahalingpur | Food Support for Families',
    description:
      'Mahaa Foundation provides monthly ration support to backward-class families and people in need with food supplies, groceries, and medical support items.',
    canonical: '/ration-distribution',
    ogImage: '/images/og/ration-distribution-og.jpg',
  },
  socialService: {
    title: 'Social Service NGO in Mahalingpur | Student Support & Health Camps',
    description:
      'Mahaa Foundation supports students, health camps, cleanliness awareness, ration distribution, and community welfare activities in Mahalingpur and nearby areas.',
    canonical: '/social-service',
    ogImage: '/images/og/social-service-og.jpg',
  },
  volunteer: {
    title: 'Volunteer with Mahaa Foundation | NGO Volunteer Work in Mahalingpur',
    description:
      'Join Mahaa Foundation as a volunteer for tree plantation, ration distribution, student support, health camps, awareness programs, and social service activities.',
    canonical: '/volunteer',
    ogImage: '/images/og/volunteer-og.jpg',
  },
  donate: {
    title: 'Donate to Mahaa Foundation | Support Ration, Students & Social Work',
    description:
      'Donate to Mahaa Foundation Mahalingpur through UPI or bank transfer to support ration kits, student stationery, tree plantation, health camps, and social service.',
    canonical: '/donate',
    ogImage: '/images/og/donate-og.jpg',
  },
  gallery: {
    title: 'Mahaa Foundation Gallery | NGO Activities in Mahalingpur',
    description:
      'View photos from Mahaa Foundation activities including tree plantation, ration distribution, student support, health camp support, awareness programs, and social service.',
    canonical: '/gallery',
    ogImage: '/images/og/gallery-og.jpg',
  },
  videos: {
    title: 'Mahaa Foundation Videos | NGO Work in Mahalingpur',
    description:
      'Watch Mahaa Foundation videos from tree plantation, ration distribution, student support, health camp support, awareness programs, and social service activities.',
    canonical: '/videos',
    ogImage: '/images/og/videos-og.jpg',
  },
  activities: {
    title: 'Mahaa Foundation Activities | Social Work in Mahalingpur',
    description:
      'Explore Mahaa Foundation activities in Mahalingpur, including tree plantation, ration distribution, student support, health camp support, awareness talks, and social service.',
    canonical: '/activities',
    ogImage: '/images/og/activities-og.jpg',
  },
  blog: {
    title: 'Mahaa Foundation Blog | Social Service, Education Support & Tree Plantation',
    description:
      'Read Mahaa Foundation blogs about social service, ration distribution, student support, tree plantation, health awareness, volunteering, and community welfare.',
    canonical: '/blog',
    ogImage: '/images/og/blog-og.jpg',
  },
  contact: {
    title: 'Contact Mahaa Foundation Mahalingpur | Call, WhatsApp or Visit',
    description:
      'Contact Mahaa Foundation Mahalingpur for volunteering, donation support, ration distribution, student help, health camp support, tree plantation, and community welfare.',
    canonical: '/contact',
    ogImage: '/images/og/contact-og.jpg',
  },
};

const kn = {
  home: {
    title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ | ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ಎನ್‌ಜಿಒ',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ಬಾಗಲಕೋಟೆಯ ಎನ್‌ಜಿಒ ಆಗಿದ್ದು, ಪಡಿತರ ವಿತರಣೆ, ಮರ ನೆಡುವಿಕೆ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವೆಗಾಗಿ ಶ್ರಮಿಸುತ್ತಿದೆ.',
    canonical: '/',
    ogImage: '/images/og/home-og.jpg',
  },
  about: {
    title: 'ನಮ್ಮ ಬಗ್ಗೆ | ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಸಮಾಜ ಸೇವೆ ಎನ್‌ಜಿಒ',
    description: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಬಡ ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು, ಮರ ನೆಡುವಿಕೆ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕೆ ಬೆಂಬಲ ನೀಡುವ ಮಹಾ ಫೌಂಡೇಶನ್ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.',
    canonical: '/about',
    ogImage: '/images/og/about-og.jpg',
  },
  ourWork: {
    title: 'ನಮ್ಮ ಕೆಲಸ | ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಮರ ನೆಡುವಿಕೆ',
    description: 'ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸ್ಟೇಷನರಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಮತ್ತು ಸಮಾಜ ಸೇವೆ ಸೇರಿದಂತೆ ಮಹಾ ಫೌಂಡೇಶನ್ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    canonical: '/our-work',
    ogImage: '/images/og/our-work-og.jpg',
  },
  treePlantation: {
    title: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ | ಮಹಾ ಫೌಂಡೇಶನ್',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ.',
    canonical: '/tree-plantation',
    ogImage: '/images/og/tree-plantation-og.jpg',
  },
  rationDistribution: {
    title: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಪಡಿತರ ವಿತರಣೆ ಎನ್‌ಜಿಒ',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಮತ್ತು ಜನರಿಗೆ ದಿನಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಬೆಂಬಲದೊಂದಿಗೆ ಮಾಸಿಕ ಪಡಿತರವನ್ನು ನೀಡುತ್ತದೆ.',
    canonical: '/ration-distribution',
    ogImage: '/images/og/ration-distribution-og.jpg',
  },
  socialService: {
    title: 'ಸಮಾಜ ಸೇವೆ | ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಆರೋಗ್ಯ ಶಿಬಿರಗಳು',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ, ಪಡಿತರ ವಿತರಣೆ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಚಟುವಟಿಕೆಗಳನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.',
    canonical: '/social-service',
    ogImage: '/images/og/social-service-og.jpg',
  },
  volunteer: {
    title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಜೊತೆ ಸ್ವಯಂಸೇವಕರಾಗಿ',
    description: 'ಮರ ನೆಡುವಿಕೆ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಸಮಾಜ ಸೇವಾ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ ಸೇರಿ.',
    canonical: '/volunteer',
    ogImage: '/images/og/volunteer-og.jpg',
  },
  donate: {
    title: 'ಮಹಾ ಫೌಂಡೇಶನ್‌ಗೆ ದೇಣಿಗೆ ನೀಡಿ',
    description: 'ಪಡಿತರ, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಯುಪಿಐ ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ದೇಣಿಗೆ ನೀಡಿ.',
    canonical: '/donate',
    ogImage: '/images/og/donate-og.jpg',
  },
  gallery: {
    title: 'ಗ್ಯಾಲರಿ | ಮಹಾ ಫೌಂಡೇಶನ್ ಚಟುವಟಿಕೆಗಳು',
    description: 'ಮರ ನೆಡುವಿಕೆ, ಪಡಿತರ ವಿತರಣೆ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಸೇರಿದಂತೆ ಮಹಾ ಫೌಂಡೇಶನ್ ಚಟುವಟಿಕೆಗಳ ಫೋಟೋಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
    canonical: '/gallery',
    ogImage: '/images/og/gallery-og.jpg',
  },
  videos: {
    title: 'ವೀಡಿಯೊಗಳು | ಮಹಾ ಫೌಂಡೇಶನ್ ಸೇವಾ ಕಾರ್ಯ',
    description: 'ಮಹಾ ಫೌಂಡೇಶನ್‌ನ ಸಮಾಜ ಸೇವೆ ಮತ್ತು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳ ವೀಡಿಯೊಗಳನ್ನು ವೀಕ್ಷಿಸಿ.',
    canonical: '/videos',
    ogImage: '/images/og/videos-og.jpg',
  },
  activities: {
    title: 'ಚಟುವಟಿಕೆಗಳು | ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಸಮಾಜ ಸೇವೆ',
    description: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಸಮಾಜ ಸೇವಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.',
    canonical: '/activities',
    ogImage: '/images/og/activities-og.jpg',
  },
  blog: {
    title: 'ಬ್ಲಾಗ್ | ಸಮಾಜ ಸೇವೆ ಮತ್ತು ಮರ ನೆಡುವಿಕೆ',
    description: 'ಸಮಾಜ ಸೇವೆ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಮರ ನೆಡುವಿಕೆಯ ಕುರಿತು ಮಹಾ ಫೌಂಡೇಶನ್ ಬ್ಲಾಗ್ ಓದಿ.',
    canonical: '/blog',
    ogImage: '/images/og/blog-og.jpg',
  },
  contact: {
    title: 'ಸಂಪರ್ಕಿಸಿ | ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ',
    description: 'ಸ್ವಯಂಸೇವಕರಾಗಲು, ದೇಣಿಗೆ ನೀಡಲು ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ.',
    canonical: '/contact',
    ogImage: '/images/og/contact-og.jpg',
  },
};

export const seo = { en, kn } as const;
