<template>
  <div class="mx-auto max-w-7xl">
    <list-projects :projects="projects" />
  </div>
</template>

<script>
export default {
  name: 'PageProjects',
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
