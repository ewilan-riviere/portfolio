<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const i18n = useI18n()

type LocaleList = 'en' | 'fr'

const getLocale = (locale: LocaleList) => {
  const locales: Keyable = {
    en: 'English',
    fr: 'Français'
  }

  return locales[locale] ?? locale
}
const switchLocale = (locale: LocaleList) => {
  i18n.locale.value = locale
  localStorage.setItem('locale', locale)
}

if (process.client) {
  const localeStorageLocale = localStorage.getItem('locale') as LocaleList
  if (localeStorageLocale) {
    switchLocale(localeStorageLocale)
  } else {
    const navigatorLanguage = navigator.language
    const currentLocale = navigatorLanguage.split('-')[0] as LocaleList
    switchLocale(currentLocale)
  }
}
</script>

<template>
  <div>
    <app-dropdown auto-close>
      <template #trigger>
        <div class="hover:bg-gray-700 transition-colors duration-75 p-1.5 rounded-md">
          <svg-icon name="locale" class="w-6 h-6" />
        </div>
      </template>
      <template #content>
        <div
          class="bg-gray-50 dark:bg-gray-800 text-black dark:text-white p-2 rounded-md border border-gray-200 dark:border-gray-700">
          <button v-for="(locale, index) in i18n.availableLocales" :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 rounded-md w-full text-left"
            @click="switchLocale(locale as LocaleList)">
            {{ getLocale(locale as LocaleList) }}
          </button>
        </div>
      </template>
    </app-dropdown>
  </div>
</template>
