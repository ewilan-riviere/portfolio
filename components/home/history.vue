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

const toggle = ref(false)
</script>

<template>
  <div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <div class="flex items-center justify-between">
      <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          />
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            class="stroke-zinc-400 dark:stroke-zinc-500"
          />
        </svg>
        <span class="ml-3"> Work & Education </span>
      </h2>
    </div>
    <field-toggle v-model="toggle" label="See work" flexible class="mt-4" />
    <div>
      <ol v-if="toggle" class="mt-6 space-y-3">
        <home-history-item
          v-for="item in workItems"
          :key="item.slug"
          :item="item"
          type="work"
        />
      </ol>
      <ol v-else class="mt-6 space-y-3">
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
      Download CV
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
</template>

<style scoped></style>
