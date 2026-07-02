import { site } from './site';
import { absoluteUrl } from '../utils/seo';

export type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp';
};

export type FeatureItem = {
  title: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type InnerPage = {
  path: string;
  label: string;
  seo: {
    ogTitle: string;
    ogDescription: string;
    ogImage: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
    image: string;
    imageAlt: string;
  };
  intro: {
    eyebrow?: string;
    title: string;
    content: string;
  };
  features?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: readonly FeatureItem[];
  };
  split?: {
    eyebrow?: string;
    title: string;
    description: string;
    bulletPoints?: readonly string[];
    image: string;
    imageAlt: string;
    imagePosition?: 'left' | 'right';
    primaryCta?: CtaLink;
    secondaryCta?: CtaLink;
  };
  process?: {
    title: string;
    description?: string;
    steps: readonly FeatureItem[];
  };
  highlight?: {
    eyebrow?: string;
    title: string;
    description: string;
    items?: readonly FeatureItem[];
    variant?: 'default' | 'stats-row';
  };
  faqs?: readonly FaqItem[];
  cta: {
    title: string;
    description: string;
    primaryCta: CtaLink;
    secondaryCta?: CtaLink;
    whatsappCta?: boolean;
  };
  breadcrumbs: readonly { label: string; href: string }[];
};

const imagePaths = {
  about: '/images/work/about-ngo-team.jpg',
  ourWork: '/images/work/our-work-community.jpg',
  treePlantation: '/images/work/tree-plantation-page.jpg',
  rationDistribution: '/images/work/ration-distribution-page.jpg',
  socialService: '/images/work/social-service-page.jpg',
  volunteer: '/images/work/volunteer-page.jpg',
  donate: '/images/work/donate-page.jpg',
  contact: '/images/work/contact-page.jpg',
} as const;

export const innerPages = {
  about: {
    path: '/about',
    label: 'About',
    seo: {
      ogTitle: 'About Mahaa Foundation Mahalingpur',
      ogDescription:
        'Learn about our founder, mission, values, team, and service work in Mahalingpur and Bagalkot.',
      ogImage: '/images/og/about-og.jpg',
    },
    hero: {
      eyebrow: 'About Mahaa Foundation',
      title: 'About Mahaa Foundation Mahalingpur',
      description:
        'Mahaa Foundation Mahalingpur serves people through ration support, student assistance, tree plantation, health awareness, and volunteer-driven social service in Mahalingpur and nearby areas.',
      primaryCta: { label: 'Join Our Mission', href: '/volunteer' },
      secondaryCta: { label: 'Explore Our Work', href: '/our-work' },
      image: imagePaths.about,
      imageAlt: 'Mahaa Foundation team and community service placeholder',
    },
    intro: {
      eyebrow: 'Foundation Story',
      title: 'Started for Service and Community Welfare',
      content:
        'Mahaa Foundation Mahalingpur was started on 1 December 2025 by Anilkumar Ullagaddi with a commitment to serve people and support community welfare in Mahalingpur and nearby areas. The foundation focuses on ration distribution, student support, tree plantation, health camp support, cleanliness awareness, and social service. Mahaa Foundation Mahalingpur serves communities in Mahalingpur, Bagalkot district, and nearby areas including Mudhol, Jamkhandi, Chikodi, and North Karnataka.',
    },
    features: {
      eyebrow: 'Mission, Vision and Values',
      title: 'What Guides Our Work',
      description:
        'Our work is guided by compassion, education support, transparency, volunteer participation, and environmental care.',
      items: [
        {
          title: 'Mission',
          description:
            'To serve communities in need through ration support, student assistance, health awareness, tree plantation, and volunteer-driven social service activities in Mahalingpur and nearby areas.',
        },
        {
          title: 'Vision',
          description:
            'To build a compassionate, educated, healthy, and greener community where people come together to support families, students, and public welfare.',
        },
        {
          title: 'Values',
          description:
            'Compassion, service, education support, community responsibility, health awareness, transparency, volunteer participation, and environmental care.',
        },
      ],
    },
    split: {
      eyebrow: 'Founder Message',
      title: 'A Simple Belief in Service',
      description:
        'Mahaa Foundation Mahalingpur was started with a simple belief: service should reach the people who need it most. Our work is focused on supporting poor families, helping students, organizing health and awareness activities, and making Mahalingpur greener through community participation. Every volunteer, donor, and supporter is part of this mission. Together, we can build a kinder, healthier, and more responsible society.',
      bulletPoints: [
        'Founder: Anilkumar Ullagaddi',
        site.foundedDisplay,
        'Serving Mahalingpur and nearby areas',
      ],
      image: '/images/team/anilkumar-ullagaddi.jpeg',
      imageAlt: 'Founder Anilkumar Ullagaddi portrait',
      primaryCta: { label: 'Volunteer With Us', href: '/volunteer' },
      secondaryCta: { label: 'Contact the Team', href: '/contact' },
    },
    highlight: {
      eyebrow: 'Areas Served',
      title: 'Mahalingpur, Bagalkot and Nearby Communities',
      description:
        'The foundation serves poor families, backward-class communities, government school students, children, daily wage families, and residents across Mahalingpur and nearby villages.',
      items: [
        { title: 'Mahalingpur', description: 'Primary service area and foundation base.' },
        { title: 'Bagalkot District', description: 'District-level SEO and community relevance.' },
        { title: 'Nearby Areas', description: 'Mudhol, Jamkhandi, Chikodi, North Karnataka, and local villages.' },
      ],
    },
    cta: {
      title: 'Join Mahaa Foundation Mahalingpur',
      description:
        'Volunteer, donate, or contact us to support ration distribution, student help, tree plantation, health awareness, and social service.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate Now', href: '/donate' },
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },

  ourWork: {
    path: '/our-work',
    label: 'Our Work',
    seo: {
      ogTitle: 'Mahaa Foundation Work in Mahalingpur',
      ogDescription:
        'Ration distribution, student support, tree plantation, health camp support, cleanliness awareness, and social service.',
      ogImage: '/images/og/our-work-og.jpg',
    },
    hero: {
      eyebrow: 'Our Work',
      title: 'Our Work for Society and Community Welfare',
      description:
        'Mahaa Foundation Mahalingpur works for ration distribution, student support, tree plantation, health camp support, cleanliness awareness, plastic-free awareness, and volunteer-based social service.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate to Support Work', href: '/donate' },
      image: imagePaths.ourWork,
      imageAlt: 'Mahaa Foundation community welfare activity placeholder',
    },
    intro: {
      eyebrow: 'Overview',
      title: 'Service, Education, Health and Green Community Work',
      content:
        'Our work focuses on practical support for families, students, children, and public welfare. We connect local volunteers and supporters with activities that help people and encourage responsible community habits.',
    },
    features: {
      eyebrow: 'Work Categories',
      title: 'Core Areas of Work',
      description:
        'Student support is included under social service and our work. No separate student support route is created.',
      items: [
        { title: 'Ration Distribution', description: 'Monthly ration support for backward-class families and people in need.', href: '/ration-distribution', linkLabel: 'View ration support' },
        { title: 'Student Support', description: 'Notebook, pen, stationery, and school essentials for government school students.', href: '/social-service', linkLabel: 'View student support' },
        { title: 'Tree Plantation', description: '100 trees planted on both sides of Double Road, Mahalingpur.', href: '/tree-plantation', linkLabel: 'View tree plantation' },
        { title: 'Health Camp Support', description: 'Medical camp support and polio vaccination camp coordination with health department guidance.', href: '/social-service', linkLabel: 'View health support' },
        { title: 'Cleanliness and Plastic-Free Awareness', description: 'Monthly awareness talks in government schools and public responsibility activities.', href: '/social-service', linkLabel: 'View awareness work' },
        { title: 'Social Service', description: 'Volunteer-based community welfare work for families, children, and local residents.', href: '/social-service', linkLabel: 'View social service' },
      ],
    },
    highlight: {
      eyebrow: 'Impact Areas',
      title: 'Verified Community Impact',
      description:
        'Mahaa Foundation Mahalingpur reports verified public impact numbers and avoids unverified claims.',
      variant: 'stats-row',
      items: [
        { title: '100+ Trees Planted', description: 'Trees planted on Double Road, Mahalingpur.', href: '/tree-plantation', linkLabel: 'See tree work' },
        { title: '50+ Families Supported', description: 'Ration and community welfare support for families in need.', href: '/ration-distribution', linkLabel: 'See ration work' },
        { title: '200+ Students Supported', description: 'Notebook and pen support for government school students.', href: '/social-service', linkLabel: 'See student support' },
        { title: '6+ Events and Drives', description: 'Service, health, education support, and awareness activities.', href: '/activities', linkLabel: 'View activities' },
      ],
    },
    cta: {
      title: 'Support Work That Serves Mahalingpur',
      description:
        'Join our work through volunteering, donations, collaboration, or community participation.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate to Support Work', href: '/donate' },
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/our-work' },
    ],
  },

  treePlantation: {
    path: '/tree-plantation',
    label: 'Tree Plantation',
    seo: {
      ogTitle: 'Tree Plantation in Mahalingpur',
      ogDescription:
        'Mahaa Foundation planted 100 trees on Double Road, Mahalingpur, through its own contribution.',
      ogImage: '/images/og/tree-plantation-og.jpg',
    },
    hero: {
      eyebrow: 'Tree Plantation',
      title: 'Tree Plantation in Mahalingpur',
      description:
        'Mahaa Foundation Mahalingpur planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution.',
      primaryCta: { label: 'Volunteer for Plantation', href: '/volunteer' },
      secondaryCta: { label: 'Support Tree Plantation', href: '/donate' },
      image: imagePaths.treePlantation,
      imageAlt: 'Tree plantation on Double Road Mahalingpur placeholder',
    },
    intro: {
      eyebrow: 'Verified Plantation Work',
      title: '100 Trees on Double Road, Mahalingpur',
      content:
        'Mahaa Foundation Mahalingpur planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution. This initiative was started to improve greenery, encourage public responsibility, and create awareness about caring for planted trees.',
    },
    features: {
      eyebrow: 'Plantation Focus',
      title: 'Green Community Work',
      items: [
        { title: '100 Trees Planted', description: 'Verified public impact from the Double Road plantation work.' },
        { title: 'Own Contribution', description: 'The plantation activity was supported through the foundation team contribution.' },
        { title: 'Public Responsibility', description: 'The work encourages people to care for planted trees and local greenery.' },
        { title: 'Environmental Responsibility', description: 'Tree plantation supports a greener Mahalingpur without creating a separate service page.' },
      ],
    },
    faqs: [
      { question: 'Where did Mahaa Foundation plant trees?', answer: 'Mahaa Foundation planted 100 trees on both sides of Double Road in Mahalingpur.' },
      { question: 'Which tree types were planted?', answer: 'Tree or sapling types are not listed on this website because verified details were not provided.' },
      { question: 'Can I volunteer for tree plantation?', answer: 'Yes, anyone willing to serve responsibly can contact Mahaa Foundation for future plantation and awareness support.' },
    ],
    cta: {
      title: 'Support Green Community Work in Mahalingpur',
      description:
        'Volunteer or donate to support tree plantation, tree care awareness, and greener public spaces.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate Now', href: '/donate' },
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Tree Plantation', href: '/tree-plantation' },
    ],
  },

  rationDistribution: {
    path: '/ration-distribution',
    label: 'Ration Distribution',
    seo: {
      ogTitle: 'Monthly Ration Support in Mahalingpur',
      ogDescription:
        'Mahaa Foundation provides one-month ration kits, groceries, and medical support items for families in need.',
      ogImage: '/images/og/ration-distribution-og.jpg',
    },
    hero: {
      eyebrow: 'Ration Distribution',
      title: 'Ration Distribution for Families in Need',
      description:
        'Mahaa Foundation supports backward-class families and people in need with monthly ration support, one-month food supplies, groceries, and medical support items wherever required.',
      primaryCta: { label: 'Donate for Ration Kits', href: '/donate' },
      secondaryCta: { label: 'Volunteer for Distribution', href: '/volunteer' },
      image: imagePaths.rationDistribution,
      imageAlt: 'Ration distribution support in Mahalingpur placeholder',
    },
    intro: {
      eyebrow: 'Food Support',
      title: 'One-Month Food Supply with Care',
      content:
        'Mahaa Foundation supports backward-class families and people in need by providing monthly ration support. The ration kits include one-month food supplies, essential groceries, and medical support items wherever required.',
    },
    features: {
      eyebrow: 'Verified Ration Work',
      title: 'Supporting Families Through Essentials',
      items: [
        { title: '50+ Families Supported', description: 'Food and community welfare support for families and people in need.' },
        { title: '100+ Ration Kits Distributed', description: 'Verified ration kit distribution impact for public display.' },
        { title: 'Monthly Distribution', description: 'Ration support is planned monthly for backward-class families and people in need.' },
        { title: 'Groceries and Medical Support Items', description: 'Kits include essential groceries and medical support items wherever required.' },
      ],
    },
    process: {
      title: 'How Ration Support Works',
      steps: [
        { title: 'Identify families in need', description: 'Focus on backward-class families and people facing difficulty.' },
        { title: 'Prepare ration support', description: 'Arrange one-month food supplies and essential groceries.' },
        { title: 'Coordinate volunteers', description: 'Support packing, communication, and respectful distribution.' },
        { title: 'Distribute with dignity', description: 'Provide support carefully and responsibly.' },
      ],
    },
    faqs: [
      { question: 'Who receives ration support?', answer: 'Backward-class families and people in need receive ration support.' },
      { question: 'What is included in a ration kit?', answer: 'The kit includes one-month food supplies, essential groceries, and medical support items wherever required.' },
      { question: 'How can I support ration distribution?', answer: 'You can donate through UPI or bank transfer and send your screenshot on WhatsApp to Mahaa Foundation.' },
    ],
    cta: {
      title: 'Help Provide Monthly Ration Support',
      description:
        'Donate, volunteer, or contact Mahaa Foundation to support food assistance for families in Mahalingpur and nearby areas.',
      primaryCta: { label: 'Donate for Ration Support', href: '/donate' },
      secondaryCta: { label: 'Volunteer for Distribution', href: '/volunteer' },
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Ration Distribution', href: '/ration-distribution' },
    ],
  },

  socialService: {
    path: '/social-service',
    label: 'Social Service',
    seo: {
      ogTitle: 'Student Support and Health Camps in Mahalingpur',
      ogDescription:
        'Mahaa Foundation supports students, health camps, polio vaccination coordination, cleanliness awareness, and community welfare.',
      ogImage: '/images/og/social-service-og.jpg',
    },
    hero: {
      eyebrow: 'Social Service',
      title: 'Social Service, Student Support and Health Camps',
      description:
        'Mahaa Foundation works for community welfare through student support, health awareness, medical camp support, cleanliness awareness, and public responsibility programs.',
      primaryCta: { label: 'Volunteer for Social Work', href: '/volunteer' },
      secondaryCta: { label: 'Contact Mahaa Foundation', href: '/contact' },
      image: imagePaths.socialService,
      imageAlt: 'Social service and student support placeholder',
    },
    intro: {
      eyebrow: 'Community Welfare',
      title: 'Student Support, Health Awareness and Public Responsibility',
      content:
        'Mahaa Foundation works for community welfare through student support, health awareness, medical camp support, cleanliness awareness, and public responsibility programs. The foundation has supported students with notebooks, pens, and basic school requirements, and has also helped organize health-related activities for children and families.',
    },
    features: {
      eyebrow: 'Social Service Areas',
      title: 'How We Support People',
      items: [
        { title: 'Student Support', description: 'Notebook and pen distribution for 200 government school students.' },
        { title: 'Health Camp Support', description: 'Medical camp support and health awareness activities for children and families.' },
        { title: 'Polio Vaccination Camp Support', description: 'Helped coordinate a polio vaccination activity with health department guidance.' },
        { title: 'Cleanliness Awareness', description: 'Awareness programs that encourage responsible public habits.' },
        { title: 'Plastic-Free Awareness', description: 'Monthly talks in government schools about reducing plastic use.' },
        { title: 'Community Welfare', description: 'Free ration, stationery, and medicine support for people in need.' },
      ],
    },
    highlight: {
      eyebrow: 'Volunteer Role',
      title: 'Social Work Grows Through Responsible Participation',
      description:
        'Volunteers help with student support, ration distribution, health camp support, cleanliness awareness, plastic-free awareness, and community service.',
      items: [
        { title: 'Student Support', description: 'Help arrange notebooks, pens, and school essentials for students.', href: '/volunteer', linkLabel: 'Volunteer with us' },
        { title: 'Health Support', description: 'Support medical camp coordination and awareness activity logistics.', href: '/activities', linkLabel: 'View activities' },
        { title: 'Awareness Programs', description: 'Help students learn about cleanliness and reducing plastic use.', href: '/blog', linkLabel: 'Read awareness posts' },
      ],
    },
    faqs: [
      { question: 'Can students volunteer?', answer: 'Yes. Students above 15 years are encouraged to volunteer responsibly.' },
      { question: 'Does Mahaa Foundation administer vaccines?', answer: 'This website only states that the foundation supported or helped coordinate a polio vaccination activity with health department guidance.' },
      { question: 'Is there a separate student support page?', answer: 'No. Student support is covered under Our Work and Social Service.' },
    ],
    cta: {
      title: 'Support Social Service in Mahalingpur',
      description:
        'Join student support, health camp support, cleanliness awareness, ration distribution, and community welfare activities.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate Now', href: '/donate' },
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Our Work', href: '/our-work' },
      { label: 'Social Service', href: '/social-service' },
    ],
  },

  volunteer: {
    path: '/volunteer',
    label: 'Volunteer',
    seo: {
      ogTitle: 'Volunteer with Mahaa Foundation',
      ogDescription:
        'Join volunteer work in Mahalingpur for tree plantation, ration distribution, student support, health camps, awareness, and social service.',
      ogImage: '/images/og/volunteer-og.jpg',
    },
    hero: {
      eyebrow: 'Volunteer With Us',
      title: 'Volunteer with Mahaa Foundation',
      description:
        'Anyone above 15 years can volunteer with Mahaa Foundation. Students, working professionals, community groups, schools, and local residents are welcome to join.',
      primaryCta: { label: 'WhatsApp Us to Volunteer', href: 'whatsapp', variant: 'whatsapp' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
      image: imagePaths.volunteer,
      imageAlt: 'Mahaa Foundation volunteer activity placeholder',
    },
    intro: {
      eyebrow: 'Volunteer Details',
      title: 'No Prior Experience Required',
      content:
        'Anyone willing to serve society responsibly can volunteer. Volunteers can support tree plantation, ration distribution, student support, medical camp coordination, awareness campaigns, cleanliness awareness, plastic-free awareness, event support, and public service activities.',
    },
    features: {
      eyebrow: 'Volunteer Activities',
      title: 'Ways You Can Help',
      items: [
        { title: 'Tree Plantation', description: 'Support green community work and tree care awareness.', href: '/tree-plantation', linkLabel: 'See tree work' },
        { title: 'Ration Distribution', description: 'Help with packing, coordination, and respectful food support.', href: '/ration-distribution', linkLabel: 'See ration work' },
        { title: 'Student Support', description: 'Support notebooks, pens, and basic school requirement activities.', href: '/social-service', linkLabel: 'See student work' },
        { title: 'Health Camp Support', description: 'Help coordinate medical camp support and awareness activities.', href: '/social-service', linkLabel: 'See health support' },
        { title: 'Awareness Programs', description: 'Support cleanliness and plastic-free awareness in schools and communities.', href: '/social-service', linkLabel: 'See awareness work' },
        { title: 'Event Support', description: 'Help with service coordination whenever support is required.', href: '/activities', linkLabel: 'View activities' },
      ],
    },
    process: {
      title: 'How to Join',
      description: 'Volunteers are contacted whenever support is required for campaigns, camps, and activities.',
      steps: [
        { title: 'Contact Mahaa Foundation', description: 'Reach out through WhatsApp, phone, or the contact page.' },
        { title: 'Share your interest area', description: 'Tell us if you want to support plantation, ration, students, health, awareness, or social service.' },
        { title: 'Join activity updates', description: 'Stay connected for upcoming campaigns, camps, and activities.' },
        { title: 'Participate responsibly', description: 'Join activities with care, discipline, and community responsibility.' },
      ],
    },
    faqs: [
      { question: 'Who can volunteer?', answer: 'Anyone above 15 years willing to serve society responsibly can volunteer.' },
      { question: 'Can students volunteer?', answer: 'Yes, students are encouraged to volunteer.' },
      { question: 'Can groups, companies, and schools collaborate?', answer: 'Yes, groups, companies, schools, and local communities can contact Mahaa Foundation for collaboration.' },
      { question: 'Is experience required?', answer: 'No prior experience is required.' },
    ],
    cta: {
      title: 'Give Your Time for People, Students and Green Communities',
      description:
        'Join Mahaa Foundation as a volunteer for social service, education support, health awareness, ration support, and tree plantation.',
      primaryCta: { label: 'WhatsApp Us to Volunteer', href: 'whatsapp', variant: 'whatsapp' },
      secondaryCta: { label: 'Contact Us', href: '/contact' },
      whatsappCta: true,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Volunteer', href: '/volunteer' },
    ],
  },

  donate: {
    path: '/donate',
    label: 'Donate',
    seo: {
      ogTitle: 'Donate to Mahaa Foundation',
      ogDescription:
        'Support ration kits, student notebooks, tree plantation, medical camp support, awareness programs, and social service.',
      ogImage: '/images/og/donate-og.jpg',
    },
    hero: {
      eyebrow: 'ದಾನ ಮಾಡಿ - ಸಮಾಜ ಸೇವೆಗೆ ನಿಮ್ಮ ಬೆಂಬಲ ನೀಡಿ',
      title: 'Donate to Support Mahaa Foundation',
      description:
        'Mahaa Foundation currently accepts donations through UPI and bank transfer for ration kits, student support, tree plantation, health camp support, awareness programs, and social service.',
      primaryCta: { label: 'Send Screenshot on WhatsApp', href: site.whatsappHref, external: true, variant: 'whatsapp' },
      secondaryCta: { label: 'Call for Donation Help', href: site.phoneHref },
      image: imagePaths.donate,
      imageAlt: 'Donation support for Mahaa Foundation placeholder',
    },
    intro: {
      eyebrow: 'Why Donate',
      title: 'Support Families, Students and Community Welfare',
      content:
        'Your support can help provide ration kits, student notebooks and pens, tree plantation support, medical camp support, awareness programs, and general social service work in Mahalingpur and nearby areas.',
    },
    features: {
      eyebrow: 'Donation Areas',
      title: 'What Your Support Helps',
      items: [
        { title: 'Ration Kits for Families', description: 'Help support monthly food supplies for families and people in need.', href: '/ration-distribution', linkLabel: 'See ration work' },
        { title: 'Student Notebooks and Pens', description: 'Support basic educational needs for government school students.', href: '/social-service', linkLabel: 'See student support' },
        { title: 'Tree Plantation', description: 'Support green community work and tree care awareness.', href: '/tree-plantation', linkLabel: 'See tree work' },
        { title: 'Medical Camp Support', description: 'Support health awareness and camp coordination needs.', href: '/social-service', linkLabel: 'See health support' },
        { title: 'Awareness Programs', description: 'Support cleanliness and plastic-free awareness in schools and communities.', href: '/social-service', linkLabel: 'See awareness work' },
        { title: 'General Social Service', description: 'Support community welfare and public service activities.', href: '/our-work', linkLabel: 'See all work' },
      ],
    },
    process: {
      title: 'Short Donation Process',
      description:
        'Online payment gateway is not enabled on this website. Donate through UPI or bank transfer and send the screenshot on WhatsApp.',
      steps: [
        { title: 'Choose support area', description: 'Support ration kits, student stationery, tree plantation, medical camp support, or general social service work.' },
        { title: 'Donate via UPI or bank transfer', description: 'Use the UPI ID or bank details shown on this page to make your contribution.' },
        { title: 'Send screenshot on WhatsApp', description: 'After donating, send your screenshot and purpose of donation to Mahaa Foundation on WhatsApp.' },
        { title: 'Stay connected for updates', description: 'Our team will connect with you and share activity updates whenever available.' },
      ],
    },
    faqs: [
      { question: 'Can I donate online?', answer: 'Mahaa Foundation currently accepts support through UPI and bank transfer. A payment gateway is not enabled on this website.' },
      { question: 'Where should I send the payment screenshot?', answer: 'Please send the payment screenshot on WhatsApp to 9986836007.' },
      { question: 'Can I support a specific activity?', answer: 'Yes, you can mention whether your donation is for ration kits, student support, tree plantation, medical camp support, or general social service.' },
      { question: 'Are donation certificates available?', answer: 'Donation certificate or legal exemption details are not displayed on this website. Please contact Mahaa Foundation directly for verified donation-related information.' },
    ],
    cta: {
      title: 'Donate Through UPI or Bank Transfer',
      description:
        'After donating, please send your payment screenshot on WhatsApp for communication and acknowledgement.',
      primaryCta: { label: 'Send Screenshot on WhatsApp', href: site.whatsappHref, external: true, variant: 'whatsapp' },
      secondaryCta: { label: 'Email Us', href: site.emailHref },
      whatsappCta: false,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Donate', href: '/donate' },
    ],
  },

  contact: {
    path: '/contact',
    label: 'Contact',
    seo: {
      ogTitle: 'Contact Mahaa Foundation Mahalingpur',
      ogDescription:
        'Call, WhatsApp, email, or visit Mahaa Foundation Mahalingpur for volunteering, donations, activities, and collaboration.',
      ogImage: '/images/og/contact-og.jpg',
    },
    hero: {
      eyebrow: 'Contact Us',
      title: 'Contact Mahaa Foundation',
      description:
        'Contact Mahaa Foundation Mahalingpur for volunteering, donation support, ration distribution, student help, health camp support, tree plantation, awareness programs, and community welfare in Mahalingpur, Bagalkot district, Mudhol, Jamkhandi, Chikodi, and North Karnataka.',
      primaryCta: { label: 'WhatsApp Us', href: 'whatsapp', variant: 'whatsapp' },
      secondaryCta: { label: 'Call Now', href: site.phoneHref },
      image: imagePaths.contact,
      imageAlt: 'Mahaa Foundation contact placeholder',
    },
    intro: {
      eyebrow: 'Contact Information',
      title: 'Call, WhatsApp, Email or Visit',
      content:
        'Use the contact details below to ask about volunteering, donation support, ration distribution, student support, health camp support, tree plantation, awareness programs, or collaboration opportunities.',
    },
    features: {
      eyebrow: 'Contact Reasons',
      title: 'How Can We Help?',
      items: [
        { title: 'Volunteer Enquiry', description: 'Ask how to join upcoming activities.', href: '/volunteer', linkLabel: 'Volunteer page' },
        { title: 'Donation Support', description: 'Ask about UPI, bank transfer, and screenshot sharing.', href: '/donate', linkLabel: 'Donate page' },
        { title: 'Tree Plantation', description: 'Discuss green community work and plantation support.', href: '/tree-plantation', linkLabel: 'Tree plantation' },
        { title: 'Ration Distribution', description: 'Support food assistance and ration activities.', href: '/ration-distribution', linkLabel: 'Ration support' },
        { title: 'Student and Health Support', description: 'Connect about student help, health camps, and awareness programs.', href: '/social-service', linkLabel: 'Social service' },
        { title: 'Collaboration', description: 'Connect as an individual, group, institution, company, school, or community.', href: '/our-work', linkLabel: 'Our work' },
      ],
    },
    highlight: {
      eyebrow: 'Location',
      title: 'Mahalingpur Office Location',
      description:
        'Google Maps is not embedded to avoid external scripts. Use the location link to open the shared Google location.',
      items: [
        { title: 'Address', description: site.address, href: site.locationUrl, linkLabel: 'Open location' },
        { title: 'Call', description: site.phoneDisplay, href: site.phoneHref, linkLabel: 'Call now' },
        { title: 'WhatsApp', description: site.whatsappDisplay, href: site.whatsappHref, linkLabel: 'Open WhatsApp' },
      ],
    },
    faqs: [
      { question: 'How can I contact Mahaa Foundation?', answer: 'You can contact Mahaa Foundation through the WhatsApp enquiry form, phone, WhatsApp, email, or the location link in the footer.' },
      { question: 'Can groups and schools collaborate?', answer: 'Yes, groups, companies, schools, and local communities can contact Mahaa Foundation for collaboration.' },
      { question: 'Where is Mahaa Foundation located?', answer: 'Mahaa Foundation is located at Vinayak Medical Shop, Double Rd, Mahalingpur, Karnataka 587312.' },
    ],
    cta: {
      title: 'Contact Us to Volunteer, Donate or Collaborate',
      description:
        'Reach out through WhatsApp, phone, or email to connect with Mahaa Foundation Mahalingpur.',
      primaryCta: { label: 'WhatsApp Us', href: 'whatsapp', variant: 'whatsapp' },
      secondaryCta: { label: 'Call Now', href: site.phoneHref },
      whatsappCta: true,
    },
    breadcrumbs: [
      { label: 'Home', href: '/' },
      { label: 'Contact', href: '/contact' },
    ],
  },
} satisfies Record<string, InnerPage>;

export type InnerPageKey = keyof typeof innerPages;

export function getPageSchemas(pageKey: InnerPageKey) {
  const page = innerPages[pageKey];
  const pageUrl = absoluteUrl(page.path);

  const webPage = {
    '@context': 'https://schema.org',
    '@type': pageKey === 'contact' ? 'ContactPage' : 'WebPage',
    name: page.hero.title,
    url: pageUrl,
    description: page.hero.description,
    isPartOf: {
      '@type': 'WebSite',
      name: site.siteName,
      url: site.url,
    },
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: page.breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(crumb.href),
    })),
  };

  const faq =
    page.faqs && page.faqs.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: page.faqs.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }
      : null;

  return faq ? [webPage, breadcrumb, faq] : [webPage, breadcrumb];
}
