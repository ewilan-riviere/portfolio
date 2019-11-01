<template>
  <v-app>
    <NavigationDrawer />
    <nuxt class="parrallax" />
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  components: {
    NavigationDrawer
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="scss">
  .parrallax {
    /* The image used */
    background-image:
        linear-gradient(rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.2)),
        url('/images/background.jpg');

    /* Full height */
    height: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>