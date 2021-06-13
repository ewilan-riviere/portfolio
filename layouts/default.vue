<template>
  <div :class="dev ? 'debug-screens' : ''">
    <navbar />
    <hero />
    <Nuxt />
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
