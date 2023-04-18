<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const { projects } = useMainStore()
</script>

<template>
  <layout-page :title="$t('project.title')" :description="$t('project.subtitle')">
    <part-statistics />
    <!-- <app-masonry /> -->
    <div class="mt-14">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <project-card v-for="project in projects" :key="project.slug" :project="project" />
      </ul>
    </div>
  </layout-page>
</template>
