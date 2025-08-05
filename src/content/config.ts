import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    tech: z.array(z.string()).optional(),
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
