<script lang="ts" setup>
// import { useI18n } from 'vue-i18n'
import { useI18nStore } from '~~/store/i18n'
// const i18n = useI18n()
const i18nStore = useI18nStore()

const getLocale = (locale: LocaleList) => {
  const locales: Keyable = {
    en: 'English',
    fr: 'Français'
  }

  return locales[locale] ?? locale
}
const switchLocale = (locale: LocaleList) => {
  localStorage.setItem('locale', locale)
  i18nStore.changeLocale(locale)
  currentLocale.value = locale
}
const currentLocale = ref<LocaleList>('en')
currentLocale.value = i18nStore.locale

if (process.client) {
  const localeStorageLocale = localStorage.getItem('locale') as LocaleList
  if (localeStorageLocale) {
    switchLocale(localeStorageLocale)
  } else {
    const navigatorLanguage = navigator.language
    const navigatorLocale = navigatorLanguage.split('-')[0] as LocaleList
    switchLocale(navigatorLocale)
  }
}
</script>

<template>
  <div class="relative">
    <app-dropdown auto-close>
      <template #trigger>
        <div class="group">
          <div
            class="absolute top-0 right-0 bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-1 rounded-full z-10 text-xs bg-opacity-50 dark:bg-opacity-50 w-6 h-6 flex">
            <div class="m-auto uppercase">
              {{ currentLocale }}
            </div>
          </div>
          <div class="group-hover:bg-gray-700 transition-colors duration-75 p-1.5 rounded-md">
            <svg-icon name="locale" class="w-6 h-6" />
          </div>
        </div>
      </template>
      <template #content>
        <div
          class="bg-gray-50 dark:bg-gray-800 text-black dark:text-white p-2 rounded-md border border-gray-200 dark:border-gray-700">
          <button v-for="(locale, index) in i18nStore.availableLocales" :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 rounded-md w-full text-left"
            @click="switchLocale(locale as LocaleList)">
            {{ getLocale(locale as LocaleList) }}
          </button>
        </div>
      </template>
    </app-dropdown>
  </div>
</template>
