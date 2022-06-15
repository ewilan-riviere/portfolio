<script setup lang="ts">
defineProps<{
  project: Project
}>()
</script>

<template>
  <article
    v-if="project"
    class="mx-auto shadow-xl bg-cover bg-center transform duration-500 hover:-translate-y-2 cursor-pointer group relative rounded-md"
    :style="`background-image: url(/projects/banner/${project.slug}.webp)`"
  >
    <div
      class="absolute z-10 top-0 right-0 m-3 text-white font-semibold flex items-center space-x-2 rounded-md bg-gray-800 bg-opacity-20 py-1 px-2"
    >
      <div class="w-3 h-3 bg-purple-600 rounded-full" />
      <div>{{ project.type }}</div>
    </div>
    <div
      class="bg-black bg-opacity-20 px-10 flex flex-wrap flex-col pt-96 hover:bg-opacity-75 transform duration-300 rounded-md"
    >
      <h3
        class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300 line-clamp-1"
      >
        {{ project.title }}
      </h3>
      <div
        class="w-16 h-2 bg-orange-500 rounded-full mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300"
      />
      <p
        class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 pb-6 line-clamp-3"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, beatae!
      </p>
    </div>
  </article>
</template>
