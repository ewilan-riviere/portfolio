<template>
  <div :class="{ 'debug-screens': devMode }">
    <github-ribbon />
    <div class="content">
      <app-header />
      <Nuxt />
    </div>
    <back-to-top />
    <app-footer class="footer" />
  </div>
</template>

<script>
import AppFooter from '~/components/layout/app-footer.vue'
import appHeader from '~/components/layout/app-header.vue'
import BackToTop from '~/components/layout/back-to-top.vue'
import GithubRibbon from '~/components/layout/github-ribbon.vue'
export default {
  components: { appHeader, GithubRibbon, BackToTop, AppFooter },
  data() {
    return {
      devMode: process.env.NODE_ENV !== 'production',
    }
  },
}
</script>

<style lang="postcss">
:root {
  --height: 100px;
}

.content {
  min-height: calc(100vh - var(--height));
}
.footer {
  height: var(--height) - 20px;
}
</style>
