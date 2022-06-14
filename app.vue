<script setup lang="ts">
import home from '@/content/home.md'
import { useMarkdown } from './composables/markdown'

const markdown = ref<Markdown>()
const { loadMarkdown } = useMarkdown()
markdown.value = await loadMarkdown(home)

const devMode = useNuxtApp()._legacyContext?.isDev

useMetadata()
</script>

<template>
  <div :class="{ 'debug-screens': devMode }">
    <layout-navbar />
    <layout-sidebar />
    <portfolio-hero />
    <portfolio-about />
    <portfolio-features />
    <portfolio-technologies class="mt-10" />
    <portfolio-projects />
    <portfolio-history />
    <portfolio-blog />
    <portfolio-contact />
    <layout-bottom />
  </div>
</template>
