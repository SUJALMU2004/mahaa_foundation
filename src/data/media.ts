export type MediaCategory = {
  label: string;
  href: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'image';
  image: string;
  imageAlt: string;
  caption: string;
  relatedHref?: string;
  date?: string;
};

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'video';
  poster: string;
  videoSrc?: string;
  duration?: string;
  date?: string;
  relatedHref?: string;
  transcript?: string;
  videoAltText: string;
};

export const videoCategories: MediaCategory[] = [
  { label: 'Tree Plantation', href: '/tree-plantation' },
  { label: 'Ration Distribution', href: '/ration-distribution' },
  { label: 'Student Support', href: '/social-service' },
  { label: 'Health Support', href: '/social-service' },
  { label: 'Social Service', href: '/social-service' },
  { label: 'Awareness', href: '/social-service' },
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'double-road-tree-plantation',
    title: 'Double Road Tree Plantation',
    description: 'Volunteers supporting sapling plantation near Double Road in Mahalingpur.',
    category: 'Tree Plantation',
    type: 'image',
    image: '/images/gallery/Double%20Road%20Tree%20Plantation%20in%20gallery.jpeg',
    imageAlt: 'Mahaa Foundation volunteers planting saplings near Double Road Mahalingpur',
    caption: 'Tree plantation work for greener public spaces in Mahalingpur.',
    relatedHref: '/activities/double-road-tree-plantation-mahalingpur',
  },
  {
    id: 'sapling-care-awareness',
    title: 'Sapling Care Awareness',
    description: 'Community awareness about caring for planted saplings after plantation drives.',
    category: 'Tree Plantation',
    type: 'image',
    image: '/images/gallery/Sapling%20Care%20Awareness%20in%20gallery%20card.jpeg',
    imageAlt: 'Volunteers explaining sapling care to community members',
    caption: 'Sapling care awareness helps planted trees survive and grow.',
    relatedHref: '/tree-plantation',
  },
  {
    id: 'ration-and-food-support',
    title: 'Ration and Food Support',
    description: 'Food essentials and ration support for families facing difficult situations.',
    category: 'Ration Distribution',
    type: 'image',
    image: '/images/gallery/ration-and-food-support.jpg',
    imageAlt: 'Food essentials arranged for family support',
    caption: 'Ration and food support delivered with dignity and care.',
    relatedHref: '/activities/free-ration-stationery-medicine-support',
  },
  {
    id: 'stationery-support',
    title: 'Stationery Support for Students',
    description: 'Notebook and pen support for government school children.',
    category: 'Student Support',
    type: 'image',
    image: '/images/gallery/stationery-aid.jpg',
    imageAlt: 'Notebooks and pens prepared for government school students',
    caption: 'Student support keeps essential learning supplies within reach.',
    relatedHref: '/activities/notebook-pen-distribution-government-school-students',
  },
  {
    id: 'health-camp-support',
    title: 'Health Camp Support',
    description: 'Volunteer coordination for public health and vaccination support.',
    category: 'Health Support',
    type: 'image',
    image: '/images/gallery/health-camp-support.jpg',
    imageAlt: 'Volunteers helping with a community health support activity',
    caption: 'Health support activities help community members access basic care.',
    relatedHref: '/activities/polio-vaccination-camp-support-mahalingpur-bus-stand',
  },
  {
    id: 'koppal-parking-service',
    title: 'Koppal Pravachana Parking Service',
    description: 'The founding team supported parking service during a nine-day program.',
    category: 'Social Service',
    type: 'image',
    image: '/images/gallery/koppal-pravachana-parking-service.jpg',
    imageAlt: 'Parking service support during Koppal Gavi Siddeshwar Appaji Pravachana program',
    caption: 'Service support provided before the formal launch of Mahaa Foundation Mahalingpur.',
    relatedHref: '/activities/koppal-pravachana-parking-service',
  },
  {
    id: 'cleanliness-awareness',
    title: 'Cleanliness Awareness',
    description: 'Monthly awareness talks for clean public spaces and responsible civic action.',
    category: 'Awareness',
    type: 'image',
    image: '/images/gallery/cleanliness-awareness.jpg',
    imageAlt: 'Volunteers speaking about cleanliness awareness in Mahalingpur',
    caption: 'Cleanliness awareness encourages practical local responsibility.',
    relatedHref: '/activities/monthly-plastic-free-cleanliness-awareness-talks',
  },
  {
    id: 'plastic-free-awareness',
    title: 'Plastic-Free Awareness',
    description: 'Community conversations about reducing single-use plastic and keeping areas clean.',
    category: 'Awareness',
    type: 'image',
    image: '/images/gallery/plastic-free-awareness.jpg',
    imageAlt: 'Awareness activity about reducing single-use plastic',
    caption: 'Plastic-free awareness supports cleaner streets and healthier surroundings.',
    relatedHref: '/activities/monthly-plastic-free-cleanliness-awareness-talks',
  },
  {
    id: 'volunteer-planning',
    title: 'Volunteer Planning',
    description: 'Team members planning upcoming social service and awareness activities.',
    category: 'Volunteering',
    type: 'image',
    image: '/images/gallery/volunteer-planning.jpg',
    imageAlt: 'Mahaa Foundation volunteers planning social service activities',
    caption: 'Volunteer planning keeps activities organized and responsible.',
    relatedHref: '/volunteer',
  },
  {
    id: 'community-welfare-support',
    title: 'Community Welfare Support',
    description: 'Local welfare support through food, medicine, stationery, and coordination.',
    category: 'Community Welfare',
    type: 'image',
    image: '/images/gallery/community-welfare-support.jpg',
    imageAlt: 'Community welfare support items arranged by volunteers',
    caption: 'Community welfare support focuses on practical help for people in need.',
    relatedHref: '/our-work',
  },
];

export const videoItems: VideoItem[] = [
  {
    id: 'tree-plantation-drive-highlights',
    title: 'Tree Plantation Drive Highlights',
    description: 'Video highlights from Mahaa Foundation tree plantation work in Mahalingpur.',
    category: 'Tree Plantation',
    type: 'video',
    poster: '/images/videos/tree-plantation-video-poster.jpg',
    videoSrc: '/videos/tree-plantation-drive-highlights.mp4',
    relatedHref: '/activities/double-road-tree-plantation-mahalingpur',
    videoAltText: 'Mahaa Foundation tree plantation drive highlights video',
  },
  {
    id: 'polio-vaccination-camp-support',
    title: 'Polio Vaccination Camp Support',
    description: 'Video from polio vaccination camp support at Mahalingpur Bus Stand.',
    category: 'Health Support',
    type: 'video',
    poster: '/images/videos/polio-vaccination-camp-video-poster.jpg',
    videoSrc: '/videos/polio-vaccination-camp-support.mp4',
    relatedHref: '/activities/polio-vaccination-camp-support-mahalingpur-bus-stand',
    videoAltText: 'Polio vaccination camp support video',
  },
  {
    id: 'student-aid-activity',
    title: 'Student Support Activity',
    description: 'Video from Mahaa Foundation student support activity in Mahalingpur.',
    category: 'Student Support',
    type: 'video',
    poster: '/images/videos/student-aid-video-poster.jpg',
    videoSrc: '/videos/student-support-activity.mp4',
    relatedHref: '/activities/notebook-pen-distribution-government-school-students',
    videoAltText: 'Student support activity video',
  },
  {
    id: 'health-camp-support',
    title: 'Health Camp Support',
    description: 'Video from Mahaa Foundation health camp support activity.',
    category: 'Health Support',
    type: 'video',
    poster: '/images/videos/health-camp-video-poster.jpg',
    videoSrc: '/videos/health-camp-support.mp4',
    relatedHref: '/activities/polio-vaccination-camp-support-mahalingpur-bus-stand',
    videoAltText: 'Health camp support video',
  },
  {
    id: 'awareness-programs',
    title: 'Cleanliness and Plastic-Free Awareness',
    description: 'Video from cleanliness and plastic-free awareness activity.',
    category: 'Awareness',
    type: 'video',
    poster: '/images/videos/awareness-programs-video-poster.jpg',
    videoSrc: '/videos/awareness-programs.mp4',
    relatedHref: '/activities/monthly-plastic-free-cleanliness-awareness-talks',
    videoAltText: 'Cleanliness and plastic-free awareness video',
  },
  {
    id: 'social-service-drive',
    title: 'Social Service Drive',
    description: 'Video from Mahaa Foundation community service work.',
    category: 'Social Service',
    type: 'video',
    poster: '/images/videos/social-service-video-poster.jpg',
    videoSrc: '/videos/social-service-drive.mp4',
    relatedHref: '/activities/koppal-pravachana-parking-service',
    videoAltText: 'Social service activity video',
  },
  {
    id: 'koppal-pravachana-parking-service',
    title: 'Koppal Pravachana Parking Service',
    description: 'Video from parking service support during the Koppal Pravachana program.',
    category: 'Social Service',
    type: 'video',
    poster: '/images/videos/koppal-pravachana-parking-service-poster.jpg',
    videoSrc: '/videos/koppal-pravachana-parking-service.mp4',
    relatedHref: '/activities/koppal-pravachana-parking-service',
    videoAltText: 'Koppal Pravachana parking service support video',
  },
];
