<template>
  <div :class="{ 'debug-screens': devMode }">
    <app-header />
    <github-ribbon />
    <div v-if="$store.state.inDev">
      <coming-soon @toggle-dev="toggleDev" />
    </div>
    <div v-else>
      <Nuxt class="min-h-screen" />
    </div>
    <back-to-top />
    <app-footer />
  </div>
</template>

<script>
import comingSoon from '~/components/blocks/coming-soon.vue'
import AppHeader from '~/components/global/app-header.global.vue'
export default {
  components: { comingSoon, AppHeader },
  data() {
    return {
      devMode: process.env.NODE_ENV !== 'production',
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
