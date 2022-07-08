import json from '~/assets/data/features.json'
import { useUtils } from '~~/composables/useUtils'
const { getJson } = useUtils()

export default defineEventHandler(() => {
  return getJson<Feature[]>(json)
})
