<script lang="ts" setup>
import type { Project } from '~/types'
import { useMainStore } from '~/store/main'
import { useGitHub } from '~/composables/useGitHub'

const { projects, projectStatuses } = useMainStore()
const { t } = useI18n()
const { params } = useRoute()
const { date } = useUtils()

const slug = params.slug as string
const project = ref<Project>()
project.value = projects.find(p => p.slug === slug)

const { githubApi, readmeContents } = await useGitHub(project.value?.repository)

const status = projectStatuses.find(s => s.order === project.value?.status)?.slug
const { ContentRenderer } = await useMarkdoc({ input: readmeContents.value, type: 'contents', component: true })

const description = ref<string>()
description.value = `${t(`project.contexts.${project.value?.context}`)} - ${t(`project.types.${project.value?.type}`)}`

useMetadata({
  title: project.value?.title,
})
</script>

<template>
  <LayoutPage
    v-if="project"
    :title="project.title"
    :description="description"
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
                {{ githubApi?.description }}
              </p>
              <ProjectDevelopers
                :project="project"
                class="mt-8"
              />
              <ul role="list" class="divide-y divide-white/5 border border-gray-200 dark:border-gray-800 rounded-md mt-8">
                <ProjectLink
                  :url="githubApi?.html_url"
                  origin="repository"
                />
                <ProjectLink
                  :url="githubApi?.homepage || project.home"
                  origin="home"
                />
              </ul>
              <div class="space-x-1 flex flex-wrap mt-3">
                <span v-for="topic in githubApi?.topics" :key="topic" class="italic">#{{ topic }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
        >
          <AppImg
            :src="project.image" :alt="project.title"
            class="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 object-cover h-52"
          />
          <div class="mt-6 text-sm border border-gray-100 dark:border-gray-700 rounded-md p-4">
            <div class="flex items-center space-x-1 mb-2">
              <SvgIcon v-if="project.isOpenSource" name="open-source" class="w-7 h-7" title="Open source" />
              <div>Open source</div>
            </div>
            <div>
              {{ $t('project.created-at') }} <span class="text-indigo-600 dark:text-indigo-400">{{ date(githubApi?.created_at) }}</span>
            </div>
            <div class="mt-2">
              {{ $t('project.currently-in') }} <span class="text-indigo-600 dark:text-indigo-400">{{ $t(`project.statuses.${status}`) }}</span>
            </div>
            <div class="mt-2">
              {{ $t('project.type') }} <span class="text-indigo-600 dark:text-indigo-400">{{ $t(`project.types.${project.type}`) }}</span>
            </div>
          </div>
          <ProjectTechnologies
            :project="project"
            class="mt-5"
          />
        </div>
      </div>
      <div
        v-if="githubApi?.readme_url"
        class="prose dark:prose-invert mx-auto max-w-3xl prose-a:dark:text-blue-500 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline"
      >
        <p class="text-sm">
          {{ $t('project.details.readme') }} <a :href="githubApi?.readme_url" target="_blank" rel="noopener noreferrer">{{ githubApi?.readme_url }}</a>
        </p>
        <ContentRenderer class="border p-5 dark:border-gray-700 border-gray-200 rounded-md" />
      </div>
    </div>
  </LayoutPage>
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
