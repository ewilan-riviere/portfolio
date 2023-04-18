<script lang="ts" setup>
import type { IconType } from '@/.nuxt/svg-transformer.d.ts'
import { useMainStore } from '~/store/main'

const { projects } = useMainStore()

const startDate = new Date('2019-09-01')
const currentDate = new Date()

const experience = currentDate.getFullYear() - startDate.getFullYear()

const items: {
  title: string
  value: string
  params?: Record<string, string | number>
  icon: IconType
}[] = [
  {
    title: 'statistics.education.label',
    value: 'statistics.education.value',
    icon: 'statistics/education',
  },
  {
    title: 'statistics.projects.label',
    value: 'statistics.projects.value',
    params: { number: projects.length },
    icon: 'statistics/projects',
  },
  {
    title: 'statistics.experience.label',
    value: 'statistics.experience.value',
    params: { number: experience },
    icon: 'statistics/experience',
  },
]
</script>

<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
      <div
        v-for="(item, id) in items"
        :key="id"
        class="overflow-hidden rounded-lg bg-white dark:bg-gray-800 px-4 py-5 shadow sm:p-6 flex space-x-5"
      >
        <svg-icon
          :name="item.icon"
          class="h-10 w-10 text-gray-400 dark:text-gray-300"
        />
        <div>
          <dt
            class="truncate text-sm font-medium text-gray-500 dark:text-gray-400"
          >
            {{ $t(item.title) }}
          </dt>
          <dd
            class="mt-1 text-3xl font-semibold tracking-tight text-gray-900 dark:text-gray-100"
          >
            {{ $t(item.value, item.params ?? {}) }}
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>
