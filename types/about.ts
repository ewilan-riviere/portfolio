interface SocialItem {
  name: string
  slug: string
  color: string
  link: string
}

declare interface About {
  name: string
  professional-title: string
  title: string
  subtitle: string
  text: string
  hobbies: string[]
  resume: {
    name: string
    slug: string
    link: string
  }
  socialItems: SocialItem[]
}
