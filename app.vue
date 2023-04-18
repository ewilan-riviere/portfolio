<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()
</script>

<template>
  <SeoKit />
  <NuxtLoadingIndicator color="#9333EA" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
