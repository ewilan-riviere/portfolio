<script setup>
const { ContentRenderer } = await useMarkdoc()
</script>

<template>
  <div class="prose dark:prose-invert">
    <ContentRenderer />
  </div>
</template>
