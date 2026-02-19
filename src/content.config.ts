import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const faq = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faq' }),
  schema: z.object({
    items: z.array(z.object({
      id: z.number(),
      question: z.string(),
      answer: z.string(),
      category: z.enum(['registration', 'accommodation', 'general', 'payment', 'sponsorship']),
      button_text: z.string().optional(),
      button_href: z.string().optional(),
    })),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/team' }),
  schema: z.object({
    members: z.array(z.object({
      name: z.string(),
      role: z.string(),
      organization: z.enum(['IRF', 'SIGUNARA', 'FLG', 'Plan A']),
      photo: z.string().optional(),
      order: z.number(),
    })),
  }),
});

const congressHistory = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/congress-history' }),
  schema: z.object({
    congresses: z.array(z.object({
      edition: z.string(),
      year: z.number(),
      location: z.string(),
      country: z.string(),
    })),
  }),
});

const fieldTrips = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/field-trips' }),
  schema: z.object({
    trips: z.array(z.object({
      name: z.string(),
      description: z.string(),
      duration: z.string(),
      price: z.number(),
      country: z.enum(['Argentina', 'Brazil']),
      image: z.string().optional(),
    })),
  }),
});

const regions = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/regions' }),
  schema: z.object({
    regions: z.array(z.object({
      name: z.string(),
      description: z.string(),
      representativeOrg: z.string().optional(),
      order: z.number(),
    })),
  }),
});

export const collections = { faq, team, congressHistory, fieldTrips, regions };
