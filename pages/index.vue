<template>
  <div>
    <intro />
    <cloud-logos />
    <list-projects :projects="projects" :limited="true" />
    <statistics />
    <testimonial />
    <list-formations :formations="formations" />
    <contact />
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
