<script lang="ts" setup>
import type { Project } from 'types/project'
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
  <div>
    {{ techs.map(t => t.title).join(', ') }}
  </div>
</template>

<style scoped></style>
