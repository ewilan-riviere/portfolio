import { getJson } from '../api'
import technologiesJson from '~/assets/data/technologies.json'

export default defineEventHandler(() => {
  return getJson<Technology[]>(technologiesJson).filter(
    (skill) => skill.isDisplay
  )
})
