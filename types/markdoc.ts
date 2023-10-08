export interface MarkdocFileFrontMatter {
  title?: string
  description?: string
  category?: string
  tags?: string[]
  publishedAt?: Date
  updatedAt?: Date
  _draft?: boolean
  legend?: string
  origin?: string
}

export interface MarkdocFile {
  path: string
  slug: string
  url?: string
  frontmatter: MarkdocFileFrontMatter
  content?: string
}
