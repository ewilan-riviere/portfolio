<script lang="ts" setup>
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

defineProps<{
  article?: MarkdownParsedContent | null
}>()
</script>

<template>
  <spotlight-layout-page title="Title" description="Desc">
    <div v-if="article" class="xl:relative">
      <div class="mx-auto max-w-2xl">
        <nuxt-link
          :to="{
            name: 'articles',
          }" type="button" aria-label="Go back to articles" class="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"><path d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
        </nuxt-link>
        <article>
          <header class="flex flex-col">
            <h1 class="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {{ article.title }}
            </h1>
            <time :datetime="article.createdAt" class="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
              <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <span class="ml-3">
                {{ article.createdAt }}
              </span>
            </time>
          </header>
          <div class="mt-8 prose dark:prose-invert">
            <ContentRenderer :value="article" />
          </div>
        </article>
      </div>
    </div>
  </spotlight-layout-page>
</template>

<style scoped></style>
