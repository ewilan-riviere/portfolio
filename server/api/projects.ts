import { getJson, queryBuilder } from '../api'
import personalJson from '~/assets/data/projects/projects-personal.json'
import professionalJson from '~/assets/data/projects/projects-professional.json'
import schoolJson from '~/assets/data/projects/projects-school.json'

export default defineEventHandler((event): Project[] => {
  const personal = getJson<Project[]>(personalJson).map(obj => ({
    ...obj,
    type: 'Personal',
    typeColor: '#9333EA',
  }))
  const professional = getJson<Project[]>(professionalJson).map(obj => ({
    ...obj,
    type: 'Professional',
    typeColor: '#DC2626',
  }))
  const school = getJson<Project[]>(schoolJson).map(obj => ({
    ...obj,
    type: 'School',
    typeColor: '#059669',
  }))

  const projects = [...personal, ...professional, ...school] as Project[]

  const config = useRuntimeConfig()
  projects.forEach((project) => {
    project.image = `${config.public.baseUrl}/projects/banner/${project.slug}.webp`
  })

  return queryBuilder<Project>(event, projects)
})
