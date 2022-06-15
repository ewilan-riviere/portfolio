import technologiesJson from "~/assets/data/technologies.json"
import { getJson } from "~~/utils/methods"

export default defineEventHandler(() => {
  return getJson<Technology[]>(technologiesJson).filter(
    (skill) => skill.isDisplay
  )
})
