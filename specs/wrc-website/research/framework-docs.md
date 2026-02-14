# Framework Documentation Research - WRC Website

## Astro 5.x (Primary Framework)

### Why Astro
- **Content-first architecture**: Perfect for a content-heavy event website with mostly static pages
- **Islands architecture**: Only hydrate interactive components (countdown, carousels, FAQ search)
- **Zero JS by default**: Ships pure HTML/CSS; JavaScript only where explicitly opted in
- **Built-in i18n routing**: First-class support for `/en/`, `/es/`, `/fr/` URL prefixes
- **Image optimization**: Built-in `<Image />` component with WebP/AVIF, responsive srcset, lazy loading
- **SSG (Static Site Generation)**: Pre-renders all pages at build time for fastest possible loads

### Key Astro Features for This Project

#### Content Collections (for structured data)
```astro
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const faq = defineCollection({
  type: 'data',
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string(),
  }),
});

const team = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    role: z.string(),
    organization: z.string(),
    photo: z.string().optional(),
  }),
});
```

#### i18n Configuration
```js
// astro.config.mjs
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'fr'],
    routing: { prefixDefaultLocale: true },
  },
});
```

#### Image Optimization
```astro
---
import { Image } from 'astro:assets';
import heroImg from '../assets/hero.jpg';
---
<Image src={heroImg} alt="Iguazu Falls" widths={[320, 640, 960, 1280, 1920]} format="webp" />
```

#### View Transitions (page transitions)
```astro
---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <ViewTransitions />
</head>
```

### Project Structure
```
src/
├── assets/           # Images, SVGs (processed by Astro)
├── components/       # Reusable .astro components
│   ├── global/       # Header, Footer, Countdown, Nav
│   ├── home/         # Home page sections
│   ├── about/        # About page sections
│   ├── ui/           # Buttons, Cards, Carousels
│   └── easter-eggs/  # Hidden interactive elements
├── content/          # Content collections (JSON/YAML)
│   ├── faq/          # FAQ entries per language
│   ├── team/         # Team member data
│   ├── field-trips/  # Field trip data
│   └── congress-history/ # Past congress data
├── layouts/          # Page layouts (Base, Page, Section)
├── pages/
│   ├── en/           # English pages
│   ├── es/           # Spanish pages
│   └── fr/           # French pages
├── styles/           # Global CSS, Tailwind config
├── i18n/             # Translation strings (JSON)
└── utils/            # Helper functions
```

---

## Tailwind CSS 4.x (Styling)

### Configuration for WRC Design System
```css
/* src/styles/global.css */
@import "tailwindcss";

@theme {
  --color-wrc-green-50: #f0fdf4;
  --color-wrc-green-500: #22c55e;
  --color-wrc-green-700: #15803d;
  --color-wrc-green-900: #14532d;
  --color-wrc-earth-100: #fef3c7;
  --color-wrc-earth-500: #d97706;
  --color-wrc-earth-800: #92400e;
  --color-wrc-blue-500: #3b82f6;
  --color-wrc-blue-900: #1e3a5f;

  --font-heading: 'Montserrat', sans-serif;
  --font-body: 'Open Sans', sans-serif;

  --breakpoint-xs: 475px;
}
```

### Responsive Design Breakpoints
- `xs`: 475px (large phones)
- `sm`: 640px (small tablets)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large screens)

---

## GSAP (GreenSock Animation Platform)

### Use Cases in WRC Website
1. **Easter egg animations**: Fauna peeking from edges on scroll
2. **Scroll-triggered reveals**: Section fade-ins, parallax effects
3. **Countdown timer**: Animated digit transitions
4. **Waterfall wave dividers**: Animated SVG paths
5. **Hover card expansions**: Smooth expand/collapse transitions

### Integration with Astro (client-side island)
```astro
<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  // Easter egg: toucan peek on scroll
  gsap.fromTo('.easter-egg-toucan',
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1, scrollTrigger: { trigger: '.about-section', start: 'top center' }}
  );
</script>
```

### `prefers-reduced-motion` Support
```js
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReducedMotion) {
  // Run animations
}
```

---

## Swiper.js (Carousels/Sliders)

### Use Cases
- Home hero carousel (3 slides)
- IRF regions carousel (7 items)
- Team members carousel (20+ people)
- Partners/sponsors logo carousel
- Press releases carousel
- Field trips carousel
- Objectives hover-to-expand carousel

### Configuration Pattern
```js
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

const heroSwiper = new Swiper('.hero-carousel', {
  modules: [Navigation, Pagination, Autoplay, EffectFade],
  effect: 'fade',
  autoplay: { delay: 5000 },
  pagination: { clickable: true },
  navigation: true,
  loop: true,
  a11y: { enabled: true },
});
```

---

## Google Maps Embed API

### Stylized Embed (no borders, custom style)
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!...!5e0!3m2!1sen!2sar"
  width="100%"
  height="400"
  style="border:0; filter: saturate(0.8) contrast(1.1);"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Centro de Eventos y Convenciones del Iguazu">
</iframe>
```

---

## Payment Integration

### Mercado Pago (Argentina - ARS)
- Use Mercado Pago Checkout Pro or Checkout Bricks
- Client-side SDK: `@mercadopago/sdk-js`
- Serverless webhook for payment confirmation (Vercel/Netlify function)

### PayPal (International - USD)
- PayPal JS SDK: `@paypal/paypal-js`
- Standard Buttons integration
- Serverless webhook for IPN/webhooks

### Implementation Note
Both payment integrations require serverless functions (Astro API routes or Vercel/Netlify functions) for webhook processing. The main site remains static; only payment callbacks need server-side handling.

---

## Form Handling

### Options
1. **Google Forms embeds** (current spec approach) - Simplest, already have form links for EN/ES/FR
2. **Formspree** - Better UX, custom styling, free tier (50 submissions/month)
3. **Astro API routes** - Full control, requires serverless runtime

### Recommendation
Use Google Forms for speaker submissions (already configured), custom Astro form + Formspree for Contact Us page.

---

## Hosting & Deployment

### Vercel (Recommended)
- Free tier: 100GB bandwidth, serverless functions
- Global CDN with South America edge nodes
- Automatic preview deployments per PR
- Native Astro adapter: `@astrojs/vercel`

### Build Configuration
```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // SSG with serverless for API routes
  adapter: vercel(),
  integrations: [tailwind()],
});
```

---

## Accessibility (WCAG 2.2 AA)

### Key Astro Patterns
- Use semantic HTML in `.astro` components (`<nav>`, `<main>`, `<article>`, `<section>`)
- `lang` attribute per page matching locale
- Skip navigation link
- Focus management for carousels and modals
- `aria-live` regions for countdown timer updates
- `alt` text on all `<Image>` components
- Keyboard navigation for all interactive elements (tab, enter, escape)
