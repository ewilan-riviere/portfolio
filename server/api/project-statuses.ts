import { getJson } from '../api'
import type { ProjectStatus } from '~/types'
import json from '~/assets/data/project-statuses.json'

export default defineEventHandler(() => {
  return getJson<ProjectStatus[]>(json)
})
