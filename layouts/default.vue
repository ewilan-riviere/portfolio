<template>
  <div>
    <github-ribbon />
    <div v-if="$store.state.inDev">
      <coming-soon @toggle-dev="toggleDev" />
    </div>
    <div v-else>
      <app-header />
      <Nuxt class="min-h-screen" />
    </div>
    <back-to-top />
    <client-only>
      <tailwind-helper />
    </client-only>
    <app-footer />
  </div>
</template>

<script>
import GithubRibbon from '~/components/global/GithubRibbon.vue'
import AppFooter from '~/components/global/AppFooter.vue'
import AppHeader from '~/components/blocks/app-header.vue'
import ComingSoon from '~/components/blocks/coming-soon.vue'

export default {
  components: {
    AppFooter,
    GithubRibbon,
    AppHeader,
    ComingSoon,
  },
  data() {
    return {
      dev: true,
    }
  },
  methods: {
    toggleDev() {
      console.log('toggleInDev')
      this.$store.commit('toggleInDev')
    },
  },
}
</script>

AppFooter
