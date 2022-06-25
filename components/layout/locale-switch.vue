<script lang="ts" setup>
import { useI18nStore } from '~~/store/i18n'

const i18n = useI18nStore()

onMounted(() => {
  i18n.initLocale()
})
</script>

<template>
  <button class="flex hover:bg-gray-700 hover:bg-opacity-50 transition-colors duration-75 p-1.5 rounded-md">
    <span class="sun m-auto" title="Switch to dark mode">
      <app-dropdown auto-close>
        <template #trigger>
          <div class="relative group">
            <div
              class="absolute -top-2 -right-2 bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-0.5 rounded-full z-10 bg-opacity-50 w-5 h-5 flex"
              style="font-size: 0.55rem;">
              <div class="m-auto uppercase">
                {{ i18n.currentLocale }}
              </div>
            </div>
            <svg-icon name="locale" class="w-6 h-6" />
          </div>
        </template>
        <template #content>
          <div
            class="bg-gray-50 dark:bg-gray-800 text-black dark:text-white p-2 rounded-md border border-gray-200 dark:border-gray-700 space-y-1">
            <button v-for="(locale, index) in i18n.availableLocales" :key="index"
              :class="locale === i18n.currentLocale ? 'bg-gray-200 dark:bg-gray-700' : ''"
              class="hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 rounded-md w-full text-left"
              @click="i18n.switchLocale(locale)">
              {{ i18n.transLocale(locale) }}
            </button>
          </div>
        </template>
      </app-dropdown>
    </span>
  </button>
  <!-- <div class="relative">
    <app-dropdown auto-close>
      <template #trigger>
        <div class="group">
          <div
            class="absolute top-0 right-0 bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-0.5 rounded-full z-10 bg-opacity-50 w-5 h-5 flex"
            style="font-size: 0.55rem;">
            <div class="m-auto uppercase">
              {{ i18n.currentLocale }}
            </div>
          </div>
          <div class="group-hover:bg-gray-700 group-hover:bg-opacity-50 transition-colors duration-75 p-1.5 rounded-md">
            <svg-icon name="locale" class="w-6 h-6" />
          </div>
        </div>
      </template>

    </app-dropdown>
  </div> -->
</template>
