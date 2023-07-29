<script lang="ts" setup>
const { documents } = await useMarkdown('articles')

const { t } = useI18n()

useMetadata({
  title: t('head.blog'),
})
</script>

<template>
  <layout-page title="Blog" description="Some articles about tech">
    <div class="space-y-20">
      <section
        class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40"
      >
        <div class="space-y-8 max-w-4xl">
          <articles-card
            v-for="article in documents"
            :key="article._id"
            :article="article"
          />
        </div>
      </section>
    </div>
  </layout-page>
</template>
