<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const { projects, historyItems } = useMainStore()
</script>

<template>
  <spotlight-home-hero title="Software designer, founder, and amateur astronaut." />
  <spotlight-home-gallery :projects="projects" />
  <spotlight-home-main />
</template>

<style scoped></style>
