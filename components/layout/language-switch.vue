<template>
  <dropdown-template align="-right-16 -top-12" :width="48">
    <template #trigger>
      <button
        id="language"
        title="Language"
        type="button"
        class="
          inline-flex
          justify-center
          px-4
          py-2
          text-sm
          font-medium
          text-gray-100
          transition-colors
          duration-100
          bg-gray-800
          border border-gray-300
          rounded-md
          shadow-sm
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-offset-gray-100
          focus:ring-indigo-500
          dark:bg-gray-800 dark:border-gray-700
          hover:bg-gray-900
        "
        aria-haspopup="true"
        aria-expanded="true"
        aria-label="Language"
        @click="openedFilter = !openedFilter"
      >
        <svg-icon name="lang" class="w-6 h-6" />
        <svg-icon name="arrow/chevron-right" class="w-5 h-5 ml-1" />
      </button>
    </template>
    <template #content>
      <div class="py-1">
        <nuxt-link
          v-for="locale in availableLocales"
          :key="locale.code"
          class="
            block
            w-full
            px-4
            py-2
            text-sm text-left text-gray-700
            hover:bg-gray-200 hover:text-gray-900
            dark:text-gray-100 dark:hover:bg-gray-800
          "
          :to="switchLocalePath(locale.code)"
        >
          {{ locale.name }}
        </nuxt-link>
      </div>
    </template>
  </dropdown-template>
</template>

<script>
import dropdownTemplate from './dropdown-template.vue'
export default {
  name: 'LanguageSwitch',
  components: { dropdownTemplate },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
