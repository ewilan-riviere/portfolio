declare interface About {
  name: string
  professionalTitle: string
  title: string
  subtitle: string
  text: string
  social: Social
}

interface Social {
  title: string
  slug: string
  color: string
  link: string
}
