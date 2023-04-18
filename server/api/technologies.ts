import { getJson } from '../api'
import type { IconType } from '~~/.nuxt/svg-transformer'
import technologiesJson from '~/assets/data/technologies.json'
import type { Technology } from '~/types/technology'

export default defineEventHandler(() => {
  const data = getJson<Technology[]>(technologiesJson).filter(
    skill => skill.isDisplay,
  )
  data.forEach((element) => {
    element.icon = `technology/${element.slug}` as IconType
  })

  return data
})
