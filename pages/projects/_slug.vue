<template>
  <project-layout :project="project" />
</template>

<script>
import { limitLength } from '@/plugins/utils/methods'
import qs from 'qs'
import projectLayout from '~/components/blocks/project/project-layout.vue'
export default {
  name: 'PageProjectsSlug',
  components: { projectLayout },
  async asyncData({ app, params, i18n }) {
    const project = await app.$axios.$get(
      `projects/${params.slug}?${qs.stringify({
        lang: i18n.locale,
      })}`
    )

    return {
      project: project.data,
    }
  },
  data() {
    return {
      limitLength,
    }
  },
  created() {
    this.$store.commit('setHeader', {
      subtitle: 'Projets',
      title: this.project.title,
      abstract: limitLength(this.project.subtitle),
    })
  },
}
</script>
