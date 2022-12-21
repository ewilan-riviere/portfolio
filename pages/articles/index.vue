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
  <layout-page title="Title" description="Desc">
    <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="flex max-w-3xl flex-col space-y-16">
        <articles-card v-for="(article, key) in articles" :key="key" :article="article" />
      </div>
    </div>
  </layout-page>
</template>

<style scoped></style>
