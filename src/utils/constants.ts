export const SITE_NAME = '11th IRF World Ranger Congress';
export const SITE_DESCRIPTION = 'Official website for the 11th IRF World Ranger Congress, Puerto Iguazu, Argentina, April 19-23, 2027';
export const CONGRESS_DATE = new Date('2027-04-19T09:00:00-03:00');
export const CONGRESS_END_DATE = new Date('2027-04-23T18:00:00-03:00');
export const REGISTRATION_FEE_USD = 395;
export const MAX_CAPACITY = 600;
export const REGION_CAP = 75;
export const HOST_REGION_CAP = 150;
export const CONTACT_EMAIL = 'wrc@internationalrangers.org';

export const VENUE = {
  name: 'Centro de Eventos y Convenciones del Iguazu',
  city: 'Puerto Iguazu',
  state: 'Misiones',
  country: 'Argentina',
  mapUrl: 'https://share.google/vNHWAHQQaKV6aQZBP',
  mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.1!2d-54.57!3d-25.60!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCentro+de+Eventos+y+Convenciones+del+Iguazu!5e0!3m2!1sen!2sar',
};

export const ORGANIZERS = {
  irf: {
    name: 'International Ranger Federation',
    shortName: 'IRF',
    logo: '/images/logos/irf.png',
    founded: 1992,
    website: 'https://www.internationalrangers.org',
    description: 'A worldwide, non-profit membership-based organisation established in 1992, representing rangers across 50+ countries on 6 continents.',
  },
  sigunara: {
    name: 'Syndicate of National Rangers of Argentina Republic',
    shortName: 'SIGUNARA',
    logo: '/images/logos/sigunara.png',
    founded: 1990,
    website: 'https://www.sigunara.org',
    description: 'The National Rangers union of Argentina, established in 1990 and recognized by the National Government.',
  },
};

export const EXTERNAL_LINKS = {
  visaPortal: 'https://www.migraciones.gob.ar/accesible/indexdnm.php?visas',
  speakerFormEN: 'https://forms.gle/RrtDG25QgkR74G7XA',
  speakerFormES: 'https://forms.gle/UqKG7UiEYSnyUbTX8',
  speakerFormFR: 'https://forms.gle/35CoibZnsHGJ1dfi8',
  fundingEoiEN: 'https://forms.gle/MTJmr4A3Nogk8GhV8',
  fundingEoiES: 'https://forms.gle/MGVH2c7QQtg9Cvtk9',
  fundingEoiFR: 'https://forms.gle/FGjVWNEqAmNVs55g7',
  sponsorRangerEN: 'https://forms.gle/bYpTj2FcLtTkxsPb9',
  sponsorRangerES: 'https://forms.gle/L7Ep5gy3X34wV9yq5',
  sponsorRangerFR: 'https://forms.gle/uUXRXC3qZE8A5QzT9',
  sponsorshipProspectusEN: 'https://tinyurl.com/3tpck2mu',
  sponsorshipProspectusES: 'https://tinyurl.com/2s9jyz6d',
  sponsorshipProspectusFR: 'https://tinyurl.com/mr3em86r',
  /**
   * Contact form: custom UI submits to Google Forms (no iframe).
   * Submit URL: use /formResponse (not /viewform). Form ID is in your form’s embed URL: .../d/e/FORM_ID/viewform...
   */
  contactFormSubmitUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfCOCyNQAADG5KIr1xuEHoZ52cmSQ49lqhXXcglhCkSyvgcgA/formResponse',
  /**
   * Google Form field entry IDs. Get them from your form: ⋮ → Get pre-filled link → fill each field → copy URL.
   * The URL contains entry.XXXXXXXX for each field; use those numbers here (with "entry." prefix).
   * Order in the form must match: first question → name, second → email, third → subject, fourth → message.
   */
  contactFormEntryIds: {
    name: 'entry.161644429',
    email: 'entry.1094874600',
    subject: 'entry.296963116',
    message: 'entry.39967172',
  },
};

export const NAV_ITEMS = [
  { label: 'Home', key: 'nav.home', href: '/' },
  {
    label: 'About',
    key: 'nav.about',
    href: '/about',
    children: [
      { label: 'Congress Introduction', key: 'nav.about.intro', href: '/about' },
      { label: 'Congress Events', key: 'nav.about.events', href: '/about/events' },
    ],
  },
  { label: 'Submit', key: 'nav.submit', href: '/submit' },
  { label: 'FAQ', key: 'nav.faq', href: '/faq' },
  { label: 'Congress Theme', key: 'nav.theme', href: '/congress-theme' },
  {
    label: 'Plan Travel',
    key: 'nav.travel',
    href: '/travel',
    children: [
      { label: 'Logistics', key: 'nav.travel.logistics', href: '/travel' },
      { label: 'Venue & Accommodation', key: 'nav.travel.venue', href: '/travel/venue' },
      { label: 'Travel FAQs', key: 'nav.travel.faqs', href: '/travel/faqs' },
    ],
  },
  { label: 'Program', key: 'nav.program', href: '/program' },
  { label: 'Contact Us', key: 'nav.contact', href: '/contact' },
  { label: 'Press', key: 'nav.press', href: '/press' },
  { label: 'Register Now', key: 'nav.register', href: '/register', highlight: true },
] as const;
