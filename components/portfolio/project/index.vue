<script setup lang="ts">
import { useMainStore } from '~~/store/main'

// const projects = ref<Project[]>()
// const isFull = ref(false)

const { projects } = useMainStore()
// projects.value = await $fetch("/api/projects?limit=10")

// const getMore = async () => {
//   projects.value = await $fetch<Project[]>("/api/projects")
//   isFull.value = true
// }
</script>

<template>
  <div id="portfolio" class="main-container">
    <portfolio-title-block :title="$t('project.title')" :subtitle="$t('project.subtitle')" />
    <div class="mx-auto grid w-full grid-cols-1 gap-4 pt-12 lg:w-full sm:grid-cols-2 lg:grid-cols-3">
      <portfolio-project-card v-for="project in projects" :key="project.slug" :project="project" />
    </div>
    <!-- <transition>
      <div v-if="!isFull" class="flex mt-6">
        <app-button color="white" class="mx-auto" @click="getMore">
          <div class="flex items-center space-x-1">
            <span>See more</span>
            <svg-icon name="arrow-chevron-right" class="relative w-4 h-4" />
          </div>
        </app-button>
      </div>
    </transition> -->
  </div>
</template>
