<script lang="ts" setup>
const { findAll, contents: articles } = useMarkdownContent()
await findAll('articles', {
  where: {
    draft: false,
  },
})

const { t } = useI18n()

// useHead({
//   titleTemplate: '%s - Ewilan Rivière',
//   title: t('head.home'),
// })
useMetadata({
  title: t('head.home'),
})
</script>

<template>
  <div>
    <home-hero />
    <home-gallery />
    <layout-container>
      <section v-animate class="max-w-xl lg:max-w-none">
        <div class="mx-auto grid grid-cols-1 gap-y-20 lg:grid-cols-2">
          <div class="flex flex-col gap-16">
            <home-title :title="t('home.articles.title')" :subtitle="t('home.articles.subtitle')" />
            <articles-card-home v-for="article in articles" :key="article._id" :article="article" type="home" />
          </div>
          <div class="space-y-10 lg:pl-16 xl:pl-24">
            <home-newsletter />
            <home-history />
          </div>
        </div>
        <home-open-source class="pt-10 pb-24" />
      </section>
    </layout-container>
  </div>
</template>

<style scoped></style>
