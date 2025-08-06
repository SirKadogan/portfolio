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

const careerMilestonesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.string(),
    title: z.string(),
    company: z.string().optional(),
    description: z.string(),
    date: z.string(),
    type: z.enum(['company', 'project']),
  }),
});

export const collections = {
  projects: projectsCollection,
  'career-milestones': careerMilestonesCollection,
};
