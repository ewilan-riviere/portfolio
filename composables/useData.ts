import personalJson from '~/assets/data/projects/projects-personal.json'
import professionalJson from '~/assets/data/projects/projects-professional.json'
import schoolJson from '~/assets/data/projects/projects-school.json'

export const useData = () => {
  const getJson = <T>(json: object): T => {
    const data: T = JSON.parse(JSON.stringify(json))

    return data
  }

  const shuffle = <T>(a: any[]): T[] => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  const projects = computed(() => {
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

    let projects = [...personal, ...professional, ...school] as Project[]

    // let limit = 0
    // if (event.req.url) {
    //   const config = useRuntimeConfig()
    //   const url = `${config.public.baseUrl}${event.req.url}`
    //   const params = new URL(url).searchParams
    //   if (params.get('limit') !== null)
    //     limit = parseInt(params.get('limit')!)
    // }

    projects = projects.filter((item: Project) => !item.isDraft)
    // if (limit)
    //   projects = projects.slice(0, limit)

    return projects
  })

  return {
    shuffle,
    projects: projects.value,
  }
}
