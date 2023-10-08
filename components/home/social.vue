<script setup lang="ts">
import { useMainStore } from '~/store/main'

const { socials } = useMainStore()
</script>

<template>
  <div class="flex space-x-3">
    <a
      v-for="social in socials"
      :key="social.title"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      class="block p-1.5 text-black hover:text-gray-800  hover:bg-gray-100 hover:bg-opacity-30 transition-colors rounded-md dark:text-gray-200 dark:hover:text-gray-300 dark:hover:bg-gray-700"
      :title="social.title"
    >
      <SvgIcon
        :name="social.icon"
        class="w-6 h-6"
        :display="false"
      />
    </a>
  </div>
</template>
