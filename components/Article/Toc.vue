<script lang="ts" setup>
import type { TocItem } from '~/types/content'

defineProps<{
  items?: TocItem[]
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
  <ul
    v-if="items"
    class="space-y-3"
  >
    <li
      v-for="link in items"
      :key="link.id"
    >
      <button
        class="underline underline-offset-4 decoration-dashed hover:text-gray-600 dark:hover:text-gray-400"
        @click="scroll(link.id)"
      >
        {{ link.text }}
      </button>
      <ArticleToc
        :items="link.children"
        class="pl-5 mt-2"
      />
    </li>
  </ul>
</template>
