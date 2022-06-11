import json from '~/assets/data/about.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  return getJson<About>(json)
})
