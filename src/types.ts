import type { CATEGORIES, TAGS } from './const'

export type Blog = {
  title: string
  tags: typeof TAGS
  category: (typeof CATEGORIES)[number]
  noindex?: boolean
}
