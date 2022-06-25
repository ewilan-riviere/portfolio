<script setup lang="ts">
defineProps<{
  project: Project
}>()

const { date } = useUtil()
</script>

<template>
  <div class="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-dark">
        {{ project.title }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-medium">
        {{ $t(`projects.${project.slug}.subtitle`) }}
      </p>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">
            Developers
          </dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-developers :project="project" />
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">Begin date</dt>
          <dd class="mt-1 text-sm text-gray-dark">
            {{ date(project.createdAt) }}
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">Current status</dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-status :project="project" />
          </dd>
        </div>
        <div class="sm:col-span-1">
          <dt class="text-sm font-medium text-gray-medium">Type</dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-type :project="project" />
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-medium">About</dt>
          <dd class="mt-1 text-sm text-gray-dark">
            {{ $t(`projects.${project.slug}.description`) }}
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-medium">Technologies</dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <div role="list" class="flex flex-wrap">
              <portfolio-skill-card v-for="(skill, index) in project.skills" :key="index" :skill="skill" />
            </div>
          </dd>
        </div>
        <div class="sm:col-span-2">
          <dt class="text-sm font-medium text-gray-medium">Repositories & demo</dt>
          <dd class="mt-1 text-sm text-gray-dark">
            <portfolio-project-links :project="project" />
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
