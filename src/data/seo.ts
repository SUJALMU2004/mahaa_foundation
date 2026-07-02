export type SeoEntry = {
  title: string;
  description: string;
  canonical: string;
  ogImage: string;
};

export const seo = {
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
} satisfies Record<string, SeoEntry>;
