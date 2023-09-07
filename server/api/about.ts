import { getJson } from '../api'
import type { About } from '~/types'
import json from '~/assets/data/about.json'

export default defineEventHandler(() => {
  return getJson<About>(json)
})
