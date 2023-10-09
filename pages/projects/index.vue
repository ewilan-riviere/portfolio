<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const { projects } = useMainStore()
const { t } = useI18n()

useSeoMeta({
  title: t('head.projects'),
})
</script>

<template>
  <LayoutPage
    :title="$t('project.title')"
    :description="$t('project.subtitle')"
  >
    <AboutStatistics />
    <div class="mt-10">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <ProjectCard
          v-for="project in projects"
          :key="project.slug"
          :project="project"
        />
      </ul>
    </div>
  </LayoutPage>
</template>
