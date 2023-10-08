<script lang="ts" setup>
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const { date } = useUtils()

const domain = computed(() => {
  if (props.project.home && props.project.home.startsWith('https://'))
    return new URL(props.project.home).hostname

  return undefined
})
</script>

<template>
  <li class="group hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md p-1 relative">
    <div class="rounded-md p-4 h-full border border-gray-100 dark:border-gray-700">
      <div class="flex items-center justify-between">
        <AppImg
          :src="`/images/projects/${project.slug}-icon.webp`"
          class="h-12 w-12 object-cover"
          :alt="project.title"
          width="48"
          height="48"
        />
        <div class="flex flex-wrap space-x-3">
          <SvgIcon
            v-if="project.isOpenSource"
            name="open-source"
            class="w-5 h-5"
            title="Open source"
          />
          <div
            v-if="project.context"
            class="flex items-center space-x-1 border context-border rounded-full px-1.5 py-0.5"
          >
            <div class="context-bg rounded-full w-2 h-2" />
            <div class="text-xs">
              {{ $t(`project.contexts.${project.context}`) }}
            </div>
          </div>
        </div>
      </div>
      <div class="mt-3">
        <div class="flex items-center space-x-2">
          <h2 class="font-semibold">
            {{ project.title }}
          </h2>
          <SvgIcon
            v-if="project.isFavorite"
            name="heart"
            class="w-4 h-4 text-red-600 dark:text-red-400"
            title="Fav"
          />
        </div>
        <p class="text-gray-600 dark:text-gray-400">
          <span>{{ $t(`project.types.${project.type}`) }}</span>
          <span class="mx-1">-</span>
          <time :datetime="project.createdAt?.toString()">{{ date(project.createdAt, 'date', {
            date: {
              year: 'numeric',
              month: 'short',
            },
          }) }}</time>
        </p>
      </div>
      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
        {{ project?.description }}
      </p>
      <div class="py-5" />
      <div class="absolute bottom-4">
        <p
          v-if="domain"
          class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            class="h-6 w-6 flex-none"
          >
            <path
              d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
              fill="currentColor"
            />
          </svg>
          <span class="ml-2 line-clamp-1">
            {{ domain }}
          </span>
        </p>
      </div>
    </div>
    <TypedLink
      :to="{
        name: 'projects-slug',
        params: {
          slug: project.slug,
        },
      }"
      class="absolute inset-0 z-10"
    />
  </li>
</template>

<style scoped>
.context-bg {
  background-color: v-bind(project.contextColor);
}
.context-border {
  border-color: v-bind(project.contextColor);
}
</style>
