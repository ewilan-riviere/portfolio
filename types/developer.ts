interface Link {
  primary?: string
  github?: string
  portfolio?: string
  linkedin?: string
  gitlab?: string
  twitter?: string
  mail?: string
}
declare interface Developer extends DeveloperLight {
  name: string
  avatar?: string
  links?: Link
}
