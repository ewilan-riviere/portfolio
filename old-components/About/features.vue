<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { features } = useMainStore()
</script>

<template>
  <div class="p-10 rounded-lg">
    <div
      class="mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8"
    >
      <div
        v-for="feature in features"
        :key="feature.slug"
        class="text-center sm:flex sm:text-left lg:block lg:text-center"
      >
        <div class="sm:flex-shrink-0">
          <div class="flow-root">
            <svg-icon
              class="w-16 h-16 mx-auto"
              :name="feature.icon"
            />
          </div>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
          <h3 class="text-sm font-medium text-gray-dark">
            {{ $t(feature.title) }}
          </h3>
          <p class="mt-2 text-sm text-gray-medium">
            {{ $t(feature.text) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
