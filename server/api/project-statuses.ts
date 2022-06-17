import json from "~/assets/data/project-statuses.json"
import { getJson } from "~~/utils/methods"

export default defineEventHandler(() => {
  return getJson<ProjectStatus[]>(json)
})
