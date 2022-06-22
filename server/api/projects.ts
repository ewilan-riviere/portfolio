import personalJson from '~/assets/data/projects/projects-personal.json'
import professionalJson from '~/assets/data/projects/projects-professional.json'
import schoolJson from '~/assets/data/projects/projects-school.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event): Project[] => {
  const personal = getJson<Project[]>(personalJson).map((obj) => ({
    ...obj,
    type: 'Personal',
    typeColor: '#9333EA',
  }))
  const professional = getJson<Project[]>(professionalJson).map((obj) => ({
    ...obj,
    type: 'Professional',
    typeColor: '#DC2626',
  }))
  const school = getJson<Project[]>(schoolJson).map((obj) => ({
    ...obj,
    type: 'School',
    typeColor: '#059669',
  }))

  let projects = [...personal, ...professional, ...school] as Project[]

  let limit = 0
  if (event.req.url) {
    const config = useRuntimeConfig()
    const url = `${config.public.baseUrl}${event.req.url}`
    const params = new URL(url).searchParams
    if (params.get('limit') !== null) {
      limit = parseInt(params.get('limit')!)
    }
  }

  projects = projects.filter((item: Project) => !item.isDraft)
  if (limit) {
    projects = projects.slice(0, limit)
  }

  return projects
})
