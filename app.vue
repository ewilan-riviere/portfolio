<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()
</script>

<template>
  <!-- <div>
    {{ $t('welcome') }}
  </div> -->
  <SeoKit />
  <NuxtLoadingIndicator color="#9333EA" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
