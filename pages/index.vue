<template>
  <div>
    <lazy-hydrate when-idle>
      <blocks-content-medium
        :document="content"
        picture="/images/laptop-woman.svg"
      />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <blocks-home-features />
    </lazy-hydrate>
    <lazy-hydrate on-interaction>
      <blocks-home-technology-logos />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <div>
        <blocks-projects-list :projects="projects" :limited="true" />
        <blocks-home-statistics />
        <blocks-home-current-occupation />
        <blocks-home-features-highlight />
        <blocks-home-testimonial />
        <blocks-formations-list :formations="formations" />
        <forms-contact-form />
      </div>
    </lazy-hydrate>
  </div>
</template>

<script>
import qs from 'qs'
import LazyHydrate from 'vue-lazy-hydration'

import projectsData from '@/static/data/projects.json'

export default {
  name: 'PageIndex',
  components: {
    LazyHydrate,
  },
  async asyncData({ app, i18n, $content }) {
    try {
      const [formations, content] = await Promise.all([
        app.$axios.$get(
          `/formations?${qs.stringify({
            lang: i18n.locale,
            color: '632ebe',
          })}`
        ),
        // app.$axios.$get(
        //   `/projects?${qs.stringify({
        //     lang: i18n.locale,
        //     favorite: true,
        //     limit: 12,
        //   })}`
        // ),

        $content(`${i18n.locale}/home`).fetch(),
      ])

      return {
        formations: formations.data,
        content,
      }
    } catch (error) {
      console.error(error)
      return {
        formations: [],
        projects: [],
      }
    }
  },
  head() {
    return {
      title: this.title,
    }
  },
  computed: {
    projects() {
      let projects = projectsData
      projects = projects.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1))
      projects.sort((a, b) => a.isFavorite + b.isFavorite)
      projects = projects.slice(0, 12)
      return projects
    },
  },
  created() {
    this.$store.commit('setHeader', {
      image: '/images/hero.jpg',
      title: 'pages.home.title',
      abstract: 'pages.home.abstract',
    })
  },
}
</script>
