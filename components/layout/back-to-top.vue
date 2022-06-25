<script setup lang="ts">
const { isScroll } = useScroll()

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
</script>

<template>
  <div
    :class="isScroll ? 'opacity-100' : 'opacity-0'"
    class="transition-opacity duration-200"
  >
    <div
      class="fixed bottom-0 right-0 z-20 p-2 m-3 transition-colors duration-300 bg-gray-200 bg-opacity-50 rounded-md shadow-md cursor-pointer md:p-2 hover:bg-gray-300 group"
      @click="scrollToTop"
    >
      <svg-icon
        name="arrow-chevron-right"
        class="block w-5 h-5 text-gray-700 transition-colors duration-300 transform group-hover:text-gray-700"
        style="transform: rotate(270deg)"
      />
    </div>
  </div>
</template>
