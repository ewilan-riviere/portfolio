<template>
  <main
    class="
      relative
      flex-1
      overflow-y-auto
      focus:outline-none
      container
      max-w-7xl
    "
    tabindex="-1"
  >
    <lazy-hydrate when-idle>
      <div class="py-8 xl:py-10">
        <project-layout :project="project" />
        <project-gallery
          v-if="project.picture"
          :gallery="project.picture.gallery"
        />
      </div>
    </lazy-hydrate>
  </main>
</template>

<script>
import { limitLength } from '@/plugins/utils/methods'
import qs from 'qs'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PageProjectsSlug',
  components: {
    LazyHydrate,
    projectLayout: () =>
      import('~/components/blocks/project/project-layout.vue'),
    ProjectGallery: () =>
      import('~/components/blocks/project/project-gallery.vue'),
  },
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
    console.log(this.project.picture.banner)
    this.$store.commit('setHeader', {
      image: this.project.picture.banner ?? '/images/hero.jpg',
      title: this.project.title,
      abstract: limitLength(this.project.subtitle),
    })
  },
}
</script>
