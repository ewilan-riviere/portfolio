<template>
  <v-layout id="home" column justify-center align-center>
    <div class="portfolio">
      <skills-by-categories :categories="categories"></skills-by-categories>
    </div>
  </v-layout>
</template>

<script>
import skillsByCategories from '@/components/pages/portfolio/skills-by-categories'
export default {
  components: {
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
    const [categoriesApi] = await Promise.all([app.$axios.$get('categories')])
    return {
      categories: categoriesApi.data
    }
  }
}
</script>

<style lang="scss">
.portfolio {
}
</style>
