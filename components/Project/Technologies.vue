<script lang="ts" setup>
import type { Project } from '~/types/project'
import { useMainStore } from '~/store/main'
import type { Technology } from '~/types/technology'

const props = defineProps<{
  project: Project
}>()

const { technologies } = useMainStore()

const techs: Technology[] = []

const currentTechs = props.project?.technologies || []

currentTechs.forEach((element: string) => {
  const tech = technologies.find(t => t.slug === element)

  if (tech)
    techs.push(tech)
})
</script>

<template>
  <div class="flex flex-wrap space-x-2">
    <ProjectTechnology
      v-for="tech in techs"
      :key="tech.slug"
      :technology="tech"
    />
  </div>
</template>

<style scoped></style>
