<script lang="ts" setup>
defineProps<{
  projects: Project[]
}>()

const { fetchData } = useApi()
const { shuffle } = useData()
let projects = await fetchData<Project[]>('/api/projects', {
  'filter[isFavorite]': true,
  'context': 'personal',
})
projects = shuffle(projects)
</script>

<template>
  <div class="mt-16 sm:mt-20">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div
        v-for="(project, index) in projects" :key="project.slug"
        :class="index % 2 === 0 ? 'rotate-2' : '-rotate-2'"
        class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl"
      >
        <!-- <img alt="" sizes="(min-width: 640px) 18rem, 11rem" decoding="async" data-nimg="1" class="absolute inset-0 h-full w-full object-cover" loading="lazy" style="color:transparent" width="3744" height="5616"> -->
        <div class="absolute inset-0 h-full w-full">
          <app-img
            :src="project.image" :alt="project.title"
            class="h-full w-full object-cover"
            placeholder="/projects/placeholder.webp"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
