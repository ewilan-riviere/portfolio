<template>
  <div :class="dev ? 'debug-screens' : ''" class="bg-white dark:bg-gray-900">
    <lazy-hydrate when-idle>
      <div>
        <app-navbar :dark="true" />
      </div>
    </lazy-hydrate>
    <div class="min-h-screen">
      <Nuxt />
    </div>
    <lazy-hydrate when-idle>
      <div>
        <app-footer />
      </div>
    </lazy-hydrate>
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration'

export default {
  name: 'LayoutBasic',
  components: {
    LazyHydrate,
    AppFooter: () => import('~/components/layout/app-footer.vue'),
    appNavbar: () => import('~/components/layout/app-navbar.vue'),
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
