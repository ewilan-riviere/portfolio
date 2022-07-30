<script setup lang="ts">
const { isDev } = useDev()

const { fetchApi } = useApi()
await fetchApi()
</script>

<template>
  <div>
    <app-helper v-if="isDev" />
    <app-toasts />
    <layout-navbar />
    <layout-sidebar />
    <main class="min-h-screen">
      <NuxtLoadingIndicator />
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </main>
    <layout-bottom class="mt-10" />
    <layout-back-to-top />
  </div>
</template>
