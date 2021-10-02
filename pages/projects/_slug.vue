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
        <blocks-project-layout :project="project" />
        <!-- <blocks-project-gallery
          v-if="project.picture"
          :gallery="project.picture.gallery"
        /> -->
      </div>
    </lazy-hydrate>
  </main>
</template>

<script>
import { limitLength } from '@/plugins/utils/methods'
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'PageProjectsSlug',
  components: {
    LazyHydrate,
  },
  async asyncData({ $content, params, i18n }) {
    const project = await $content(`${i18n.locale}/projects`, {
      deep: true,
    })
      .where({ slug: params.slug })
      .fetch()

    return {
      project: project[0],
    }
  },
  data() {
    return {
      limitLength,
    }
  },
  created() {
    // console.log(this.project.picture.banner)
    this.$store.commit('setHeader', {
      title: this.project.title,
      abstract: limitLength(this.project.subtitle),
    })
  },
}
</script>
