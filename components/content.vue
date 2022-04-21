<script setup lang="ts">
defineProps<{
  markdown?: Markdown
}>()
</script>

<template>
  <div v-if="markdown" class="overflow-hidden">
    <div class="relative px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
      >
        <div>
          <h2
            class="font-sans text-base font-semibold tracking-wide text-primary-600 dark:text-primary-400 uppercase"
          >
            {{ markdown.attributes?.subtitle }}
          </h2>
          <h3
            class="mt-2 text-3xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100 font-quicksand sm:text-4xl"
          >
            {{ markdown.attributes?.title }}
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="absolute top-0 right-0 hidden -mt-20 -mr-20 lg:block"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  class="text-gray-200 dark:text-gray-600"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="384"
              fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
            />
          </svg>
          <div
            v-if="markdown.attributes?.picture"
            class="relative mx-auto text-base max-w-prose lg:max-w-none"
          >
            <app-img
              class="object-contain object-center"
              :src="markdown.attributes.picture"
            />
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div
            class="mx-auto mt-5 prose prose-primary dark:prose-invert lg:max-w-none lg:row-start-1 lg:col-start-1"
          >
            <div v-html="markdown.body"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
