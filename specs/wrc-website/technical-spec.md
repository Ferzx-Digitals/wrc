# WRC Website - Technical Specification

## Overview

Build the official website for the **11th IRF World Ranger Congress**, taking place in Puerto Iguazu, Misiones, Argentina from April 19-23, 2027. The site serves as the primary information hub and registration portal for 600+ rangers and conservation professionals worldwide. It must be visually striking (jungle/nature-themed), performant despite heavy imagery, accessible (WCAG 2.2 AA), and support three languages (EN/ES/FR).

## Problem Statement / Motivation

The International Ranger Federation needs a modern, content-rich website to promote and manage the 11th World Ranger Congress. The previous congress site (France 2024) needs to be replaced with an updated site reflecting the new Argentine host location, theme, and logistics. The site must:

- Attract and inform 600+ attendees from 7 global regions
- Handle registration with dual payment systems (Mercado Pago for Argentina, PayPal for international)
- Present dense content across 10+ pages in an engaging, nature-themed design
- Support English, Spanish, and French audiences

## Proposed Solution

A statically-generated multi-page website built with **Astro 5.x** using the islands architecture pattern. Interactive elements (carousels, countdown timer, FAQ search, Easter egg animations) are hydrated as isolated client-side islands. Styling with **Tailwind CSS 4.x**. Animations with **GSAP**. Deployed to **Vercel** with serverless functions for payment webhooks.

---

## Technical Approach

### Architecture

```
┌─────────────────────────────────────────────────┐
│                    Vercel CDN                     │
│              (Global Edge Network)                │
├─────────────────────────────────────────────────┤
│                                                   │
│   Static HTML/CSS/JS (Astro SSG Output)          │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│   │  /en/*   │ │  /es/*   │ │  /fr/*   │        │
│   └──────────┘ └──────────┘ └──────────┘        │
│                                                   │
│   Interactive Islands (Client-side JS)            │
│   ┌─────────┐ ┌─────────┐ ┌──────────┐          │
│   │Carousels│ │Countdown│ │FAQ Search│          │
│   │(Swiper) │ │ (GSAP)  │ │(Vanilla) │          │
│   └─────────┘ └─────────┘ └──────────┘          │
│   ┌─────────┐ ┌─────────┐                        │
│   │Easter   │ │Tab Nav  │                        │
│   │Eggs     │ │         │                        │
│   │(GSAP)   │ │(Vanilla)│                        │
│   └─────────┘ └─────────┘                        │
│                                                   │
├─────────────────────────────────────────────────┤
│   Serverless Functions (/api/*)                   │
│   ┌──────────────┐ ┌──────────────┐              │
│   │ Mercado Pago │ │   PayPal     │              │
│   │  Webhook     │ │  Webhook     │              │
│   └──────────────┘ └──────────────┘              │
│   ┌──────────────┐                                │
│   │ Contact Form │                                │
│   │  Handler     │                                │
│   └──────────────┘                                │
└─────────────────────────────────────────────────┘

External Services:
- Google Maps Embed API (venue maps)
- Google Forms (speaker submissions)
- Mercado Pago API (Argentine payments)
- PayPal API (international payments)
- Formspree (contact form alternative)
```

### Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Astro | 5.x |
| Styling | Tailwind CSS | 4.x |
| Animations | GSAP | 3.x |
| Carousels | Swiper.js | 11.x |
| Maps | Google Maps Embed API | - |
| Payment (AR) | Mercado Pago SDK | Latest |
| Payment (Intl) | PayPal JS SDK | Latest |
| Forms | Formspree / Astro API routes | - |
| Hosting | Vercel | - |
| Package Manager | pnpm | 9.x |
| Node.js | 20 LTS | - |

### Project Structure

```
wrc_website/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── fonts/
│   ├── downloads/          # PDFs (program, press kit, agenda)
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── hero/       # Hero carousel images
│   │   │   ├── team/       # Team member photos
│   │   │   ├── regions/    # IRF region photos
│   │   │   ├── venue/      # Venue & hotel photos
│   │   │   ├── field-trips/# Field trip photos
│   │   │   ├── logos/      # IRF, SIGUNARA, WRC, sponsor logos
│   │   │   └── press/      # Press gallery images
│   │   └── svg/
│   │       ├── jungle-silhouette.svg
│   │       ├── waterfall-divider.svg
│   │       ├── easter-eggs/ # Toucan, jaguar, butterfly, coati SVGs
│   │       └── world-map.svg
│   ├── components/
│   │   ├── global/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── Navigation.astro
│   │   │   ├── MobileMenu.astro
│   │   │   ├── LanguageSwitcher.astro
│   │   │   ├── CountdownTimer.astro  # Island: client:visible
│   │   │   └── SectionDivider.astro  # Jungle silhouette / waterfall
│   │   ├── home/
│   │   │   ├── HeroCarousel.astro    # Island: client:load
│   │   │   ├── RegionsCarousel.astro # Island: client:visible
│   │   │   ├── WelcomeSection.astro
│   │   │   ├── HistoryTable.astro
│   │   │   ├── CongressInfo.astro
│   │   │   ├── PresidentMessage.astro
│   │   │   ├── OrganizersCards.astro
│   │   │   ├── TeamCarousel.astro    # Island: client:visible
│   │   │   ├── SponsorsCarousel.astro# Island: client:visible
│   │   │   └── RegisterCTA.astro
│   │   ├── about/
│   │   │   ├── CongressIntro.astro
│   │   │   ├── WRCDetails.astro
│   │   │   ├── OrganizersActivities.astro
│   │   │   ├── ObjectivesCarousel.astro # Island: client:visible
│   │   │   └── WRCLogo.astro
│   │   ├── theme/
│   │   │   ├── ThemeHero.astro
│   │   │   ├── ThematicStreams.astro
│   │   │   ├── Objectives.astro
│   │   │   └── TopicsGrid.astro
│   │   ├── faq/
│   │   │   ├── FAQHero.astro
│   │   │   ├── FAQSearch.astro       # Island: client:load
│   │   │   └── FAQAccordion.astro    # Island: client:visible
│   │   ├── travel/
│   │   │   ├── TravelTabs.astro      # Island: client:load
│   │   │   ├── Logistics.astro
│   │   │   ├── VenueAccommodation.astro
│   │   │   └── TravelFAQs.astro
│   │   ├── program/
│   │   │   ├── ProgramTabs.astro     # Island: client:load
│   │   │   ├── OverviewTable.astro
│   │   │   ├── ActivitiesCards.astro # Island: client:visible
│   │   │   └── FieldTrips.astro
│   │   ├── contact/
│   │   │   ├── ContactForm.astro     # Island: client:visible
│   │   │   ├── TeamCarousel.astro
│   │   │   └── PartnersCarousel.astro
│   │   ├── press/
│   │   │   ├── PressHero.astro
│   │   │   ├── PressReleases.astro
│   │   │   ├── PhotoGallery.astro    # Island: client:visible
│   │   │   └── PressFAQ.astro
│   │   ├── register/
│   │   │   ├── RegistrationForm.astro # Island: client:load
│   │   │   └── PaymentSelector.astro  # Island: client:load
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── Carousel.astro
│   │   │   ├── Accordion.astro
│   │   │   ├── Tabs.astro
│   │   │   ├── MapEmbed.astro
│   │   │   └── HoverExpandCard.astro
│   │   └── easter-eggs/
│   │       ├── ScrollFauna.astro     # Island: client:visible
│   │       └── CursorLeaves.astro    # Island: client:idle
│   ├── content/
│   │   ├── config.ts
│   │   ├── faq/
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   └── fr.json
│   │   ├── team/
│   │   │   └── members.json
│   │   ├── congress-history/
│   │   │   └── congresses.json
│   │   ├── field-trips/
│   │   │   ├── en.json
│   │   │   ├── es.json
│   │   │   └── fr.json
│   │   └── press-releases/
│   │       └── releases.json
│   ├── i18n/
│   │   ├── en.json               # UI translation strings
│   │   ├── es.json
│   │   ├── fr.json
│   │   └── utils.ts              # t() helper function
│   ├── layouts/
│   │   ├── BaseLayout.astro      # HTML head, meta, OG tags
│   │   ├── PageLayout.astro      # Header + content + footer
│   │   └── SectionLayout.astro   # Reusable section wrapper
│   ├── pages/
│   │   ├── en/
│   │   │   ├── index.astro       # Home
│   │   │   ├── about/
│   │   │   │   ├── index.astro   # About (all 4 scrolls)
│   │   │   │   └── events.astro  # Congress Events
│   │   │   ├── submit.astro
│   │   │   ├── faq.astro
│   │   │   ├── congress-theme.astro
│   │   │   ├── travel/
│   │   │   │   ├── index.astro   # Logistics
│   │   │   │   ├── venue.astro   # Venue & Accommodation
│   │   │   │   └── faqs.astro    # Travel FAQs
│   │   │   ├── program.astro
│   │   │   ├── contact.astro
│   │   │   ├── press.astro
│   │   │   └── register.astro
│   │   ├── es/                   # Mirror of /en/ with Spanish content
│   │   ├── fr/                   # Mirror of /en/ with French content
│   │   └── index.astro           # Root redirect → /en/
│   ├── styles/
│   │   └── global.css            # Tailwind imports + custom properties
│   └── utils/
│       ├── countdown.ts          # Countdown calculation
│       ├── dates.ts              # Date formatting per locale
│       └── constants.ts          # Congress date, venue coords, etc.
└── vercel.json                   # Redirects, headers, functions config
```

---

## Implementation Phases

### Phase 1: Foundation & Layout (Week 1-2)

**Setup & Configuration:**
- [ ] Initialize Astro 5 project with pnpm
- [ ] Configure Tailwind CSS 4.x with WRC design tokens (colors, fonts, spacing)
- [ ] Set up project structure (directories, layouts, content collections)
- [ ] Configure i18n routing (EN default, ES, FR)
- [ ] Set up Vercel deployment pipeline
- [ ] Configure ESLint + Prettier

**Global Components:**
- [ ] `BaseLayout.astro` - HTML skeleton, meta tags, OG tags, fonts
- [ ] `Header.astro` - Logo + navigation with dropdowns (About, Plan Travel)
- [ ] `Navigation.astro` - Desktop nav with dropdown menus
- [ ] `MobileMenu.astro` - Hamburger menu with slide-out panel
- [ ] `Footer.astro` - 4-column: IRF description | WRC links (Plan travel, FAQs) | Participate (Submit, Register) | Contact (email, social media)
- [ ] `LanguageSwitcher.astro` - EN/ES/FR selector
- [ ] `SectionDivider.astro` - Jungle silhouette and waterfall wave SVGs
- [ ] `CountdownTimer.astro` - Animated countdown to April 19, 2027

**UI Components:**
- [ ] `Button.astro` - Primary, secondary, outline variants
- [ ] `Card.astro` - Reusable card with image, title, description, CTA
- [ ] `Carousel.astro` - Swiper.js wrapper component
- [ ] `Accordion.astro` - Expandable FAQ items
- [ ] `Tabs.astro` - Tab navigation component
- [ ] `MapEmbed.astro` - Google Maps iframe wrapper
- [ ] `HoverExpandCard.astro` - Card that expands on hover

### Phase 2: Content Pages - Home & About (Week 2-3)

**Home Page:**
- [ ] Hero carousel (3 slides, text overlay LEFT side, auto-play, navigation):
  - Slide 1: Introduction to WRC - 11th IRF WRC 2027 overview, Puerto Iguazu, 19-23 April 2027, 500+ rangers
  - Slide 2: Introduction to SIGUNARA - host ranger association, est. 1990, recognized by National Government
  - Slide 3: Introduction to region - Puerto Iguazu "Tropical Paradise at Triple Frontier", Atlantic Forest, Iguazu NP
- [ ] IRF Regions section with world map and region carousel (7 regions, each full-width card with name + description + background photo)
- [ ] Welcome section: "Welcome to the 11th IRF World Ranger Congress" + congress theme/slogan + IRF logo (copyright ©  version) + SIGUNARA logo + 11th WRC logo
- [ ] Congress history table (10 congresses: 1st/1995/Poland → 10th/2024/France) + link to IRF Declarations page
- [ ] Congress info section with venue (Centro de Eventos y Convenciones del Iguazu) + Google Map embed + Hotel Amerian + date
- [ ] IRF President message: quote block on dark background with photo, full message about ranger importance
- [ ] Organizers cards: IRF card (logo + description + "Visit Website" → internationalrangers.org) + SIGUNARA card (logo + description + "Visit Website" → sigunara.org)
- [ ] Team carousel (20+ members across IRF/SIGUNARA/FLG/Plan A, 4 visible at a time, photo + name + role)
- [ ] Partners/Sponsors section: "Our funders", "Institutional support", "Ranger sponsors" - multiple logo rows
- [ ] Countdown timer section: "IRF WORLD RANGER CONGRESS STARTS IN" + Days/Hours/Minutes/Seconds boxes + jungle silhouette
- [ ] Register CTA section

**About Page (4 scrolls as single long page):**
- [ ] Scroll 1: Congress introduction hero + rangers description + download agenda
- [ ] Scroll 2: 11th WRC details, countdown, styled Google Map, Easter eggs
- [ ] Scroll 3: Organizer cards (IRF + SIGUNARA), waterfall divider, congress activities (5 activity types), theme summary, president message
- [ ] Scroll 4: Objectives carousel (4 items, hover-to-expand), WRC logo section

### Phase 3: Content Pages - Theme, Submit, FAQ (Week 3-4)

**Congress Theme Page:**
- [ ] Hero with theme title and waterfall imagery
- [ ] Theme description section
- [ ] Thematic streams (5 streams, zigzag alternating layout with photos)
- [ ] Congress objectives section (4 objectives)
- [ ] WRC Topics grid (5 topic cards with imagery)
- [ ] Submit CTA

**Submit Page:**
- [ ] Expression of interest guidelines
- [ ] Session types description (Plenary, Workshop)
- [ ] Speaker form fields listing
- [ ] Thematic streams alignment info
- [ ] 3 Google Form links (EN/ES/FR) with language buttons
- [ ] Deadline info banner

**FAQ Page:**
- [ ] Hero with "How can we help you?" heading
- [ ] Search bar with real-time filtering (client-side island)
- [ ] 32 FAQ items in accordion format
- [ ] Category grouping (Registration, Accommodation, General, Payment, Sponsorship)
- [ ] "Ask anything" button → link to contact form

### Phase 4: Content Pages - Travel, Program, Contact, Press (Week 4-5)

**Plan Travel Page (3 sub-tabs):**
- [ ] Tab 1 - Logistics: Visa info + Argentine visa portal link (migraciones.gob.ar), 5 transport options to Puerto Iguazu (Air via IGR 20km/1h50 from BA, Via Brazil IGU airport 30-45min taxi, Bus 18-20h from BA, Car 1300km/16-18h, Via Paraguay), Airlines: Aerolíneas Argentinas, Flybondí, JetSMART
- [ ] Tab 2 - Venue & Accommodation: Centro de Eventos y Convenciones del Iguazu (convention center), Hotel Amerian Portal del Iguazu (5-star, 117 rooms, 2 bars, 2 restaurants, Spa, Av. Tres Fronteras 780, Triple Frontier location), booking calendar widget (April 2027), accommodation includes: room, breakfast, dinner, evening functions. NOTE: 2 additional hotels TBD
- [ ] Tab 3 - Travel FAQs: Currency ARS (USD/BRL accepted in tourist areas), WiFi/SIM (Claro, Movistar, Personal), Temperature 26-28°C highs / 17-19°C lows, Rainfall 150-200mm / 10-12 rainy days, Cloudiness 40-50%, Sunrise ~6:00-6:20/Sunset ~6:00-6:10, Humidity 70-75%, Wind 10-15km/h. Useful phone numbers section (emergency, tourist info, transport, hospital, police, taxi)

**Program Page (4 tabs):**
- [ ] Tab 1 - Overview: 6-day program table
- [ ] Tab 2 - Detailed Schedule: Day-by-day breakdown
- [ ] Tab 3 - Activities: 5 activity cards with hover interaction (Plenary, Workshops, Discussions, Cultural, Field Trips)
- [ ] Tab 4 - Field Trips: 6 trips with photos, duration, price
- [ ] Download program buttons (PDF links)

**Contact Us Page:**
- [ ] Contact form (Name, Email, Message + submit) with validation
- [ ] Email display: wrc@internationalrangers.org
- [ ] 3 card tabs section
- [ ] Congress team carousel (5 people)
- [ ] Social partners carousel
- [ ] Google Map embed
- [ ] Countdown + Register/Submit CTAs

**Press Page:**
- [ ] Press hero + description
- [ ] Press conference details: Tuesday 20 April, 12-1pm at Hotel Amerian Portal del Iguazu, remote attendance link
- [ ] Press kit downloads (EN/ES/FR PDFs)
- [ ] Press releases carousel (4+ releases with download buttons in EN/FR/ES)
- [ ] Photo gallery carousel with "Download photos" button
- [ ] "Who are rangers?" and "Why are rangers important for protected areas?" explainer sections
- [ ] Press FAQs accordion (7 questions): Who are rangers, Why important, Why need resources, Main challenges, Goal of congress, Why important for 30x30, What output
- [ ] Organizers section with IRF + SIGUNARA logos/descriptions + "Download logos" button
- [ ] Press contacts section (to be updated for 11th WRC)

### Phase 5: Registration & Payments (Week 5-6)

- [ ] Registration page with form (English only, with Google Translate suggestion)
- [ ] Form fields: name, email, country, region, category
- [ ] Registration type selector: Local Ranger (Argentina) / International Ranger
- [ ] Registration rules: individual/personal, non-transferable, no group registrations
- [ ] Spouse/partner registration: same $395 rate, takes a registration spot
- [ ] Mercado Pago integration (ARS) for Argentine registrants
- [ ] PayPal integration (USD $395) for international registrants
- [ ] Bank transfer option for Argentina/South America
- [ ] Serverless webhook endpoints for payment confirmation
- [ ] Registration capacity tracking (600 total, 75/region, 150 host)
- [ ] Registration period: 20 Feb 2026 - 31 March 2027
- [ ] Cancellation policy implementation: 80%/50%/0% refund tiers
- [ ] Confirmation page/email flow
- [ ] Certificate of Participation (post-congress download)
- [ ] Payment method advisory (avoid Amex/Mastercard)

### Phase 6: Easter Eggs, Animations & Polish (Week 6-7)

- [ ] Scroll-triggered fauna animations (toucan, coati, jaguar, butterfly peeking from edges)
- [ ] Cursor leaf particles on desktop
- [ ] Waterfall wave SVG animation on dividers
- [ ] Section fade-in/reveal animations (GSAP ScrollTrigger)
- [ ] Rotating panel billboard photo effect
- [ ] `prefers-reduced-motion` fallbacks for all animations
- [ ] 404 page: "You've wandered off the trail" with jungle theme

### Phase 7: i18n & SEO (Week 7-8)

- [ ] Spanish (ES) content translation for all pages
- [ ] French (FR) content translation for all pages
- [ ] Language switcher functionality (preserves current page)
- [ ] Hreflang tags on all pages
- [ ] Schema.org Event structured data (Home page)
- [ ] Open Graph + Twitter Card meta tags
- [ ] XML sitemap (multi-language)
- [ ] robots.txt
- [ ] Canonical URLs

### Phase 8: Testing & Launch (Week 8-9)

- [ ] Lighthouse audit: Performance > 90, Accessibility > 95, SEO > 95
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge, mobile)
- [ ] Responsive testing (320px to 2560px)
- [ ] WCAG 2.2 AA audit
- [ ] Content review with stakeholders
- [ ] Payment flow end-to-end testing
- [ ] Load testing (CDN cache warming)
- [ ] DNS cutover and launch

---

## Technical Considerations

### Image Optimization Strategy
- Use Astro `<Image>` component for all photos
- Generate responsive sizes: 320, 640, 960, 1280, 1920 widths
- Output formats: WebP (primary) + AVIF (with fallback)
- Blur-up placeholders for hero images
- Lazy loading for all below-fold images (`loading="lazy"`)
- Team photos: 200x200 thumbnails, 400x400 for modals
- Hero carousel: Full-width, max 1920px source images

### Performance Budget
| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Total JS (initial) | < 50KB gzipped |
| Page weight (no images) | < 100KB |
| Lighthouse Performance | > 90 |

### i18n Architecture
- **URL routing**: `/en/`, `/es/`, `/fr/` prefixes (Astro built-in)
- **Content**: Separate JSON files per locale in content collections
- **UI strings**: `i18n/{locale}.json` with `t()` helper function
- **Default locale**: English with prefix (`/en/` not `/`)
- **Redirect**: Root `/` → `/en/`
- **Language detection**: Manual switcher only (no auto-detection to avoid issues)

### Payment Architecture
```
Registration Form → Select Type → Payment Gateway
                                      │
                    ┌─────────────────┼──────────────────┐
                    │                 │                    │
              Local Ranger     International         Bank Transfer
              (Argentina)        Ranger              (SA only)
                    │                 │                    │
              Mercado Pago       PayPal API          Manual invoice
              Checkout Pro     Standard Buttons           │
                    │                 │              Admin confirms
                    ▼                 ▼                    │
              /api/webhooks/   /api/webhooks/              │
              mercadopago      paypal                      │
                    │                 │                    │
                    └─────────────────┼────────────────────┘
                                      │
                              Confirmation Page
                              + Email notification
```

### Content Collections Schema

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.number(),
    question: z.string(),
    answer: z.string(),
    category: z.enum(['registration', 'accommodation', 'general', 'payment', 'sponsorship']),
  }),
});

const team = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    organization: z.enum(['IRF', 'SIGUNARA', 'FLG', 'Plan A']),
    photo: z.string().optional(),
    order: z.number(),
  }),
});

const congressHistory = defineCollection({
  type: 'data',
  schema: z.object({
    edition: z.string(),
    year: z.number(),
    location: z.string(),
    country: z.string(),
  }),
});

const fieldTrips = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    duration: z.string(),
    price: z.number(),
    country: z.enum(['Argentina', 'Brazil']),
    image: z.string().optional(),
  }),
});

const pressReleases = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    summary: z.string(),
    link: z.string().optional(),
  }),
});

const regions = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    representativeOrg: z.string().optional(),
    backgroundImage: z.string().optional(),
    order: z.number(),
  }),
});

const sponsors = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    logo: z.string(),
    tier: z.enum(['platinum', 'gold', 'silver', 'bronze', 'funder', 'institutional', 'ranger-sponsor']),
    website: z.string().optional(),
    order: z.number(),
  }),
});

export const collections = { faq, team, congressHistory, fieldTrips, pressReleases, regions, sponsors };
```

### Countdown Timer Implementation
```typescript
// src/utils/countdown.ts
const CONGRESS_DATE = new Date('2027-04-19T09:00:00-03:00'); // Argentina time (UTC-3)

export function getTimeRemaining() {
  const now = new Date();
  const diff = CONGRESS_DATE.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
```

### SEO & Meta Strategy
```astro
<!-- BaseLayout.astro -->
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title} | 11th IRF World Ranger Congress 2027</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonicalURL} />

  <!-- Hreflang -->
  <link rel="alternate" hreflang="en" href={`${siteURL}/en${path}`} />
  <link rel="alternate" hreflang="es" href={`${siteURL}/es${path}`} />
  <link rel="alternate" hreflang="fr" href={`${siteURL}/fr${path}`} />
  <link rel="alternate" hreflang="x-default" href={`${siteURL}/en${path}`} />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={ogImage} />
  <meta property="og:url" content={canonicalURL} />

  <!-- Schema.org Event (Home page) -->
  <script type="application/ld+json" set:html={JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "11th IRF World Ranger Congress",
    "startDate": "2027-04-19",
    "endDate": "2027-04-23",
    "location": {
      "@type": "Place",
      "name": "Centro de Eventos y Convenciones del Iguazu",
      "address": { "@type": "PostalAddress", "addressLocality": "Puerto Iguazu", "addressRegion": "Misiones", "addressCountry": "AR" }
    },
    "organizer": [
      { "@type": "Organization", "name": "International Ranger Federation", "url": "https://www.internationalrangers.org" },
      { "@type": "Organization", "name": "SIGUNARA" }
    ],
    "offers": { "@type": "Offer", "price": "395", "priceCurrency": "USD" }
  })} />
</head>
```

---

## Alternative Approaches Considered

| Approach | Why Not |
|----------|---------|
| Next.js | Overkill for content-first site; ships more JS by default |
| Gatsby | Slower build times, heavier toolchain, declining ecosystem |
| WordPress | Dynamic server needed, security maintenance, slower performance |
| Plain HTML/CSS | No image optimization, no component reuse, maintenance burden |
| Hugo | Limited interactivity support, Go templates less flexible |

---

## Dependencies & Prerequisites

### Required Before Development
1. **Photo assets**: Hero images, team photos (Plan A team has specific files listed in spec), venue photos, region photos, field trip photos
2. **Logo files**: IRF copyright logo (must use copyright ©  version), SIGUNARA logo (green/blue leaf design), 11th WRC logo (already designed - circular badge with waterfall/rangers/Argentine hat)
3. **SVG illustrations**: Jungle silhouette, waterfall wave, Easter egg fauna (toucan, jaguar, butterfly, coati)
4. **Translated content**: Spanish and French translations (can be Phase 7)
5. **Payment credentials**: Mercado Pago API keys, PayPal client ID
6. **Domain name**: DNS access for final deployment
7. **Google Maps**: Embed URLs - Venue: `https://share.google/vNHWAHQQaKV6aQZBP`, Hotel: `https://maps.app.goo.gl/6RD7UotVJshHRrfr8`

### External Dependencies
- Vercel account (free tier sufficient initially)
- Google Forms (already configured for speaker submissions - EN/ES/FR links available)
- Mercado Pago merchant account
- PayPal Business account
- Formspree account (free tier: 50 submissions/month)

### Key External URLs (from spec)
| Resource | URL |
|----------|-----|
| IRF Website | https://www.internationalrangers.org |
| SIGUNARA Website | https://www.sigunara.org |
| Venue Map | https://share.google/vNHWAHQQaKV6aQZBP |
| Hotel Map | https://maps.app.goo.gl/6RD7UotVJshHRrfr8 |
| Argentine Visa Portal | https://www.migraciones.gob.ar/accesible/indexdnm.php?visas |
| Hotel Website | Av. Tres Fronteras 780, Puerto Iguazú, Misiones, Argentina |
| Speaker Form (EN) | https://forms.gle/RrtDG25QgkR74G7XA |
| Speaker Form (ES) | https://forms.gle/UqKG7UiEYSnyUbTX8 |
| Speaker Form (FR) | https://forms.gle/35CoibZnsHGJ1dfi8 |
| Contact Email | wrc@internationalrangers.org |

---

## Risk Analysis & Mitigation

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Photo assets delayed | High | Medium | Use placeholder images, progressive enhancement |
| Translations delayed | Medium | Low | Launch English first, add languages in Phase 7 |
| Mercado Pago integration complexity | Medium | High | Start integration early, have bank transfer fallback |
| 93MB+ of imagery | High | Medium | Aggressive image optimization, lazy loading, CDN |
| Content changes after build | Medium | Low | Quick rebuild/deploy cycle on Vercel (~1 min) |
| Regional cap enforcement | Medium | High | Server-side validation in payment webhook |
| TBD items (2 extra hotels, partner pricing, donation coupons) | High | Medium | Build with placeholder content, update later |
| Accommodation pricing not finalized | High | Medium | Blank/TBD placeholders, update when ready |
| Some sponsor/funding form links blank (ES/FR) | Medium | Low | Show EN form with note, update when available |

---

## Success Metrics

- Lighthouse Performance > 90 on all pages
- WCAG 2.2 AA compliance
- Page load < 3s on 3G connection
- 600 registrations processed without errors
- Zero payment processing failures
- All 3 language versions complete before congress

---

## References & Research

### Internal References
- [interview-notes.md](./interview-notes.md) - Complete content requirements from spec.pdf
- [research/best-practices.md](./research/best-practices.md) - Technology recommendations
- [research/repo-analysis.md](./research/repo-analysis.md) - Repository state analysis
- [research/framework-docs.md](./research/framework-docs.md) - Astro/Tailwind/GSAP documentation
- [research/specflow-analysis.md](./research/specflow-analysis.md) - User flows and edge cases

### External References
- Astro Documentation: https://docs.astro.build/
- Tailwind CSS: https://tailwindcss.com/docs
- GSAP: https://gsap.com/docs/
- Swiper.js: https://swiperjs.com/
- Mercado Pago Developers: https://www.mercadopago.com.ar/developers
- PayPal Developer: https://developer.paypal.com/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/

### Source Material
- spec.pdf (76 pages) - Complete website specification with content
- wireframe/home.pdf - Home page wireframe
- wireframe/About.pdf - About page wireframe
- wireframe/Congress theme.pdf - Theme page wireframe
- wireframe/Travel Plan.pdf - Contact page wireframe
- wireframe/activity.pdf - Program page wireframe
- wireframe/About scroll 4.pdf - Objectives section wireframe
