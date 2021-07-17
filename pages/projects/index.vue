<template>
  <div class="mx-auto max-w-7xl">
    <projects-list :projects="projects" />
  </div>
</template>

<script>
import projectsList from '~/components/blocks/projects-list.vue'
export default {
  name: 'PageProjects',
  components: { projectsList },
  async asyncData({ app, query, error, $content }) {
    try {
      const [projects] = await Promise.all([app.$axios.$get('projects')])

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
