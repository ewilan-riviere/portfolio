<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

const articles = ref<MarkdownParsedContent[]>()
const fetchContent = async () => {
  const data = await queryContent().find()
  console.log(data)
  articles.value = data
}
await fetchContent()
</script>

<template>
  <spotlight-articles :articles="articles" />
</template>

<style scoped></style>
