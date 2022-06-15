<script setup lang="ts">
const about = await $fetch("/api/about")
</script>

<template>
  <div class="relative py-8">
    <div class="absolute inset-0 z-20 parallax bg-forest-swamp gradient-top" />
    <div class="container relative z-30 h-screen">
      <div
        class="flex flex-col items-center justify-center lg:flex-row center-full w-full"
      >
        <div class="rounded-full border-2 border-white shadow-xl">
          <img
            src="/images/ewilan-riviere.webp"
            class="h-48 rounded-full sm:h-56"
            alt="author"
          />
        </div>
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0 text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl font-morpheus">
            {{ about.name }}
          </h1>
          <h2
            class="max-w-lg mx-auto mt-3 text-xl text-gray-800 dark:text-gray-200 sm:max-w-3xl lg:font-pelagiad lg:text-3xl"
          >
            {{ about.professionalTitle }}
          </h2>
          <app-social
            class="flex justify-center lg:justify-start space-x-1 lg:space-x-3 mt-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>
