<script lang="ts" setup>
defineProps<{
  content?: Guide
}>()

const { getList, transList } = useUtil()
</script>

<template>
  <div v-if="content" class="overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:block bg-gray-50 dark:bg-gray-800 absolute top-0 bottom-0 left-3/4 w-screen"></div>
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div v-if="content.tags" class="mt-2 text-base text-purple-600 font-semibold tracking-wide uppercase">
          {{ getList(transList(content.tags)) }}
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none"
            viewBox="0 0 404 384" aria-hidden="true">
            <defs>
              <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20"
                patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" class="text-gray-200 dark:text-gray-700" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img class="rounded-lg shadow-lg object-cover object-center" :src="content?.picture"
                  alt="Whitney leaning against a railing on a downtown street" width="1184" height="1376">
              </div>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-medium prose">
              {{ content.description }}
            </p>
          </div>
          <div
            class="mt-5 prose prose-indigo text-gray-medium word-wraping mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
            <ContentRenderer v-if="content" :value="content">
              <MarkdownRenderer :value="content" />
              <template #empty>
                <p>No content found.</p>
              </template>
            </ContentRenderer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
