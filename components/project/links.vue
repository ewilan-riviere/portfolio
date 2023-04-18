<script lang="ts" setup>
const props = defineProps<{
  project: Project
}>()

const links = props.project?.links || []
const repositories = props.project?.repositories || []

function removeHttp(url: string | undefined) {
  if (!url)
    return ''

  return url.replace(/^https?:\/\//, '')
}
</script>

<template>
  <div>
    <div v-for="(subLinks, id) in [links, repositories]" :key="id" class="mt-6">
      <h3 v-if="subLinks.length" class="my-2">
        <span class="block w-full font-medium text-gray-900 dark:text-gray-100">
          {{ id === 0 ? $t('project.links.title') : $t('project.links.repositories') }}
        </span>
      </h3>
      <div v-if="subLinks.length" class="overflow-hidden shadow sm:rounded-md bg-white dark:bg-gray-800">
        <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
          <li v-for="link in subLinks" :key="link.type">
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="block hover:bg-gray-50 dark:hover:bg-gray-700">
              <div class="flex items-center px-4 py-4 sm:px-6">
                <div class="flex min-w-0 flex-1 items-center">
                  {{ link.label ? link.label : removeHttp(link.url) }}
                  <span v-if="link.isPrivate" class="ml-1">
                    ({{ $t('project.links.private') }})
                  </span>
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
    </div>
  </div>
</template>

<style scoped></style>
