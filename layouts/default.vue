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
import comingSoon from '~/components/blocks/coming-soon.vue'
export default {
  components: { comingSoon },
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
