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
    <portfolio-projects class="mt-16" />
    <portfolio-technologies class="mt-12 mb-10" />
    <portfolio-history />
    <portfolio-blog class="mt-16" />
    <portfolio-form-contact class="mt-28" />
    <layout-bottom class="mt-10" />
  </div>
</template>
