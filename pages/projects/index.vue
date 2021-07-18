<template>
  <div class="mx-auto max-w-7xl">
    <lazy-hydrate when-idle>
      <projects-list :projects="projects" :no-title="false" />
    </lazy-hydrate>
  </div>
</template>

<script>
import qs from 'qs'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PageProjects',
  components: {
    LazyHydrate,
    projectsList: () => import('~/components/blocks/projects-list.vue'),
  },
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
      image: '/images/hero.jpg',
      title: 'pages.projects.title',
      abstract: 'pages.projects.abstract',
    })
  },
}
</script>
