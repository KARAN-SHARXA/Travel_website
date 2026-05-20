export const CONTACT = {
  phoneDisplay: '+91 9882983719',
  phoneE164: '+919882983719',
  whatsappE164: '919882983719',
  email: 'kuldeeptourtravel@gmail.com',
  facebookUrl: 'https://www.facebook.com/share/17VhuQyM6H/',
  instagramUrl: 'https://www.instagram.com/kuld.eeptourtravel?igsh=aDUxbDhkZ3FxcjBt',
} as const;

export const buildWhatsAppUrl = (message: string): string => {
  return `https://wa.me/${CONTACT.whatsappE164}?text=${encodeURIComponent(message)}`;
};
