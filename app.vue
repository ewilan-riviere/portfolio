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
    <div class="fixed top-0 left-0">
      <app-color-mode />
    </div>
    <!-- <div class="h-96">
      <div class="parallax bg-jungle-forest gradient-inter h-96"></div>
    </div>
    <div class="h-96">
      <div class="parallax bg-jungle-forest gradient-inter h-96"></div>
    </div>
    <div class="h-64">
      <div class="parallax bg-jungle-cascade gradient-bottom h-96"></div>
    </div> -->
    <atom />
  </div>
</template>
