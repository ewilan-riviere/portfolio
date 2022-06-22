import json from '~/assets/data/features.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler(() => {
  return getJson<Feature[]>(json)
})
