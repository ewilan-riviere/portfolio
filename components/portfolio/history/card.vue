<script setup lang="ts">

defineProps<{
  historyItem: HistoryItem
}>()

const { date, checkIfDateIsSuperiorToToday } = useUtil()
</script>

<template>
  <div class="flex flex-col items-start flex-grow sm:items-center sm:flex-row">
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-purple-500 bg-gray-100 dark:bg-gray-800 rounded-full m-auto lg:mr-6">
      <div class="h-16 w-16 flex">
        <svg-icon :name="`history-${historyItem.slug}`" class="formation-logo mx-auto h-16 w-16 text-purple-600"
          loading="lazy" />
      </div>
    </div>
    <slot />
    <div class="flex-grow pt-10 pb-6 pl-6">
      <span class="block font-body font-bold text-gray-medium">
        <span v-if="historyItem.dateBegin">
          {{ date(historyItem.dateBegin) }}
        </span>
        <span v-if="historyItem.dateEnd">
          - {{ date(historyItem.dateEnd) }}
        </span>
      </span>
      <span class="pt-1">
        <h3 class="font-header text-xl font-bold uppercase text-purple-600">
          {{ $t(`history-items.${historyItem.slug}.title`) }}
        </h3>
        <span class="italic text-gray-medium">
          {{ $t(`history-items.${historyItem.slug}.level`) }}
        </span>
      </span>
      <div class="leading-relaxed hyphenate text-gray-700 dark:text-gray-200 mt-2">
        {{ $t(`history-items.${historyItem.slug}.abstract`) }}
      </div>
      <span v-if="checkIfDateIsSuperiorToToday(historyItem.dateEnd)"
        class="text-xs bg-purple-600 bg-opacity-30 px-1 py-1 rounded-md font-semibold text-white flex items-center space-x-1 w-max mt-2">
        <span class="bg-purple-600 w-2 h-2 block rounded-full" />
        <span class="text-gray-700 dark:text-white">
          {{ $t('history.currently') }}
        </span>
      </span>
    </div>
  </div>
</template>
