export interface DeveloperLight {
  slug: string
  role: string
}

export interface ProjectLink {
  url: string
  type: string
  isPrivate?: boolean
  label?: string
  origin?: string
}

export interface Project {
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
  links?: ProjectLink[]
  repositories?: ProjectLink[]
  features?: string[]
}
