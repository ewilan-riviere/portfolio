<script lang="ts" setup>
const ray = useRayNuxt()
ray('Hello Nuxt').color('green')

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: 'Welcome',
})
</script>

<template>
  <div>
    <!-- <spotlight /> -->
    <!-- <NuxtWelcome />
    <app-masonry /> -->
    <spotlight>
      <NuxtPage />
    </spotlight>
  </div>
</template>
