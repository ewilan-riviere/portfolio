<script lang="ts" setup>
defineProps<{
  content?: Guide
}>()

const { getList, transList } = useUtils()
</script>

<template>
  <div
    v-if="content"
  >
    <div class="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div
        class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
      >
        <div
          v-if="content.tags"
          class="mt-2 text-base text-primary-600 font-semibold tracking-wide uppercase"
        >
          {{ getList(transList(content.tags)) }}
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8 items-start">
        <div class="lg:row-start-1 lg:col-start-2 lg:sticky lg:top-5">
          <div class="relative overflow-hidden">
            <svg
              class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
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
                    class="text-gray-200 dark:text-gray-700"
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
            <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    class="rounded-lg shadow-lg object-cover object-center"
                    :src="content?.picture"
                    alt="Whitney leaning against a railing on a downtown street"
                    width="1184"
                    height="1376"
                  >
                </div>
              </figure>
            </div>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-medium prose">
              {{ content.description }}
            </p>
          </div>
          <div
            class="mt-5 prose prose-purple text-gray-medium word-wraping mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1 content"
          >
            <ContentRenderer
              v-if="content"
              :value="content"
            >
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

<style lang="css" scoped>
.content {
  @apply dark:prose-invert dark:text-slate-400;
  @apply prose-headings:scroll-mt-28 prose-headings:font-quicksand prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem];
  @apply prose-lead:text-slate-500 dark:prose-lead:text-slate-400;
  @apply prose-a:font-semibold dark:prose-a:text-primary-400 prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.primary.300))] hover:prose-a:[--tw-prose-underline-size:6px] dark:[--tw-prose-background:theme(colors.slate.900)] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,theme(colors.primary.800))] dark:hover:prose-a:[--tw-prose-underline-size:6px] prose-a:transition-all;
  @apply prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:shadow-none dark:prose-pre:ring-1 dark:prose-pre:ring-slate-300/10;
  @apply dark:prose-hr:border-slate-800;
}

h1, h2, h3, h4, h5, h6 :deep(a) {
  @apply !no-underline;
}

:deep(.code-group-content) {
  & pre {
    @apply !rounded-none;
  }
}

:deep(.filename) {
  @apply bg-gray-800;
}

.prose :deep(code::before) {
  content: '' !important;
}
.prose :deep(code::after) {
  content: '' !important;
}

</style>
