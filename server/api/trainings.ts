import json from '~/assets/data/trainings.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  return getJson<Training[]>(json)
    .filter((item: Training) => !item.isDraft)
    .reverse()
})
