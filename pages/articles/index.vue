<script lang="ts" setup>
const { documents } = await useMarkdown('articles')
const { t } = useI18n()

useMetadata({
  title: t('head.blog'),
})
</script>

<template>
  <LayoutPage title="Blog" description="Some articles about tech">
    <div class="space-y-20">
      <section
        class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div class="space-y-8 max-w-4xl">
          <ArticleCard
            v-for="article in documents"
            :key="article.slug"
            :article="article"
          />
        </div>
      </section>
    </div>
  </LayoutPage>
</template>
