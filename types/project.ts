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
  image?: string
  type?: string
  typeColor?: string
  technologies?: string[]
  languages?: string[]
  createdAt?: Date
  status?: number
  developers?: DeveloperLight[]
  links?: Links
  repositories?: Repository[]
  features?: string[]
}
