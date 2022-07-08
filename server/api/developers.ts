import developersJson from '~/assets/data/developers.json'
import { useUtils } from '~~/composables/useUtils'
const { getJson } = useUtils()

export default defineEventHandler(() => {
  return getJson<Developer[]>(developersJson)
})
