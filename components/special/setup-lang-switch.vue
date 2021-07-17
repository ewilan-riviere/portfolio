<template>
  <div class="fixed z-50 bg-white dark:bg-gray-800">
    <nuxt-link :to="switchLocalePath('en')"> English </nuxt-link>
    <nuxt-link :to="switchLocalePath('fr')"> Français </nuxt-link>
    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.name }}
    </nuxt-link>
    <div class="p-5">
      <div>
        {{ $t('welcome') }}
      </div>
      <!-- <nuxt-link
        :to="localePath({ name: 'category-slug', params: { slug: category.slug } })"
      >
        {{ category.title }}
      </nuxt-link> -->
      <!-- <nuxt-link :to="localePath({ params: { slug: 'ball' } })">
        {{ category.title }}
      </nuxt-link> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SetupLangSwitch',
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>
