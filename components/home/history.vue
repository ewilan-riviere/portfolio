<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const { workItems, educationItems } = useMainStore()

const { locale } = useI18n()
const getCVPath = computed(() => {
  const defaultPath = '/projects/documents/ewilan-riviere-resume'
  if (locale.value === 'en')
    return `${defaultPath}-en.pdf`
  if (locale.value === 'fr')
    return `${defaultPath}-fr.pdf`
  return `${defaultPath}-en.pdf`
})

const tabActive = ref('education')
const tabs = [
  {
    name: 'Education',
    slug: 'education',
  },
  {
    name: 'Work',
    slug: 'work',
  },
]
</script>

<template>
  <section
    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
  >
    <div class="flex items-center justify-between">
      <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg-icon name="bag" class="h-6 w-6 flex-none" />
        <span class="ml-3">
          {{ $t("home.experience.title") }}
        </span>
      </h2>
    </div>
    <div class="mt-6">
      <nav class="grid grid-cols-2 gap-4" aria-label="Tabs">
        <button
          v-for="tab in tabs"
          :key="tab.slug"
          :class="{
            'text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-gray-700': tabActive === tab.slug,
          }"
          class="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md px-1 md:px-3 py-2 text-sm font-medium text-center transition-colors"
          aria-current="page"
          @click="tabActive = tab.slug"
        >
          {{ tab.name }}
        </button>
      </nav>
      <div>
        <ol v-if="tabActive === 'work'" class="mt-6 space-y-3">
          <home-history-item
            v-for="item in workItems"
            :key="item.slug"
            :item="item"
            type="work"
          />
        </ol>
        <ol v-if="tabActive === 'education'" class="mt-6 space-y-3">
          <home-history-item
            v-for="item in educationItems"
            :key="item.slug"
            :item="item"
          />
        </ol>
      </div>
      <a
        class="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70 group mt-6 w-full"
        :href="getCVPath"
        target="_blank"
      >
        {{ $t('home.experience.download-cv') }}
        <svg
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
          class="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50"
        >
          <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
  </section>
</template>
