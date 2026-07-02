import { site } from '../data/site';

export type VolunteerMessageData = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  availability?: string;
  message?: string;
};

export type DonationMessageData = {
  name?: string;
  phone?: string;
  email?: string;
  supportArea?: string;
  donationType?: string;
  message?: string;
};

export type ContactMessageData = {
  name?: string;
  phone?: string;
  email?: string;
  reason?: string;
  message?: string;
};

function valueOrBlank(value?: string): string {
  return value?.trim() || '';
}

export function normalizeIndianPhoneNumber(phone: string): string {
  const cleanPhone = phone.replace(/[\s+-]/g, '').replace(/[^\d]/g, '');

  if (cleanPhone.length === 10) {
    return `91${cleanPhone}`;
  }

  return cleanPhone.startsWith('91') ? cleanPhone : cleanPhone;
}

export function getWhatsAppUrl(phone: string, message?: string): string {
  const normalizedPhone = normalizeIndianPhoneNumber(phone);
  const baseUrl = `https://wa.me/${normalizedPhone}`;

  if (!message?.trim()) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}

export function formatVolunteerMessage(data: VolunteerMessageData): string {
  return `Hello Mahaa Foundation,

I want to volunteer for your NGO activities.

Name: ${valueOrBlank(data.name)}
Phone: ${valueOrBlank(data.phone)}
Email: ${valueOrBlank(data.email)}
Interest Area: ${valueOrBlank(data.interest)}
Preferred Availability: ${valueOrBlank(data.availability)}
Message: ${valueOrBlank(data.message)}

Please contact me with more details.`;
}

export function formatDonationMessage(data: DonationMessageData): string {
  return `Hello Mahaa Foundation,

I want to support your NGO work.

Name: ${valueOrBlank(data.name)}
Phone: ${valueOrBlank(data.phone)}
Email: ${valueOrBlank(data.email)}
Support Area: ${valueOrBlank(data.supportArea)}
Donation Type: ${valueOrBlank(data.donationType)}
Message: ${valueOrBlank(data.message)}

Please share donation details.`;
}

export function formatContactMessage(data: ContactMessageData): string {
  return `Hello Mahaa Foundation,

I want to contact your NGO.

Name: ${valueOrBlank(data.name)}
Phone: ${valueOrBlank(data.phone)}
Email: ${valueOrBlank(data.email)}
Reason: ${valueOrBlank(data.reason)}
Message: ${valueOrBlank(data.message)}

Please get back to me.`;
}

export function getDefaultWhatsAppUrl(message?: string): string {
  return getWhatsAppUrl(site.whatsapp, message);
}
