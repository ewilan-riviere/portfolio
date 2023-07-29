<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()
</script>

<template>
  <NuxtLoadingIndicator color="#9333EA" />
  <NuxtLayout>
    <!-- <SeoKit /> -->
    <NuxtPage />
  </NuxtLayout>
</template>
