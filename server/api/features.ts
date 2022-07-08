import { getJson } from '../api'
import json from '~/assets/data/features.json'

export default defineEventHandler(() => {
  return getJson<Feature[]>(json)
})
