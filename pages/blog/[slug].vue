<script lang="ts" setup>
const { params } = useRoute()

const slug = params.slug as string
// const content = ref<Guide>()
const { data: content } = await useAsyncData(slug, () =>
  queryContent<Guide>(`/blog/${slug}`).findOne(),
)

useMetadata({
  title: `${content.value?.title} on Blog`,
})
</script>

<template>
  <div v-if="content">
    <app-hero
      :title="content?.title"
      :subtitle="content?.category"
    />
    <div class="main-container">
      <guide-content :content="content" />
    </div>
  </div>
</template>
