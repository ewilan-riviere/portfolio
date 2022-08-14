<script setup lang="ts">
import { useI18nStore } from '~~/store/i18n'
import { useMainStore } from '~~/store/main'

const i18n = useI18nStore()
const { about } = useMainStore()

const content = ref<Guide>()
const fetchContent = async () => {
  content.value = await queryContent<Guide>('/about')
    .locale(i18n.currentLocale)
    .findOne()
}
fetchContent()

const hobbiesOpened = ref(false)

watch(
  () => i18n.currentLocale,
  () => {
    fetchContent()
  }
)
</script>

<template>
  <div
    v-if="content"
    class="overflow-hidden"
  >
    <div class="relative px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"
      >
        <div>
          <h2
            class="font-sans text-base font-semibold tracking-wide text-primary-600 dark:text-primary-400 uppercase"
          >
            {{ content.subtitle }}
          </h2>
          <h3
            class="mt-2 text-3xl font-semibold leading-8 tracking-tight text-gray-dark font-quicksand sm:text-4xl"
          >
            {{ content.title }}
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
          <div class="relative mx-auto text-base max-w-prose lg:max-w-none">
            <figure>
              <app-img
                class="object-contain object-center h-[20rem] lg:h-[40rem]"
                src="/images/laptop-woman.svg"
              />
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div
            class="mx-auto mt-5 prose prose-primary dark:prose-invert lg:max-w-none lg:row-start-1 lg:col-start-1"
          >
            <ContentRenderer :value="content">
              <MarkdownRenderer :value="content" />
              <template #empty>
                <p>No content found.</p>
              </template>
            </ContentRenderer>
            <app-button @click="hobbiesOpened = !hobbiesOpened">
              And my hobbies?
            </app-button>
            <app-dialog
              :open="hobbiesOpened"
              @close="hobbiesOpened = false"
            >
              <div class="p-5">
                <ul class="list-outside list-disc">
                  <li
                    v-for="hobby in about.hobbies"
                    :key="hobby"
                  >
                    {{ $t(`hobbies.${hobby}`) }}
                  </li>
                </ul>
              </div>
            </app-dialog>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
