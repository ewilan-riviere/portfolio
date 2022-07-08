<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div class="relative py-8">
    <div class="absolute inset-0 z-20 parallax bg-forest-swamp gradient-top" />
    <div class="container relative z-30 h-[30vh]">
      <div class="flex flex-col items-center justify-center lg:flex-row center-full w-full">
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0 text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl font-morpheus text-center">
            {{ title }}
          </h1>
          <div
            class="max-w-lg mx-auto mt-3 text-xl text-gray-800 dark:text-gray-200 sm:max-w-3xl lg:font-pelagiad lg:text-3xl">
            {{ subtitle }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
