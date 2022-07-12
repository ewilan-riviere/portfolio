<script lang="ts" setup>
const guides = ref<Guide[]>()
// const { data: guides } = await useAsyncData('blog', () =>
//   queryContent<Guide>('blog')
//     .find()
//     .then((guides) => guides.filter((e) => e.draft === false))
// )

useMetadata({
  title: 'Blog'
})
</script>

<template>
  <div>
    <app-hero :title="$t('blog.title')" :subtitle="$t('blog.subtitle')" />
    <div class="main-container">
      <div class="mt-12 mx-auto grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <portfolio-blog-card v-for="(guide, index) in guides" :key="index" :large="index === 0" :guide="guide" />
      </div>
    </div>
  </div>
</template>
