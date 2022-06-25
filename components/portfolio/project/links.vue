<script lang="ts" setup>
defineProps<{
  project: Project
}>()
</script>

<template>
  <div>
    <div>
      {{ project.links }}
    </div>
    <div>
      {{ project.repositories }}
    </div>
  </div>
</template>
