<script lang="ts" setup>
import type { Project } from 'types/project'

const { fetchData } = useApi()
const api = await fetchData<Project[]>('/api/projects', {
  'filter[isFavorite]': true,
  'filter[isOpenSource]': true,
  'context': 'personal',
  'sort': '-createdAt',
  'filter[isPackage]': true,
})

const projects = ref<Project[]>()
projects.value = api

const placeholder = '/images/placeholder.webp'
</script>

<template>
  <div class="mx-auto grid gap-x-8 gap-y-20">
    <div class="max-w-2xl">
      <h2
        class="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl"
      >
        {{ $t('home.open-source.title') }}
      </h2>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        {{ $t('home.open-source.subtitle') }}
      </p>
    </div>
    <ul
      role="list"
      class="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-6 xl:col-span-2"
    >
      <li
        v-for="project in projects"
        :key="project.slug"
        class="relative hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-md"
      >
        <div class="flex items-center gap-x-6">
          <img
            class="h-16 w-16 rounded-md object-cover"
            :src="project.image || placeholder"
            :alt="project.title"
          >
          <div>
            <h3
              class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-100"
            >
              {{ project.title }}
            </h3>
            <div
              v-if="project.technologies"
              class="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-300"
            >
              <project-technologies-list :project="project" />
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
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="css" scoped>
.img {
  @apply max-w-none rounded-2xl bg-gray-800 object-cover;
}
</style>
