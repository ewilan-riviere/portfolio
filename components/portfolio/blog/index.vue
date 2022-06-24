<script lang="ts" setup>
import { useI18nStore } from '~~/store/i18n'
import type { Guide } from '~~/types/content'

const i18nStore = useI18nStore()

const guides = ref<Guide[]>()

const getGuides = async () => {
  guides.value = await queryContent<Guide>('blog')
    .locale(i18nStore.locale)
    .find()
}
getGuides()

watch(
  () => i18nStore.locale,
  () => {
    getGuides()
  }
)
</script>

<template>
  <div class="main-container font-sans leading-6 text-slate-700">
    <portfolio-title-block title="We love writing" subtitle="Some tech articles" />
    <div class="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:max-w-none">
      <portfolio-blog-card v-for="(guide, index) in guides" :key="index" :large="index === 0" :guide="guide" />
    </div>
  </div>
</template>
