<script lang="ts" setup>
const props = defineProps<{
  project: Project
}>()

const links = props.project?.links || []
console.log(links)
</script>

<template>
  <div>
    {{ links.main }}
  </div>
  <div class="overflow-hidden shadow sm:rounded-md bg-white dark:bg-gray-900">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <li>
        <a href="#" class="block hover:bg-gray-50 dark:hover:bg-gray-800">
          <div class="flex items-center px-4 py-4 sm:px-6">
            <div class="flex min-w-0 flex-1 items-center">
              link
            </div>
            <div>
              <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>

  <!-- <ul class="space-y-2">
    <li v-for="link in links" :key="link.slug" class="flex items-center space-x-2 relative">
      <a :href="link.url" target="_blank" rel="noopener noreferrer" class="absolute inset-0" />
      <app-img
        :src="link.icon" :alt="link.name"
        class="w-10 h-10 rounded-full object-cover"
        placeholder="/projects/placeholder.webp"
      />
      <div>{{ link.name }}</div>
    </li>
  </ul> -->
</template>

<style scoped></style>
