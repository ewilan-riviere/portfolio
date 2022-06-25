<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const props = defineProps<{
  project: Project
}>()

const status = ref<ProjectStatus>()

const { projectStatuses } = useMainStore()
status.value = projectStatuses[props.project.status ? props.project.status - 1 : 0]
</script>

<template>
  <div v-if="status">
    {{ $t(`project.statuses.${status.slug}`) }} ({{ status.order }}/4)
  </div>
</template>
