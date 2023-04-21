import type { DeveloperLight } from './project'

interface Link {
  primary?: string
  github?: string
  portfolio?: string
  linkedin?: string
  gitlab?: string
  twitter?: string
  mail?: string
}
export interface Developer extends DeveloperLight {
  name: string
  avatar?: string
  links?: Link
}
