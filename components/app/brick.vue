<script lang="ts" setup>
defineProps<{
  url?: string
}>()

const isLoaded = ref(false)
const imgLoad = () => {
  isLoaded.value = true
}
</script>

<template>
  <div class="relative">
    <img
      :src="url"
      class="w-full h-full object-cover"
      @load="imgLoad"
    >
  </div>
  <!-- <div
    v-cloak
    class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20"
  >
    <img
      class="w-full rounded-md"
      :src="url"
    >
    <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
      <div class="relative">
        <a
          class="test__link absolute inset-0"
          target="_blank"
          href="/"
        />
        <h1 class="test__title text-3xl font-bold mb-3">
          Title post
        </h1>
        <p class="test__author font-sm font-light">
          Author
        </p>
      </div>
      <div class="mt-auto">
        <span class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
      </div>
    </div>
  </div> -->
</template>
