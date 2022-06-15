<script setup lang="ts">
import { useNavigationStore } from '~~/store/navigation'

const { isScroll } = useScroll()
const isDark = ref(false)
const { toggleSidebar } = useNavigationStore()
</script>

<template>
  <section :class="[
    { 'bg-black bg-opacity-60': isDark },
    isScroll ? 'bg-black bg-opacity-60 h-12' : 'h-20',
  ]" class="fixed top-0 z-40 w-full text-white transition-all duration-300">
    <div :class="isScroll ? 'h-12 border-transparent' : 'h-20 border-white'"
      class="relative mx-auto transition-all duration-300 border-b border-opacity-50 max-w-7xl">
      <div class="absolute items-center px-5 py-3 transform -translate-y-1/2 lg:ml-10 top-1/2 hover:text-gray-300">
        <button :class="isScroll ? 'w-8 h-8' : 'w-8 h-8 lg:w-12 lg:h-12'" class="relative transition-all duration-300"
          @click="toggleSidebar">
          <svg-icon name="ewilan-riviere" :class="isScroll ? 'opacity-0' : 'opacity-100'"
            class="w-8 h-8 lg:w-12 lg:h-12 transition-opacity duration-300 absolute inset-0" />
          <svg-icon name="menu" :class="isScroll ? 'opacity-100' : 'opacity-0'"
            class="transition-all duration-300 rounded-md p-1 absolute inset-0 hover:bg-gray-800 h-full w-full" />
        </button>
      </div>
      <div class="items-center h-full mx-auto font-sans text-lg font-semibold w-max hidden sm:flex">
        <h1 :class="isScroll ? '!text-xl' : ''"
          class="text-xl font-normal sm:text-2xl lg:text-3xl font-morpheus transition-all duration-300">
          &ndash; Ewilan Rivière &ndash;
        </h1>
      </div>

      <div class="absolute right-0 px-5 py-3 ml-10 transform -translate-y-1/2 top-1/2">
        <div class="flex items-center space-x-4">
          <app-color-mode :size="isScroll ? 'w-8 h-8' : 'w-8 h-8 lg:w-8 lg:h-8'" />
          <!-- <language-switch
            :size="isScroll ? 'w-8 h-8' : 'w-8 h-8 lg:w-8 lg:h-8'"
          />
          <routes-list
            :class="isScroll ? 'w-8 h-8' : 'w-8 h-8 lg:w-8 lg:h-8'"
          /> -->
        </div>
      </div>
    </div>
  </section>
</template>
