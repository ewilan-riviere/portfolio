<script setup lang="ts">
import home from '@/content/home.md'
import { useMarkdown } from './composables/markdown'

const markdown = ref<Markdown>()
const { loadMarkdown } = useMarkdown()
markdown.value = await loadMarkdown(home)

const devMode = useNuxtApp()._legacyContext?.isDev
</script>

<template>
  <div :class="{ 'debug-screens': devMode }" class="min-h-[150vh]">
    <!-- <atom-navbar /> -->
    <layout-navbar />
    <layout-sidebar />
    <atom-hero />
    <about />
    <features />
    <atom-cloud-logos class="mt-10" />
    <atom-projects />
    <atom-history />
    <atom-blog />
    <atom-contact />
    <atom-app-footer />
    <div class="parallax bg-jungle-cascade gradient-bottom h-32"></div>
  </div>
</template>
