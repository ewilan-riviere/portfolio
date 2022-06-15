<script setup lang="ts">
defineProps<{
  history: History
}>()
</script>

<template>
  <div class="flex flex-col items-start flex-grow sm:items-center sm:flex-row">
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-purple-500 bg-gray-100 dark:bg-gray-800 rounded-full mr-6"
    >
      <div class="h-16 w-16 flex">
        <svg-icon
          :name="`history/${history.slug}`"
          class="formation-logo mx-auto h-16 w-16 text-purple-600"
          loading="lazy"
        />
      </div>
    </div>
    <slot />
    <div class="flex-grow pt-10 pb-6 pl-6">
      <span class="block font-body font-bold text-gray-300">
        {{ history.dateBegin }} - {{ history.dateEnd }}</span
      >
      <span class="pt-1">
        <h3 class="font-header text-xl font-bold uppercase text-purple-600">
          {{ history.title }}
        </h3>
        <span v-if="history.level" class="italic">
          {{ history.level }}
        </span>
      </span>
      <div
        class="leading-relaxed hyphenate text-gray-700 dark:text-gray-200 mt-2"
      >
        {{ history.abstract }}
      </div>
    </div>
  </div>
</template>
