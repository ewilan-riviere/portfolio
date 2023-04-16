<script lang="ts" setup>
const { fetchApi } = useApi()
await fetchApi()
const sidebarState = useSidebar()

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: 'Welcome',
})
</script>

<template>
  <!-- <div>
    {{ $t('welcome') }}
  </div> -->
  <NuxtLoadingIndicator color="#9333EA" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
