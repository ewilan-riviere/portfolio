interface TocItem {
  children: TocItem[]
  depth: number
  id: string
  text: string
}

declare interface Guide {
  title?: string
  subtitle?: string
  excerpt?: any
  description?: string
  author: string
  picture?: string
  category?: string
  tags?: string[]
  readingTime?: {
    minutes?: number
  },
  date?: Date

  _id: string
  _path: string
  _locale: string
  _draft: boolean
  body: {
    children: any[]
    toc: {
      depth: number
      links: TocItem[]
      searchDepth: number
      title: string
    }
  }
}
