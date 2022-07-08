<script lang="ts" setup>
import { useI18nStore } from '~~/store/i18n'

const { params } = useRoute()
const i18n = useI18nStore()

const content = ref<Guide>()
const fetchContent = async () => {
  content.value = await queryContent<Guide>(`/blog/${params.slug}`)
    .locale(i18n.currentLocale)
    .findOne()
}
fetchContent()

watch(
  () => i18n.currentLocale,
  () => {
    fetchContent()
  }
)

useMetadata({
  title: content.value?.title
})
</script>

<template>
  <div v-if="content">
    <app-hero :title="content?.title" :subtitle="content?.category" />
    <div class="main-container">
      <guide-content :content="content" />
    </div>
  </div>
</template>
