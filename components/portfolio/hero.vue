<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { about } = useMainStore()

const show = ref(false)
const loaded = (loaded: boolean) => {
  show.value = loaded
}
</script>

<template>
  <div class="relative py-8">
    <div class="absolute inset-0 z-20 parallax bg-forest-swamp gradient-top" />
    <div class="container relative z-30 h-screen">
      <div class="flex flex-col items-center justify-center lg:flex-row center-full w-full">
        <div :class="show ? 'opacity-100' : 'opacity-0'" class="relative h-56 w-56 transition-opacity duration-150 group">
          <div class="transition-colors duration-100 absolute -z-10 inset-0 rounded-full">
            <div class="rainbow-flag group-hover:before:opacity-100 group-active:after:opacity-100 group-active:before:opacity-0 h-full w-full rounded-full"></div>
          </div>
          <app-img src="/images/ewilan-riviere.webp" alt="ewilan riviere" class="rounded-full p-0.5" @loaded="loaded" />
        </div>
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0 text-center lg:text-left">
          <svg-icon name="ewilan-riviere-text" class="h-8 lg:h-12 w-auto mx-auto lg:mx-0" />
          <h1 class="sr-only">
            {{ about?.name }}
          </h1>
          <div
            class="max-w-lg mx-auto mt-3 text-lg md:text-xl text-gray-800 dark:text-gray-200 sm:max-w-3xl font-quicksand font-medium lg:text-3xl">
            {{ $t('about.professionalTitle') }}
          </div>
          <app-social class="flex justify-center lg:justify-start space-x-1 lg:space-x-3 mt-3" primary />
        </div>
      </div>
    </div>
  </div>
</template>
