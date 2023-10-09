<script lang="ts" setup>
const { documents } = await useMarkdown('articles')
const { t } = useI18n()

useSeoMeta({
  title: t('head.home'),
})
</script>

<template>
  <div>
    <HomeHero />
    <HomeGallery />
    <LayoutContainer>
      <section
        v-animate
        class="max-w-xl lg:max-w-none"
      >
        <HomeOpenSource class="pt-10 pb-24" />
        <div class="mx-auto grid grid-cols-1 gap-y-20 lg:grid-cols-2">
          <div class="flex flex-col gap-16">
            <HomeTitle
              :title="$t('home.articles.title')"
              :subtitle="$t('home.articles.subtitle')"
            />
            <ArticleCardHome
              v-for="article in documents"
              :key="article._slug"
              :document="article"
              type="home"
            />
          </div>
          <div class="space-y-10 lg:pl-16 xl:pl-24">
            <HomeNewsletter />
            <HomeHistory />
          </div>
        </div>
      </section>
    </LayoutContainer>
  </div>
</template>
