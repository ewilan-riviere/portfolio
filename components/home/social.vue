<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { socials } = useMainStore()
</script>

<template>
  <div class="flex space-x-5">
    <a
      v-for="social in socials"
      :key="social.title"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
      class="block"
      :title="social.title"
    >
      <div class="text-white hover:text-gray-300 dark:text-gray-200 hover:bg-gray-300 hover:bg-opacity-30 transition-colors rounded-md p-0.5">
        <svg-icon
          :name="social.icon"
          class="w-6 h-6"
          :display="false"
        />
      </div>
    </a>
  </div>
</template>
