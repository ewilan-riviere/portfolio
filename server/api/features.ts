import json from '~/assets/data/features.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  return getJson<Feature[]>(json)
})
