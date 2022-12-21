<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()

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
    <!-- <div class="flex items-center my-6 space-x-2 mx-auto container">
      <typed-link
        :to="{
          name: 'index',
        }"
      >
        Home
      </typed-link>
      <typed-link
        :to="{
          name: 'about',
        }"
      >
        About
      </typed-link>
    </div> -->
    <!-- <app-locale /> -->
    <spotlight>
      <NuxtPage />
    </spotlight>
  </div>
</template>
