declare interface DeveloperLight {
  slug: string
  role: string
}

interface Links {
  url: string
  type: string
  isPrivate?: boolean
  label?: string
}

declare interface Project {
  title: string
  slug: string
  isDraft?: boolean
  isOpenSource?: boolean
  isFavorite?: boolean
  image?: string
  typeColor?: string
  technologies?: string[]
  context?: 'personal' | 'enterprise' | 'school'
  contextColor?: string
  type?: 'website' | 'app' | 'api' | 'library'
  createdAt?: Date
  status?: number
  developers?: DeveloperLight[]
  links?: Links[]
  repositories?: Links[]
  features?: string[]
}
