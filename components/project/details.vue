<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const props = defineProps<{
  project: Project
}>()

const { findOne, content } = useMarkdownContent()
await findOne(`projects/${props.project?.slug}`, {
  // localized: true,
  allowFailed: true,
})
const { projectStatuses } = useMainStore()
const { date } = useUtils()
const status = projectStatuses.find(s => s.order === props.project?.status)?.slug
</script>

<template>
  <div
    class="relative isolate overflow-hidden lg:overflow-visible lg:px-0"
  >
    <div
      class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10"
    >
      <div
        class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8"
      >
        <div class="lg:pr-4">
          <div class="lg:max-w-lg">
            <p class="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">
              {{ $t(`project.types.${project.type}`) }}
            </p>
            <div class="mt-6 text-sm border border-gray-100 dark:border-gray-700 rounded-md p-4">
              <div>{{ $t('project.created-at', { date: date(props.project?.createdAt) }) }}</div>
              <div class="mt-2">
                {{ $t('project.statuses.currently-in') }} {{ $t(`project.statuses.${status}`) }}
              </div>
            </div>
            <p class="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              {{ content?.description }}
            </p>
            <project-technologies
              :project="project"
              class="mt-8"
            />
            <project-developers
              :project="project"
              class="mt-8"
            />
            <project-links
              :project="project"
              class="mt-8"
            />
          </div>
        </div>
      </div>
      <div
        class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
      >
        <app-img
          :src="project.image" :alt="project.title"
          class="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 object-contain"
          placeholder="/projects/placeholder.webp"
        />
      </div>
    </div>
    <div
      v-if="content"
    >
      <div class="prose dark:prose-invert mx-auto lg:prose-lg">
        <ContentRenderer :value="content" />
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
dt {
  @apply text-sm font-medium leading-6 text-gray-900 dark:text-gray-100;
}

dd {
  @apply mt-1 text-sm leading-6 text-gray-700 sm:mt-2 dark:text-gray-200;
}

.item-small {
  @apply sm:col-span-1;
}
.item-large {
  @apply sm:col-span-2;
}
.item {
  @apply border-t border-gray-100 px-4 py-6 sm:px-0 dark:border-gray-700;
}
</style>
