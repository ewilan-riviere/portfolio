export interface Keyable {
  [key: string]: any
}

interface Query {}

export interface Route {
  name?: string
  params?: Keyable
  query?: Query
  paramsList?: Keyable
  queryList?: Keyable
}

export type LocaleList = 'en' | 'fr'
