import type { NitroFetchRequest } from 'nitropack'
import { useMainStore } from '~~/store/main'

export const useApi = () => {
  type ApiEndpoint = NitroFetchRequest

  const fetchData = async <T>(endpoint: ApiEndpoint) => {
    return await $fetch.raw<T>(endpoint).then((e) => {
      if (e.status === 200)
        return e._data
    }).catch((e) => {
      console.error(e)
      return undefined
    })
  }

  const fetchApi = async () => {
    const mainStore = useMainStore()

    if (!mainStore.ready) {
      const [
        about,
        developers,
        features,
        historyItems,
        projectStatuses,
        projects,
        skills,
        technologies,
      ] = await Promise.all([
        fetchData<About>('/api/about'),
        fetchData<Developer[]>('/api/developers'),
        fetchData<Feature[]>('/api/features'),
        fetchData<HistoryItem[]>('/api/history-items'),
        fetchData<ProjectStatus[]>('/api/project-statuses'),
        fetchData<Project[]>('/api/projects'),
        fetchData<Skill[]>('/api/skills'),
        fetchData<Technology[]>('/api/technologies'),
      ])

      mainStore.setReady(true)
      mainStore.setAbout(about)
      mainStore.setDevelopers(developers)
      mainStore.setFeatures(features)
      mainStore.setHistoryItems(historyItems)
      mainStore.setProjectStatuses(projectStatuses)
      mainStore.setProjects(projects)
      mainStore.setSkills(skills)
      mainStore.setTechnologies(technologies)
    }
  }

  return {
    fetchApi,
  }
}
