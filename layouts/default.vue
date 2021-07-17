<template>
  <div :class="dev ? 'debug-screens' : ''" class="bg-white dark:bg-gray-900">
    <app-navbar />
    <div class="min-h-screen">
      <app-hero />
      <Nuxt />
    </div>
    <app-back-to-top />
    <app-footer />
  </div>
</template>
<script>
import AppBackToTop from '~/components/layout/app-back-to-top.vue'
import AppFooter from '~/components/layout/app-footer.vue'
import AppHero from '~/components/layout/app-hero.vue'
import appNavbar from '~/components/layout/app-navbar.vue'
export default {
  name: 'LayoutDefault',
  components: { appNavbar, AppHero, AppBackToTop, AppFooter },
  data() {
    return {
      dev: process.env.NODE_ENV !== 'production',
    }
  },
}
</script>

<style lang="postcss" scoped>
html,
body {
  height: 100%;
}
body {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1 0 auto;
}
.footer {
  flex-shrink: 0;
}
</style>
