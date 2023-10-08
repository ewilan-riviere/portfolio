<script lang="ts" setup>
import type { Project } from '~/types/project'

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
    <HomeTitle
      :title="$t('home.open-source.title')"
      :subtitle="$t('home.open-source.subtitle')"
    />
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
          <div class="h-16 w-16">
            <AppImg
              class="h-16 w-16 rounded-md object-cover"
              :src="project.image || placeholder"
              :alt="project.title"
            />
          </div>
          <div>
            <h3
              class="text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-gray-100"
            >
              {{ project.title }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ project.description }}
            </p>
            <div
              v-if="project.technologies"
              class="text-sm font-semibold leading-6 text-primary-600 dark:text-primary-300"
            >
              <ProjectTechnologiesList :project="project" />
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
