<template>
  <div>
    <intro />
    <cloud-logos />
    <!-- <skills /> -->

    <!-- <testimonial-alt /> -->

    <list-projects :projects="projects" :limited="true" />
    <statistics />
    <!-- <archive-list-projects :projects="projects" :limited="true" /> -->

    <testimonial />
    <list-formations :formations="formations" />
    <!-- <cta-alt /> -->
    <contact />
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'PageIndex',
  async asyncData({ app, i18n }) {
    try {
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
