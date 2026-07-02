import { site } from '../data/site';
import {
  formatContactMessage,
  formatDonationMessage,
  formatVolunteerMessage,
  getWhatsAppUrl,
} from '../utils/contact';

type WhatsAppFormType = 'volunteer' | 'donation' | 'contact';

function getString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim() : '';
}

function buildMessage(type: WhatsAppFormType, formData: FormData): string {
  if (type === 'volunteer') {
    return formatVolunteerMessage({
      name: getString(formData, 'name'),
      phone: getString(formData, 'phone'),
      email: getString(formData, 'email'),
      interest: getString(formData, 'interest'),
      availability: getString(formData, 'availability'),
      message: getString(formData, 'message'),
    });
  }

  if (type === 'donation') {
    return formatDonationMessage({
      name: getString(formData, 'name'),
      phone: getString(formData, 'phone'),
      email: getString(formData, 'email'),
      supportArea: getString(formData, 'supportArea'),
      donationType: getString(formData, 'donationType'),
      message: getString(formData, 'message'),
    });
  }

  return formatContactMessage({
    name: getString(formData, 'name'),
    phone: getString(formData, 'phone'),
    email: getString(formData, 'email'),
    reason: getString(formData, 'reason'),
    message: getString(formData, 'message'),
  });
}

function initWhatsAppForms() {
  const forms = document.querySelectorAll<HTMLFormElement>('[data-whatsapp-form]');

  forms.forEach((form) => {
    if (form.dataset.whatsappInitialized === 'true') {
      return;
    }

    form.dataset.whatsappInitialized = 'true';

    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      event.preventDefault();

      const type = form.dataset.whatsappType as WhatsAppFormType | undefined;
      if (!type) {
        return;
      }

      const message = buildMessage(type, new FormData(form));
      const whatsappUrl = getWhatsAppUrl(site.whatsapp, message);
      const opened = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

      if (!opened) {
        window.location.href = whatsappUrl;
      }
    });
  });
}

initWhatsAppForms();
