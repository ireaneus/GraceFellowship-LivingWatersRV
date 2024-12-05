import { defineCollection, z } from 'astro:content';

const sermons = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    speaker: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.string(),
    excerpt: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = {
  sermons,
  blog,
};