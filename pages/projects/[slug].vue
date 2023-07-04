<script lang="ts" setup>
import { marked } from 'marked'
import { useMainStore } from '~/store/main'
import type { Project } from '~/types/project'

const { projects, projectStatuses } = useMainStore()
const { findOne, content } = useMarkdownContent()
const { params } = useRoute()
const { date } = useUtils()

const slug = params.slug as string

const project = ref<Project>()
project.value = projects.find(p => p.slug === slug)

const readme = ref<string>()

await findOne(`projects/${project.value?.slug}`, {
  // localized: true,
  allowFailed: true,
})
const status = projectStatuses.find(s => s.order === project.value?.status)?.slug

async function fetchReadme(): Promise<string | undefined> {
  if (!project.value?.isOpenSource)

    return

  const repository = project.value?.repositories?.find(r => r.type === 'main')
  const url = repository?.url

  if (!url?.includes('github.com'))
    return

  let readmeUrl = url.replace('github.com', 'raw.githubusercontent.com')
  readmeUrl += '/main/README.md'

  const readmeText = await fetch(readmeUrl).then(r => r.text())
  readme.value = marked.parse(readmeText)

  return readmeText
}
fetchReadme()

useMetadata({
  title: project.value?.title,
})
</script>

<template>
  <layout-page
    v-if="project"
    :title="project.title"
    :description="$t(`project.contexts.${project.context}`)"
  >
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
              <p class="text-lg leading-8 text-gray-700 dark:text-gray-300">
                {{ content?.description }}
              </p>
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
          />
          <div class="mt-6 text-sm border border-gray-100 dark:border-gray-700 rounded-md p-4">
            <div class="flex items-center space-x-1 mb-2">
              <SvgIcon v-if="project.isOpenSource" name="open-source" class="w-7 h-7" title="Open source" />
              <div>Open source</div>
            </div>
            <div>
              {{ $t('project.created-at') }} <span class="text-indigo-600 dark:text-indigo-400">{{ date(project?.createdAt) }}</span>
            </div>
            <div class="mt-2">
              {{ $t('project.currently-in') }} <span class="text-indigo-600 dark:text-indigo-400">{{ $t(`project.statuses.${status}`) }}</span>
            </div>
            <div class="mt-2">
              {{ $t('project.type') }} <span class="text-indigo-600 dark:text-indigo-400">{{ $t(`project.types.${project.type}`) }}</span>
            </div>
          </div>
          <project-technologies
            :project="project"
            class="mt-5"
          />
        </div>
      </div>
      <ClientOnly>
        <hr class="pb-10 border-gray-200 dark:border-gray-700">
        <div class="prose dark:prose-invert mx-auto p-6 lg:p-10">
          <div v-html="readme" />
        </div>
      </ClientOnly>
    </div>
  </layout-page>
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
