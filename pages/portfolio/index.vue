<template>
  <v-layout id="home" column justify-center align-center>
    <div class="portfolio">
      <formations-timeline :formations="formations"></formations-timeline>
      <skills-by-categories :categories="categories"></skills-by-categories>
    </div>
  </v-layout>
</template>

<script>
import formationsTimeline from '@/components/pages/portfolio/formations-timeline'
import skillsByCategories from '@/components/pages/portfolio/skills-by-categories'
export default {
  components: {
    formationsTimeline,
    // eslint-disable-next-line vue/no-unused-components
    skillsByCategories
  },
  head() {
    return {
      title: '',
      titleTemplate: 'Portfolio · Ewilan Rivière'
    }
  },
  data() {
    return {}
  },
  async asyncData({ app, query, error }) {
    const [categoriesApi, formationsApi] = await Promise.all([
      app.$axios.$get('categories'),
      app.$axios.$get('formations')
    ])
    return {
      categories: categoriesApi.data,
      formations: formationsApi.data.reverse()
    }
  },
  methods: {}
}
</script>

<style lang="scss">
.portfolio {
}
</style>
