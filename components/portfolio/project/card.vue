<script setup lang="ts">
defineProps<{
  project: Project
}>()

const opened = ref(false)
const loaded = ref(false)

onMounted(() => {
  loaded.value = true
})
</script>

<template>
  <div>
    <article
      v-if="loaded"
      class="relative transform duration-500 shadow hover:-translate-y-2 hover:shadow-lg cursor-pointer group min-h-[12.5rem]"
      @click="opened = !opened"
    >
      <app-img
        :src="`/projects/banner/${project.slug}.webp`"
        :alt="project.title"
        class="rounded-md min-h-[12.5rem] object-cover"
        placeholder="/projects/banner/placeholder.webp"
      />
      <div
        class="bg-gray-600 bg-opacity-30 group-hover:bg-opacity-90 transition-all duration-500 absolute inset-0 z-10 rounded-md"
      />
      <div
        class="absolute left-0 top-0 z-20 text-white font-quicksand rounded-md rounded-tl-md w-max py-1 px-2 rounded-t-md opacity-100 group-hover:opacity-0 transition-opacity duration-200 bg-gray-700 bg-opacity-80 m-1 text-sm"
      >
        {{ project.title }}
      </div>
      <portfolio-project-type
        :project="project"
        class="absolute top-0 right-0 z-30 bg-gray-700 text-sm rounded-md bg-opacity-80 py-1 px-2 m-1 group-hover:opacity-0 opacity-100 transition-opacity duration-200 text-white"
      />
      <div
        class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-wrap m-2 z-30"
      >
        <portfolio-technology-card
          v-for="(technology, index) in project.technologies"
          :key="index"
          :technology="technology"
          force-white
        />
      </div>
      <div
        class="absolute z-30 bottom-3 transform translate-y-20 group-hover:translate-y-0 duration-300 px-3"
      >
        <div
          class="opacity-0 text-white group-hover:opacity-90 transform duration-300 line-clamp-3"
        >
          {{ $t(`projects.${project.slug}.excerpt`) }}
        </div>
      </div>
    </article>
    <app-dialog :open="opened" size="2xl" @close="opened = false">
      <portfolio-project-dialog :project="project" />
    </app-dialog>
  </div>
</template>
