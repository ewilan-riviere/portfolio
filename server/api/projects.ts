import personalJson from "~/assets/data/projects/projects-personal.json"
import professionalJson from "~/assets/data/projects/projects-professional.json"
import schoolJson from "~/assets/data/projects/projects-school.json"
import { getJson } from "~~/utils/methods"

export default defineEventHandler((event): Project[] => {
  const personal = getJson<Project[]>(personalJson).map((obj) => ({
    ...obj,
    type: "Personal",
  }))
  const professional = getJson<Project[]>(professionalJson).map((obj) => ({
    ...obj,
    type: "Professional",
  }))
  const school = getJson<Project[]>(schoolJson).map((obj) => ({
    ...obj,
    type: "School",
  }))

  let projects = [...personal, ...professional, ...school] as Project[]

  let limit = 0
  if (event.req.url) {
    const config = useRuntimeConfig()
    const url = `${config.public.baseURL}${event.req.url}`
    const params = new URL(url).searchParams
    if (params.get("limit") !== null) {
      limit = parseInt(params.get("limit")!)
    }
  }

  projects = projects.filter((item: Project) => !item.isDraft)
  if (limit) {
    projects = projects.slice(0, limit)
  }

  return projects
})
