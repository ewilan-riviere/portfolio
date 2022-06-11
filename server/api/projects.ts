import personalJson from '~/assets/data/projects/projects-personal.json'
import professionalJson from '~/assets/data/projects/projects-professional.json'
import schoolJson from '~/assets/data/projects/projects-school.json'
import { getJson } from '~~/utils/methods'

export default defineEventHandler((event) => {
  const personal = getJson<Project[]>(personalJson)
  const professional = getJson<Project[]>(professionalJson)
  const school = getJson<Project[]>(schoolJson)
  let projects = [...personal, ...professional, ...school]

  return projects.filter((item: Project) => !item.isDraft)
})
