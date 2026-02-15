# Image Prompts

---

# Home Page Images

## HOME #1 — Hero Background Top-Left (Waterfall & Foliage Cutout)

**Component:** `src/components/home/HeroCarousel.astro` (top-left decorative background)
**File path:** `/public/images/decorative/hero-bg-1.png`
**Displayed at:** ~45% width, ~60% height of the hero section, anchored top-left
**Recommended size:** 800 x 600 px
**Format:** PNG-24 with fully transparent background
**Max file size:** 300KB

**Prompt for generation:**
> A dramatic cutout illustration of the Iguazu Falls viewed from an elevated angle, with lush subtropical foliage framing the left and top edges. Massive cascading waterfalls pour over basalt cliffs, white mist rising from the gorge below. Dense tropical canopy with palm trees, ferns, and bromeliads fill the foreground. The image fades organically into transparency on the right and bottom edges — no hard borders, the shapes dissolve naturally like torn paper or watercolor bleeding into nothing. Earthy greens, deep emerald tones, and muted blues. Painterly style with soft detail, suitable as a subtle background decoration at 30% opacity. No text, no people, no animals. 800x600 pixels, PNG with transparent background.

**How to replace:**
In `HeroCarousel.astro`, find the placeholder div labeled "1" and replace with:
```html
<img src="/images/decorative/hero-bg-1.png" alt="" class="w-full h-full object-cover" />
```

---

## HOME #2 — Hero Background Bottom-Right (Terrain & River Cutout)

**Component:** `src/components/home/HeroCarousel.astro` (bottom-right decorative background)
**File path:** `/public/images/decorative/hero-bg-2.png`
**Displayed at:** ~40% width, ~50% height of the hero section, anchored bottom-right
**Recommended size:** 800 x 600 px
**Format:** PNG-24 with fully transparent background
**Max file size:** 300KB

**Prompt for generation:**
> An aerial-perspective cutout illustration of the Parana River winding through the Argentine/Brazilian subtropical forest near Iguazu. Red-earth riverbanks contrast with deep green jungle canopy. The terrain shows gentle rolling hills and the distinctive red Misiones soil. The image fades organically into transparency on the left and top edges — no hard borders, shapes dissolve naturally with irregular organic edges like a watercolor wash. Warm earth tones (terracotta, ochre) mixed with deep forest greens. Painterly style with soft detail, suitable as a subtle background decoration at 30% opacity. No text, no people, no animals. 800x600 pixels, PNG with transparent background.

**How to replace:**
In `HeroCarousel.astro`, find the placeholder div labeled "2" and replace with:
```html
<img src="/images/decorative/hero-bg-2.png" alt="" class="w-full h-full object-cover" />
```

---

## HOME #3 — Welcome Section Background (Iguazu Terrain Cutout, Full Width)

**Component:** `src/components/home/WelcomeSection.astro` (full-section decorative background)
**File path:** `/public/images/decorative/iguazu-terrain-cutout.png`
**Displayed at:** Full width and height of the Welcome section, at 8% opacity
**Recommended size:** 1600 x 800 px (2:1 ratio)
**Format:** PNG-24 with fully transparent background
**Max file size:** 400KB

**Prompt for generation:**
> A wide panoramic cutout illustration of the Iguazu Falls and surrounding subtropical landscape, spanning the full width as a horizontal composition. On the left, a dramatic cliff face with waterfalls cascading down into a misty gorge. The scene flows rightward into dense tropical rainforest canopy — towering araucaria pines, palm trees, giant ferns, and orchids. A gentle river meanders through the middle ground. On the far right, rolling green hills fade into the distance. The top edge has an organic, irregular silhouette — jagged cliff tops, treetop outlines, and waterfall mist creating a natural uneven border. The bottom portion is solid (filled). The entire image uses muted forest greens, emerald, sage, and subtle blue-grey for the water/mist. Painterly watercolor style, soft and atmospheric. Designed to be displayed at 8% opacity as a background texture. No text, no people, no animals. 1600x800 pixels, PNG with transparent background.

**How to replace:**
In `WelcomeSection.astro`, find the gradient placeholder div and replace with:
```html
<img src="/images/decorative/iguazu-terrain-cutout.png" alt="" class="w-full h-full object-cover" />
```

---

## HOME #4, #5, #6 — Hero Carousel Slides (x3)

**Component:** `src/components/home/HeroCarousel.astro` (carousel slide backgrounds)
**File paths:**
- `/public/images/slides/slide-1.jpg`
- `/public/images/slides/slide-2.jpg`
- `/public/images/slides/slide-3.jpg`

**Displayed at:** 55% container width on desktop (coverflow carousel), height 400-440px
**Recommended size:** 800 x 500 px (16:10 ratio)
**Format:** JPEG, quality 85
**Max file size:** 200KB each

### Slide 1 — Rangers in Action
**Prompt for generation:**
> A group of park rangers in olive/khaki uniforms patrolling through dense subtropical Iguazu rainforest. Sunlight filters through the towering tree canopy, casting dappled golden light on the trail. The rangers carry field equipment — binoculars, radio handsets, field notebooks. The mood is purposeful and professional. Lush green vegetation — ferns, vines, bamboo, bromeliads — surrounds them on both sides. Warm natural lighting, cinematic composition, professional photography style with rich saturated colors. Horizontal landscape format, 800x500 pixels. No watermarks, no text overlays.

### Slide 2 — Iguazu Falls Panorama
**Prompt for generation:**
> A breathtaking wide-angle view of Iguazu Falls from the Argentine side, showing the Devil's Throat (Garganta del Diablo) with massive water curtains crashing down into the gorge below. Rainbow mist rises dramatically from the base of the falls. Metal walkways and viewing platforms are visible in the mid-distance, giving a sense of scale. Lush green subtropical jungle frames both sides of the composition. Bright daylight, vivid colors, deep blue sky with white clouds. Professional travel photography style with dramatic depth. Horizontal landscape format, 800x500 pixels. No watermarks, no text overlays.

### Slide 3 — Wildlife & Conservation
**Prompt for generation:**
> A vibrant toco toucan (Ramphastos toco) perched on a mossy branch in the Iguazu National Park subtropical forest. Its iconic oversized orange-yellow bill and black plumage are sharply in focus. The blurred background shows misty waterfall spray and dense green canopy with soft bokeh. Additional subtle wildlife hints — a morpho butterfly in flight, a coati resting on a distant branch. Nature documentary photography style, shallow depth of field, rich saturated colors, warm natural lighting. Horizontal landscape format, 800x500 pixels. No watermarks, no text overlays.

**How to replace:**
In `HeroCarousel.astro`, update the slide data to include image paths and replace the gradient placeholder divs with `<img>` tags inside each slide.

**Note:** These 3 images are duplicated to 6 slides in the carousel code for smooth infinite looping with Swiper coverflow effect. Each slide has a dark bottom gradient overlay for text readability.

---

## HOME #8 — Iguazu Falls Background (IguazuWelcome Section Left Side)

**Component:** `src/components/home/IguazuWelcome.astro` (left side background behind text)
**File path:** `/public/images/home/8-iguazu-falls.jpg`
**Displayed at:** 50% container width (~640px), min-height 480px, with dark gradient overlay and white text on top
**Recommended size:** 1200 x 1600 px (3:4 portrait ratio)
**Format:** JPEG, quality 85
**Max file size:** 400KB

**Prompt for generation:**
> A dramatic portrait-oriented photograph of Iguazu Falls from the Argentine side, shot from a slightly elevated angle looking down at the falls. Massive white water curtains crash over dark basalt cliffs into a gorge below. Thick mist and spray rise from the base. Dense subtropical rainforest canopy frames both sides. The image should be rich in detail and have enough dark/moody areas (especially in the lower two-thirds) to support white text overlay — avoid overly bright or blown-out areas in the bottom half. Deep, saturated colors: emerald greens, deep blues, white water. Slightly dramatic/cinematic lighting with golden hour warmth. The falls should fill most of the frame for maximum visual impact. Professional landscape photography style. Portrait format, 1200x1600 pixels. No text, no watermarks, no people. This image will have a dark gradient overlay (from-black/80 at bottom to black/20 at top) with white text placed in the lower portion.

**How to replace:**
In `IguazuWelcome.astro`, find the `data-placeholder="8"` div and replace the inner SVG container with:
```html
<img src="/images/home/8-iguazu-falls.jpg" alt="Iguazu Falls" class="w-full h-full object-cover" />
```

---

## HOME #9 — Animated Illustrated Map (IguazuWelcome Section Right Side)

**Component:** `src/components/home/IguazuWelcome.astro` (right side, full height)
**File path:** `/public/images/home/9-iguazu-map.png`
**Displayed at:** 50% container width (~640px), min-height 480px
**Recommended size:** 800 x 1000 px (4:5 portrait ratio)
**Format:** PNG or JPG
**Max file size:** 350KB

**Prompt for generation:**
> A beautifully illustrated animated-style map of the Iguazu / Triple Frontier region where Argentina, Brazil, and Paraguay meet. The map should show: the three countries in distinct soft colors (Argentina in soft green, Brazil in soft blue, Paraguay in soft yellow/cream), the Parana River flowing along the Argentina-Paraguay border, the Iguazu River flowing along the Argentina-Brazil border, and the confluence point (Triple Frontier). Mark Iguazu Falls with a prominent red pin/marker. Mark Puerto Iguazu city with a green pin. Show the Iguazu National Park area with a subtle dashed border. Include small illustrated trees/forest canopy along the rivers to suggest the Atlantic Forest. Add a compass rose and scale bar. The style should be hand-drawn / illustrated map aesthetic — like a travel guidebook illustration or National Geographic-style illustrated map. Warm, inviting colors. Soft watercolor textures. Country labels in elegant typography. Portrait format, 800x1000 pixels. No real satellite imagery — purely illustrated/artistic style.

**How to replace:**
In `IguazuWelcome.astro`, find the `data-placeholder="9"` div and replace the inner SVG with:
```html
<img src="/images/home/9-iguazu-map.png" alt="Illustrated map of the Iguazu Triple Frontier region" class="w-full h-full object-cover" />
```

---

## Home Page File Summary

| # | Filename | Type | Size | Location |
|---|----------|------|------|----------|
| HOME #1 | `hero-bg-1.png` | Cutout (transparent) | 800 x 600 px | `/public/images/decorative/` |
| HOME #2 | `hero-bg-2.png` | Cutout (transparent) | 800 x 600 px | `/public/images/decorative/` |
| HOME #3 | `iguazu-terrain-cutout.png` | Cutout (transparent) | 1600 x 800 px | `/public/images/decorative/` |
| HOME #4 | `slide-1.jpg` | Carousel slide | 800 x 500 px | `/public/images/slides/` |
| HOME #5 | `slide-2.jpg` | Carousel slide | 800 x 500 px | `/public/images/slides/` |
| HOME #6 | `slide-3.jpg` | Carousel slide | 800 x 500 px | `/public/images/slides/` |
| HOME #8 | `8-iguazu-falls.jpg` | Background (behind text) | 1200 x 1600 px | `/public/images/home/` |
| HOME #9 | `9-iguazu-map.png` | Illustrated map | 800 x 1000 px | `/public/images/home/` |

---
---

# About the Congress Page Images

Replace the numbered placeholder divs in the components with actual images.
Each placeholder is labeled with `IMAGE #N` and has a `data-placeholder="N"` attribute.

---

## IMAGE #1 — Rangers Walking in Jungle (Hero Background)

**Component:** `src/components/about/CongressIntro.astro` (hero section background)
**Displayed at:** Full viewport width and height (100vw x 100vh)
**Recommended size:** 1920 x 1080 px (16:9, landscape)
**Format:** JPG (optimized for web, ~200-400KB)

**Prompt for generation:**
> A group of 4-5 park rangers walking along a trail through dense tropical jungle. The rangers are wearing khaki/olive green uniforms and ranger hats, walking in a line through lush Atlantic Forest vegetation. Sunlight filters through the tall tree canopy creating dappled light on the trail. Ferns, vines, and tropical plants line both sides of the path. The mood is purposeful and inspiring. Shot from behind/side angle. Cinematic, warm natural lighting. Photorealistic, high resolution, 1920x1080 pixels. No text or logos.

**How to replace:**
In `CongressIntro.astro`, find the `data-placeholder="1"` div and replace the inner SVG with:
```html
<img src="/images/about/1-rangers-jungle.jpg" alt="Rangers walking through Atlantic Forest" class="w-full h-full object-cover" />
```

---

## IMAGE #3 — Jaguar Photo Cutout (Next to Countdown)

**Component:** `src/components/about/WRCDetails.astro` (right side of countdown timer)
**Displayed at:** 280 x 270 px (mobile), 360 x 340 px (desktop)
**Recommended size:** 720 x 680 px (2x retina, landscape-ish)
**Format:** PNG with transparent background (cutout style)

**Prompt for generation:**
> A majestic jaguar (Panthera onca) in a wide landscape-oriented portrait, facing slightly left, with intense golden-amber eyes. The jaguar's distinctive rosette-patterned coat is clearly visible. The animal is alert and powerful, shown from chest up with shoulders visible, filling the wide frame. Background is completely transparent (PNG cutout). Natural lighting, photorealistic, high detail on fur texture and markings. South American jaguar species, muscular build. Image dimensions 720x680 pixels.

**How to replace:**
In `WRCDetails.astro`, find the `data-placeholder="3"` div and replace the inner SVG with:
```html
<img src="/images/about/3-jaguar-cutout.png" alt="Jaguar" class="w-full h-full object-cover" />
```

---

## IMAGE #4 — Congress Theme Image (60% Left Side)

**Component:** `src/components/about/CongressTheme.astro` (left panel of 60/40 split)
**Displayed at:** 60% of container width (~770px), min-height 400-480px
**Recommended size:** 1200 x 800 px (3:2, landscape)
**Format:** JPG

**Prompt for generation:**
> A powerful photograph showing a diverse group of international park rangers from different countries and backgrounds standing together in front of a dramatic natural landscape (mountains, forest, or waterfall). They are in various national ranger uniforms — some in khaki, some in green, representing different regions (Africa, Asia, Latin America, Europe, North America). The rangers look united and proud. One ranger might be pointing toward the horizon. The scene conveys international cooperation and the importance of conservation. Warm, hopeful lighting. Photorealistic, high resolution, 1200x800 pixels. Diverse representation in gender, ethnicity, and age.

**How to replace:**
In `CongressTheme.astro`, find the `data-placeholder="4"` div and replace the inner SVG with:
```html
<img src="/images/about/4-congress-theme.jpg" alt="International rangers united for conservation" class="w-full h-full object-cover" />
```

---

## IMAGE #5 — IRF President Photo (Circular Cutout)

**Component:** `src/components/about/AboutPresidentMessage.astro` (right side circular photo)
**Displayed at:** 176 x 176 px (mobile), up to 240 x 240 px (desktop), clipped to circle
**Recommended size:** 600 x 600 px (1:1, square)
**Format:** JPG or PNG

**Prompt for generation:**
> This should be an actual photograph of Chris Galliers, the current IRF President. A professional headshot/portrait of a distinguished conservation leader, wearing smart ranger attire or business casual. Warm, natural background (slightly blurred outdoors setting). The subject is looking at the camera with a friendly, confident expression. Well-lit, professional quality portrait photography. Square crop, 600x600 pixels.

**Note:** This should ideally be an actual photo of the IRF President, not AI-generated. Contact IRF for an official portrait.

**How to replace:**
In `AboutPresidentMessage.astro`, find the `data-placeholder="5"` div and replace the inner SVG with:
```html
<img src="/images/about/5-president-photo.jpg" alt="Chris Galliers, IRF President" class="w-full h-full object-cover" />
```

---

## IMAGE #6 — Waterfall Sketch Background (Activities Section)

**Component:** `src/components/about/ActivitiesSection.astro` (full-section background, behind all content)
**Displayed at:** Full section width and height (100% x 100%, typically ~1440 x 800-1200px)
**Recommended size:** 1920 x 1200 px (16:10, landscape)
**Format:** PNG with transparency preferred, or JPG

**Prompt for generation:**
> A delicate pencil and watercolor sketch of a tropical waterfall scene covering the entire image. Multiple cascading waterfalls flow from rocky cliffs with water streams spreading across the full width. Include subtle mist, spray effects, and gentle water ripples throughout. The style should be a light hand-drawn sketch with soft blue and grey tones — like a field journal illustration. Very minimal detail, airy and transparent. No heavy colors — this will be used as a subtle full-page background element at 8-15% opacity behind text content, so keep it light and even across the entire canvas. Landscape format, 1920x1200 pixels. Watercolor wash effect with visible pencil linework. Nature journal aesthetic. Ensure the illustration covers edge to edge with no blank areas.

**How to replace:**
In `ActivitiesSection.astro`, find the `data-placeholder="6"` div and replace the inner SVG with:
```html
<img src="/images/about/6-waterfall-sketch.png" alt="" class="w-full h-full object-cover opacity-15" />
```

---

## IMAGE #7 — Objectives Section Background (Bottom-Right Corner Sketch)

**Component:** `src/components/about/ObjectivesSection.astro` (bottom-right corner decorative background)
**Displayed at:** Bottom-right corner, 500-800px wide on desktop, at 6% opacity
**Recommended size:** 800 x 900 px (portrait)
**Format:** PNG with transparent background

**Prompt for generation:**
> A delicate pencil and watercolor sketch illustration positioned in the bottom-right corner of the canvas. The scene features Iguazu Falls cascading from rocky cliffs on the left side, with multiple water streams flowing downward into misty spray at the base. Tropical flora surrounds the waterfall — large monstera leaves, fern fronds, and hanging vines cluster at the bottom-right. A toco toucan perches on a branch in the upper portion. A morpho butterfly floats in the mid-area. Small orchid flowers are scattered subtly. The top-left area of the image should be mostly transparent/empty, with the illustration concentrated toward the bottom-right. Style: light hand-drawn pencil sketch with soft green and blue watercolor washes. Nature journal / field guide aesthetic. Transparent background (PNG). The illustration should be detailed enough to be visible at 6% opacity as a background decoration. 800x900 pixels.

**How to replace:**
In `ObjectivesSection.astro`, replace the inline SVG inside the background div with:
```html
<img src="/images/about/7-objectives-sketch.png" alt="" class="absolute bottom-0 right-0 w-[500px] md:w-[650px] lg:w-[800px] opacity-[0.06]" />
```

---

## File Naming Convention

Place all images in: `/public/images/about/`

| # | Filename | Type | Recommended Size |
|---|----------|------|-----------------|
| 1 | `1-rangers-jungle.jpg` | Hero background | 1920 x 1080 px |
| 3 | `3-jaguar-cutout.png` | Cutout (transparent BG) | 720 x 680 px |
| 4 | `4-congress-theme.jpg` | Feature image | 1200 x 800 px |
| 5 | `5-president-photo.jpg` | Portrait (square) | 600 x 600 px |
| 6 | `6-waterfall-sketch.png` | Full-section background | 1920 x 1200 px |
| 7 | `7-objectives-sketch.png` | Corner decoration (transparent BG) | 800 x 900 px |

---

## Notes

- All placeholder positions are marked with visible labels (e.g., "IMAGE #1 — Rangers in Jungle") that will be hidden once real images are added
- The CSS gradient backgrounds serve as fallbacks in case images don't load
- IMAGE #3 benefits from a transparent PNG background for the cutout effect
- IMAGE #6 is displayed at low opacity (8-15%) so the sketch should be detailed enough to be visible but not so dark that it overwhelms the text content above it
- Optimize all images for web before adding (compress JPGs to ~80% quality, use tools like TinyPNG)
- IMAGE #2 (Iguazu Falls cutout) was removed from the design
