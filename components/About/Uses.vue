<script lang="ts" setup>
const items: { name: string; value: string; large?: boolean }[] = [
  {
    name: 'Full name',
    value: 'Margot Foster',
  },
  {
    name: 'Application for',
    value: 'Backend Developer',
  },
  {
    name: 'Email address',
    value: '',
  },
]
</script>

<template>
  <div class="overflow-hidden bg-white dark:bg-gray-800 shadow rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100">
        Uses
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400">
        What I'm using to build websites.
      </p>
    </div>
    <div class="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:px-6">
      <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
        <div v-for="item in items" :key="item.name" :class="item.large ? 'sm:col-span-2' : 'sm:col-span-1'">
          <dt>
            Full name
          </dt>
          <dd>
            Margot Foster
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<style lang="css" scoped>
dt {
  @apply text-sm font-medium text-gray-500 dark:text-gray-400;
}
dd {
  @apply mt-1 text-sm text-gray-900 dark:text-gray-100;
}
</style>
