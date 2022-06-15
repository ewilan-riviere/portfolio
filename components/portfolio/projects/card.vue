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
    />
    <div
      class="bg-gray-600 bg-opacity-30 group-hover:bg-opacity-60 transition-all duration-500 absolute inset-0 z-10 rounded-md"
    ></div>
    <div
      class="absolute left-0 top-0 text-center z-20 text-white text-xl font-quicksand bg-gradient-to-b from-gray-700/40 to-transparent rounded-br-md rounded-tl-md w-full py-2 px-2 rounded-t-md"
    >
      {{ project.title }}
    </div>
    <div
      class="absolute z-30 bottom-3 transform translate-y-20 group-hover:translate-y-0 duration-300 px-3"
    >
      <div
        class="opacity-0 text-white text-xl group-hover:opacity-80 transform duration-500 line-clamp-3"
      >
        Qui est non commodo id proident. Cillum ullamco laborum est aute. Et est
        dolore ex labore. Aliquip velit ullamco ut cupidatat minim cupidatat
        nostrud ipsum reprehenderit. Enim incididunt magna culpa quis.
      </div>
    </div>
  </article>
</template>
