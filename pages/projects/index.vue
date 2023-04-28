<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const { projects } = useMainStore()
const { t } = useI18n()

useMetadata({
  title: t('head.projects'),
})
</script>

<template>
  <layout-page :title="$t('project.title')" :description="$t('project.subtitle')">
    <part-statistics />
    <hr class="border-gray-100 dark:border-gray-700 mt-10">
    <div class="mt-10">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <project-card v-for="project in projects" :key="project.slug" :project="project" />
      </ul>
    </div>
  </layout-page>
</template>
