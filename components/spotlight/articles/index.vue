<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  articles?: MarkdownParsedContent[]
}>()
</script>

<template>
  <spotlight-layout-page title="Title" description="Desc">
    <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="flex max-w-3xl flex-col space-y-16">
        <spotlight-articles-card v-for="(article, key) in articles" :key="key" :article="article" />
      </div>
    </div>
  </spotlight-layout-page>
</template>

<style scoped></style>
