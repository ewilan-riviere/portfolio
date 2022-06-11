<script setup lang="ts">
defineProps<{
  training: any
}>()
</script>

<template>
  <div
    class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-purple-500 bg-gray-100 dark:bg-gray-800 rounded-full"
    >
      <div class="h-16 w-16 flex">
        <svg-icon
          :name="`training-${training.slug}`"
          class="formation-logo mx-auto h-16 w-16"
          loading="lazy"
        />
      </div>
    </div>
    <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
      <div class="items-center mb-5 lg:mb-0 lg:flex">
        <h3
          class="mb-1 text-xl font-medium text-gray-900 dark:text-gray-200 title-font"
        >
          {{ training.title }}
        </h3>
        <div class="text-gray-900 dark:text-gray-200 flex items-center">
          <span class="hidden mx-2 my-auto lg:block">-</span>
          <span>
            {{ training.level }}
          </span>
        </div>
      </div>
      <div class="mb-1 italic text-gray-500 dark:text-gray-400">
        {{ training.dateBegin }}
        <!-- <span
          >{{ $capitalize($formatDate(training.metadata.dateBegin)) }} -
          {{ $formatDate(training.metadata.dateEnd) }} à</span
        > -->

        <!-- <a
          v-if="training.metadata.links && training.metadata.links.place"
          :href="training.metadata.links.place.link"
          target="_blank"
          rel="noopener noreferrer"
          class="my-auto text-gray-600 dark:text-gray-400 transition-colors duration-300 border-b border-gray-500 hover:text-gray-900 hover:border-gray-900"
        >
          {{ training.metadata.links.place.name }}
        </a> -->
      </div>
      <p class="leading-relaxed hyphenate text-gray-700 dark:text-gray-200">
        {{ training.abstract }}
      </p>
      <!-- <app-button
        :to="
          localePath({
            name: 'trainings-slug',
            params: { slug: training.slug },
          })
        "
        class="mt-6"
      >
        {{ $t('fields.more') }}
      </app-button> -->
      <div class="mt-8">
        <ul
          class="grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          <li
            v-for="project in training.projects"
            :key="project.id"
            class="col-span-1 bg-white dark:bg-gray-800 divide-y divide-gray-200 rounded-lg shadow"
          >
            <div class="flex items-center justify-between w-full p-6 space-x-6">
              <div class="flex-1 truncate">
                <div class="flex items-center space-x-3">
                  <h4
                    class="text-lg font-medium text-gray-900 dark:text-gray-200 truncate"
                  >
                    {{ project.title }}
                  </h4>
                </div>
              </div>
              <img
                class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800"
                :src="project.image"
                :alt="project.title"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
