<script lang="ts" setup>
import { useMainStore } from '~/store/main'
import type { Developer } from '~/types/developer'
import type { Project } from '~/types/project'

const props = defineProps<{
  project: Project
}>()

const { developers } = useMainStore()

const list: Developer[] = []

const currentDevelopers = props.project?.developers || []

currentDevelopers.forEach((element) => {
  const developer = developers.find(t => t.slug === element.slug)

  if (developer) {
    list.push({
      ...developer,
      role: element.role,
    })
  }
})
</script>

<template>
  <ul class="space-y-2">
    <li v-for="developer in list" :key="developer.slug" class="flex items-center space-x-2 relative text-sm">
      <AppImg
        :src="developer.avatar" :alt="developer.name"
        class="w-8 h-8 rounded-full object-cover"
      />
      <div>
        <a :href="developer.links?.primary" target="_blank" rel="noopener noreferrer" class="underline">
          {{ developer.name }}
        </a>
        ({{ $t(`project.roles.${developer.role}`) }})
      </div>
    </li>
  </ul>
</template>
