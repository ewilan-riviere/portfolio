interface Link {
  name: string
  link: string
}

export interface HistoryItem {
  slug: string
  image?: string
  certificate?: string
  color?: string
  colorReversed?: string
  icon: import('~~/.nuxt/svg-transformer').IconType
  experienceType?: string
  dateBegin: Date
  dateEnd?: Date
  isFinished?: boolean
  isDraft?: boolean
  url: string
  links?: {
    place?: Link
    school?: Link
    promo?: Link
  }
  projects?: Project[]
}
