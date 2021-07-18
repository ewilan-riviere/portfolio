<template>
  <div class="mx-auto max-w-7xl">
    <projects-list :projects="projects" />
  </div>
</template>

<script>
import qs from 'qs'
import projectsList from '~/components/blocks/projects-list.vue'
export default {
  name: 'PageProjects',
  components: { projectsList },
  async asyncData({ app, i18n }) {
    try {
      const projects = await app.$axios.$get(
        `projects?${qs.stringify({
          lang: i18n.locale,
        })}`
      )

      return {
        projects: projects.data,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      return {
        projects: [],
      }
    }
  },
  created() {
    this.$store.commit('setHeader', {
      title: 'pages.projects.title',
      abstract: 'pages.projects.abstract',
    })
  },
}
</script>
