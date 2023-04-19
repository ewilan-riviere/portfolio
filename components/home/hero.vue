<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { about } = useMainStore()

const show = ref(false)
function loaded(loaded: boolean) {
  show.value = loaded
}
</script>

<template>
  <layout-container :margin="false" class="z-40">
    <div class="lg:flex items-center justify-between w-full space-x-0 lg:space-x-12 max-w-4xl mx-auto mt-16 mb-10">
      <div class="text-center lg:text-left">
        <svg-icon
          name="logo/text"
          class="h-8 w-auto mx-0 text-3xl"
        />
        <h1 class="sr-only">
          {{ about?.name }}
        </h1>
        <div
          class="max-w-lg mx-auto mt-3 text-lg md:text-xl text-gray-800 dark:text-gray-200 sm:max-w-3xl font-quicksand font-medium lg:text-3xl"
        >
          {{ $t('about.professional-title') }}
        </div>
        <blockquote class="italic text-lg mt-6">
          « {{ $t('about.citation') }} »
        </blockquote>
        <home-social class="mt-5 mx-auto lg:mx-0 w-max" />
      </div>
      <div class="flex mt-10 lg:mt-0">
        <div
          :class="show ? 'opacity-100' : 'opacity-0'"
          class="relative h-56 w-56 transition-opacity duration-150 group mx-auto"
        >
          <div class="transition-colors duration-100 absolute z-10 inset-0 rounded-full">
            <div class="rainbow-flag group-hover:before:opacity-100 group-active:after:opacity-100 group-active:before:opacity-0 h-full w-full rounded-full" />
          </div>
          <app-img
            src="/images/ewilan-riviere.webp"
            alt="ewilan riviere"
            class="rounded-full p-0.5 relative z-20"
            @loaded="loaded"
          />
        </div>
      </div>
    </div>
  </layout-container>
</template>
