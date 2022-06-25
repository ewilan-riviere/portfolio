<script setup lang="ts">
defineProps<{
  project: Project
}>()

const { date, getList, transList } = useUtil()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6 flex justify-between">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-dark">
          {{ project.title }}
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-medium">
          {{ $t(`projects.${project.slug}.subtitle`) }}
        </p>
      </div>
      <div
        v-if="project.isOpenSource"
        title="Open source"
        class="text-gray-medium"
      >
        <div class="flex">
          <svg-icon name="open-source" class="w-8 h-8 m-auto" />
        </div>
        <p class="text-xs text-center">Open source</p>
      </div>
    </div>
    <div
      class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6"
    >
      <dl class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.developers') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-developers :project="project" />
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.begin-date') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            {{ date(project.createdAt) }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.current-status') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-status :project="project" />
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.type') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-type :project="project" />
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.about') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            {{ $t(`projects.${project.slug}.description`) }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.repositories-demo') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-links :project="project" />
          </dd>
        </div>
        <div
          v-if="project.features && project.features.length"
          class="sm:col-span-1"
        >
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.features') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            {{ getList(transList(project.features, 'project.features')) }}
          </dd>
        </div>
        <div
          v-if="project.languages && project.languages.length"
          class="sm:col-span-1"
        >
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.languages') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            {{ getList(transList(project.languages, 'project.languages')) }}
          </dd>
        </div>
        <div
          v-if="project.technologies && project.technologies.length"
          class="sm:col-span-1"
        >
          <dt class="text-sm font-medium text-gray-medium">
            {{ $t('project.details.technologies') }}
          </dt>
          <dd class="mt-1 text-sm text-gray-dark flex flex-wrap">
            <portfolio-technology-card
              v-for="(technology, index) in project.technologies"
              :key="index"
              :technology="technology"
            />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
