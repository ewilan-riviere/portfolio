declare interface About {
  name: string
  professionalTitle: string
  title: string
  subtitle: string
  text: string
  socialItems: SocialItem[]
}

interface SocialItem {
  title: string
  slug: string
  color: string
  link: string
}
