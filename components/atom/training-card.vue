<script setup lang="ts">
defineProps<{
  training: Training
}>()
</script>

<template>
  <div class="flex flex-col items-start flex-grow sm:items-center sm:flex-row">
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-purple-500 bg-gray-100 dark:bg-gray-800 rounded-full mr-6"
    >
      <div class="h-16 w-16 flex">
        <svg-icon
          :name="`trainings/${training.slug}`"
          class="formation-logo mx-auto h-16 w-16"
          loading="lazy"
        />
      </div>
    </div>
    <slot />
    <div class="flex-grow pt-10 pb-6 pl-6">
      <span class="block font-body font-bold text-gray-300">
        {{ training.dateBegin }} - {{ training.dateEnd }}</span
      >
      <span class="pt-1">
        <h3 class="font-header text-xl font-bold uppercase text-purple-600">
          {{ training.title }}
        </h3>
        <span v-if="training.level" class="italic">
          {{ training.level }}
        </span>
      </span>
      <div
        class="leading-relaxed hyphenate text-gray-700 dark:text-gray-200 mt-2"
      >
        {{ training.abstract }}
      </div>
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
            :key="project.slug"
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
              <!-- <svg-icon
                class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800"
                :name="`training/${project.image}`"
                :alt="project.title"
              /> -->
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
