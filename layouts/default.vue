<template>
  <div :class="dev ? 'debug-screens' : ''" class="bg-white dark:bg-gray-900">
    <navbar />
    <div class="min-h-screen">
      <hero />
      <Nuxt />
    </div>
    <app-footer />
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
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
