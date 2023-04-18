<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const { projects } = useMainStore()
const { params } = useRoute()

const slug = params.slug as string

const project = ref<Project>()
project.value = projects.find(p => p.slug === slug)

useHead({
  titleTemplate: '%s - Ewilan Rivière',
  title: project.value?.title,
})
</script>

<template>
  <layout-page
    v-if="project"
    :title="project.title"
    :description="$t(`project.contexts.${project.context}`)"
  >
    <project-details :project="project" />
  </layout-page>
</template>
