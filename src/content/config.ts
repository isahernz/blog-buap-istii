import { defineCollection, z } from "astro:content";

const news = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    image: z.string(),
    gallery: z.array(z.string()),
    date: z.string().date(),
    category: z.string(),
  })
});

export const collections = { news };