<script lang="ts" setup>
import { useMainStore } from '~/store/main'
import type { Technology } from '~/types/technology'

const props = defineProps<{
  project: Project
}>()

const { technologies } = useMainStore()

const techs: Technology[] = []
const languages: Technology[] = []

const currentTechs = props.project?.technologies || []
const currentLanguages = props.project?.languages || []

currentTechs.forEach((element) => {
  const tech = technologies.find(t => t.slug === element)

  if (tech)
    techs.push(tech)
})

currentLanguages.forEach((element) => {
  const tech = technologies.find(t => t.slug === element)

  if (tech)
    languages.push(tech)
})
</script>

<template>
  <div class="flex space-x-2">
    <project-technology v-for="tech in techs" :key="tech.slug" :technology="tech" />
    <project-technology v-for="language in languages" :key="language.slug" :technology="language" />
  </div>
</template>

<style scoped></style>
