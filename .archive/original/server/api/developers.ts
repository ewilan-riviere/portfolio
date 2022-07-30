import { getJson } from '../api'
import developersJson from '~/assets/data/developers.json'

export default defineEventHandler(() => {
  return getJson<Developer[]>(developersJson)
})
