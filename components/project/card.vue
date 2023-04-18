<script lang="ts" setup>
const props = defineProps<{
  project: Project
}>()

const { date } = useUtils()

const { findOne, content } = useMarkdownContent()
await findOne(`projects/${props.project?.slug}`, {
  // localized: true,
  allowFailed: true,
})

const domain = computed(() => {
  let url

  if (props.project.links?.length)
    url = props.project.links[0]?.url

  if (!url && props.project.repositories?.length)
    url = props.project.repositories[0]?.url

  if (url && url.startsWith('https://'))
    return new URL(url).hostname

  return undefined
})
</script>

<template>
  <li class="group relative flex flex-col items-start rounded-md">
    <div
      class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
    />
    <div
      class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 border border-zinc-200 dark:border-zinc-700 sm:rounded-2xl sm:-inset-x-6"
    />
    <div class="flex items-center justify-between w-full">
      <div
        class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
      >
        <app-img
          alt=""
          loading="lazy"
          decoding="async"
          data-nimg="1"
          class="h-12 w-12 object-cover"
          style="color: transparent"
          :src="`/projects/${project.slug}-icon.webp`"
          width="32"
          height="32"
        />
      </div>
      <div class="flex items-center space-x-1 border context-border rounded-full px-1.5 py-0.5">
        <div class="context-bg rounded-full w-2 h-2" />
        <div class="text-xs">
          {{ $t(`project.contexts.${project.context}`) }}
        </div>
      </div>
    </div>
    <div class="mt-6 text-base text-zinc-800 dark:text-zinc-100 w-full relative z-10">
      <div class="flex items-center justify-between w-full">
        <div>
          <div class="flex items-center space-x-2">
            <h2 class="font-semibold">
              {{ project.title }}
            </h2>
            <SvgIcon v-if="project.isFavorite" name="heart" class="w-4 h-4 text-red-600 dark:text-red-400" title="Fav" />
          </div>
          <p class="text-gray-600 dark:text-gray-400">
            <span>{{ $t(`project.types.${project.type}`) }}</span>
            <span class="mx-1">-</span>
            <time :datetime="project.createdAt?.toString()">{{ date(project.createdAt, 'date', {
              date: {
                year: 'numeric',
                month: 'short',
              },
            }) }}</time>
          </p>
        </div>
      </div>
    </div>
    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ content?.description }}
    </p>
    <p
      v-if="domain"
      class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
        <path
          d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
          fill="currentColor"
        />
      </svg>
      <span class="ml-2">
        {{ domain }}
      </span>
    </p>
    <TypedLink
      :to="{
        name: 'projects-slug',
        params: {
          slug: project.slug,
        },
      }"
      class="absolute inset-0 z-10"
    />
  </li>
</template>

<style scoped>
.context-bg {
  background-color: v-bind(project.contextColor);
}
.context-border {
  border-color: v-bind(project.contextColor);
}
</style>
