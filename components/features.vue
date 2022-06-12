<script setup lang="ts">
const features = await $fetch('/api/features')
</script>

<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-white">
    <div class="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div class="bg-gray-50 rounded-2xl px-6 py-16 sm:p-16">
        <div class="max-w-xl mx-auto lg:max-w-none">
          <div class="text-center">
            <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
              We built our business on customer service
            </h2>
          </div>
          <div
            class="mt-12 max-w-sm mx-auto grid grid-cols-1 gap-y-10 gap-x-8 sm:max-w-none lg:grid-cols-3"
          >
            <div
              v-for="feature in features"
              :key="feature.icon"
              class="text-center sm:flex sm:text-left lg:block lg:text-center"
            >
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <svg-icon
                    class="w-16 h-16 mx-auto"
                    :name="`features/${feature.icon}`"
                    alt=""
                  />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900">
                  {{ feature.title }}
                </h3>
                <p class="mt-2 text-sm text-gray-500">
                  {{ feature.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative">
    <div
      class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl"
    >
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.icon" class="pt-6">
            <div
              class="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8"
            >
              <div class="-mt-6">
                <div>
                  <span
                    class="inline-flex items-center justify-center p-3 bg-primary-500 dark:bg-primary-700 rounded-md shadow bg-white"
                  >
                    <svg-icon
                      :name="`features/${feature.icon}`"
                      class="w-6 h-6 text-black"
                    />
                  </span>
                </div>
                <h3
                  class="mt-8 text-lg font-medium text-gray-900 dark:text-gray-200 tracking-tight"
                >
                  {{ feature.title }}
                </h3>
                <p class="mt-5 text-base text-gray-500 dark:text-gray-400">
                  {{ feature.text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
