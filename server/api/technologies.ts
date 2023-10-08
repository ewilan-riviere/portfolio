import { getJson } from '../api'
import technologiesJson from '~/assets/data/technologies.json'
import type { Technology } from '~/types'

export default defineEventHandler(() => {
  const data = getJson<Technology[]>(technologiesJson).filter(
    skill => skill.isDisplay,
  )
  data.forEach((element) => {
    element.icon = `technology/${element.slug}` as SvgName
  })

  return data
})
