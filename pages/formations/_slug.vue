<template>
  <main class="container max-w-7xl py-10">
    <p class="prose-lg" v-html="formation.description"></p>
  </main>
</template>

<script>
export default {
  name: 'PageFormationsSlug',
  async asyncData({ app, params }) {
    const formation = await app.$axios.$get(`formations/${params.slug}`)

    return {
      formation: formation.data,
    }
  },
  created() {
    this.$store.commit('setHeader', {
      image: '/images/hero.jpg',
      subtitle: '',
      title: this.formation.title,
      abstract: `${this.$t('training')}, ${this.formation.level}`,
    })
  },
}
</script>
