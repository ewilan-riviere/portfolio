<template>
  <dropdown-template align="right-0" :width="48">
    <template #trigger>
      <button
        id="language"
        title="Language"
        type="button"
        class="
          flex
          items-center
          p-1
          text-sm
          font-medium
          text-gray-100
          transition-all
          duration-100
          rounded-md
          shadow-sm
          focus:outline-none focus:ring-2 focus:ring-offset-2
          hover:bg-gray-400 hover:bg-opacity-50
        "
        aria-haspopup="true"
        aria-expanded="true"
        aria-label="Language"
      >
        <svg-icon
          name="lang"
          :class="size"
          class="text-gray-100 transition-all"
        />
        <!-- <svg-icon
          name="arrow/chevron-right"
          class="w-5 h-5 ml-1 transform rotate-90"
        /> -->
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
            px-6
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
  props: {
    size: {
      type: String,
      default: 'w-10 h-10',
    },
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
  },
}
</script>
