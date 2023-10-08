<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n/dist/runtime/composables'

const { locale, availableLocales, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

function localeTrans(lang: string) {
  const list: LocaleObject[] = locales.value as LocaleObject[]
  return list.find(l => l.code === lang)?.name
}
</script>

<template>
  <div class="option option-left">
    <app-dropdown auto-close class="h-full w-full" trigger-class="h-full w-full flex">
      <template #trigger>
        <button class="flex w-full" :title="$t('app.locale-switch')">
          <div
            class="absolute -top-2 -right-1 bg-gray-100 dark:bg-gray-800 opacity-70 text-black dark:text-white p-0.5 rounded-md z-10 w-5 h-5 flex"
            style="font-size: 0.55rem"
          >
            <div class="m-auto uppercase">
              {{ locale }}
            </div>
          </div>
          <SvgIcon name="locale" class="icon" />
        </button>
      </template>
      <template #content>
        <div
          class="bg-gray-50 dark:bg-gray-800 text-black dark:text-white p-1 rounded-md border border-gray-200 dark:border-gray-700 space-y-1"
        >
          <NuxtLink
            v-for="(lang, index) in availableLocales"
            :key="index"
            class="hover:bg-gray-100 dark:hover:bg-gray-700 py-1 px-2 rounded-md w-full text-left text-sm flex items-center justify-between space-x-2"
            :to="switchLocalePath(lang)"
          >
            <span>{{ localeTrans(lang) }}</span>
            <SvgIcon
              v-if="(lang === locale)"
              name="check"
              class="w-4 h-4"
            />
            <span v-else class="w-4 h-4" />
          </NuxtLink>
        </div>
      </template>
    </app-dropdown>
  </div>
</template>
