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
        <blocks-home-current-occupation />
        <blocks-home-statistics />
        <!-- <blocks-home-features-highlight /> -->
        <blocks-home-testimonial />
        <blocks-trainings-list :trainings="trainings" />
        <forms-contact-form />
      </div>
    </lazy-hydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PageIndex',
  components: {
    LazyHydrate,
  },
  async asyncData({ app, i18n, $content }) {
    try {
      const [trainings, projects, content] = await Promise.all([
        $content(`${i18n.locale}/trainings`, { deep: true })
          .only(['title', 'slug', 'date', 'metadata', 'abstract'])
          .where({
            'metadata.isDraft': false,
          })
          .sortBy('date', 'desc')
          .fetch(),
        $content(`${i18n.locale}/projects`, { deep: true })
          .only(['title', 'slug', 'date', 'metadata', 'abstract'])
          .where({
            'metadata.isDraft': false,
            'metadata.isFavorite': true,
          })
          .sortBy('date', 'desc')
          .limit(12)
          .fetch(),
        $content(`${i18n.locale}/home`).fetch(),
      ])

      return {
        trainings,
        projects,
        content,
      }
    } catch (error) {
      console.error(error)
      return {
        trainings: [],
        projects: [],
      }
    }
  },
  head() {
    return {
      title: this.title,
    }
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
