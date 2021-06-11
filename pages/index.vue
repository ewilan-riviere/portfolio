<template>
  <div>
    <!-- <hero-original /> -->
    <div class="fixed z-40 bg-green-300">
      <!-- <setup-lang-switch /> -->
    </div>
    <hero />
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
        app.$axios.$get('formations'),
        app.$axios.$get(
          `projects?${qs.stringify({
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
  mounted() {
    console.log(this.$i18n.locale)
  },
  // async asyncData ({ $content, app, params, error }) {
  //   const path = `/${params.pathMatch || 'index'}`
  //   const [article] = await $content({ deep: true }).where({ path }).fetch()

  //   if (!article) {
  //     return error({ statusCode: 404, message: 'Article not found' })
  //   }

  //   return {
  //     article
  //   }
  // }
}
</script>
