import { site } from './site';

export type ContactCard = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export type SelectOption = {
  label: string;
  value: string;
};

export const contactCards: ContactCard[] = [
  {
    label: 'Call Us',
    value: site.phoneDisplay,
    href: site.phoneHref,
  },
  {
    label: 'WhatsApp Us',
    value: site.whatsappDisplay,
    href: site.whatsappHref,
    external: true,
  },
  {
    label: 'Email Us',
    value: site.email,
    href: site.emailHref,
  },
  {
    label: 'Find Location',
    value: 'Open Google Location',
    href: site.locationUrl,
    external: true,
  },
];

export const volunteerInterestOptions: SelectOption[] = [
  { label: 'Tree Plantation', value: 'Tree Plantation' },
  { label: 'Ration Distribution', value: 'Ration Distribution' },
  { label: 'Student Support', value: 'Student Support' },
  { label: 'Health Camp Support', value: 'Health Camp Support' },
  { label: 'Cleanliness Awareness', value: 'Cleanliness Awareness' },
  { label: 'Plastic-Free Awareness', value: 'Plastic-Free Awareness' },
  { label: 'Social Service', value: 'Social Service' },
  { label: 'Event Support', value: 'Event Support' },
  { label: 'Awareness Campaign', value: 'Awareness Campaign' },
  { label: 'General Volunteering', value: 'General Volunteering' },
];

export const availabilityOptions: SelectOption[] = [
  { label: 'Weekdays', value: 'Weekdays' },
  { label: 'Weekends', value: 'Weekends' },
  { label: 'Mornings', value: 'Mornings' },
  { label: 'Evenings', value: 'Evenings' },
  { label: 'Flexible', value: 'Flexible' },
];

export const donationInterestOptions: SelectOption[] = [
  { label: 'Ration Distribution', value: 'Ration Distribution' },
  { label: 'Student Support', value: 'Student Support' },
  { label: 'Tree Plantation', value: 'Tree Plantation' },
  { label: 'Health Camp Support', value: 'Health Camp Support' },
  { label: 'Awareness Programs', value: 'Awareness Programs' },
  { label: 'Social Service', value: 'Social Service' },
  { label: 'General NGO Support', value: 'General NGO Support' },
];

export const donationTypeOptions: SelectOption[] = [
  { label: 'Money Donation', value: 'Money Donation' },
  { label: 'Ration Items', value: 'Ration Items' },
  { label: 'Saplings / Plantation Support', value: 'Saplings / Plantation Support' },
  { label: 'Volunteer + Donation Support', value: 'Volunteer + Donation Support' },
  { label: 'Other Support', value: 'Other Support' },
];

export const contactReasonOptions: SelectOption[] = [
  { label: 'Volunteer Enquiry', value: 'Volunteer Enquiry' },
  { label: 'Donation Enquiry', value: 'Donation Enquiry' },
  { label: 'Tree Plantation Drive', value: 'Tree Plantation Drive' },
  { label: 'Ration Distribution Support', value: 'Ration Distribution Support' },
  { label: 'Student Support', value: 'Student Support' },
  { label: 'Health Camp Support', value: 'Health Camp Support' },
  { label: 'Cleanliness Awareness', value: 'Cleanliness Awareness' },
  { label: 'Collaboration', value: 'Collaboration' },
  { label: 'Media / General Enquiry', value: 'Media / General Enquiry' },
  { label: 'Other', value: 'Other' },
];

export const defaultWhatsAppMessages = {
  general:
    'Hello Mahaa Foundation, I want to know more about your NGO work.',
  volunteer:
    'Hello Mahaa Foundation, I want to volunteer for your NGO activities.',
  donation:
    'Hello Mahaa Foundation, I want to support your NGO work.',
} as const;
