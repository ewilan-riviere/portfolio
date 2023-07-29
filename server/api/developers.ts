import { getJson } from '../api'
import type { Developer } from '~/types'
import developersJson from '~/assets/data/developers.json'

export default defineEventHandler(() => {
  return getJson<Developer[]>(developersJson)
})
