<script lang="ts" setup>
import type { Project } from '~/types/project'

const { fetchData } = useApi()
const { shuffle } = useData()
const api = await fetchData<Project[]>('/api/projects', {
  'filter[isFavorite]': true,
  'context': 'personal',
})
const projects = ref<Project[]>()
projects.value = shuffle(api)
</script>

<template>
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <TypedLink
        v-for="(project, index) in projects"
        :key="project.slug"
        :to="{
          name: 'projects-slug',
          params: {
            slug: project.slug,
          },
        }"
        :class="index % 2 === 0 ? 'rotate-2' : '-rotate-2'"
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl border border-zinc-100 dark:border-zinc-700 block"
      >
        <div class="absolute inset-0 h-full w-full">
          <app-img
            :src="project.image" :alt="project.title"
            class="h-full w-full object-cover"
          />
        </div>
      </TypedLink>
    </div>
  </div>
</template>
