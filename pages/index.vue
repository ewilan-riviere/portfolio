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
  async asyncData({ app, $content }) {
    try {
      const [formations, projects] = await Promise.all([
        app.$axios.$get('/formations'),
        app.$axios.$get(
          `/projects?${qs.stringify({
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
  mounted() {
    console.log(this.$i18n.locale)
  },
}
</script>
