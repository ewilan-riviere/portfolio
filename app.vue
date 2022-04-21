<script setup lang="ts">
import home from '@/content/home.md'
import { useMarkdown } from './composables/markdown'

const markdown = ref<Markdown>()
const { loadMarkdown } = useMarkdown()
markdown.value = await loadMarkdown(home)
</script>

<template>
  <div class="h-screen">
    <layout-navbar />
    <layout-sidebar />
    <hero />
    <content :markdown="markdown" />
    <portfolio-features />
  </div>
</template>
