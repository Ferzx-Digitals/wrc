# Best Practices Research - WRC Website

## Recommended Technology Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Astro 5.x | Content-first, fast, excellent image handling, islands architecture |
| Interactive Islands | Vanilla JS or Svelte | Minimal bundle for countdown, FAQ search, carousels |
| Styling | Tailwind CSS 4.x | Utility-first, responsive design built-in |
| Animations | GSAP (GreenSock) | Industry standard for Easter egg animations |
| Maps | Google Maps Embed API | Simple venue/location display |
| Carousel | Swiper.js or Embla Carousel | Battle-tested slider libraries |
| i18n | Astro built-in i18n + i18next | Content in Markdown per locale |
| Forms | Formspree or custom endpoint | No backend needed for contact forms |
| Payments | Mercado Pago SDK + PayPal JS SDK | Client-side SDKs with serverless webhooks |
| Hosting | Vercel or Netlify | Global CDN, serverless functions, free tier |
| CMS | Decap CMS (optional) | Git-based, non-technical editors |

## Why Astro over Next.js/Gatsby

- **Zero JS by default** - ships only HTML/CSS, hydrates interactive islands only
- **Built-in image optimization** - WebP/AVIF generation, lazy loading, responsive sizes
- **First-class i18n routing** - `/en/`, `/es/`, `/fr/` out of the box
- **SSG** - pre-rendered at build time for fast page loads
- **Framework-agnostic** - use React, Svelte, or vanilla JS per component

## Performance Optimization (Critical for image-heavy site)

1. **Image formats**: WebP + AVIF (25-50% smaller than JPEG)
2. **Lazy loading**: `loading="lazy"` for below-fold images
3. **Responsive images**: Generate 320/640/960/1280/1920 widths with `srcset`
4. **Blur-up placeholders**: Tiny blurred previews while loading
5. **CDN**: Global edge locations (South America, North America, Europe, Africa)
6. **Core Web Vitals targets**: LCP <2.5s, CLS <0.1, INP <200ms

## SEO for International Events

- **Hreflang tags** for EN/ES/FR variants
- **Schema.org Event markup** (name, dates, location, pricing)
- **Open Graph + Twitter Cards** for social sharing
- **URL structure**: Locale prefixes (`/en/`, `/es/`, `/fr/`)
- **Multi-language XML sitemap**

## Accessibility (WCAG 2.2 AA)

- 4.5:1 color contrast ratio
- Descriptive alt text on all images
- Keyboard navigation for all interactive elements
- `prefers-reduced-motion` for animations
- Language-specific `lang` attribute per page

## Easter Egg Ideas

- Scroll-triggered fauna peeking from edges (toucan, coati, jaguar, butterfly)
- Konami code or click-count triggers
- Time-of-day theming (firefly effect at night)
- 404 page: "You've wandered off the trail"
- Subtle leaf particles following cursor on desktop

## Implementation Priority

1. **Phase 1 (Now)**: Home, About, Venue/Travel, Contact, FAQ
2. **Phase 2 (6-8 months before)**: Registration + payments, Program
3. **Phase 3 (3-4 months before)**: Speaker profiles, detailed schedule
4. **Phase 4 (Ongoing)**: News, sponsors, refinements
