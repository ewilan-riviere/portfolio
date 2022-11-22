<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

// const article = ref<MarkdownParsedContent>()

const { fullPath } = useRoute()
const { data: article } = useAsyncData('article', () =>
  queryContent<MarkdownParsedContent>('articles')
    .where({ _draft: false, _path: fullPath })
    .findOne(),
) as unknown as { data: MarkdownParsedContent }
</script>

<template>
  <spotlight-articles-slug :article="article" />
</template>

<style scoped></style>
