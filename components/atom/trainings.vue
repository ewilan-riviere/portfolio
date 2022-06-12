<script setup lang="ts">
let trainings = await $fetch('/api/trainings')
</script>

<template>
  <section class="text-gray-700 body-font">
    <div class="flex flex-wrap px-5 mx-auto md:container">
      <div
        v-for="(training, id) in trainings"
        :key="training.slug"
        class="relative flex w-full mx-auto sm:items-center lg:w-2/3"
      >
        <atom-training-card :training="training" class="h-full">
          <div class="relative h-full">
            <div
              class="absolute inset-0 flex items-center justify-center w-6 h-full"
            >
              <div
                class="w-1 h-full bg-gray-200 dark:bg-gray-700 pointer-events-none"
              />
            </div>
            <div
              class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-purple-500 rounded-full sm:mt-0 title-font top-1/2"
            >
              {{ id + 1 }}
            </div>
          </div>
        </atom-training-card>
      </div>
    </div>
  </section>
</template>

<style lang="postcss" scoped>
.formation-logo {
  @apply w-3/4 h-full;
}
/deep/ svg {
  @apply w-3/4 h-full mx-auto fill-current text-purple-500;
}
</style>
