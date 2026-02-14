# WRC Website Spec

## Metadata
- Project: wrc-website
- Milestone: 11th IRF World Ranger Congress
- Linear Issue: N/A
- Interview Date: 2026-02-14
- Status: [x] Draft / [ ] Ready for Review / [ ] Approved

## Summary

Build the official website for the **11th IRF World Ranger Congress** (Puerto Iguazu, Misiones, Argentina, April 19-23, 2027). The site is a 10-page, content-rich, multi-language (EN/ES/FR) informational and registration portal for 600+ rangers and conservation professionals from 50+ countries across 7 global regions. It features nature-themed design with jungle silhouettes, waterfall dividers, Easter egg fauna animations (toucan, jaguar, butterfly, coati), interactive carousels, countdown timers, and dual payment integration (Mercado Pago for Argentina, PayPal for international).

**Theme:** "Recognising Rangers: Advancing the profession to safeguard our future"

**Organizers:** International Ranger Federation (IRF, est. 1992, www.internationalrangers.org) + Syndicate of National Rangers of Argentina Republic (SIGUNARA, est. 1990, www.sigunara.org)

The site will be built with Astro 5.x (static generation with interactive islands), Tailwind CSS 4.x, GSAP animations, and Swiper.js carousels. Deployed on Vercel with serverless functions for payment webhooks.

## Requirements

### Functional

#### Pages (10 total)

1. **Home** - Hero carousel (3 slides), IRF Regions (7 with world map), Welcome section with logos, Congress history table (10 past congresses 1995-2024), Congress info with Google Map, IRF President message, Organizers cards, Team carousel (20+ across IRF/SIGUNARA/FLG/Plan A), Sponsors carousel, Countdown timer, Register CTA
2. **About** (4-scroll single page) - Scroll 1: Congress introduction + download agenda. Scroll 2: 11th WRC details + countdown + styled map + Easter eggs. Scroll 3: Organizers + waterfall divider + 5 activity types + theme summary + President message. Scroll 4: Objectives carousel (4 hover-to-expand) + WRC logo section
3. **Submit** (Expression of Interest) - Speaker guidelines, session types (Plenary 15-20min / Workshop 90min), form fields, deadline (30 April 2026), notification (30 June 2026), 3 Google Form links (EN/ES/FR)
4. **FAQ** (32 items with search) - Hero with search bar + "Ask anything" button, accordion items grouped by category (Registration, Accommodation, General, Payment, Sponsorship), real-time client-side filtering
5. **Congress Theme** - Hero with theme title, full theme description, 5 thematic streams (zigzag layout with photos), 4 congress objectives, WRC topics grid (5 cards), Submit CTA
6. **Plan Travel** (3 tabs) - Tab 1 Logistics: visa info + Argentine visa portal link + 5 transport options (air via IGR/IGU, bus, car, Paraguay) + airlines (Aerolíneas Argentinas, Flybondí, JetSMART). Tab 2 Venue & Accommodation: Convention center + Hotel Amerian (5-star, 117 rooms, Av. Tres Fronteras 780) + booking calendar + 2 additional hotels TBD. Tab 3 Travel FAQs: currency (ARS), WiFi/SIM, weather (26-28°C), rainfall, humidity, packing list
7. **Program** (4 tabs) - Tab 1 Overview: 6-day program table. Tab 2 Detailed Schedule: day-by-day with times/speakers/locations. Tab 3 Activities: 5 hover cards (Plenary, Workshops, Discussions, Cultural, Field Trips). Tab 4 Field Trips: 4 in Argentina (Iguazu NP, Guira Oga $16/3h, Minas de Wanda $20/4h, Jesuitical Missions $16/full day) + 2 in Brazil (Parque Nacional Do Iguazu $16/6h, Parque Das Aves $16/6h). Download program buttons
8. **Contact Us** - Contact form (Name, Email, Message), email: wrc@internationalrangers.org, 3 card tabs, Congress team carousel, Social partners carousel, Google Map, Countdown, Register/Submit CTAs
9. **Press** - Press conference details (Tue 20 April, 12-1pm, Hotel Amerian, remote link), press kit downloads (EN/ES/FR PDFs), press releases carousel, photo gallery with download, "Who are rangers?"/"Why important?" explainers, 7 press FAQs accordion, Organizers logos + "Download logos" button, press contacts
10. **Register Now** - Registration form (English only, with Google Translate suggestion), category selection (Local Ranger/International Ranger), payment integration, capacity display, confirmation flow

#### Navigation
- Main nav: Home | About (dropdown) | Submit | FAQ | Congress Theme | Plan Travel (dropdown) | Program | Contact Us | Press | Register Now
- About dropdown: Congress Introduction, Congress Events
- Plan Travel dropdown: Logistics, Venue and Accommodation, Travel FAQs

#### Registration System
- **Opens:** 20 February 2026
- **Closes:** 31 March 2027
- **Fee:** $395 USD per person (single standard fee, no discounts)
- **Categories:** Local Ranger (Argentina) and International Ranger (all other countries)
- **Capacity:** 600 total, 75 per region cap, 150 host region (Argentina)
- **Form language:** English only (Google Translate suggestion for others)
- **Registration is individual and personal, non-transferable**
- **No group registrations allowed**
- **Spouse/partner:** Same $395 rate, takes a registration spot
- **Certificate of Participation:** Available for download post-congress
- **Cancellation policy:** 6+ months before (Oct 2026): 80% refund, 4+ months (Dec 2026): 50% refund, <2 months (Feb 2027): no refund

#### Payments
- **Argentina (Local Ranger):** Mercado Pago (ARS), bank transfer option
- **International:** PayPal (USD $395)
- **Advisory:** Avoid Amex/Mastercard (high fees), bank transfer recommended for South America
- **Webhooks:** Serverless functions for payment confirmation

#### External Form Links
- **Speaker Submission (EN):** https://forms.gle/RrtDG25QgkR74G7XA
- **Speaker Submission (ES):** https://forms.gle/UqKG7UiEYSnyUbTX8
- **Speaker Submission (FR):** https://forms.gle/35CoibZnsHGJ1dfi8
- **Expression of Interest for Delegates:** EN/ES/FR forms (tinyurl links in spec)
- **Sponsor a Ranger:** EN form available, ES/FR TBD
- **Sponsorship Documents:** EN/ES/FR (tinyurl links in spec)

#### Carousels (7+ instances)
- Hero (3 slides with text overlay), IRF Regions (7), Team (20+), Sponsors/Partners, Press Releases (4+), Objectives (4 hover-to-expand), Field Trips, Photo Gallery

#### Countdown Timer
- Animated days/hours/minutes/seconds to April 19, 2027
- Appears on: Home, About (Scroll 2), Contact Us

#### Google Maps Embeds
- Venue: Centro de Eventos y Convenciones del Iguazu
- Hotel: Hotel Amerian Portal del Iguazu
- Map links: `https://share.google/vNHWAHQQaKV6aQZBP` (venue), `https://maps.app.goo.gl/6RD7UotVJshHRrfr8` (hotel)
- Stylized (CSS filtered, no borders)

#### PDF Downloads
- Program overview, Detailed program, Agenda, Press kit (EN/ES/FR)

#### Sponsorship Tiers
- Platinum, Gold, Silver, Bronze (details in sponsorship documents)

#### i18n (Multi-language)
- **Phase 1:** English only
- **Phase 2:** Add Spanish (ES) and French (FR)
- URL prefix routing: `/en/`, `/es/`, `/fr/`
- Root `/` redirects to `/en/`
- Simultaneous translations available at congress for plenaries

### Non-Functional
- Lighthouse Performance > 90, Accessibility > 95
- LCP < 2.5s, CLS < 0.1, INP < 200ms
- WCAG 2.2 AA compliance
- Responsive: 320px to 2560px
- Browser support: Chrome/Edge 90+, Firefox 90+, Safari 15+
- `prefers-reduced-motion` support for all animations
- Total initial JS < 50KB gzipped
- Page weight (excluding images) < 100KB

## Technical Design

### Architecture
Astro 5.x static site generation (SSG) with interactive islands pattern. Only carousels, countdown, FAQ search, tab navigation, and Easter egg animations are hydrated as client-side JavaScript. All other content is pure HTML/CSS. Serverless functions on Vercel handle payment webhooks and contact form submissions.

### Data Model
Content stored as Astro Content Collections (JSON/YAML files):
- **FAQ**: 32 items with question, answer, category (per locale)
- **Team**: 20+ members with name, role, organization (IRF/SIGUNARA/FLG/Plan A), photo, order
- **Congress History**: 10 past congresses (edition, year, location, country) - 1st/1995/Poland through 10th/2024/France
- **Field Trips**: 6 trips with name, description, duration, price, country (Argentina/Brazil), image
- **Press Releases**: Title, date, summary, download links (EN/ES/FR)
- **Regions**: 7 IRF regions with name, description, representative org, background photo
- **Sponsors**: Name, logo, tier (Platinum/Gold/Silver/Bronze), website URL

### Key External URLs
| Resource | URL |
|----------|-----|
| IRF Website | https://www.internationalrangers.org |
| SIGUNARA Website | https://www.sigunara.org |
| Venue Map | https://share.google/vNHWAHQQaKV6aQZBP |
| Hotel Map | https://maps.app.goo.gl/6RD7UotVJshHRrfr8 |
| Visa Portal | https://www.migraciones.gob.ar/accesible/indexdnm.php?visas |
| Contact Email | wrc@internationalrangers.org |

### API Changes
Serverless endpoints (Vercel Functions):
- `POST /api/webhooks/mercadopago` - Payment confirmation webhook
- `POST /api/webhooks/paypal` - Payment confirmation webhook
- `POST /api/contact` - Contact form submission handler

### Footer Structure (4 columns)
1. **IRF description** - Brief about IRF
2. **World Ranger Congress** - Plan your travel, FAQs links
3. **Participate** - Submit to Forum, Register to Congress links
4. **Contact** - wrc@internationalrangers.org, social media links

## Content Inventory

### Team Members (20+ across 4 organizations)

**IRF:** Andy Davies (Secretary), Carlien Roodt (Executive Officer), Chris Galliers (President), Jolene Nelson (Oceania Rep), Mike Lynch (Treasurer), Monica Alvarez (Fed Development Officer), Olivier Soulier-Versini (Community Manager GNF), Rohit Singh (Asia Rep), Carole d'Antuoni (Presidente GNF), Tristan Calistri (Treasurer GNF), Jonathan Churcher

**SIGUNARA:** Antuel Sánchez (General Secretary), Leonardo Juber, Sofia Nazar, Federico Rodriguez Mira

**FLG:** Oscar Carvajal Mora (President), Laura Pastorino Ladereche (Vice President)

**Plan A:** Andrea Juncos (Exec Director), Ana Lacuadra (Project Manager), Malvina Solis (Local Coordinator), Martina Alvarez (Registration), Natalia Benejam (Commercial Coordinator), Renata Bollini (Coordinator Assistant), Celeste Dichico (Academic Coordinator)

### IRF Regions (7)
1. **Europe** - European Ranger Federation
2. **South America** - Amazon forest/river imagery
3. **North America** - Mountain/glacier rangers
4. **Africa** - GRAA (Game Rangers Association of Africa), est. 1970, 2500+ rangers across 20 countries
5. **Oceania** - 24 countries/territories: Polynesia, Micronesia, Melanesia, Australia, NZ
6. **Central America** - Northern Mexico, Selva Maya Corridor, Mesoamerican Reef, Caribbean Islands
7. **Asia** - Incomparable biodiversity richness

### Congress History (10 past congresses)
1st (1995, Poland) → 2nd (1997, Costa Rica) → 3rd (2000, South Africa) → 4th (2003, Australia) → 5th (2006, Scotland) → 6th (2009, Bolivia) → 7th (2012, Tanzania) → 8th (2016, USA) → 9th (2019, Nepal) → 10th (2024, France)

### 11th WRC Logo
Already designed - circular badge featuring: Iguazu Falls waterfall imagery, Atlantic forest, two ranger silhouettes with Argentine ranger hat, National Park Administration emblem shape, text "11th IRF WORLD RANGER CONGRESS · IGUAZÚ · ARGENTINA · 2027"

### Useful Phone Numbers (Travel Page)
- Emergency services, tourist information, airport transport, hospital, police, taxi services (to be populated from spec)

## Implementation Plan

### Phase 1: Foundation & Layout (Week 1-2)
- [ ] Initialize Astro 5 + Tailwind 4 + pnpm project
- [ ] Build global components: Header, Footer, Navigation, Mobile Menu, Language Switcher
- [ ] Build UI library: Button, Card, Carousel (Swiper), Accordion, Tabs, MapEmbed, HoverExpandCard
- [ ] Create section dividers (jungle silhouette SVG, waterfall wave SVG)
- [ ] Set up i18n routing and translation infrastructure
- [ ] Configure Vercel deployment
- [ ] Set up ESLint + Prettier

### Phase 2: Home & About Pages (Week 2-3)
- [ ] Home page: Hero carousel (3 slides), IRF Regions (7), Welcome (3 logos), History table (10 congresses), Congress info + map, President message, Organizers (IRF + SIGUNARA), Team carousel (20+), Sponsors, Countdown, Register CTA, Footer
- [ ] About page: 4-scroll single page with all sections
- [ ] Countdown timer component (GSAP animated)

### Phase 3: Theme, Submit, FAQ Pages (Week 3-4)
- [ ] Congress Theme: Hero, 5 thematic streams zigzag, 4 objectives, 5 topics grid, Submit CTA
- [ ] Submit: Guidelines, session types, form fields, Google Forms links (EN/ES/FR), deadline banner
- [ ] FAQ: Search bar, 32 accordion items with category filtering, "Ask anything" → contact link

### Phase 4: Travel, Program, Contact, Press (Week 4-5)
- [ ] Plan Travel: 3-tab layout (Logistics with visa/transport/airlines, Venue with Hotel Amerian + calendar, Travel FAQs with weather/currency)
- [ ] Program: 4-tab layout (Overview table, Detailed schedule, 5 Activities hover cards, 6 Field trips)
- [ ] Contact Us: Form, email, team carousel, partners carousel, map, CTAs
- [ ] Press: Conference details, press kit downloads (EN/ES/FR), releases carousel, photo gallery, 7 press FAQs, organizer logos with download, press contacts

### Phase 5: Registration & Payments (Week 5-6)
- [ ] Registration form (English only) with category selection (Local/International)
- [ ] Mercado Pago integration (Argentina, ARS)
- [ ] PayPal integration (International, USD $395)
- [ ] Bank transfer option (South America)
- [ ] Payment webhook serverless functions
- [ ] Capacity management (600 max, 75/region, 150 host)
- [ ] Payment method advisory (avoid Amex/Mastercard)
- [ ] Confirmation page/flow

### Phase 6: Easter Eggs & Animations (Week 6-7)
- [ ] Scroll-triggered fauna (toucan, jaguar, butterfly, coati)
- [ ] Cursor leaf particles (desktop)
- [ ] Section reveal animations (GSAP ScrollTrigger)
- [ ] Waterfall wave SVG animation on dividers
- [ ] Rotating panel billboard photo effect
- [ ] 404 "wandered off the trail" page
- [ ] `prefers-reduced-motion` fallbacks for all animations

### Phase 7: i18n & SEO (Week 7-8)
- [ ] Spanish and French translations for all pages
- [ ] Language switcher functionality (preserves current page)
- [ ] Hreflang tags, Schema.org Event, OG/Twitter meta
- [ ] XML sitemap (multi-language), robots.txt, canonical URLs

### Phase 8: Testing & Launch (Week 8-9)
- [ ] Lighthouse audits: Performance >90, Accessibility >95, SEO >95
- [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge, mobile)
- [ ] Responsive testing (320px to 2560px)
- [ ] WCAG 2.2 AA audit
- [ ] Payment end-to-end testing
- [ ] Content review and launch

## Test Plan
- [ ] Unit tests for: countdown timer logic, FAQ search/filter, i18n helpers, date formatting
- [ ] Integration tests for: payment webhook handlers, contact form submission, capacity tracking
- [ ] E2E tests for: registration flow, payment completion (Mercado Pago + PayPal), language switching, navigation dropdowns, tab navigation
- [ ] Visual regression: carousel rendering, responsive layouts, animation states, hover-to-expand cards
- [ ] Accessibility: axe-core automated audit + manual keyboard/screen reader testing

## Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Photo assets not ready | High | Medium | Placeholder images, progressive enhancement |
| Content translations delayed | Medium | Low | Launch English first, add ES/FR in Phase 7 |
| Mercado Pago API complexity | Medium | High | Early integration start, bank transfer fallback |
| Heavy imagery (93MB+ source) | High | Medium | WebP/AVIF optimization, lazy loading, CDN |
| TBD items in spec (2 extra hotels, partner pricing, donation coupons) | High | Medium | Placeholder content, easy to update post-build |
| Regional registration cap enforcement | Medium | High | Server-side validation in webhook |
| Accommodation pricing not finalized | High | Medium | Blank/TBD placeholders, update when ready |
| Some sponsor/funding form links blank (ES/FR) | Medium | Low | Show EN form with note, update when available |

## Open Questions (Resolved)
| Question | Answer | Decided By |
|----------|--------|------------|
| Full site translation or English only? | Phase 1 English, Phase 7 add ES/FR | Spec analysis |
| Registration system internal or external? | Internal with Mercado Pago + PayPal | Spec requirement |
| CMS for content editors? | Not for Phase 1; optional Decap CMS later | Best practices research |
| Hosting provider? | Vercel (global CDN, serverless, free tier) | Tech research |
| Registration form multilingual? | English only (Google Translate suggestion) | Spec p.39 |
| 11th WRC logo status? | Already designed (circular badge with waterfall + rangers) | Spec p.24 |
| Field trips vs Places of Interest? | Two separate sections - trips are organized congress activities, places are independent tourist info | Spec p.29 |

## Interview Notes
See: [interview-notes.md](./interview-notes.md)

## Technical Details
See: [technical-spec.md](./technical-spec.md)

## Research
See: [research/](./research/)

---

## Approval
- [ ] Pod Leader Approved
- Approved date: ___

## Next Steps
After approval, run: `/superform:work specs/wrc-website/technical-spec.md`
