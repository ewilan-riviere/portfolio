interface Link {
  name: string
  link: string
}

declare interface HistoryItem {
  slug: string
  image?: string
  certificate?: string
  color?: string
  color_text_white?: string
  experience_type_id?: string
  dateBegin: Date
  dateEnd?: Date
  isFinished?: boolean
  isDraft?: boolean
  links?: {
    place?: Link
    school?: Link
    promo?: Link
  }
  projects?: Project[]
}
