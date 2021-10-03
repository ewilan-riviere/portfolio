<template>
  <div :class="dev ? 'debug-screens' : ''" class="bg-white dark:bg-gray-900">
    <lazy-app-notifications />
    <lazy-hydrate when-idle>
      <div>
        <app-navbar />
        <social-networks class="hidden lg:block" />
      </div>
    </lazy-hydrate>
    <div class="min-h-screen">
      <app-hero />
      <Nuxt />
    </div>
    <lazy-hydrate when-idle>
      <div>
        <app-back-to-top />
        <app-footer />
      </div>
    </lazy-hydrate>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'LayoutDefault',
  components: {
    LazyHydrate,
    AppBackToTop: () => import('~/components/layout/app-back-to-top.vue'),
    AppFooter: () => import('~/components/layout/app-footer.vue'),
    AppHero: () => import('~/components/layout/app-hero.vue'),
    appNavbar: () => import('~/components/layout/app-navbar.vue'),
    SocialNetworks: () => import('~/components/blocks/social-networks.vue'),
  },
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
