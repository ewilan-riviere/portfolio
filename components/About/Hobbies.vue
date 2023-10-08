<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const { about } = useMainStore()
</script>

<template>
  <div class="overflow-hidden border border-gray-200 dark:border-gray-700 rounded-md">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-gray-100">
        {{ $t('hobbies.title') }}
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
        {{ $t('hobbies.subtitle') }}
      </p>
    </div>
    <div class="border-t border-gray-200 px-4 py-5 sm:px-6 dark:border-gray-600">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3">
        <div v-for="hobby in about.hobbies" :key="hobby" class="sm:col-span-1">
          <dt class="flex items-center space-x-2">
            <span>{{ $t(`hobbies.${hobby}.label`) }}</span>
          </dt>
          <dd>
            {{ $t(`hobbies.${hobby}.value`) }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style scoped>
dt {
  @apply text-sm font-medium text-gray-500 dark:text-gray-400;
}
dd {
  @apply text-sm text-gray-900 dark:text-gray-100 mt-1;
}
</style>
