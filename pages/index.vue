<template>
  <div>
    <lazy-intro />
    <lazy-features />
    <lazy-cloud-logos />
    <lazy-list-projects :projects="projects" :limited="true" />
    <lazy-occupation />
    <lazy-statistics />
    <lazy-testimonial />
    <lazy-list-formations :formations="formations" />
    <lazy-contact />
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'PageIndex',
  async asyncData({ app, i18n }) {
    const [formations, projects] = await Promise.all([
      app.$axios.$get(
        `/formations?${qs.stringify({
          lang: i18n.locale,
          color: '632ebe',
        })}`
      ),
      app.$axios.$get(
        `/projects?${qs.stringify({
          lang: i18n.locale,
          favorite: true,
          limit: 12,
        })}`
      ),
    ])

    return {
      formations: formations.data,
      projects: projects.data,
    }
  },
  head() {
    return {
      title: this.title,
      link: [
        {
          rel: 'canonical',
          href: `${this.$config.baseURL}/`,
        },
      ],
    }
  },
  created() {
    this.$store.commit('setHeader', {
      title: 'pages.home.title',
      abstract: 'pages.home.abstract',
    })
  },
}
</script>
