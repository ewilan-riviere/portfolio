<template>
  <div>
    <lazy-hydrate when-idle>
      <content-medium :document="content" picture="/images/laptop-woman.svg" />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <features />
    </lazy-hydrate>
    <lazy-hydrate on-interaction>
      <cloud-logos />
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <div>
        <projects-list :projects="projects" :limited="true" />
        <statistics />
        <current-occupation />
        <features-highlight />
        <testimonial />
        <formations-list :formations="formations" />
      </div>
    </lazy-hydrate>
    <lazy-hydrate when-visible>
      <contact-form />
    </lazy-hydrate>
  </div>
</template>

<script>
import qs from 'qs'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PageIndex',
  components: {
    LazyHydrate,
    contentMedium: () => import('~/components/blocks/content-medium.vue'),
    CurrentOccupation: () =>
      import('~/components/blocks/home/current-occupation.vue'),
    Statistics: () => import('~/components/blocks/home/statistics.vue'),
    Testimonial: () => import('~/components/blocks/home/testimonial.vue'),
    FormationsList: () => import('~/components/blocks/formations-list.vue'),
    ContactForm: () => import('~/components/forms/contact-form.vue'),
    CloudLogos: () => import('~/components/blocks/home/cloud-logos.vue'),
    Features: () => import('~/components/blocks/home/features.vue'),
    ProjectsList: () => import('~/components/blocks/projects-list.vue'),
    FeaturesHighlight: () =>
      import('~/components/blocks/home/features-highlight.vue'),
  },
  async asyncData({ app, i18n, $content }) {
    try {
      const [formations, projects, content] = await Promise.all([
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
        $content(`${i18n.locale}/home`).fetch(),
      ])

      return {
        formations: formations.data,
        projects: projects.data,
        content,
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
