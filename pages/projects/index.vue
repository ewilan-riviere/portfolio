<template>
  <div class="mx-auto max-w-7xl">
    <lazy-hydrate when-idle>
      <projects-list :projects="projects" :title="false" />
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PageProjects',
  components: {
    LazyHydrate,
    projectsList: () => import('~/components/blocks/projects-list.vue'),
  },
  async asyncData({ $content, i18n }) {
    try {
      const projects = await $content(`${i18n.locale}/projects`, { deep: true })
        .only(['title', 'slug', 'metadata', 'abstract'])
        .where({
          'metadata.isDraft': false,
        })
        .sortBy('metadata.createdAt', 'desc')
        .fetch()

      return {
        projects,
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
      image: '/images/hero.jpg',
      title: 'pages.projects.title',
      abstract: 'pages.projects.abstract',
    })
  },
}
</script>
