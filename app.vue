<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: 'Welcome',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
