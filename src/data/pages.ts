import { site } from './site';
import { absoluteUrl } from '../utils/seo';
import type { ImageMetadata } from 'astro';
import aboutHeroImage from '../assets/inner/gallery-hero.png';
import ourWorkHeroImage from '../assets/inner/our-work-hero.png';
import treePlantationHeroImage from '../assets/inner/tree-plantation-hero.png';
import rationDistributionHeroImage from '../assets/inner/ration-distribution-hero.png';
import socialServiceStudentSupportHeroImage from '../assets/inner/social-service-student-support-hero.png';

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
    image: string | ImageMetadata;
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
  about: aboutHeroImage,
  ourWork: ourWorkHeroImage,
  treePlantation: treePlantationHeroImage,
  rationDistribution: rationDistributionHeroImage,
  socialService: socialServiceStudentSupportHeroImage,
  volunteer: '/images/work/volunteer-page.jpg',
  donate: '/images/work/donate-page.jpg',
  contact: '/images/work/contact-page.jpg',
} as const;

const en = {
  about: {
    path: '/about',
    label: 'About',
    seo: {
      ogTitle: 'About Mahaa Foundation Mahalingpur',
      ogDescription: 'Learn about our founder, mission, values, team, and service work in Mahalingpur and Bagalkot.',
      ogImage: '/images/og/about-og.jpg',
    },
    hero: {
      eyebrow: 'About Mahaa Foundation',
      title: 'About Mahaa Foundation Mahalingpur',
      description: 'Mahaa Foundation Mahalingpur serves people through ration support, student assistance, tree plantation, health awareness, and volunteer-driven social service in Mahalingpur and nearby areas.',
      primaryCta: { label: 'Join Our Mission', href: '/volunteer' },
      secondaryCta: { label: 'Explore Our Work', href: '/our-work' },
      image: imagePaths.about,
      imageAlt: 'Mahaa Foundation Mahalingpur team members supporting community service work',
    },
    intro: {
      eyebrow: 'Foundation Story',
      title: 'Started for Service and Community Welfare',
      content: 'Mahaa Foundation Mahalingpur was started on 1 December 2025 by Anilkumar Ullagaddi with a commitment to serve people and support community welfare in Mahalingpur and nearby areas. The foundation focuses on ration distribution, student support, tree plantation, health camp support, cleanliness awareness, and social service. Mahaa Foundation Mahalingpur serves communities in Mahalingpur, Bagalkot district, and nearby areas including Mudhol, Jamkhandi, Chikodi, and North Karnataka.',
    },
    features: {
      eyebrow: 'Mission, Vision and Values',
      title: 'What Guides Our Work',
      description: 'Our work is guided by compassion, education support, transparency, volunteer participation, and environmental care.',
      items: [
        { title: 'Mission', description: 'To serve communities in need through ration support, student assistance, health awareness, tree plantation, and volunteer-driven social service activities in Mahalingpur and nearby areas.' },
        { title: 'Vision', description: 'To build a compassionate, educated, healthy, and greener community where people come together to support families, students, and public welfare.' },
        { title: 'Values', description: 'Compassion, service, education support, community responsibility, health awareness, transparency, volunteer participation, and environmental care.' },
      ],
    },
    split: {
      eyebrow: 'Founder Message',
      title: 'A Simple Belief in Service',
      description: 'Mahaa Foundation Mahalingpur was started with a simple belief: service should reach the people who need it most. Our work is focused on supporting poor families, helping students, organizing health and awareness activities, and making Mahalingpur greener through community participation. Every volunteer, donor, and supporter is part of this mission. Together, we can build a kinder, healthier, and more responsible society.',
      bulletPoints: ['Founder: Anilkumar Ullagaddi', site.foundedDisplay, 'Serving Mahalingpur and nearby areas'],
      image: '/images/team/anilkumar-ullagaddi.jpeg',
      imageAlt: 'Founder Anilkumar Ullagaddi portrait',
      primaryCta: { label: 'Volunteer With Us', href: '/volunteer' },
      secondaryCta: { label: 'Contact the Team', href: '/contact' },
    },
    highlight: {
      eyebrow: 'Areas Served',
      title: 'Mahalingpur, Bagalkot and Nearby Communities',
      description: 'The foundation serves poor families, backward-class communities, government school students, children, daily wage families, and residents across Mahalingpur and nearby villages.',
      items: [
        { title: 'Mahalingpur', description: 'Primary service area and foundation base.' },
        { title: 'Bagalkot District', description: 'District-level SEO and community relevance.' },
        { title: 'Nearby Areas', description: 'Mudhol, Jamkhandi, Chikodi, North Karnataka, and local villages.' },
      ],
    },
    cta: {
      title: 'Join Mahaa Foundation Mahalingpur',
      description: 'Volunteer, donate, or contact us to support ration distribution, student help, tree plantation, health awareness, and social service.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate Now', href: '/donate' },
    },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }],
  },
  ourWork: {
    path: '/our-work',
    label: 'Our Work',
    seo: { ogTitle: 'Mahaa Foundation Work in Mahalingpur', ogDescription: 'Ration distribution, student support, tree plantation, health camp support, cleanliness awareness, and social service.', ogImage: '/images/og/our-work-og.jpg' },
    hero: {
      eyebrow: 'Our Work',
      title: 'Our Work for Society and Community Welfare',
      description: 'Mahaa Foundation Mahalingpur works for ration distribution, student support, tree plantation, health camp support, cleanliness awareness, plastic-free awareness, and volunteer-based social service.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate to Support Work', href: '/donate' },
      image: imagePaths.ourWork,
      imageAlt: 'Mahaa Foundation Mahalingpur team supporting community welfare work',
    },
    intro: { eyebrow: 'Overview', title: 'Service, Education, Health and Green Community Work', content: 'Our work focuses on practical support for families, students, children, and public welfare. We connect local volunteers and supporters with activities that help people and encourage responsible community habits.' },
    features: {
      eyebrow: 'Work Categories',
      title: 'Core Areas of Work',
      description: 'Student support is included under social service and our work. No separate student support route is created.',
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
      description: 'Mahaa Foundation Mahalingpur reports verified public impact numbers and avoids unverified claims.',
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
      description: 'Join our work through volunteering, donations, collaboration, or community participation.',
      primaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
      secondaryCta: { label: 'Donate to Support Work', href: '/donate' },
    },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Our Work', href: '/our-work' }],
  },
  treePlantation: {
    path: '/tree-plantation',
    label: 'Tree Plantation',
    seo: { ogTitle: 'Tree Plantation in Mahalingpur', ogDescription: 'Mahaa Foundation planted 100 trees on Double Road, Mahalingpur, through its own contribution.', ogImage: '/images/og/tree-plantation-og.jpg' },
    hero: { eyebrow: 'Tree Plantation', title: 'Tree Plantation in Mahalingpur', description: 'Mahaa Foundation Mahalingpur planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution.', primaryCta: { label: 'Volunteer for Plantation', href: '/volunteer' }, secondaryCta: { label: 'Support Tree Plantation', href: '/donate' }, image: imagePaths.treePlantation, imageAlt: 'Mahaa Foundation team supporting tree plantation work in Mahalingpur' },
    intro: { eyebrow: 'Verified Plantation Work', title: '100 Trees on Double Road, Mahalingpur', content: 'Mahaa Foundation Mahalingpur planted 100 trees on both sides of Double Road in Mahalingpur through its own contribution. This initiative was started to improve greenery, encourage public responsibility, and create awareness about caring for planted trees.' },
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
    cta: { title: 'Support Green Community Work in Mahalingpur', description: 'Volunteer or donate to support tree plantation, tree care awareness, and greener public spaces.', primaryCta: { label: 'Become a Volunteer', href: '/volunteer' }, secondaryCta: { label: 'Donate Now', href: '/donate' } },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Our Work', href: '/our-work' }, { label: 'Tree Plantation', href: '/tree-plantation' }],
  },
  rationDistribution: {
    path: '/ration-distribution',
    label: 'Ration Distribution',
    seo: { ogTitle: 'Monthly Ration Support in Mahalingpur', ogDescription: 'Mahaa Foundation provides one-month ration kits, groceries, and medical support items for families in need.', ogImage: '/images/og/ration-distribution-og.jpg' },
    hero: { eyebrow: 'Ration Distribution', title: 'Ration Distribution for Families in Need', description: 'Mahaa Foundation supports backward-class families and people in need with monthly ration support, one-month food supplies, groceries, and medical support items wherever required.', primaryCta: { label: 'Donate for Ration Kits', href: '/donate' }, secondaryCta: { label: 'Volunteer for Distribution', href: '/volunteer' }, image: imagePaths.rationDistribution, imageAlt: 'Ration support activity for families in need by Mahaa Foundation Mahalingpur' },
    intro: { eyebrow: 'Food Support', title: 'One-Month Food Supply with Care', content: 'Mahaa Foundation supports backward-class families and people in need by providing monthly ration support. The ration kits include one-month food supplies, essential groceries, and medical support items wherever required.' },
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
    cta: { title: 'Help Provide Monthly Ration Support', description: 'Donate, volunteer, or contact Mahaa Foundation to support food assistance for families in Mahalingpur and nearby areas.', primaryCta: { label: 'Donate for Ration Support', href: '/donate' }, secondaryCta: { label: 'Volunteer for Distribution', href: '/volunteer' } },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Our Work', href: '/our-work' }, { label: 'Ration Distribution', href: '/ration-distribution' }],
  },
  socialService: {
    path: '/social-service',
    label: 'Social Service',
    seo: { ogTitle: 'Student Support and Health Camps in Mahalingpur', ogDescription: 'Mahaa Foundation supports students, health camps, polio vaccination coordination, cleanliness awareness, and community welfare.', ogImage: '/images/og/social-service-og.jpg' },
    hero: { eyebrow: 'Social Service', title: 'Social Service, Student Support and Health Camps', description: 'Mahaa Foundation works for community welfare through student support, health awareness, medical camp support, cleanliness awareness, and public responsibility programs.', primaryCta: { label: 'Volunteer for Social Work', href: '/volunteer' }, secondaryCta: { label: 'Contact Mahaa Foundation', href: '/contact' }, image: imagePaths.socialService, imageAlt: 'Student support activity by Mahaa Foundation Mahalingpur' },
    intro: { eyebrow: 'Community Welfare', title: 'Student Support, Health Awareness and Public Responsibility', content: 'Mahaa Foundation works for community welfare through student support, health awareness, medical camp support, cleanliness awareness, and public responsibility programs. The foundation has supported students with notebooks, pens, and basic school requirements, and has also helped organize health-related activities for children and families.' },
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
      description: 'Volunteers help with student support, ration distribution, health camp support, cleanliness awareness, plastic-free awareness, and community service.',
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
    cta: { title: 'Support Social Service in Mahalingpur', description: 'Join student support, health camp support, cleanliness awareness, ration distribution, and community welfare activities.', primaryCta: { label: 'Become a Volunteer', href: '/volunteer' }, secondaryCta: { label: 'Donate Now', href: '/donate' } },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Our Work', href: '/our-work' }, { label: 'Social Service', href: '/social-service' }],
  },
  volunteer: {
    path: '/volunteer',
    label: 'Volunteer',
    seo: { ogTitle: 'Volunteer with Mahaa Foundation', ogDescription: 'Join volunteer work in Mahalingpur for tree plantation, ration distribution, student support, health camps, awareness, and social service.', ogImage: '/images/og/volunteer-og.jpg' },
    hero: { eyebrow: 'Volunteer With Us', title: 'Volunteer with Mahaa Foundation', description: 'Anyone above 15 years can volunteer with Mahaa Foundation. Students, working professionals, community groups, schools, and local residents are welcome to join.', primaryCta: { label: 'WhatsApp Us to Volunteer', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'Contact Us', href: '/contact' }, image: imagePaths.volunteer, imageAlt: 'Mahaa Foundation volunteer activity placeholder' },
    intro: { eyebrow: 'Volunteer Details', title: 'No Prior Experience Required', content: 'Anyone willing to serve society responsibly can volunteer. Volunteers can support tree plantation, ration distribution, student support, medical camp coordination, awareness campaigns, cleanliness awareness, plastic-free awareness, event support, and public service activities.' },
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
    cta: { title: 'Give Your Time for People, Students and Green Communities', description: 'Join Mahaa Foundation as a volunteer for social service, education support, health awareness, ration support, and tree plantation.', primaryCta: { label: 'WhatsApp Us to Volunteer', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'Contact Us', href: '/contact' }, whatsappCta: true },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Volunteer', href: '/volunteer' }],
  },
  donate: {
    path: '/donate',
    label: 'Donate',
    seo: { ogTitle: 'Donate to Mahaa Foundation', ogDescription: 'Support ration kits, student notebooks, tree plantation, medical camp support, awareness programs, and social service.', ogImage: '/images/og/donate-og.jpg' },
    hero: { eyebrow: 'ದಾನ ಮಾಡಿ - ಸಮಾಜ ಸೇವೆಗೆ ನಿಮ್ಮ ಬೆಂಬಲ ನೀಡಿ', title: 'Donate to Support Mahaa Foundation', description: 'Mahaa Foundation currently accepts donations through UPI and bank transfer for ration kits, student support, tree plantation, health camp support, awareness programs, and social service.', primaryCta: { label: 'Send Screenshot on WhatsApp', href: site.whatsappHref, external: true, variant: 'whatsapp' }, secondaryCta: { label: 'Call for Donation Help', href: site.phoneHref }, image: imagePaths.donate, imageAlt: 'Donation support for Mahaa Foundation placeholder' },
    intro: { eyebrow: 'Why Donate', title: 'Support Families, Students and Community Welfare', content: 'Your support can help provide ration kits, student notebooks and pens, tree plantation support, medical camp support, awareness programs, and general social service work in Mahalingpur and nearby areas.' },
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
      description: 'Online payment gateway is not enabled on this website. Donate through UPI or bank transfer and send the screenshot on WhatsApp.',
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
    cta: { title: 'Donate Through UPI or Bank Transfer', description: 'After donating, please send your payment screenshot on WhatsApp for communication and acknowledgement.', primaryCta: { label: 'Send Screenshot on WhatsApp', href: site.whatsappHref, external: true, variant: 'whatsapp' }, secondaryCta: { label: 'Email Us', href: site.emailHref }, whatsappCta: false },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Donate', href: '/donate' }],
  },
  contact: {
    path: '/contact',
    label: 'Contact',
    seo: { ogTitle: 'Contact Mahaa Foundation Mahalingpur', ogDescription: 'Call, WhatsApp, email, or visit Mahaa Foundation Mahalingpur for volunteering, donations, activities, and collaboration.', ogImage: '/images/og/contact-og.jpg' },
    hero: { eyebrow: 'Contact Us', title: 'Contact Mahaa Foundation', description: 'Contact Mahaa Foundation Mahalingpur for volunteering, donation support, ration distribution, student help, health camp support, tree plantation, awareness programs, and community welfare in Mahalingpur, Bagalkot district, Mudhol, Jamkhandi, Chikodi, and North Karnataka.', primaryCta: { label: 'WhatsApp Us', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'Call Now', href: site.phoneHref }, image: imagePaths.contact, imageAlt: 'Mahaa Foundation contact placeholder' },
    intro: { eyebrow: 'Contact Information', title: 'Call, WhatsApp, Email or Visit', content: 'Use the contact details below to ask about volunteering, donation support, ration distribution, student support, health camp support, tree plantation, awareness programs, or collaboration opportunities.' },
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
      description: 'Google Maps is not embedded to avoid external scripts. Use the location link to open the shared Google location.',
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
    cta: { title: 'Contact Us to Volunteer, Donate or Collaborate', description: 'Reach out through WhatsApp, phone, or email to connect with Mahaa Foundation Mahalingpur.', primaryCta: { label: 'WhatsApp Us', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'Call Now', href: site.phoneHref }, whatsappCta: true },
    breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact' }],
  },
} satisfies Record<string, InnerPage>;

const kn = {
  about: {
    path: '/about',
    label: 'ನಮ್ಮ ಬಗ್ಗೆ',
    seo: { ogTitle: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದ ಬಗ್ಗೆ', ogDescription: 'ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಬಾಗಲಕೋಟೆಯಲ್ಲಿ ನಮ್ಮ ಸ್ಥಾಪಕರು, ಉದ್ದೇಶ, ಮೌಲ್ಯಗಳು, ತಂಡ ಮತ್ತು ಸೇವಾ ಕಾರ್ಯಗಳ ಬಗ್ಗೆ ತಿಳಿಯಿರಿ.', ogImage: '/images/og/about-og.jpg' },
    hero: { eyebrow: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಬಗ್ಗೆ', title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದ ಬಗ್ಗೆ', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ಪಡಿತರ ಬೆಂಬಲ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೆರವು, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಜಾಗೃತಿ ಮತ್ತು ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಸ್ವಯಂಸೇವಕ-ಚಾಲಿತ ಸಮಾಜ ಸೇವೆಯ ಮೂಲಕ ಜನರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ.', primaryCta: { label: 'ನಮ್ಮ ಕಾರ್ಯಾಚರಣೆಗೆ ಸೇರಿ', href: '/volunteer' }, secondaryCta: { label: 'ನಮ್ಮ ಕೆಲಸವನ್ನು ಅನ್ವೇಷಿಸಿ', href: '/our-work' }, image: imagePaths.about, imageAlt: 'ಸಮುದಾಯ ಸೇವಾ ಕಾರ್ಯವನ್ನು ಬೆಂಬಲಿಸುತ್ತಿರುವ ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ ತಂಡದ ಸದಸ್ಯರು' },
    intro: { eyebrow: 'ಫೌಂಡೇಶನ್ ಕಥೆ', title: 'ಸೇವೆ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ', content: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವನ್ನು 1 ಡಿಸೆಂಬರ್ 2025 ರಂದು ಅನಿಲ್ ಕುಮಾರ್ ಉಳ್ಳಗಡ್ಡಿಯವರು ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಜನರಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣವನ್ನು ಬೆಂಬಲಿಸುವ ಬದ್ಧತೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಿದರು. ಪ್ರತಿಷ್ಠಾನವು ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ. ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ಮಹಾಲಿಂಗಪುರ, ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ ಮತ್ತು ಮುಧೋಳ, ಜಮಖಂಡಿ, ಚಿಕ್ಕೋಡಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕ ಸೇರಿದಂತೆ ಸಮೀಪದ ಪ್ರದೇಶಗಳ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ.' },
    features: {
      eyebrow: 'ಕಾರ್ಯಾಚರಣೆ, ದೃಷ್ಟಿ ಮತ್ತು ಮೌಲ್ಯಗಳು',
      title: 'ನಮ್ಮ ಕೆಲಸಕ್ಕೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುವ ಅಂಶಗಳು',
      description: 'ನಮ್ಮ ಕೆಲಸವು ಸಹಾನುಭೂತಿ, ಶಿಕ್ಷಣ ಬೆಂಬಲ, ಪಾರದರ್ಶಕತೆ, ಸ್ವಯಂಸೇವಕರ ಭಾಗವಹಿಸುವಿಕೆ ಮತ್ತು ಪರಿಸರ ಕಾಳಜಿಯಿಂದ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯುತ್ತದೆ.',
      items: [
        { title: 'ಕಾರ್ಯಾಚರಣೆ', description: 'ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪಡಿತರ ಬೆಂಬಲ, ವಿದ್ಯಾರ್ಥಿ ನೆರವು, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ಮರ ನೆಡುವಿಕೆ ಮತ್ತು ಸ್ವಯಂಸೇವಕ-ಚಾಲಿತ ಸಮಾಜ ಸೇವಾ ಚಟುವಟಿಕೆಗಳ ಮೂಲಕ ಅಗತ್ಯವಿರುವ ಸಮುದಾಯಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುವುದು.' },
        { title: 'ದೃಷ್ಟಿ', description: 'ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣವನ್ನು ಬೆಂಬಲಿಸಲು ಜನರು ಒಗ್ಗೂಡುವ ಸಹಾನುಭೂತಿಯುಳ್ಳ, ವಿದ್ಯಾವಂತ, ಆರೋಗ್ಯಕರ ಮತ್ತು ಹಸಿರು ಸಮುದಾಯವನ್ನು ನಿರ್ಮಿಸುವುದು.' },
        { title: 'ಮೌಲ್ಯಗಳು', description: 'ಸಹಾನುಭೂತಿ, ಸೇವೆ, ಶಿಕ್ಷಣ ಬೆಂಬಲ, ಸಮುದಾಯ ಜವಾಬ್ದಾರಿ, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ಪಾರದರ್ಶಕತೆ, ಸ್ವಯಂಸೇವಕರ ಭಾಗವಹಿಸುವಿಕೆ ಮತ್ತು ಪರಿಸರ ಕಾಳಜಿ.' },
      ],
    },
    split: {
      eyebrow: 'ಸ್ಥಾಪಕರ ಸಂದೇಶ',
      title: 'ಸೇವೆಯಲ್ಲಿ ಸರಳ ನಂಬಿಕೆ',
      description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವನ್ನು ಒಂದು ಸರಳ ನಂಬಿಕೆಯೊಂದಿಗೆ ಪ್ರಾರಂಭಿಸಲಾಯಿತು: ಸೇವೆಯು ಹೆಚ್ಚು ಅಗತ್ಯವಿರುವ ಜನರನ್ನು ತಲುಪಬೇಕು. ನಮ್ಮ ಕೆಲಸವು ಬಡ ಕುಟುಂಬಗಳನ್ನು ಬೆಂಬಲಿಸುವುದು, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡುವುದು, ಆರೋಗ್ಯ ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸುವುದು ಮತ್ತು ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರವನ್ನು ಹಸಿರಾಗಿಸುವತ್ತ ಗಮನಹರಿಸಿದೆ. ಪ್ರತಿಯೊಬ್ಬ ಸ್ವಯಂಸೇವಕರು, ದಾನಿಗಳು ಮತ್ತು ಬೆಂಬಲಿಗರು ಈ ಕಾರ್ಯಾಚರಣೆಯ ಭಾಗವಾಗಿದ್ದಾರೆ. ಒಟ್ಟಾಗಿ, ನಾವು ದಯೆ, ಆರೋಗ್ಯಕರ ಮತ್ತು ಹೆಚ್ಚು ಜವಾಬ್ದಾರಿಯುತ ಸಮಾಜವನ್ನು ನಿರ್ಮಿಸಬಹುದು.',
      bulletPoints: ['ಸ್ಥಾಪಕರು: ಅನಿಲ್ ಕುಮಾರ್ ಉಳ್ಳಗಡ್ಡಿ', site.foundedDisplay, 'ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದೆ'],
      image: '/images/team/anilkumar-ullagaddi.jpeg',
      imageAlt: 'ಸ್ಥಾಪಕ ಅನಿಲ್ ಕುಮಾರ್ ಉಳ್ಳಗಡ್ಡಿ ಭಾವಚಿತ್ರ',
      primaryCta: { label: 'ನಮ್ಮೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      secondaryCta: { label: 'ತಂಡವನ್ನು ಸಂಪರ್ಕಿಸಿ', href: '/contact' },
    },
    highlight: {
      eyebrow: 'ಸೇವೆ ಸಲ್ಲಿಸಿದ ಪ್ರದೇಶಗಳು',
      title: 'ಮಹಾಲಿಂಗಪುರ, ಬಾಗಲಕೋಟೆ ಮತ್ತು ಸಮೀಪದ ಸಮುದಾಯಗಳು',
      description: 'ಪ್ರತಿಷ್ಠಾನವು ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಹಳ್ಳಿಗಳಾದ್ಯಂತ ಬಡ ಕುಟುಂಬಗಳು, ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಸಮುದಾಯಗಳು, ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳು, ಮಕ್ಕಳು, ದಿನಗೂಲಿ ಕುಟುಂಬಗಳು ಮತ್ತು ನಿವಾಸಿಗಳಿಗೆ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತದೆ.',
      items: [
        { title: 'ಮಹಾಲಿಂಗಪುರ', description: 'ಪ್ರಾಥಮಿಕ ಸೇವಾ ಪ್ರದೇಶ ಮತ್ತು ಪ್ರತಿಷ್ಠಾನದ ನೆಲೆ.' },
        { title: 'ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ', description: 'ಜಿಲ್ಲಾ ಮಟ್ಟದ ಎಸ್‌ಇಒ ಮತ್ತು ಸಮುದಾಯದ ಪ್ರಸ್ತುತತೆ.' },
        { title: 'ಸಮೀಪದ ಪ್ರದೇಶಗಳು', description: 'ಮುಧೋಳ, ಜಮಖಂಡಿ, ಚಿಕ್ಕೋಡಿ, ಉತ್ತರ ಕರ್ನಾಟಕ, ಮತ್ತು ಸ್ಥಳೀಯ ಹಳ್ಳಿಗಳು.' },
      ],
    },
    cta: {
      title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವನ್ನು ಸೇರಿ',
      description: 'ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಸಹಾಯ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಜಾಗೃತಿ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಸ್ವಯಂಸೇವಕರಾಗಿ, ದೇಣಿಗೆ ನೀಡಿ ಅಥವಾ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ.',
      primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' },
      secondaryCta: { label: 'ಈಗ ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' },
    },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ನಮ್ಮ ಬಗ್ಗೆ', href: '/about' }],
  },
  ourWork: {
    path: '/our-work',
    label: 'ನಮ್ಮ ಕೆಲಸ',
    seo: { ogTitle: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಕೆಲಸ', ogDescription: 'ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಸಮಾಜ ಸೇವೆ.', ogImage: '/images/og/our-work-og.jpg' },
    hero: { eyebrow: 'ನಮ್ಮ ಕೆಲಸ', title: 'ಸಮಾಜ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ನಮ್ಮ ಕೆಲಸ', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ, ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ ಮತ್ತು ಸ್ವಯಂಸೇವಕ ಆಧಾರಿತ ಸಮಾಜ ಸೇವೆಗಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.', primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, secondaryCta: { label: 'ಕೆಲಸವನ್ನು ಬೆಂಬಲಿಸಲು ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' }, image: imagePaths.ourWork, imageAlt: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯವನ್ನು ಬೆಂಬಲಿಸುತ್ತಿರುವ ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರ ತಂಡ' },
    intro: { eyebrow: 'ಅವಲೋಕನ', title: 'ಸೇವೆ, ಶಿಕ್ಷಣ, ಆರೋಗ್ಯ ಮತ್ತು ಹಸಿರು ಸಮುದಾಯ ಕಾರ್ಯ', content: 'ನಮ್ಮ ಕೆಲಸವು ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು, ಮಕ್ಕಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಪ್ರಾಯೋಗಿಕ ಬೆಂಬಲದ ಮೇಲೆ ಕೇಂದ್ರೀಕರಿಸುತ್ತದೆ. ನಾವು ಸ್ಥಳೀಯ ಸ್ವಯಂಸೇವಕರು ಮತ್ತು ಬೆಂಬಲಿಗರನ್ನು ಜನರಿಗೆ ಸಹಾಯ ಮಾಡುವ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತ ಸಮುದಾಯದ ಅಭ್ಯಾಸಗಳನ್ನು ಉತ್ತೇಜಿಸುವ ಚಟುವಟಿಕೆಗಳೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತೇವೆ.' },
    features: {
      eyebrow: 'ಕೆಲಸದ ವರ್ಗಗಳು',
      title: 'ಕೆಲಸದ ಪ್ರಮುಖ ಕ್ಷೇತ್ರಗಳು',
      description: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲವನ್ನು ಸಮಾಜ ಸೇವೆ ಮತ್ತು ನಮ್ಮ ಕೆಲಸದ ಅಡಿಯಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ. ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕ ಪುಟವನ್ನು ರಚಿಸಲಾಗಿಲ್ಲ.',
      items: [
        { title: 'ಪಡಿತರ ವಿತರಣೆ', description: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲ.', href: '/ration-distribution', linkLabel: 'ಪಡಿತರ ಬೆಂಬಲವನ್ನು ವೀಕ್ಷಿಸಿ' },
        { title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ', description: 'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್, ಪೆನ್, ಸ್ಟೇಷನರಿ ಮತ್ತು ಶಾಲಾ ಅಗತ್ಯತೆಗಳು.', href: '/social-service', linkLabel: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲವನ್ನು ವೀಕ್ಷಿಸಿ' },
        { title: 'ಮರ ನೆಡುವಿಕೆ', description: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ.', href: '/tree-plantation', linkLabel: 'ಮರ ನೆಡುವಿಕೆಯನ್ನು ವೀಕ್ಷಿಸಿ' },
        { title: 'ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ', description: 'ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ ಮತ್ತು ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಪೋಲಿಯೊ ಲಸಿಕೆ ಶಿಬಿರ ಸಮನ್ವಯ.', href: '/social-service', linkLabel: 'ಆರೋಗ್ಯ ಬೆಂಬಲವನ್ನು ವೀಕ್ಷಿಸಿ' },
        { title: 'ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ', description: 'ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಮಾಸಿಕ ಜಾಗೃತಿ ಉಪನ್ಯಾಸಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ ಚಟುವಟಿಕೆಗಳು.', href: '/social-service', linkLabel: 'ಜಾಗೃತಿ ಕಾರ್ಯವನ್ನು ವೀಕ್ಷಿಸಿ' },
        { title: 'ಸಮಾಜ ಸೇವೆ', description: 'ಕುಟುಂಬಗಳು, ಮಕ್ಕಳು ಮತ್ತು ಸ್ಥಳೀಯ ನಿವಾಸಿಗಳಿಗಾಗಿ ಸ್ವಯಂಸೇವಕ ಆಧಾರಿತ ಸಮುದಾಯ ಕಲ್ಯಾಣ ಕಾರ್ಯ.', href: '/social-service', linkLabel: 'ಸಮಾಜ ಸೇವೆಯನ್ನು ವೀಕ್ಷಿಸಿ' },
      ],
    },
    highlight: {
      eyebrow: 'ಪ್ರಭಾವದ ಪ್ರದೇಶಗಳು',
      title: 'ಪರಿಶೀಲಿಸಿದ ಸಮುದಾಯದ ಪ್ರಭಾವ',
      description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ಪರಿಶೀಲಿಸಿದ ಸಾರ್ವಜನಿಕ ಪ್ರಭಾವದ ಸಂಖ್ಯೆಗಳನ್ನು ವರದಿ ಮಾಡುತ್ತದೆ ಮತ್ತು ಪರಿಶೀಲಿಸದ ಹಕ್ಕುಗಳನ್ನು ತಪ್ಪಿಸುತ್ತದೆ.',
      variant: 'stats-row',
      items: [
        { title: '100+ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ', description: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ.', href: '/tree-plantation', linkLabel: 'ಮರ ನೆಡುವಿಕೆಯನ್ನು ನೋಡಿ' },
        { title: '50+ ಕುಟುಂಬಗಳಿಗೆ ಬೆಂಬಲ', description: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಪಡಿತರ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಬೆಂಬಲ.', href: '/ration-distribution', linkLabel: 'ಪಡಿತರ ಕಾರ್ಯವನ್ನು ನೋಡಿ' },
        { title: '200+ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ', description: 'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ಬೆಂಬಲ.', href: '/social-service', linkLabel: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲವನ್ನು ನೋಡಿ' },
        { title: '6+ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಅಭಿಯಾನಗಳು', description: 'ಸೇವೆ, ಆರೋಗ್ಯ, ಶಿಕ್ಷಣ ಬೆಂಬಲ ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆಗಳು.', href: '/activities', linkLabel: 'ಚಟುವಟಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ' },
      ],
    },
    cta: { title: 'ಮಹಾಲಿಂಗಪುರಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸುವ ಕೆಲಸವನ್ನು ಬೆಂಬಲಿಸಿ', description: 'ಸ್ವಯಂಸೇವಕ, ದೇಣಿಗೆ, ಸಹಯೋಗ ಅಥವಾ ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆಯ ಮೂಲಕ ನಮ್ಮ ಕೆಲಸಕ್ಕೆ ಸೇರಿ.', primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, secondaryCta: { label: 'ಕೆಲಸವನ್ನು ಬೆಂಬಲಿಸಲು ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' } },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ನಮ್ಮ ಕೆಲಸ', href: '/our-work' }],
  },
  treePlantation: {
    path: '/tree-plantation',
    label: 'ಮರ ನೆಡುವಿಕೆ',
    seo: { ogTitle: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ', ogDescription: 'ಮಹಾ ಫೌಂಡೇಶನ್ ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ.', ogImage: '/images/og/tree-plantation-og.jpg' },
    hero: { eyebrow: 'ಮರ ನೆಡುವಿಕೆ', title: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವಿಕೆ', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ.', primaryCta: { label: 'ನೆಡುವಿಕೆಗಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, secondaryCta: { label: 'ಮರ ನೆಡುವಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಿ', href: '/donate' }, image: imagePaths.treePlantation, imageAlt: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮರ ನೆಡುವ ಕಾರ್ಯವನ್ನು ಬೆಂಬಲಿಸುತ್ತಿರುವ ಮಹಾ ಫೌಂಡೇಶನ್ ತಂಡ' },
    intro: { eyebrow: 'ಪರಿಶೀಲಿಸಿದ ನೆಡುವಿಕೆ ಕಾರ್ಯ', title: 'ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯಲ್ಲಿ ೧೦೦ ಮರಗಳು', content: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವು ತನ್ನದೇ ಆದ ಕೊಡುಗೆಯ ಮೂಲಕ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ. ಹಸಿರನ್ನು ಸುಧಾರಿಸಲು, ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿಯನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಲು ಮತ್ತು ನೆಟ್ಟ ಮರಗಳನ್ನು ಕಾಳಜಿ ವಹಿಸುವ ಬಗ್ಗೆ ಜಾಗೃತಿ ಮೂಡಿಸಲು ಈ ಉಪಕ್ರಮವನ್ನು ಪ್ರಾರಂಭಿಸಲಾಗಿದೆ.' },
    features: {
      eyebrow: 'ನೆಡುವಿಕೆಯ ಗಮನ',
      title: 'ಹಸಿರು ಸಮುದಾಯ ಕಾರ್ಯ',
      items: [
        { title: '100 ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ', description: 'ಡಬಲ್ ರಸ್ತೆ ನೆಡುವಿಕೆಯ ಕಾರ್ಯದಿಂದ ಪರಿಶೀಲಿಸಿದ ಸಾರ್ವಜನಿಕ ಪ್ರಭಾವ.' },
        { title: 'ಸ್ವಂತ ಕೊಡುಗೆ', description: 'ಫೌಂಡೇಶನ್ ತಂಡದ ಕೊಡುಗೆಯ ಮೂಲಕ ನೆಡುವಿಕೆ ಚಟುವಟಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಲಾಯಿತು.' },
        { title: 'ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ', description: 'ನೆಟ್ಟ ಮರಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಹಸಿರನ್ನು ಕಾಳಜಿ ವಹಿಸಲು ಈ ಕೆಲಸವು ಜನರನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ.' },
        { title: 'ಪರಿಸರ ಜವಾಬ್ದಾರಿ', description: 'ಮರ ನೆಡುವಿಕೆಯು ಪ್ರತ್ಯೇಕ ಸೇವಾ ಪುಟವನ್ನು ರಚಿಸದೆ ಹಸಿರು ಮಹಾಲಿಂಗಪುರವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.' },
      ],
    },
    faqs: [
      { question: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಎಲ್ಲಿ ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ?', answer: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ಎರಡು ಬದಿಗಳಲ್ಲಿ 100 ಮರಗಳನ್ನು ನೆಟ್ಟಿದೆ.' },
      { question: 'ಯಾವ ರೀತಿಯ ಮರಗಳನ್ನು ನೆಡಲಾಗಿದೆ?', answer: 'ಪರಿಶೀಲಿಸಿದ ವಿವರಗಳನ್ನು ಒದಗಿಸದ ಕಾರಣ ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಮರ ಅಥವಾ ಸಸಿಗಳ ಪ್ರಕಾರಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡಲಾಗಿಲ್ಲ.' },
      { question: 'ನಾನು ಮರ ನೆಡುವಿಕೆಗಾಗಿ ಸ್ವಯಂಸೇವಕನಾಗಬಹುದೇ?', answer: 'ಹೌದು, ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಸೇವೆ ಸಲ್ಲಿಸಲು ಸಿದ್ಧರಿರುವ ಯಾರಾದರೂ ಭವಿಷ್ಯದ ನೆಡುವಿಕೆ ಮತ್ತು ಜಾಗೃತಿ ಬೆಂಬಲಕ್ಕಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.' },
    ],
    cta: { title: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಹಸಿರು ಸಮುದಾಯ ಕಾರ್ಯವನ್ನು ಬೆಂಬಲಿಸಿ', description: 'ಮರ ನೆಡುವಿಕೆ, ಮರಗಳ ಆರೈಕೆ ಜಾಗೃತಿ ಮತ್ತು ಹಸಿರು ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳನ್ನು ಬೆಂಬಲಿಸಲು ಸ್ವಯಂಸೇವಕರಾಗಿ ಅಥವಾ ದೇಣಿಗೆ ನೀಡಿ.', primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, secondaryCta: { label: 'ಈಗ ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' } },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ನಮ್ಮ ಕೆಲಸ', href: '/our-work' }, { label: 'ಮರ ನೆಡುವಿಕೆ', href: '/tree-plantation' }],
  },
  rationDistribution: {
    path: '/ration-distribution',
    label: 'ಪಡಿತರ ವಿತರಣೆ',
    seo: { ogTitle: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲ', ogDescription: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಒಂದು ತಿಂಗಳ ಪಡಿತರ ಕಿಟ್‌ಗಳು, ದಿನಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.', ogImage: '/images/og/ration-distribution-og.jpg' },
    hero: { eyebrow: 'ಪಡಿತರ ವಿತರಣೆ', title: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಪಡಿತರ ವಿತರಣೆ', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರನ್ನು ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲ, ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ, ದಿನಸಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಕಡೆಗಳಲ್ಲಿ ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳೊಂದಿಗೆ ಬೆಂಬಲಿಸುತ್ತದೆ.', primaryCta: { label: 'ಪಡಿತರ ಕಿಟ್‌ಗಳಿಗಾಗಿ ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' }, secondaryCta: { label: 'ವಿತರಣೆಗಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, image: imagePaths.rationDistribution, imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳಿಗೆ ಪಡಿತರ ಬೆಂಬಲ ಚಟುವಟಿಕೆ' },
    intro: { eyebrow: 'ಆಹಾರ ಬೆಂಬಲ', title: 'ಕಾಳಜಿಯೊಂದಿಗೆ ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ', content: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಬೆಂಬಲ ನೀಡುತ್ತದೆ. ಪಡಿತರ ಕಿಟ್‌ಗಳು ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ, ಅಗತ್ಯ ದಿನಸಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಕಡೆಗಳಲ್ಲಿ ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ.' },
    features: {
      eyebrow: 'ಪರಿಶೀಲಿಸಿದ ಪಡಿತರ ಕಾರ್ಯ',
      title: 'ಅಗತ್ಯತೆಗಳ ಮೂಲಕ ಕುಟುಂಬಗಳನ್ನು ಬೆಂಬಲಿಸುವುದು',
      items: [
        { title: '50+ ಕುಟುಂಬಗಳಿಗೆ ಬೆಂಬಲ', description: 'ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಆಹಾರ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಬೆಂಬಲ.' },
        { title: '100+ ಪಡಿತರ ಕಿಟ್‌ಗಳ ವಿತರಣೆ', description: 'ಸಾರ್ವಜನಿಕ ಪ್ರದರ್ಶನಕ್ಕಾಗಿ ಪರಿಶೀಲಿಸಿದ ಪಡಿತರ ಕಿಟ್ ವಿತರಣೆಯ ಪ್ರಭಾವ.' },
        { title: 'ಮಾಸಿಕ ವಿತರಣೆ', description: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗಾಗಿ ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಯೋಜಿಸಲಾಗಿದೆ.' },
        { title: 'ದಿನಸಿ ಮತ್ತು ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳು', description: 'ಕಿಟ್‌ಗಳು ಅಗತ್ಯ ದಿನಸಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಕಡೆಗಳಲ್ಲಿ ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿರುತ್ತವೆ.' },
      ],
    },
    process: {
      title: 'ಪಡಿತರ ಬೆಂಬಲ ಹೇಗೆ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ',
      steps: [
        { title: 'ಅಗತ್ಯವಿರುವ ಕುಟುಂಬಗಳನ್ನು ಗುರುತಿಸುವುದು', description: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಕಷ್ಟವನ್ನು ಎದುರಿಸುತ್ತಿರುವ ಜನರ ಮೇಲೆ ಗಮನಹರಿಸುವುದು.' },
        { title: 'ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಸಿದ್ಧಪಡಿಸುವುದು', description: 'ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ ಮತ್ತು ಅಗತ್ಯ ದಿನಸಿಗಳನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸುವುದು.' },
        { title: 'ಸ್ವಯಂಸೇವಕರನ್ನು ಸಂಘಟಿಸುವುದು', description: 'ಪ್ಯಾಕಿಂಗ್, ಸಂವಹನ ಮತ್ತು ಗೌರವಾನ್ವಿತ ವಿತರಣೆಯನ್ನು ಬೆಂಬಲಿಸುವುದು.' },
        { title: 'ಘನತೆಯಿಂದ ವಿತರಿಸುವುದು', description: 'ಎಚ್ಚರಿಕೆಯಿಂದ ಮತ್ತು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಬೆಂಬಲವನ್ನು ಒದಗಿಸುವುದು.' },
      ],
    },
    faqs: [
      { question: 'ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಯಾರು ಪಡೆಯುತ್ತಾರೆ?', answer: 'ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರು ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಪಡೆಯುತ್ತಾರೆ.' },
      { question: 'ಪಡಿತರ ಕಿಟ್‌ನಲ್ಲಿ ಏನು ಸೇರಿಸಲಾಗಿದೆ?', answer: 'ಕಿಟ್ ಒಂದು ತಿಂಗಳ ಆಹಾರ ಪೂರೈಕೆ, ಅಗತ್ಯ ದಿನಸಿ ಮತ್ತು ಅಗತ್ಯವಿರುವ ಕಡೆಗಳಲ್ಲಿ ವೈದ್ಯಕೀಯ ಬೆಂಬಲ ವಸ್ತುಗಳನ್ನು ಒಳಗೊಂಡಿದೆ.' },
      { question: 'ನಾನು ಪಡಿತರ ವಿತರಣೆಯನ್ನು ಹೇಗೆ ಬೆಂಬಲಿಸಬಹುದು?', answer: 'ನೀವು ಯುಪಿಐ ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ದೇಣಿಗೆ ನೀಡಬಹುದು ಮತ್ತು ನಿಮ್ಮ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ಮಹಾ ಫೌಂಡೇಶನ್‌ಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಬಹುದು.' },
    ],
    cta: { title: 'ಮಾಸಿಕ ಪಡಿತರ ಬೆಂಬಲವನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡಿ', description: 'ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಲ್ಲಿನ ಕುಟುಂಬಗಳಿಗೆ ಆಹಾರ ಸಹಾಯವನ್ನು ಬೆಂಬಲಿಸಲು ದೇಣಿಗೆ ನೀಡಿ, ಸ್ವಯಂಸೇವಕರಾಗಿ ಅಥವಾ ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ.', primaryCta: { label: 'ಪಡಿತರ ಬೆಂಬಲಕ್ಕಾಗಿ ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' }, secondaryCta: { label: 'ವಿತರಣೆಗಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' } },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ನಮ್ಮ ಕೆಲಸ', href: '/our-work' }, { label: 'ಪಡಿತರ ವಿತರಣೆ', href: '/ration-distribution' }],
  },
  socialService: {
    path: '/social-service',
    label: 'ಸಮಾಜ ಸೇವೆ',
    seo: { ogTitle: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಆರೋಗ್ಯ ಶಿಬಿರಗಳು', ogDescription: 'ಮಹಾ ಫೌಂಡೇಶನ್ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು, ಪೋಲಿಯೊ ಲಸಿಕೆ ಸಮನ್ವಯ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣವನ್ನು ಬೆಂಬಲಿಸುತ್ತದೆ.', ogImage: '/images/og/social-service-og.jpg' },
    hero: { eyebrow: 'ಸಮಾಜ ಸೇವೆ', title: 'ಸಮಾಜ ಸೇವೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಮತ್ತು ಆರೋಗ್ಯ ಶಿಬಿರಗಳು', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ.', primaryCta: { label: 'ಸಮಾಜ ಸೇವೆಗಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, secondaryCta: { label: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ', href: '/contact' }, image: imagePaths.socialService, imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರದಿಂದ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ ಚಟುವಟಿಕೆ' },
    intro: { eyebrow: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ', title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಜಾಗೃತಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ', content: 'ಮಹಾ ಫೌಂಡೇಶನ್ ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಜವಾಬ್ದಾರಿ ಕಾರ್ಯಕ್ರಮಗಳ ಮೂಲಕ ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ. ಫೌಂಡೇಶನ್ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್‌ಗಳು, ಪೆನ್ನುಗಳು ಮತ್ತು ಮೂಲ ಶಾಲಾ ಅಗತ್ಯತೆಗಳೊಂದಿಗೆ ಬೆಂಬಲಿಸಿದೆ ಮತ್ತು ಮಕ್ಕಳು ಮತ್ತು ಕುಟುಂಬಗಳಿಗೆ ಆರೋಗ್ಯ ಸಂಬಂಧಿತ ಚಟುವಟಿಕೆಗಳನ್ನು ಆಯೋಜಿಸಲು ಸಹಾಯ ಮಾಡಿದೆ.' },
    features: {
      eyebrow: 'ಸಮಾಜ ಸೇವಾ ಕ್ಷೇತ್ರಗಳು',
      title: 'ನಾವು ಜನರನ್ನು ಹೇಗೆ ಬೆಂಬಲಿಸುತ್ತೇವೆ',
      items: [
        { title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ', description: '200 ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್ ಮತ್ತು ಪೆನ್ ವಿತರಣೆ.' },
        { title: 'ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ', description: 'ಮಕ್ಕಳು ಮತ್ತು ಕುಟುಂಬಗಳಿಗಾಗಿ ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ ಮತ್ತು ಆರೋಗ್ಯ ಜಾಗೃತಿ ಚಟುವಟಿಕೆಗಳು.' },
        { title: 'ಪೋಲಿಯೋ ಲಸಿಕಾ ಶಿಬಿರ ಬೆಂಬಲ', description: 'ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಪೋಲಿಯೊ ಲಸಿಕೆ ಚಟುವಟಿಕೆಯನ್ನು ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡಿದೆ.' },
        { title: 'ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ', description: 'ಜವಾಬ್ದಾರಿಯುತ ಸಾರ್ವಜನಿಕ ಅಭ್ಯಾಸಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವ ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು.' },
        { title: 'ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ', description: 'ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಕುರಿತು ಸರ್ಕಾರಿ ಶಾಲೆಗಳಲ್ಲಿ ಮಾಸಿಕ ಉಪನ್ಯಾಸಗಳು.' },
        { title: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ', description: 'ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಉಚಿತ ಪಡಿತರ, ಸ್ಟೇಷನರಿ ಮತ್ತು ಔಷಧ ಬೆಂಬಲ.' },
      ],
    },
    highlight: {
      eyebrow: 'ಸ್ವಯಂಸೇವಕರ ಪಾತ್ರ',
      title: 'ಜವಾಬ್ದಾರಿಯುತ ಭಾಗವಹಿಸುವಿಕೆಯ ಮೂಲಕ ಸಮಾಜ ಕಾರ್ಯ ಬೆಳೆಯುತ್ತದೆ',
      description: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಪಡಿತರ ವಿತರಣೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ, ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯಲ್ಲಿ ಸ್ವಯಂಸೇವಕರು ಸಹಾಯ ಮಾಡುತ್ತಾರೆ.',
      items: [
        { title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ', description: 'ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನೋಟ್‌ಬುಕ್‌ಗಳು, ಪೆನ್ನುಗಳು ಮತ್ತು ಶಾಲಾ ಅಗತ್ಯ ವಸ್ತುಗಳನ್ನು ವ್ಯವಸ್ಥೆಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡಿ.', href: '/volunteer', linkLabel: 'ನಮ್ಮೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಿ' },
        { title: 'ಆರೋಗ್ಯ ಬೆಂಬಲ', description: 'ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಸಮನ್ವಯ ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆಯ ವ್ಯವಸ್ಥಾಪನವನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/activities', linkLabel: 'ಚಟುವಟಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ' },
        { title: 'ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು', description: 'ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಬಳಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುವ ಬಗ್ಗೆ ಕಲಿಯಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸಹಾಯ ಮಾಡಿ.', href: '/blog', linkLabel: 'ಜಾಗೃತಿ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಓದಿ' },
      ],
    },
    faqs: [
      { question: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಸ್ವಯಂಸೇವಕರಾಗಬಹುದೇ?', answer: 'ಹೌದು. 15 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ವಿದ್ಯಾರ್ಥಿಗಳು ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಲು ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುತ್ತದೆ.' },
      { question: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಲಸಿಕೆಗಳನ್ನು ನೀಡುತ್ತದೆಯೇ?', answer: 'ಆರೋಗ್ಯ ಇಲಾಖೆಯ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ ಫೌಂಡೇಶನ್ ಪೋಲಿಯೊ ಲಸಿಕೆ ಚಟುವಟಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಿದೆ ಅಥವಾ ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡಿದೆ ಎಂದು ಮಾತ್ರ ಈ ವೆಬ್‌ಸೈಟ್ ಹೇಳುತ್ತದೆ.' },
      { question: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲಕ್ಕಾಗಿ ಪ್ರತ್ಯೇಕ ಪುಟವಿದೆಯೇ?', answer: 'ಇಲ್ಲ. ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲವನ್ನು ನಮ್ಮ ಕೆಲಸ ಮತ್ತು ಸಮಾಜ ಸೇವೆಯ ಅಡಿಯಲ್ಲಿ ಸೇರಿಸಲಾಗಿದೆ.' },
    ],
    cta: { title: 'ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಸಮಾಜ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಿ', description: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ, ಪಡಿತರ ವಿತರಣೆ ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸೇರಿ.', primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }, secondaryCta: { label: 'ಈಗ ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' } },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ನಮ್ಮ ಕೆಲಸ', href: '/our-work' }, { label: 'ಸಮಾಜ ಸೇವೆ', href: '/social-service' }],
  },
  volunteer: {
    path: '/volunteer',
    label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ',
    seo: { ogTitle: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಜೊತೆ ಸ್ವಯಂಸೇವಕರಾಗಿ', ogDescription: 'ಮರ ನೆಡುವಿಕೆ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು, ಜಾಗೃತಿ ಮತ್ತು ಸಮಾಜ ಸೇವೆಗಾಗಿ ಮಹಾಲಿಂಗಪುರದಲ್ಲಿ ಸ್ವಯಂಸೇವಕ ಕಾರ್ಯಕ್ಕೆ ಸೇರಿ.', ogImage: '/images/og/volunteer-og.jpg' },
    hero: { eyebrow: 'ನಮ್ಮೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಿ', title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಜೊತೆ ಸ್ವಯಂಸೇವಕರಾಗಿ', description: '15 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಯಾರಾದರೂ ಮಹಾ ಫೌಂಡೇಶನ್‌ನೊಂದಿಗೆ ಸ್ವಯಂಸೇವಕರಾಗಬಹುದು. ವಿದ್ಯಾರ್ಥಿಗಳು, ವೃತ್ತಿಪರರು, ಸಮುದಾಯ ಗುಂಪುಗಳು, ಶಾಲೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ನಿವಾಸಿಗಳು ಸೇರಲು ಸ್ವಾಗತ.', primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಲು ವಾಟ್ಸಾಪ್ ಮಾಡಿ', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ', href: '/contact' }, image: imagePaths.volunteer, imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಸ್ವಯಂಸೇವಕ ಚಟುವಟಿಕೆ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್' },
    intro: { eyebrow: 'ಸ್ವಯಂಸೇವಕ ವಿವರಗಳು', title: 'ಯಾವುದೇ ಪೂರ್ವ ಅನುಭವದ ಅಗತ್ಯವಿಲ್ಲ', content: 'ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಸಮಾಜಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಸಿದ್ಧರಿರುವ ಯಾರಾದರೂ ಸ್ವಯಂಸೇವಕರಾಗಬಹುದು. ಮರ ನೆಡುವಿಕೆ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಸಮನ್ವಯ, ಜಾಗೃತಿ ಅಭಿಯಾನಗಳು, ಸ್ವಚ್ಛತಾ ಜಾಗೃತಿ, ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿ, ಈವೆಂಟ್ ಬೆಂಬಲ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಸ್ವಯಂಸೇವಕರು ಬೆಂಬಲಿಸಬಹುದು.' },
    features: {
      eyebrow: 'ಸ್ವಯಂಸೇವಕ ಚಟುವಟಿಕೆಗಳು',
      title: 'ನೀವು ಸಹಾಯ ಮಾಡುವ ವಿಧಾನಗಳು',
      items: [
        { title: 'ಮರ ನೆಡುವಿಕೆ', description: 'ಹಸಿರು ಸಮುದಾಯ ಕಾರ್ಯ ಮತ್ತು ಮರಗಳ ಆರೈಕೆ ಜಾಗೃತಿಯನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/tree-plantation', linkLabel: 'ಮರ ನೆಡುವಿಕೆಯನ್ನು ನೋಡಿ' },
        { title: 'ಪಡಿತರ ವಿತರಣೆ', description: 'ಪ್ಯಾಕಿಂಗ್, ಸಮನ್ವಯ ಮತ್ತು ಗೌರವಾನ್ವಿತ ಆಹಾರ ಬೆಂಬಲದಲ್ಲಿ ಸಹಾಯ ಮಾಡಿ.', href: '/ration-distribution', linkLabel: 'ಪಡಿತರ ಕಾರ್ಯವನ್ನು ನೋಡಿ' },
        { title: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ', description: 'ನೋಟ್‌ಬುಕ್‌ಗಳು, ಪೆನ್ನುಗಳು ಮತ್ತು ಮೂಲ ಶಾಲಾ ಅಗತ್ಯ ಚಟುವಟಿಕೆಗಳನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/social-service', linkLabel: 'ವಿದ್ಯಾರ್ಥಿ ಕಾರ್ಯವನ್ನು ನೋಡಿ' },
        { title: 'ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ', description: 'ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ ಮತ್ತು ಜಾಗೃತಿ ಚಟುವಟಿಕೆಗಳನ್ನು ಸಂಘಟಿಸಲು ಸಹಾಯ ಮಾಡಿ.', href: '/social-service', linkLabel: 'ಆರೋಗ್ಯ ಬೆಂಬಲವನ್ನು ನೋಡಿ' },
        { title: 'ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು', description: 'ಶಾಲೆಗಳು ಮತ್ತು ಸಮುದಾಯಗಳಲ್ಲಿ ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿಯನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/social-service', linkLabel: 'ಜಾಗೃತಿ ಕಾರ್ಯವನ್ನು ನೋಡಿ' },
        { title: 'ಈವೆಂಟ್ ಬೆಂಬಲ', description: 'ಬೆಂಬಲದ ಅಗತ್ಯವಿದ್ದಾಗ ಸೇವಾ ಸಮನ್ವಯದೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಿ.', href: '/activities', linkLabel: 'ಚಟುವಟಿಕೆಗಳನ್ನು ವೀಕ್ಷಿಸಿ' },
      ],
    },
    process: {
      title: 'ಹೇಗೆ ಸೇರುವುದು',
      description: 'ಅಭಿಯಾನಗಳು, ಶಿಬಿರಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗೆ ಬೆಂಬಲದ ಅಗತ್ಯವಿದ್ದಾಗಲೆಲ್ಲಾ ಸ್ವಯಂಸೇವಕರನ್ನು ಸಂಪರ್ಕಿಸಲಾಗುತ್ತದೆ.',
      steps: [
        { title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ', description: 'ವಾಟ್ಸಾಪ್, ಫೋನ್ ಅಥವಾ ಸಂಪರ್ಕ ಪುಟದ ಮೂಲಕ ಸಂಪರ್ಕಿಸಿ.' },
        { title: 'ನಿಮ್ಮ ಆಸಕ್ತಿಯ ಕ್ಷೇತ್ರವನ್ನು ಹಂಚಿಕೊಳ್ಳಿ', description: 'ನೆಡುವಿಕೆ, ಪಡಿತರ, ವಿದ್ಯಾರ್ಥಿಗಳು, ಆರೋಗ್ಯ, ಜಾಗೃತಿ ಅಥವಾ ಸಮಾಜ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಲು ನೀವು ಬಯಸಿದರೆ ನಮಗೆ ತಿಳಿಸಿ.' },
        { title: 'ಚಟುವಟಿಕೆಯ ನವೀಕರಣಗಳಿಗೆ ಸೇರಿ', description: 'ಮುಂಬರುವ ಅಭಿಯಾನಗಳು, ಶಿಬಿರಗಳು ಮತ್ತು ಚಟುವಟಿಕೆಗಳಿಗಾಗಿ ಸಂಪರ್ಕದಲ್ಲಿರಿ.' },
        { title: 'ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಭಾಗವಹಿಸಿ', description: 'ಕಾಳಜಿ, ಶಿಸ್ತು ಮತ್ತು ಸಮುದಾಯದ ಜವಾಬ್ದಾರಿಯೊಂದಿಗೆ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸೇರಿ.' },
      ],
    },
    faqs: [
      { question: 'ಯಾರು ಸ್ವಯಂಸೇವಕರಾಗಬಹುದು?', answer: 'ಜವಾಬ್ದಾರಿಯುತವಾಗಿ ಸಮಾಜಕ್ಕೆ ಸೇವೆ ಸಲ್ಲಿಸಲು ಸಿದ್ಧರಿರುವ 15 ವರ್ಷ ಮೇಲ್ಪಟ್ಟ ಯಾರಾದರೂ ಸ್ವಯಂಸೇವಕರಾಗಬಹುದು.' },
      { question: 'ವಿದ್ಯಾರ್ಥಿಗಳು ಸ್ವಯಂಸೇವಕರಾಗಬಹುದೇ?', answer: 'ಹೌದು, ವಿದ್ಯಾರ್ಥಿಗಳನ್ನು ಸ್ವಯಂಸೇವಕರಾಗಲು ಪ್ರೋತ್ಸಾಹಿಸಲಾಗುತ್ತದೆ.' },
      { question: 'ಗುಂಪುಗಳು, ಕಂಪನಿಗಳು ಮತ್ತು ಶಾಲೆಗಳು ಸಹಯೋಗ ಮಾಡಬಹುದೇ?', answer: 'ಹೌದು, ಗುಂಪುಗಳು, ಕಂಪನಿಗಳು, ಶಾಲೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಸಮುದಾಯಗಳು ಸಹಯೋಗಕ್ಕಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.' },
      { question: 'ಅನುಭವದ ಅಗತ್ಯವಿದೆಯೇ?', answer: 'ಯಾವುದೇ ಪೂರ್ವ ಅನುಭವದ ಅಗತ್ಯವಿಲ್ಲ.' },
    ],
    cta: { title: 'ಜನರು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಹಸಿರು ಸಮುದಾಯಗಳಿಗಾಗಿ ನಿಮ್ಮ ಸಮಯವನ್ನು ನೀಡಿ', description: 'ಸಮಾಜ ಸೇವೆ, ಶಿಕ್ಷಣ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಜಾಗೃತಿ, ಪಡಿತರ ಬೆಂಬಲ ಮತ್ತು ಮರ ನೆಡುವಿಕೆಗಾಗಿ ಸ್ವಯಂಸೇವಕರಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್‌ಗೆ ಸೇರಿ.', primaryCta: { label: 'ಸ್ವಯಂಸೇವಕರಾಗಲು ವಾಟ್ಸಾಪ್ ಮಾಡಿ', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ', href: '/contact' }, whatsappCta: true },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ಸ್ವಯಂಸೇವಕರಾಗಿ', href: '/volunteer' }],
  },
  donate: {
    path: '/donate',
    label: 'ದೇಣಿಗೆ ನೀಡಿ',
    seo: { ogTitle: 'ಮಹಾ ಫೌಂಡೇಶನ್‌ಗೆ ದೇಣಿಗೆ ನೀಡಿ', ogDescription: 'ಪಡಿತರ ಕಿಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳ ನೋಟ್‌ಬುಕ್‌ಗಳು, ಮರ ನೆಡುವಿಕೆ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ, ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವೆಯನ್ನು ಬೆಂಬಲಿಸಿ.', ogImage: '/images/og/donate-og.jpg' },
    hero: { eyebrow: 'ದಾನ ಮಾಡಿ - ಸಮಾಜ ಸೇವೆಗೆ ನಿಮ್ಮ ಬೆಂಬಲ ನೀಡಿ', title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಬೆಂಬಲಿಸಲು ದೇಣಿಗೆ ನೀಡಿ', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಪ್ರಸ್ತುತ ಪಡಿತರ ಕಿಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮಾಜ ಸೇವೆಗಾಗಿ ಯುಪಿಐ ಮತ್ತು ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ದೇಣಿಗೆಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ.', primaryCta: { label: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ', href: site.whatsappHref, external: true, variant: 'whatsapp' }, secondaryCta: { label: 'ದೇಣಿಗೆ ಸಹಾಯಕ್ಕಾಗಿ ಕರೆ ಮಾಡಿ', href: site.phoneHref }, image: imagePaths.donate, imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್‌ಗಾಗಿ ದೇಣಿಗೆ ಬೆಂಬಲ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್' },
    intro: { eyebrow: 'ಏಕೆ ದೇಣಿಗೆ ನೀಡಬೇಕು', title: 'ಕುಟುಂಬಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳು ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣವನ್ನು ಬೆಂಬಲಿಸಿ', content: 'ನಿಮ್ಮ ಬೆಂಬಲವು ಮಹಾಲಿಂಗಪುರ ಮತ್ತು ಸಮೀಪದ ಪ್ರದೇಶಗಳಲ್ಲಿ ಪಡಿತರ ಕಿಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿಗಳ ನೋಟ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಪೆನ್ನುಗಳು, ಮರ ನೆಡುವಿಕೆ ಬೆಂಬಲ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ, ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಾಮಾನ್ಯ ಸಮಾಜ ಸೇವಾ ಕಾರ್ಯಗಳನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.' },
    features: {
      eyebrow: 'ದೇಣಿಗೆ ಕ್ಷೇತ್ರಗಳು',
      title: 'ನಿಮ್ಮ ಬೆಂಬಲವು ಏನನ್ನು ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      items: [
        { title: 'ಕುಟುಂಬಗಳಿಗೆ ಪಡಿತರ ಕಿಟ್‌ಗಳು', description: 'ಕುಟುಂಬಗಳು ಮತ್ತು ಅಗತ್ಯವಿರುವ ಜನರಿಗೆ ಮಾಸಿಕ ಆಹಾರ ಪೂರೈಕೆಯನ್ನು ಬೆಂಬಲಿಸಲು ಸಹಾಯ ಮಾಡಿ.', href: '/ration-distribution', linkLabel: 'ಪಡಿತರ ಕಾರ್ಯವನ್ನು ನೋಡಿ' },
        { title: 'ವಿದ್ಯಾರ್ಥಿ ನೋಟ್‌ಬುಕ್‌ಗಳು ಮತ್ತು ಪೆನ್ನುಗಳು', description: 'ಸರ್ಕಾರಿ ಶಾಲಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಮೂಲ ಶೈಕ್ಷಣಿಕ ಅಗತ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/social-service', linkLabel: 'ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲವನ್ನು ನೋಡಿ' },
        { title: 'ಮರ ನೆಡುವಿಕೆ', description: 'ಹಸಿರು ಸಮುದಾಯ ಕಾರ್ಯ ಮತ್ತು ಮರಗಳ ಆರೈಕೆ ಜಾಗೃತಿಯನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/tree-plantation', linkLabel: 'ಮರ ನೆಡುವಿಕೆಯನ್ನು ನೋಡಿ' },
        { title: 'ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ', description: 'ಆರೋಗ್ಯ ಜಾಗೃತಿ ಮತ್ತು ಶಿಬಿರ ಸಮನ್ವಯದ ಅಗತ್ಯಗಳನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/social-service', linkLabel: 'ಆರೋಗ್ಯ ಬೆಂಬಲವನ್ನು ನೋಡಿ' },
        { title: 'ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು', description: 'ಶಾಲೆಗಳು ಮತ್ತು ಸಮುದಾಯಗಳಲ್ಲಿ ಸ್ವಚ್ಛತೆ ಮತ್ತು ಪ್ಲಾಸ್ಟಿಕ್ ಮುಕ್ತ ಜಾಗೃತಿಯನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/social-service', linkLabel: 'ಜಾಗೃತಿ ಕಾರ್ಯವನ್ನು ನೋಡಿ' },
        { title: 'ಸಾಮಾನ್ಯ ಸಮಾಜ ಸೇವೆ', description: 'ಸಮುದಾಯ ಕಲ್ಯಾಣ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವಾ ಚಟುವಟಿಕೆಗಳನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/our-work', linkLabel: 'ಎಲ್ಲಾ ಕೆಲಸಗಳನ್ನು ನೋಡಿ' },
      ],
    },
    process: {
      title: 'ಸಣ್ಣ ದೇಣಿಗೆ ಪ್ರಕ್ರಿಯೆ',
      description: 'ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಆನ್‌ಲೈನ್ ಪಾವತಿ ಗೇಟ್‌ವೇ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿಲ್ಲ. ಯುಪಿಐ ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ದೇಣಿಗೆ ನೀಡಿ ಮತ್ತು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ.',
      steps: [
        { title: 'ಬೆಂಬಲ ಕ್ಷೇತ್ರವನ್ನು ಆರಿಸಿ', description: 'ಪಡಿತರ ಕಿಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿ ಸ್ಟೇಷನರಿ, ಮರ ನೆಡುವಿಕೆ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ ಅಥವಾ ಸಾಮಾನ್ಯ ಸಮಾಜ ಸೇವಾ ಕಾರ್ಯವನ್ನು ಬೆಂಬಲಿಸಿ.' },
        { title: 'ಯುಪಿಐ ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ದೇಣಿಗೆ ನೀಡಿ', description: 'ನಿಮ್ಮ ಕೊಡುಗೆಯನ್ನು ನೀಡಲು ಈ ಪುಟದಲ್ಲಿ ತೋರಿಸಿರುವ ಯುಪಿಐ ಐಡಿ ಅಥವಾ ಬ್ಯಾಂಕ್ ವಿವರಗಳನ್ನು ಬಳಸಿ.' },
        { title: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ', description: 'ದೇಣಿಗೆ ನೀಡಿದ ನಂತರ, ನಿಮ್ಮ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಮತ್ತು ದೇಣಿಗೆಯ ಉದ್ದೇಶವನ್ನು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಮಹಾ ಫೌಂಡೇಶನ್‌ಗೆ ಕಳುಹಿಸಿ.' },
        { title: 'ನವೀಕರಣಗಳಿಗಾಗಿ ಸಂಪರ್ಕದಲ್ಲಿರಿ', description: 'ನಮ್ಮ ತಂಡವು ನಿಮ್ಮೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸುತ್ತದೆ ಮತ್ತು ಲಭ್ಯವಿದ್ದಾಗ ಚಟುವಟಿಕೆಯ ನವೀಕರಣಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುತ್ತದೆ.' },
      ],
    },
    faqs: [
      { question: 'ನಾನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ದೇಣಿಗೆ ನೀಡಬಹುದೇ?', answer: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಪ್ರಸ್ತುತ ಯುಪಿಐ ಮತ್ತು ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆಯ ಮೂಲಕ ಬೆಂಬಲವನ್ನು ಸ್ವೀಕರಿಸುತ್ತದೆ. ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ಪಾವತಿ ಗೇಟ್‌ವೇ ಅನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿಲ್ಲ.' },
      { question: 'ನಾನು ಪಾವತಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ಎಲ್ಲಿ ಕಳುಹಿಸಬೇಕು?', answer: 'ದಯವಿಟ್ಟು ಪಾವತಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು 9986836007 ಗೆ ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಕಳುಹಿಸಿ.' },
      { question: 'ನಾನು ನಿರ್ದಿಷ್ಟ ಚಟುವಟಿಕೆಯನ್ನು ಬೆಂಬಲಿಸಬಹುದೇ?', answer: 'ಹೌದು, ನಿಮ್ಮ ದೇಣಿಗೆಯು ಪಡಿತರ ಕಿಟ್‌ಗಳು, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ವೈದ್ಯಕೀಯ ಶಿಬಿರ ಬೆಂಬಲ ಅಥವಾ ಸಾಮಾನ್ಯ ಸಮಾಜ ಸೇವೆಗಾಗಿ ಎಂಬುದನ್ನು ನೀವು ಉಲ್ಲೇಖಿಸಬಹುದು.' },
      { question: 'ದೇಣಿಗೆ ಪ್ರಮಾಣಪತ್ರಗಳು ಲಭ್ಯವಿದೆಯೇ?', answer: 'ಈ ವೆಬ್‌ಸೈಟ್‌ನಲ್ಲಿ ದೇಣಿಗೆ ಪ್ರಮಾಣಪತ್ರ ಅಥವಾ ಕಾನೂನು ವಿನಾಯಿತಿ ವಿವರಗಳನ್ನು ಪ್ರದರ್ಶಿಸಲಾಗಿಲ್ಲ. ಪರಿಶೀಲಿಸಿದ ದೇಣಿಗೆ-ಸಂಬಂಧಿತ ಮಾಹಿತಿಗಾಗಿ ದಯವಿಟ್ಟು ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ನೇರವಾಗಿ ಸಂಪರ್ಕಿಸಿ.' },
    ],
    cta: { title: 'ಯುಪಿಐ ಅಥವಾ ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮೂಲಕ ದೇಣಿಗೆ ನೀಡಿ', description: 'ದೇಣಿಗೆ ನೀಡಿದ ನಂತರ, ಸಂವಹನ ಮತ್ತು ಸ್ವೀಕೃತಿಗಾಗಿ ದಯವಿಟ್ಟು ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ನಿಮ್ಮ ಪಾವತಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಅನ್ನು ಕಳುಹಿಸಿ.', primaryCta: { label: 'ವಾಟ್ಸಾಪ್‌ನಲ್ಲಿ ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಕಳುಹಿಸಿ', href: site.whatsappHref, external: true, variant: 'whatsapp' }, secondaryCta: { label: 'ನಮಗೆ ಇಮೇಲ್ ಮಾಡಿ', href: site.emailHref }, whatsappCta: false },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ದೇಣಿಗೆ ನೀಡಿ', href: '/donate' }],
  },
  contact: {
    path: '/contact',
    label: 'ಸಂಪರ್ಕಿಸಿ',
    seo: { ogTitle: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವನ್ನು ಸಂಪರ್ಕಿಸಿ', ogDescription: 'ಸ್ವಯಂಸೇವಕ, ದೇಣಿಗೆಗಳು, ಚಟುವಟಿಕೆಗಳು ಮತ್ತು ಸಹಯೋಗಕ್ಕಾಗಿ ಕರೆ, ವಾಟ್ಸಾಪ್, ಇಮೇಲ್ ಅಥವಾ ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರಕ್ಕೆ ಭೇಟಿ ನೀಡಿ.', ogImage: '/images/og/contact-og.jpg' },
    hero: { eyebrow: 'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ', title: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಿ', description: 'ಮಹಾಲಿಂಗಪುರ, ಬಾಗಲಕೋಟೆ ಜಿಲ್ಲೆ, ಮುಧೋಳ, ಜಮಖಂಡಿ, ಚಿಕ್ಕೋಡಿ ಮತ್ತು ಉತ್ತರ ಕರ್ನಾಟಕದಲ್ಲಿ ಸ್ವಯಂಸೇವಕ, ದೇಣಿಗೆ ಬೆಂಬಲ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಸಹಾಯ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಸಮುದಾಯ ಕಲ್ಯಾಣಕ್ಕಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವನ್ನು ಸಂಪರ್ಕಿಸಿ.', primaryCta: { label: 'ನಮಗೆ ವಾಟ್ಸಾಪ್ ಮಾಡಿ', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'ಈಗ ಕರೆ ಮಾಡಿ', href: site.phoneHref }, image: imagePaths.contact, imageAlt: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಸಂಪರ್ಕ ಪ್ಲೇಸ್‌ಹೋಲ್ಡರ್' },
    intro: { eyebrow: 'ಸಂಪರ್ಕ ಮಾಹಿತಿ', title: 'ಕರೆ, ವಾಟ್ಸಾಪ್, ಇಮೇಲ್ ಅಥವಾ ಭೇಟಿ ನೀಡಿ', content: 'ಸ್ವಯಂಸೇವಕ, ದೇಣಿಗೆ ಬೆಂಬಲ, ಪಡಿತರ ವಿತರಣೆ, ವಿದ್ಯಾರ್ಥಿ ಬೆಂಬಲ, ಆರೋಗ್ಯ ಶಿಬಿರ ಬೆಂಬಲ, ಮರ ನೆಡುವಿಕೆ, ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳು ಅಥವಾ ಸಹಯೋಗದ ಅವಕಾಶಗಳ ಬಗ್ಗೆ ಕೇಳಲು ಕೆಳಗಿನ ಸಂಪರ್ಕ ವಿವರಗಳನ್ನು ಬಳಸಿ.' },
    features: {
      eyebrow: 'ಸಂಪರ್ಕ ಕಾರಣಗಳು',
      title: 'ನಾವು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?',
      items: [
        { title: 'ಸ್ವಯಂಸೇವಕ ವಿಚಾರಣೆ', description: 'ಮುಂಬರುವ ಚಟುವಟಿಕೆಗಳಿಗೆ ಸೇರುವುದು ಹೇಗೆ ಎಂದು ಕೇಳಿ.', href: '/volunteer', linkLabel: 'ಸ್ವಯಂಸೇವಕ ಪುಟ' },
        { title: 'ದೇಣಿಗೆ ಬೆಂಬಲ', description: 'ಯುಪಿಐ, ಬ್ಯಾಂಕ್ ವರ್ಗಾವಣೆ ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಹಂಚಿಕೆಯ ಬಗ್ಗೆ ಕೇಳಿ.', href: '/donate', linkLabel: 'ದೇಣಿಗೆ ಪುಟ' },
        { title: 'ಮರ ನೆಡುವಿಕೆ', description: 'ಹಸಿರು ಸಮುದಾಯ ಕಾರ್ಯ ಮತ್ತು ನೆಡುವಿಕೆ ಬೆಂಬಲವನ್ನು ಚರ್ಚಿಸಿ.', href: '/tree-plantation', linkLabel: 'ಮರ ನೆಡುವಿಕೆ' },
        { title: 'ಪಡಿತರ ವಿತರಣೆ', description: 'ಆಹಾರ ಸಹಾಯ ಮತ್ತು ಪಡಿತರ ಚಟುವಟಿಕೆಗಳನ್ನು ಬೆಂಬಲಿಸಿ.', href: '/ration-distribution', linkLabel: 'ಪಡಿತರ ಬೆಂಬಲ' },
        { title: 'ವಿದ್ಯಾರ್ಥಿ ಮತ್ತು ಆರೋಗ್ಯ ಬೆಂಬಲ', description: 'ವಿದ್ಯಾರ್ಥಿ ಸಹಾಯ, ಆರೋಗ್ಯ ಶಿಬಿರಗಳು ಮತ್ತು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳ ಬಗ್ಗೆ ಸಂಪರ್ಕಿಸಿ.', href: '/social-service', linkLabel: 'ಸಮಾಜ ಸೇವೆ' },
        { title: 'ಸಹಯೋಗ', description: 'ವ್ಯಕ್ತಿ, ಗುಂಪು, ಸಂಸ್ಥೆ, ಕಂಪನಿ, ಶಾಲೆ ಅಥವಾ ಸಮುದಾಯವಾಗಿ ಸಂಪರ್ಕಿಸಿ.', href: '/our-work', linkLabel: 'ನಮ್ಮ ಕೆಲಸ' },
      ],
    },
    highlight: {
      eyebrow: 'ಸ್ಥಳ',
      title: 'ಮಹಾಲಿಂಗಪುರ ಕಚೇರಿಯ ಸ್ಥಳ',
      description: 'ಬಾಹ್ಯ ಸ್ಕ್ರಿಪ್ಟ್‌ಗಳನ್ನು ತಪ್ಪಿಸಲು ಗೂಗಲ್ ಮ್ಯಾಪ್ಸ್ ಅನ್ನು ಎಂಬೆಡ್ ಮಾಡಲಾಗಿಲ್ಲ. ಹಂಚಿದ ಗೂಗಲ್ ಸ್ಥಳವನ್ನು ತೆರೆಯಲು ಸ್ಥಳದ ಲಿಂಕ್ ಬಳಸಿ.',
      items: [
        { title: 'ವಿಳಾಸ', description: site.address, href: site.locationUrl, linkLabel: 'ಸ್ಥಳ ತೆರೆಯಿರಿ' },
        { title: 'ಕರೆ', description: site.phoneDisplay, href: site.phoneHref, linkLabel: 'ಈಗ ಕರೆ ಮಾಡಿ' },
        { title: 'ವಾಟ್ಸಾಪ್', description: site.whatsappDisplay, href: site.whatsappHref, linkLabel: 'ವಾಟ್ಸಾಪ್ ತೆರೆಯಿರಿ' },
      ],
    },
    faqs: [
      { question: 'ನಾನು ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಹೇಗೆ ಸಂಪರ್ಕಿಸಬಹುದು?', answer: 'ವಾಟ್ಸಾಪ್ ವಿಚಾರಣೆ ಫಾರ್ಮ್, ಫೋನ್, ವಾಟ್ಸಾಪ್, ಇಮೇಲ್ ಅಥವಾ ಅಡಿಟಿಪ್ಪಣಿಯಲ್ಲಿರುವ ಸ್ಥಳದ ಲಿಂಕ್ ಮೂಲಕ ನೀವು ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.' },
      { question: 'ಗುಂಪುಗಳು ಮತ್ತು ಶಾಲೆಗಳು ಸಹಯೋಗ ಮಾಡಬಹುದೇ?', answer: 'ಹೌದು, ಗುಂಪುಗಳು, ಕಂಪನಿಗಳು, ಶಾಲೆಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಸಮುದಾಯಗಳು ಸಹಯೋಗಕ್ಕಾಗಿ ಮಹಾ ಫೌಂಡೇಶನ್ ಅನ್ನು ಸಂಪರ್ಕಿಸಬಹುದು.' },
      { question: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಎಲ್ಲಿದೆ?', answer: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಕರ್ನಾಟಕದ 587312 ರ ಮಹಾಲಿಂಗಪುರದ ಡಬಲ್ ರಸ್ತೆಯ ವಿನಾಯಕ್ ಮೆಡಿಕಲ್ ಶಾಪ್ ನಲ್ಲಿದೆ.' },
    ],
    cta: { title: 'ಸ್ವಯಂಸೇವಕರಾಗಲು, ದೇಣಿಗೆ ನೀಡಲು ಅಥವಾ ಸಹಯೋಗಕ್ಕಾಗಿ ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ', description: 'ಮಹಾ ಫೌಂಡೇಶನ್ ಮಹಾಲಿಂಗಪುರವನ್ನು ಸಂಪರ್ಕಿಸಲು ವಾಟ್ಸಾಪ್, ಫೋನ್ ಅಥವಾ ಇಮೇಲ್ ಮೂಲಕ ತಲುಪಿ.', primaryCta: { label: 'ನಮಗೆ ವಾಟ್ಸಾಪ್ ಮಾಡಿ', href: 'whatsapp', variant: 'whatsapp' }, secondaryCta: { label: 'ಈಗ ಕರೆ ಮಾಡಿ', href: site.phoneHref }, whatsappCta: true },
    breadcrumbs: [{ label: 'ಮುಖಪುಟ', href: '/' }, { label: 'ಸಂಪರ್ಕಿಸಿ', href: '/contact' }],
  },
} satisfies Record<string, InnerPage>;


export const innerPages = { en, kn } as const;

export type InnerPageKey = keyof typeof innerPages['en'];

export function getPageSchemas(pageKey: InnerPageKey, lang: 'en' | 'kn' = 'en') {
  const page = innerPages[lang][pageKey];
  const translatePath = (path: string) => lang === 'en' ? path : `/kn${path === '/' ? '' : path}`;
  const pageUrl = absoluteUrl(translatePath(page.path));

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
      item: absoluteUrl(translatePath(crumb.href)),
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
