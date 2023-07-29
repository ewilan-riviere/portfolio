<script lang="ts" setup>
import type { Document } from 'types'

interface Props {
  article: Document
  type?: 'home' | 'article'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'article',
})

const { date } = useUtils()
const tags = computed((): string[] => {
  return props.article.tags ?? []
})
const icon = computed(() => `/images/blog/${props.article._slug}-icon.webp`)
</script>

<template>
  <div class="flex items-center relative group gap-x-6">
    <div>
      <app-img :src="icon" :alt="article.title" class="w-20 h-20 object-contain" />
      <div class="flex">
        <div class="uppercase text-sm italic font-semibold mx-auto mt-2">
          {{ article.category }}
        </div>
      </div>
    </div>
    <div class="group-hover:bg-gray-50 dark:group-hover:bg-gray-800 rounded-md p-5 w-full transition-colors">
      <time
        v-if="article.publishedAt"
        class="relative z-10 order-first mb-2 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5"
        :datetime="article.publishedAt.toString()"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
        {{ date(article.publishedAt) }}
        <span v-if="article.updatedAt" class="font-semibold ml-2">
          ({{ $t('blog.article.updated-at', { date: date(article.updatedAt) }) }})
        </span>
      </time>
      <h2>
        {{ article.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {{ article.description }}
      </p>
      <div v-if="article.tags" class="italic text-gray-600 dark:text-gray-400 mt-2">
        {{ tags.map((tag) => `#${tag}`).join(' ') }}
      </div>
      <div
        aria-hidden="true"
        class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500"
      >
        Read article<svg
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
    </div>
    <nuxt-link
      :to="article._link" class="absolute inset-0 z-10"
    />
  </div>
</template>
