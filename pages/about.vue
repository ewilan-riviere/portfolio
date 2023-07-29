<script lang="ts" setup>
import { useMainStore } from '@/store/main'

const { document } = await useMarkdown('about')
const { socials } = useMainStore()

const { t } = useI18n()

useMetadata({
  title: t('head.about'),
})
</script>

<template>
  <layout-page :title="$t('about.title')" :description="$t('about.subtitle')">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <div
            class="w-max rotate-3 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 px-3 pt-3 pb-8"
          >
            <img
              src="/images/ewilan-riviere.webp"
              alt="Ewilan Rivière"
              class="w-64 h-64 object-cover"
            >
          </div>
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1
          class="text-3xl font-semibold text-zinc-800 dark:text-zinc-100 sm:text-4xl"
        >
          {{ document?.title }}
        </h1>
        <h2 class="text-xl font-semibold text-zinc-800 dark:text-zinc-100 mt-6">
          {{ document?.subtitle }}
        </h2>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 prose dark:prose-invert">
          <ContentRenderer :value="document" />
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list">
          <about-social
            v-for="(social, id) in socials"
            :key="id"
            :social="social"
          />
        </ul>
      </div>
    </div>
    <about-skills class="mt-10" />
    <about-hobbies class="mt-10" />
    <about-features class="mt-10" />
  </layout-page>
</template>
