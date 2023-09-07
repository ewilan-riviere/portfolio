<script lang="ts" setup>
import type { Document } from '~/types'

interface Props {
  document: Document
  type?: 'home' | 'article'
}

withDefaults(defineProps<Props>(), {
  type: 'article',
})

const { date } = useUtils()
</script>

<template>
  <article
    v-if="document"
    class="group relative flex flex-col items-start"
  >
    <h3
      class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100"
    >
      <div
        class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
      />
      <nuxt-link
        :to="document._link"
      >
        <span
          class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"
        />
        <span class="relative z-10">
          {{ document.title }}
        </span>
      </nuxt-link>
    </h3>
    <div
      v-if="document.publishedAt"
      class="relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
      :datetime="document.publishedAt?.toString()"
    >
      <span
        class="absolute inset-y-0 left-0 flex items-center"
        aria-hidden="true"
      >
        <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
      </span>
      <div class="space-x-1">
        <time
          v-if="document.publishedAt"
          :datetime="document.publishedAt?.toString()"
        >
          {{ date(document.publishedAt) }}
        </time>
        <time
          v-if="document.updatedAt"
          :datetime="document.updatedAt?.toString()"
        >
          ({{ $t(`blog.article.last-update`, { date: date(document.updatedAt, 'date') }) }})
        </time>
      </div>
    </div>
    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ document.description }}
    </p>
    <div
      aria-hidden="true"
      class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
    >
      Read article
      <svg
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        class="ml-1 h-4 w-4 stroke-current"
      >
        <path
          d="M6.75 5.75 9.25 8l-2.5 2.25"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </article>
</template>
