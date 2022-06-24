<script setup lang="ts">
// import { useMarkdown } from "./composables/markdown"
// import home from "@/content/home.md"

import { useI18n } from 'vue-i18n'

// const markdown = ref<Markdown>()
// const { loadMarkdown } = useMarkdown()
// markdown.value = await loadMarkdown(home)

const { isDev } = useDev()
const { t, d, n, tm } = useI18n()

const { fetchApi } = useApi()
await fetchApi()

useMetadata()
</script>

<template>
  <div :class="{ 'debug-screens': isDev }">
    <app-toasts />
    <layout-navbar />
    <layout-sidebar />
    <div>
      {{ n(1000, 'currency') }}
      {{ d(new Date(), 'short') }}
      {{ $t('title') }}
      {{ t('title') }}
    </div>
    <portfolio-hero />
    <portfolio-about />
    <!-- <portfolio-features /> -->
    <!-- <portfolio-projects class="mt-16" /> -->
    <!-- <portfolio-history class="mt-16" /> -->
    <!-- <portfolio-blog class="mt-16" /> -->
    <!-- <portfolio-form-contact class="mt-28" /> -->
    <!-- <layout-bottom class="mt-10" /> -->
    <layout-back-to-top />
  </div>
</template>
