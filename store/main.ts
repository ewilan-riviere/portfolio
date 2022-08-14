import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    ready: false,
    about: {} as About,
    developers: {} as Developer[],
    features: {} as Feature[],
    historyItems: {} as HistoryItem[],
    hobbies: {} as Hobby[],
    projectStatuses: {} as ProjectStatus[],
    projects: {} as Project[],
    skills: {} as Skill[],
    technologies: {} as Technology[]
  }),
  actions: {
    setReady (payload: boolean) {
      this.$patch({
        ready: payload
      })
    },
    setAbout (payload: About | undefined) {
      this.$patch({
        about: payload ?? {}
      })
    },
    setDevelopers (payload: Developer[] | undefined) {
      this.$patch({
        developers: payload ?? []
      })
    },
    setFeatures (payload: Feature[] | undefined) {
      this.$patch({
        features: payload ?? []
      })
    },
    setHistoryItems (payload: HistoryItem[] | undefined) {
      this.$patch({
        historyItems: payload ?? []
      })
    },
    setHobbies (payload: Hobby[]) {
      this.$patch({
        hobbies: payload ?? []
      })
    },
    setProjectStatuses (payload: ProjectStatus[] | undefined) {
      this.$patch({
        projectStatuses: payload ?? []
      })
    },
    setProjects (payload: Project[] | undefined) {
      this.$patch({
        projects: payload ?? []
      })
    },
    setSkills (payload: Skill[] | undefined) {
      this.$patch({
        skills: payload ?? []
      })
    },
    setTechnologies (payload: Technology[] | undefined) {
      this.$patch({
        technologies: payload ?? []
      })
    }
  }
})
