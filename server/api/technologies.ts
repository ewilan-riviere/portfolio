import technologiesJson from '~/assets/data/technologies.json'
import { useUtils } from '~~/composables/useUtils'
const { getJson } = useUtils()

export default defineEventHandler(() => {
  return getJson<Technology[]>(technologiesJson).filter(
    (skill) => skill.isDisplay
  )
})
