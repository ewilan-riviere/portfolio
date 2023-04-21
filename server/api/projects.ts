import { getJson, queryBuilder } from '../api'
import personalJson from '~/assets/data/projects/projects-personal.json'
import professionalJson from '~/assets/data/projects/projects-professional.json'
import schoolJson from '~/assets/data/projects/projects-school.json'
import type { Project } from '~/types/project'

export default defineEventHandler((event): Project[] => {
  const personal = getJson<Project[]>(personalJson).map(obj => ({
    ...obj,
    contextColor: '#9333EA',
    createdAt: obj.createdAt ? new Date(obj.createdAt) : undefined,
  }))
  const professional = getJson<Project[]>(professionalJson).map(obj => ({
    ...obj,
    contextColor: '#DC2626',
    createdAt: obj.createdAt ? new Date(obj.createdAt) : undefined,
  }))
  const school = getJson<Project[]>(schoolJson).map(obj => ({
    ...obj,
    contextColor: '#059669',
    createdAt: obj.createdAt ? new Date(obj.createdAt) : undefined,
  }))

  const projects = [...personal, ...professional, ...school] as Project[]

  const config = useRuntimeConfig()
  projects.forEach((project) => {
    project.image = `${config.public.baseUrl}/projects/${project.slug}.webp`
  })

  return queryBuilder<Project>(event, projects)
})
