<script setup lang="ts">
const projects = await $fetch('/api/projects')
</script>

<template>
  <div class="main-container" id="portfolio">
    <portfolio-title-block
      title="Projects"
      subtitle="A selection of my projects"
    />
    <div
      class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 lg:w-full md:grid-cols-2 lg:grid-cols-3"
    >
      <portfolio-projects-card
        v-for="project in projects"
        :key="project.slug"
        :project="project"
      />
    </div>
  </div>
</template>
