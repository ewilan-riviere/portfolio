<script setup lang="ts">
const social = await $fetch('/api/about').then((e) => e.social)
</script>

<template>
  <div class="">
    <a
      v-for="item in social"
      :key="item.slug"
      :href="item.link"
      target="_blank"
      rel="noopener noreferrer"
      class="text-gray-800 dark:text-gray-200 hover:bg-gray-300 hover:bg-opacity-30 transition-colors duration-100 p-2 rounded-md"
    >
      <span class="sr-only">
        {{ item.title }}
      </span>
      <svg-icon :name="`social/${item.slug}`" class="w-6 h-6" />
    </a>
  </div>
</template>
