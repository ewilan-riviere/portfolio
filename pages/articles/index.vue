<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

// const articles = ref<ParsedContent[]>()
// const fetchContent = async () => {
//   const data = await queryContent().find()
//   articles.value = data as ParsedContent[]
// }
// await fetchContent()

// const { data: articles } = useAsyncData('blog', () =>
//   queryContent('/blog').where({ _draft: false }).find(),
// )
const { data: articles } = useAsyncData('article', () =>
  queryContent<MarkdownParsedContent>('/articles').where({ _draft: false }).find(),
)
</script>

<template>
  <spotlight-articles :articles="articles" />
</template>

<style scoped></style>
