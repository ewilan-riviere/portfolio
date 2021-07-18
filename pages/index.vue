<template>
  <div>
    <content-medium />
    <features />
    <cloud-logos />
    <projects-list :projects="projects" :limited="true" />
    <current-occupation />
    <statistics />
    <testimonial />
    <formations-list :formations="formations" />
    <contact-form />
  </div>
</template>

<script>
import qs from 'qs'
import contentMedium from '~/components/blocks/content-medium.vue'
import CurrentOccupation from '~/components/blocks/home/current-occupation.vue'
import Statistics from '~/components/blocks/home/statistics.vue'
import Testimonial from '~/components/blocks/home/testimonial.vue'
import FormationsList from '~/components/blocks/formations-list.vue'
import ContactForm from '~/components/forms/contact-form.vue'
import CloudLogos from '~/components/blocks/home/cloud-logos.vue'
import Features from '~/components/blocks/home/features.vue'
import ProjectsList from '~/components/blocks/projects-list.vue'

export default {
  name: 'PageIndex',
  components: {
    contentMedium,
    CurrentOccupation,
    Statistics,
    Testimonial,
    FormationsList,
    ContactForm,
    CloudLogos,
    Features,
    ProjectsList,
  },
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
