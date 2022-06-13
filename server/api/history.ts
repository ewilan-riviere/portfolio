import json from '~~/assets/data/history.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  return getJson<History[]>(json)
    .filter((item: History) => !item.isDraft)
    .reverse()
})
