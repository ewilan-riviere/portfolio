declare interface Training {
  title: string
  slug: string
  abstract?: string
  image?: string
  certificate?: string
  color?: string
  color_text_white?: string
  experience_type_id?: string
  level?: string
  dateBegin?: Date
  dateEnd?: Date
  isFinished?: boolean
  isDraft?: boolean
  links?: {
    place?: Link
    vocational?: Link
    promo?: Link
  }
}

interface Link {
  name: string
  link: string
}
