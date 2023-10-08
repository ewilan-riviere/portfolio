<script lang="ts" setup>
import type { Technology } from '~/types/technology'

defineProps<{
  technology: Technology
}>()
</script>

<template>
  <li class="border tech-border rounded-full px-2 py-1 flex items-center space-x-2 max-w-max relative m-1">
    <div class="tech-bg rounded-full h-3 w-3" />
    <div class="text-sm">
      {{ technology.title }}
    </div>
    <a :href="technology.link" target="_blank" rel="noopener noreferrer" class="inset-0 absolute" />
  </li>
</template>

<style scoped>
.tech-bg {
  background-color: v-bind(technology.color);
}
.tech-border {
  border-color: v-bind(technology.color);
}
li:hover {
  background-color: v-bind(technology.color);
  color: white;

  & .tech-bg {
    background-color: white;
  }
}
</style>
