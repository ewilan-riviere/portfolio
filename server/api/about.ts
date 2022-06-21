import json from '~/assets/data/about.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler(() => {
  return getJson<About>(json)
})
