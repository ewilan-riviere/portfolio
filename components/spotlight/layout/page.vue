<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
}>()
</script>

<template>
  <spotlight-layout-container>
    <header class="max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        {{ title }}
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        {{ description }}
      </p>
    </header>
    <div class="mt-16 sm:mt-20">
      <slot />
    </div>
  </spotlight-layout-container>
</template>

<style scoped></style>
