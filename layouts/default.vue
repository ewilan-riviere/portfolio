<template>
  <div id="portfolio">
    <div class="parrallax">
      <github-ribbon></github-ribbon>
      <nuxt class="padding" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
    },
  },
  head() {
    return {
      // title: this.meta.title
    }
  },
}
</script>

<style lang="scss">
#portfolio,
.parrallax {
  min-height: 100vh;
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
