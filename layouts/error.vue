<template>
  <v-layout justify-center align-center>
    <div class="parrallax">
      <div id="top" />
      <div class="error-message white--text">
        <div class="error-message-center">
          <h1 v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>
          <div class="mt-5">
            <NuxtLink to="/" class="invisible-link">
              Retour à la page d'accueil
            </NuxtLink>
          </div>
        </div>
      </div>
      <return-to-top
        :return-to-top="returnToTop"
        :target="target"
      ></return-to-top>
    </div>
    <footer></footer>
  </v-layout>
</template>

<script>
import * as easings from 'vuetify/es5/services/goto/easing-patterns'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data() {
    return {
      pageNotFound: 'Erreur 404 : page non-trouvée',
      otherError: 'Erreur 500',
      target: '#top',
      duration: 300,
      offset: 0,
      easing: 'easeInOutCubic',
      easings: Object.keys(easings),

      returnToTop: false
    }
  },
  created() {
    if (process.browser) {
      // eslint-disable-next-line nuxt/no-globals-in-created
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
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
.error-message {
  display: flex;
  height: 100vh;
  width: 100vw;
  &-center {
    margin: auto;
    text-align: center;
  }
}
.view {
  // height: 100vh;
  // position: absolute;
  background-color: transparent;
  transition: opacity 0.5s;
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
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)),
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
  // padding: 0 5.5rem;
}
</style>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
