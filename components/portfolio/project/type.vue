<script lang="ts" setup>
defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="flex items-center space-x-1">
    <span
      class="w-3 h-3 rounded-full"
      :style="`background-color: ${project.typeColor}`"
    />
    <span class="">{{ project.type }}</span>
  </div>
</template>
