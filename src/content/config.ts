import { z, defineCollection } from 'astro:content'
import { CATEGORIES, TAGS } from '../const'

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.enum(TAGS)),
    category: z.enum(CATEGORIES),
    noindex: z.boolean().optional(),
  }),
})

export const collection = {
  blog: blogCollection,
}
