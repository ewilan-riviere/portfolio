declare interface Attributes {
  title: string
  subtitle: string
  picture: string
}

export interface Markdown {
  attributes?: Attributes
  body: string
}
