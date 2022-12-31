import { defineStore } from 'pinia'
import type { IconType } from '~~/.nuxt/svg-transformer'
import type { RouteType } from '~~/.nuxt/typed-link'
import type { HistoryItem } from '~~/types/history-item'

export const useMainStore = defineStore('main', {
  state: () => ({
    ready: false,
    about: {} as About,
    developers: {} as Developer[],
    features: {} as Feature[],
    workItems: {} as HistoryItem[],
    educationItems: {} as HistoryItem[],
    hobbies: {} as Hobby[],
    projectStatuses: {} as ProjectStatus[],
    projects: {} as Project[],
    skills: {} as Skill[],
    technologies: {} as Technology[],
    navbar: [
      {
        title: 'Home',
        to: { name: 'index' },
      },
      {
        title: 'About',
        to: { name: 'about' },
      },
      {
        title: 'Projects',
        to: { name: 'projects' },
      },
      {
        title: 'Blog',
        to: { name: 'articles' },
      },
    ] as {
      title: string
      to: RouteType
    }[],
    socials: [
      {
        label: 'Follow on Twitter',
        title: 'Twitter',
        href: 'https://twitter.com/ewilanriviere',
        icon: 'social/twitter',
        color: '#1DA1F2',
        colorDark: '#1DA1F2',
      },
      {
        label: 'Follow on Stack Overflow',
        title: 'Stack Overflow',
        href: 'https://stackoverflow.com/users/11008206/ewilan-r?tab=profile',
        icon: 'social/stackoverflow',
        color: '#F48024',
        colorDark: '#F48024',
      },
      {
        label: 'Follow on GitHub',
        title: 'GitHub',
        href: 'https://github.com/ewilan-riviere',
        icon: 'social/github',
        color: '#333',
        colorDark: '#fff',
      },
      {
        label: 'Follow on GitLab',
        title: 'GitLab',
        href: 'https://gitlab.com/ewilan-riviere',
        icon: 'social/gitlab',
        color: '#FC6D26',
        colorDark: '#FC6D26',
      },
      {
        label: 'Follow on LinkedIn',
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ewilan-riviere/',
        icon: 'social/linkedin',
        color: '#0077B5',
        colorDark: '#0077B5',
      },
    ] as {
      label: string
      title: string
      href: string
      icon: IconType
      color: string
      colorDark: string
    }[],
  }),
  actions: {
    setReady(payload: boolean) {
      this.$patch({
        ready: payload,
      })
    },
    setAbout(payload: About | undefined) {
      this.$patch({
        about: payload ?? {},
      })
    },
    setDevelopers(payload: Developer[] | undefined) {
      this.$patch({
        developers: payload ?? [],
      })
    },
    setFeatures(payload: Feature[] | undefined) {
      this.$patch({
        features: payload ?? [],
      })
    },
    setWorkItems(payload: HistoryItem[] | undefined) {
      this.$patch({
        workItems: payload ?? [],
      })
    },
    setEducationItems(payload: HistoryItem[] | undefined) {
      this.$patch({
        educationItems: payload ?? [],
      })
    },
    setHobbies(payload: Hobby[]) {
      this.$patch({
        hobbies: payload ?? [],
      })
    },
    setProjectStatuses(payload: ProjectStatus[] | undefined) {
      this.$patch({
        projectStatuses: payload ?? [],
      })
    },
    setProjects(payload: Project[] | undefined) {
      this.$patch({
        projects: payload ?? [],
      })
    },
    setSkills(payload: Skill[] | undefined) {
      this.$patch({
        skills: payload ?? [],
      })
    },
    setTechnologies(payload: Technology[] | undefined) {
      this.$patch({
        technologies: payload ?? [],
      })
    },
  },
})
