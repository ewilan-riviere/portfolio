import json from '~/assets/data/hobbies.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler(() => {
  return getJson<Hobby[]>(json)
})
