declare interface Attributes {
  title: string
  subtitle: string
  picture: string
}

declare interface Markdown {
  attributes?: Attributes
  body: string
}
