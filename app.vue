<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: 'Welcome',
})
</script>

<template>
  <NuxtLoadingIndicator color="#9333EA" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
