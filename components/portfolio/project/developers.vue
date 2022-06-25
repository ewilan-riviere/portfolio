<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

defineProps<{
  project: Project
}>()

const { developers } = useMainStore()
const getDev = (developer: DeveloperLight) => {
  return developers.find(dev => dev.slug === developer.slug)
}

</script>

<template>
  <div class="space-y-1">
    <div v-for="developer in project.developers" :key="developer.slug" class="flex items-center space-x-1">
      <a :href="getDev(developer)?.links?.primary" target="_blank" rel="noopener noreferrer"
        class="flex items-center space-x-1 hover:bg-gray-200 dark:hover:bg-gray-600 hover:bg-opacity-50 transition-colors duration-150 px-1 py-0.5 w-max rounded-md">
        <app-img :src="getDev(developer)?.avatar" class="rounded-full w-5 h-5" />
        <div>{{ getDev(developer)?.name }}</div>
      </a>
      <div>({{ $t(`developer-role.${developer.role}`) }})</div>
    </div>
  </div>
</template>
