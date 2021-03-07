<template>
  <div :class="{ 'debug-screens': devMode }">
    <app-header />
    <github-ribbon />
    <Nuxt />
    <back-to-top />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from '~/components/global/app-header.global.vue'
export default {
  components: { AppHeader },
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
