<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const { projects } = useMainStore()
const { params } = useRoute()

const slug = params.slug as string

const project = ref<Project>()
project.value = projects.find(p => p.slug === slug)
</script>

<template>
  <layout-page
    v-if="project"
    :title="project.title"
    description="An overview of my projects"
  >
    <project-details :project="project" />
  </layout-page>
</template>
