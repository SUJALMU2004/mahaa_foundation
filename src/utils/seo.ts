import { site } from '../data/site';
import { getDefaultWhatsAppUrl } from './contact';

export function absoluteUrl(pathOrUrl: string, baseUrl = site.url): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return new URL(path, baseUrl).toString();
}

export function whatsappUrl(
  message = 'Hello Mahaa Foundation, I want to know more about your NGO work.',
): string {
  return getDefaultWhatsAppUrl(message);
}
