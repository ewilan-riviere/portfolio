import developersJson from '~/assets/data/developers.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  return getJson<Developer[]>(developersJson)
})
