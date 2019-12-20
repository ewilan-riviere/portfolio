<template>
  <v-app class="">
    <div class="parrallax">
      <div id="top" />
      <GitHubRibbon />
      <NavigationDrawer />
      <nuxt class="padding" />
      <ReturnToTop :return-to-top="returnToTop" :target="target" />
    </div>
  </v-app>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

import GitHubRibbon from '@/components/layouts/GitHubRibbon.vue'
import NavigationDrawer from '@/components/layouts/NavigationDrawer.vue'
import ReturnToTop from '@/components/layouts/ReturnToTop.vue'

export default {
  components: {
    NavigationDrawer,
    GitHubRibbon,
    ReturnToTop
  },
  data () {
    return {
      target: '#top',
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),

      returnToTop: false
    }
  },
  created () {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll () {
      if (window.scrollY > 30) {
        this.returnToTop = true
      } else {
        this.returnToTop = false
      }
    }
  }
}
</script>

<style lang="scss">
.view {
  // height: 100vh;
  // position: absolute;
  background-color: transparent;
  transition: opacity .5s;
  .return-to-top {
    color: $white;
    position: fixed;
    bottom: 1rem;
    right: 1.5rem;
    width: 3rem;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: rgba($gray, 0.6);
    &:hover {
      background-color: rgba($gray, 0.4);
    }
    .icon {
      font-size: 3rem;
      color: $black;
    }
  }
}
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
.padding {
  padding: 0 5.5rem;
}
</style>
