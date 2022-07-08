import json from '~/assets/data/about.json'
import { useUtils } from '~~/composables/useUtils'
const { getJson } = useUtils()

export default defineEventHandler(() => {
  return getJson<About>(json)
})
