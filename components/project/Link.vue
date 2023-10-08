<script lang="ts" setup>
defineProps<{
  url?: string
  origin?: 'home' | 'repository' | 'private'
}>()

function removeHttp(url: string | undefined) {
  if (!url)
    return ''

  return url.replace(/^https?:\/\//, '')
}
</script>

<template>
  <li
    v-if="url"
    class="relative flex items-center space-x-4 py-4 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
  >
    <div class="min-w-0 flex-auto">
      <div class="flex items-center gap-x-3">
        <h2
          class="min-w-0 text-sm font-semibold leading-6 text-black dark:text-white"
        >
          <a
            :href="url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex gap-x-2"
          >
            <span class="whitespace-nowrap">{{
              removeHttp(url)
            }}</span>
            <span class="absolute inset-0" />
          </a>
        </h2>
      </div>
      <div
        v-if="origin"
        class="mt-3 flex items-center gap-x-2 text-xs leading-5 text-gray-500 dark:text-gray-400"
      >
        <p class="whitespace-nowrap">
          {{ $t(`project.links-origin.${origin}`) }}
        </p>
      </div>
    </div>
    <SvgIcon
      name="chevron-right"
      class="h-5 w-5 flex-none text-gray-400"
      aria-hidden="true"
    />
  </li>
</template>
