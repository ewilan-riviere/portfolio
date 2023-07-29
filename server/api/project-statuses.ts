import type { ProjectStatus } from 'types'
import { getJson } from '../api'
import json from '~/assets/data/project-statuses.json'

export default defineEventHandler(() => {
  return getJson<ProjectStatus[]>(json)
})
