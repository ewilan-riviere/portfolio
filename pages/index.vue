<template>
  <div>
    <!-- <hero-original /> -->
    <hero />
    <intro />
    <skills />
    <statistics />
    <testimonial />
    <testimonial-alt />
    <cta />
    <cta-alt />
  </div>
</template>

<script>
import qs from 'qs'

export default {
  name: 'PageIndex',
  async asyncData ({ app, $content }) {
    try {
      const [formations, projects] = await Promise.all([
        app.$axios.$get('formations'),
        app.$axios.$get(
          `projects?${qs.stringify({
            favorite: true,
            limit: 12
          })}`
        )
      ])

      return {
        formations: formations.data,
        projects: projects.data
      }
    } catch (error) {
      console.error(error)

      return {
        formations: [],
        projects: []
      }
    }
  }
}
</script>
