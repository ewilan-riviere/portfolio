declare interface DeveloperLight {
  slug: string
  role: string
}

interface Links {
  main?: string
  android?: string
  ios?: string
  api?: string
}

interface Repository {
  url: string
  type: string
  isPrivate: boolean
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
  languages?: string[]
  context?: 'personal' | 'enterprise' | 'school'
  contextColor?: string
  type?: 'website' | 'app' | 'api' | 'library'
  createdAt?: Date
  status?: number
  developers?: DeveloperLight[]
  links?: Links
  repositories?: Repository[]
  features?: string[]
}
