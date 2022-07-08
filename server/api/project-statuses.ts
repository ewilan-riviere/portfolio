import json from '~/assets/data/project-statuses.json'
import { useUtils } from '~~/composables/useUtils'
const { getJson } = useUtils()

export default defineEventHandler(() => {
  return getJson<ProjectStatus[]>(json)
})
