<script setup lang="ts">
import home from '@/content/home.md'
import { useMarkdown } from './composables/markdown'

const markdown = ref<Markdown>()
const { loadMarkdown } = useMarkdown()
markdown.value = await loadMarkdown(home)

const devMode = useNuxtApp()._legacyContext?.isDev
</script>

<template>
  <div :class="{ 'debug-screens': devMode }" class="h-screen">
    <layout-navbar />
    <layout-sidebar />
    <hero />
    <!-- <content :markdown="markdown" /> -->
    <!-- <portfolio-features /> -->
    <projects />
    <!-- <div class="h-32">
      <div class="parallax bg-forest-swamp gradient-top h-32"></div>
    </div>
    <div class="h-32">
      <div class="parallax bg-jungle-forest gradient-inter h-32"></div>
    </div>
    <div class="h-64">
      <div class="parallax bg-jungle-cascade gradient-bottom"></div>
    </div> -->
  </div>
</template>
