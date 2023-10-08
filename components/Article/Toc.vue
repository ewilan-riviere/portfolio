<script lang="ts" setup>
import type { HeadingItem } from '~/server/markdoc-shared'

defineProps<{
  items?: HeadingItem[]
}>()

function scroll(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}
</script>

<template>
  <ul v-if="items" class="space-y-3">
    <li
      v-for="link in items"
      :key="link.id"
      :class="{
        'pl-3': link.depth === 2,
        'pl-6': link.depth === 3,
        'pl-9': link.depth === 4,
        'pl-12': link.depth === 5,
      }"
    >
      <button
        class="underline underline-offset-4 decoration-dashed hover:text-gray-600 dark:hover:text-gray-400"
        @click="scroll(link.id)"
      >
        {{ link.label }}
      </button>
      <ArticleToc :items="link.children" class="pl-5 mt-2" />
    </li>
  </ul>
</template>
