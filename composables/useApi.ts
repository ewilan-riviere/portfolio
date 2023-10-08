import type { NitroFetchRequest } from 'nitropack'
import type { About, Developer, Feature, HistoryItem, Project, ProjectStatus, Skill, Technology } from '~/types'
import { useMainStore } from '~/store/main'

interface QueryParam {
  'filter[isDraft]'?: boolean | undefined
  'filter[isOpenSource]'?: boolean | undefined
  'filter[isPackage]'?: boolean | undefined
  'filter[isFavorite]'?: boolean | undefined
  'sort'?: string | undefined
  [key: string]: string | number | boolean | undefined
}

export function useApi() {
  type ApiEndpoint = NitroFetchRequest

  const fetchData = async <T>(endpoint: ApiEndpoint, query?: QueryParam) => {
    const queryParams: URLSearchParams = new URLSearchParams()
    if (query) {
      Object.keys(query).forEach((key) => {
        queryParams.append(key, query[key] as string)
      })
    }
    const res = await $fetch.raw<T>(`${endpoint}?${queryParams.toString()}`)

    if (res.status !== 200) {
      console.error(res.statusText)
      return undefined
    }

    return res._data as T
  }

  const fetchApi = async () => {
    const mainStore = useMainStore()

    if (!mainStore.ready) {
      const [
        about,
        developers,
        features,
        workItems,
        educationItems,
        projectStatuses,
        projects,
        skills,
        technologies,
      ] = await Promise.all([
        fetchData<About>('/api/about'),
        fetchData<Developer[]>('/api/developers'),
        fetchData<Feature[]>('/api/features'),
        fetchData<HistoryItem[]>('/api/work-items', {
          'filter[isDraft]': false,
          'sort': '-dateBegin',
        }),
        fetchData<HistoryItem[]>('/api/education-items', {
          'filter[isDraft]': false,
          'sort': '-dateBegin',
        }),
        fetchData<ProjectStatus[]>('/api/project-statuses'),
        fetchData<Project[]>('/api/projects', {
          'filter[isDraft]': false,
          'sort': '-createdAt',
        }),
        fetchData<Skill[]>('/api/skills'),
        fetchData<Technology[]>('/api/technologies'),
      ])

      mainStore.setReady(true)
      mainStore.setAbout(about)
      mainStore.setDevelopers(developers)
      mainStore.setFeatures(features)
      mainStore.setWorkItems(workItems)
      mainStore.setEducationItems(educationItems)
      mainStore.setProjectStatuses(projectStatuses)
      mainStore.setProjects(projects)
      mainStore.setSkills(skills)
      mainStore.setTechnologies(technologies)
    }
  }

  return {
    fetchData,
    fetchApi,
  }
}
