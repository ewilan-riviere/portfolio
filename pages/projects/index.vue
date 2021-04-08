<template>
  <div class="mx-auto max-w-7xl">
    <list-projects :projects="projects" />
  </div>
</template>

<script>
import listProjects from '~/components/blocks/list-projects.vue'
export default {
  name: 'Projects',
  components: { listProjects },
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
      subtitle: 'Portfolio',
      title: 'Projets',
      abstract: 'La liste de mes projets personnels et profesionnels',
    })
  },
}
</script>
