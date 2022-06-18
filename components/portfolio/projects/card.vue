<script setup lang="ts">
defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    class="relative transform duration-500 hover:-translate-y-2 cursor-pointer group"
  >
    <app-img
      :src="`/projects/banner/${project.slug}.webp`"
      :alt="project.title"
      class="rounded-md"
      placeholder="/projects/banner/placeholder.webp"
    />
    <div
      class="bg-gray-600 bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500 absolute inset-0 z-10 rounded-md"
    ></div>
    <div
      class="absolute left-0 top-0 z-20 text-white font-quicksand rounded-md rounded-tl-md w-max py-1 px-2 rounded-t-md opacity-100 group-hover:opacity-0 transition-opacity duration-200 bg-gray-700 bg-opacity-80 m-1 text-sm"
    >
      {{ project.title }}
    </div>
    <div
      class="absolute top-0 right-0 z-30 bg-gray-700 flex items-center space-x-1 text-sm rounded-md bg-opacity-80 py-1 px-2 m-1 group-hover:opacity-0 opacity-100 transition-opacity duration-200"
    >
      <span
        class="w-3 h-3 rounded-full"
        :style="`background-color: ${project.typeColor}`"
      ></span>
      <span class="text-white">{{ project.type }}</span>
    </div>
    <div
      class="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-wrap m-2 z-30"
    >
      <portfolio-skill-card
        v-for="(skill, index) in project.skills"
        :key="index"
        :skill="skill"
      />
    </div>
    <div
      class="absolute z-30 bottom-3 transform translate-y-20 group-hover:translate-y-0 duration-300 px-3"
    >
      <div
        class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-300 line-clamp-3"
      >
        Qui est non commodo id proident. Cillum ullamco laborum est aute. Et est
        dolore ex labore. Aliquip velit ullamco ut cupidatat minim cupidatat
        nostrud ipsum reprehenderit. Enim incididunt magna culpa quis.
      </div>
    </div>
  </article>
</template>
