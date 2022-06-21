import developersJson from '~/assets/data/developers.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler(() => {
  return getJson<Developer[]>(developersJson)
})
