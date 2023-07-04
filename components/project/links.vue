<script lang="ts" setup>
import type { Project, ProjectLink } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const links = props.project?.links || []
const repositories = props.project?.repositories || []
const merge: ProjectLink[] = [
  ...links.map(link => ({
    ...link,
    origin: 'link',
  })),
  ...repositories.map(repo => ({
    ...repo,
    origin: 'repository',
  })),
]

function removeHttp(url: string | undefined) {
  if (!url)
    return ''

  return url.replace(/^https?:\/\//, '')
}
</script>

<template>
  <ul role="list" class="divide-y divide-white/5 border border-gray-200 dark:border-gray-800 rounded-md">
    <li
      v-for="link in merge"
      :key="link.type"
      class="relative flex items-center space-x-4 py-4 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
    >
      <div class="min-w-0 flex-auto">
        <div class="flex items-center gap-x-3">
          <h2
            class="min-w-0 text-sm font-semibold leading-6 text-black dark:text-white"
          >
            <a
              :href="link.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex gap-x-2"
            >
              <span class="whitespace-nowrap">{{
                link.label ? link.label : removeHttp(link.url)
              }}</span>
              <span class="absolute inset-0" />
            </a>
          </h2>
        </div>
        <div
          class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-500 dark:text-gray-400"
        >
          <p class="truncate">
            {{ $t(`project.links-type.${link.type}`) }}
          </p>
          <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
            <circle cx="1" cy="1" r="1" />
          </svg>
          <p class="whitespace-nowrap">
            {{ $t(`project.links-origin.${link.origin}`) }}
          </p>
        </div>
      </div>
      <div
        v-if="link.isPrivate"
        class="rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset"
      >
        {{ $t("project.links-origin.private") }}
      </div>
      <svg-icon
        name="chevron-right"
        class="h-5 w-5 flex-none text-gray-400"
        aria-hidden="true"
      />
    </li>
  </ul>
</template>
