import { getJson } from '../api'
import json from '~/assets/data/about.json'

export default defineEventHandler(() => {
  return getJson<About>(json)
})
