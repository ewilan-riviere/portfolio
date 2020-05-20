<template>
  <div>
    <!-- <intro-logo /> -->
    <introduction :texts="texts" :socials="socials"></introduction>
  </div>
</template>

<script>
// import introLogo from '~/components/intro-logo.vue'

export default {
  components: {
    // introLogo,
  },
  async asyncData({ app, query, error }) {
    try {
      const [
        formationsApi,
        skillsApi,
        projectsApi,
        passionsApi,
        textsApi,
        socialsApi,
      ] = await Promise.all([
        app.$axios.$get('formations'),
        app.$axios.$get('skills'),
        app.$axios.$get('projects'),
        app.$axios.$get('passions'),
        app.$axios.$get('texts'),
        app.$axios.$get('socials'),
      ])

      return {
        formations: formationsApi.data,
        skills: skillsApi.data,
        projects: projectsApi.data,
        passions: passionsApi.data,
        texts: textsApi.data,
        socials: socialsApi.data,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)

      return {
        formations: [],
        skills: [],
        projects: [],
        passions: [],
        texts: [],
        socials: [],
      }
    }
  },
  head() {
    return {
      title: "Portfolio d'Ewilan Rivière",
    }
  },
}
</script>

<style></style>
