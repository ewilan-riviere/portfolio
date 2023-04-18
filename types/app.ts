declare interface Keyable {
  [key: string]: any
}

interface Query {}

declare interface Route {
  name?: string
  params?: Keyable
  query?: Query
  paramsList?: Keyable
  queryList?: Keyable
}

declare type LocaleList = 'en' | 'fr'

export interface TypedRoute {
  name: import('@/assets/router').TypedRouteList
  params?: import('@/assets/router/typed-router').TypedRouteParams[import('@/assets/router').TypedRouteList]
  query?: Query
}
