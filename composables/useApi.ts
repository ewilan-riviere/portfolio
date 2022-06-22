import { NitroFetchRequest } from 'nitropack'
import { useMainStore } from '~~/store/main'

export const useApi = () => {
  type ApiEndpoint = NitroFetchRequest

  const fetchApi = async () => {
    const mainStore = useMainStore()

    const [
      about,
      developers,
      features,
      historyItems,
      hobbies,
      projectStatuses,
      projects,
      skills,
      technologies,
    ] = await Promise.all([
      fetchData<About>('/api/about'),
      fetchData<Developer[]>('/api/developers'),
      fetchData<Feature[]>('/api/features'),
      fetchData<HistoryItem[]>('/api/history-items'),
      fetchData<Hobby[]>('/api/hobbies'),
      fetchData<ProjectStatus[]>('/api/project-statuses'),
      fetchData<Project[]>('/api/projects'),
      fetchData<Skill[]>('/api/skills'),
      fetchData<Technology[]>('/api/technologies'),
    ])

    mainStore.setAbout(about.value)
    mainStore.setDevelopers(developers.value)
    mainStore.setFeatures(features.value)
    mainStore.setHistoryItems(historyItems.value)
    mainStore.setHobbies(hobbies.value)
    mainStore.setProjectStatuses(projectStatuses.value)
    mainStore.setProjects(projects.value)
    mainStore.setSkills(skills.value)
    mainStore.setTechnologies(technologies.value)
  }

  const fetchData = async <T>(endpoint: ApiEndpoint) => {
    return await useFetch<T>(endpoint).then((e) => e.data)
  }

  return {
    fetchApi,
  }
}
