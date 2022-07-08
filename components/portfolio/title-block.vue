<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  reverse?: boolean
  bg?: 'bg-forest-swamp' | 'bg-jungle-forest' | 'bg-jungle-cascade'
}>()
</script>

<template>
  <div class="text-center">
    <p class="max-w-2xl mx-auto text-xl sm:mt-2 text-purple-600 dark:text-primary-500">
      {{ subtitle }}
    </p>
    <h2
      class="text-3xl tracking-tight font-quicksand font-semibold text-gray-dark sm:text-4xl mt-1">
      {{ title }}
    </h2>
  </div>
</template>
