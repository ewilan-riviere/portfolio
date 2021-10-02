<template>
  <main class="container max-w-7xl py-10">
    <nuxt-content
      :document="training"
      class="prose dark:prose-light max-w-none hyphenate"
    />
  </main>
</template>

<script>
export default {
  name: 'PageTrainingsSlug',
  async asyncData({ $content, params, i18n }) {
    const training = await $content(`${i18n.locale}/trainings`, { deep: true })
      .where({
        slug: params.slug,
      })
      .fetch()

    return {
      training: training[0],
    }
  },
  created() {
    this.$store.commit('setHeader', {
      image: '/images/hero.jpg',
      subtitle: '',
      title: this.training.title,
      abstract: `${this.$t('training')}, ${this.training.metadata.level}`,
    })
  },
}
</script>
