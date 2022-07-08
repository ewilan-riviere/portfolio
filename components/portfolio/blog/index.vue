<script lang="ts" setup>
// import { useI18nStore } from '~~/store/i18n'

const guides = ref<Guide[]>()
// const i18n = useI18nStore()

const getGuides = async () => {
  const guidesList = await queryContent<Guide>('blog')
    // .locale(i18n.locale)
    // .where({ draft: false })
    .find()

  guides.value = guidesList.filter((e) => e.draft === false)
}
getGuides()

// watch(
//   () => i18n.locale,
//   () => {
//     getGuides()
//   }
// )
</script>

<template>
  <div v-if="guides?.length" class="main-container font-sans leading-6 text-slate-700">
    <portfolio-title-block :title="$t('blog.title')" :subtitle="$t('blog.subtitle')" />
    <div class="mt-12 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <portfolio-blog-card v-for="(guide, index) in guides" :key="index" :large="index === 0" :guide="guide" />
    </div>
  </div>
</template>
