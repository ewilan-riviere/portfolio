<script lang="ts" setup>
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div>
    <h2 v-if="title" class="text-3xl font-semibold">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-2">
      {{ subtitle }}
    </p>
  </div>
</template>
