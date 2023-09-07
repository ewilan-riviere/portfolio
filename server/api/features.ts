import { getJson } from '../api'
import type { Feature } from '~/types'
import json from '~/assets/data/features.json'

export default defineEventHandler(() => {
  return getJson<Feature[]>(json)
})
