<script setup lang="ts">
// import home from "@/content/home.md"

// const markdown = ref<Markdown>()
// const { loadMarkdown } = useMarkdown()
// markdown.value = await loadMarkdown(home)

const { isDev } = useDev()

const { fetchApi } = useApi()
await fetchApi()

useMetadata()
</script>

<template>
  <div :class="{ 'debug-screens': isDev }">
    <app-toasts />
    <layout-navbar />
    <layout-sidebar />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <layout-bottom class="mt-10" />
    <layout-back-to-top />
  </div>
</template>
