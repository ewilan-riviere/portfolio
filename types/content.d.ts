import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

declare interface Guide extends MarkdownParsedContent {
  title?: string
  description?: string
  author: string
  picture?: string
  category?: string
  tags?: string[]
}
