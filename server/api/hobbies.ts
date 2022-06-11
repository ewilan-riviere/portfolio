import json from '~/assets/data/hobbies.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  return getJson<Hobby[]>(json)
})
