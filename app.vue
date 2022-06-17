<script setup lang="ts">
// import { useMarkdown } from "./composables/markdown"
// import home from "@/content/home.md"

// const markdown = ref<Markdown>()
// const { loadMarkdown } = useMarkdown()
// markdown.value = await loadMarkdown(home)

const devMode = useNuxtApp()._legacyContext?.isDev

const { fetchApi } = useApi()
await fetchApi()

useMetadata()
</script>

<template>
  <div :class="{ 'debug-screens': devMode }">
    <layout-navbar />
    <layout-sidebar />
    <portfolio-hero />
    <!-- <layout-navbar />
    <layout-sidebar />
    <portfolio-hero />
    <portfolio-about />
    <portfolio-features />
    <portfolio-projects class="mt-16" />
    <portfolio-history class="mt-16" />
    <portfolio-blog class="mt-16" />
    <portfolio-form-contact class="mt-28" />
    <layout-bottom class="mt-10" /> -->
  </div>
</template>
