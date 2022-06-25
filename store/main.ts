import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    about: {} as About,
    developers: {} as Developer[],
    features: {} as Feature[],
    historyItems: {} as HistoryItem[],
    hobbies: {} as Hobby[],
    projectStatuses: {} as ProjectStatus[],
    projects: {} as Project[],
    skills: {} as Skill[],
    technologies: {} as Technology[],
  }),
  actions: {
    setAbout(payload: About) {
      this.$patch({
        about: payload,
      })
    },
    setDevelopers(payload: Developer[]) {
      this.$patch({
        developers: payload,
      })
    },
    setFeatures(payload: Feature[]) {
      this.$patch({
        features: payload,
      })
    },
    setHistoryItems(payload: HistoryItem[]) {
      this.$patch({
        historyItems: payload,
      })
    },
    setHobbies(payload: Hobby[]) {
      this.$patch({
        hobbies: payload,
      })
    },
    setProjectStatuses(payload: ProjectStatus[]) {
      this.$patch({
        projectStatuses: payload,
      })
    },
    setProjects(payload: Project[]) {
      this.$patch({
        projects: payload,
      })
    },
    setSkills(payload: Skill[]) {
      this.$patch({
        skills: payload,
      })
    },
    setTechnologies(payload: Technology[]) {
      this.$patch({
        technologies: payload,
      })
    },
  },
})
