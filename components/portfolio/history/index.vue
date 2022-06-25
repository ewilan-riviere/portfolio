<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { historyItems } = useMainStore()

const opened = ref(false)
const toggle = (open: boolean) => {
  opened.value = open
}
</script>

<template>
  <div>
    <portfolio-history-achievements @opened="toggle" />
    <transition>
      <div v-if="opened" class="max-w-3xl container border-b border-x shadow rounded-b-lg dark:border-gray-800">
        <section class="text-gray-700 body-font">
          <div class="flex flex-wrap px-5 mx-auto md:container">
            <div v-for="(historyItem, id) in historyItems" :key="historyItem.slug"
              class="relative flex w-full mx-auto sm:items-center lg:w-2/3">
              <portfolio-history-card :history-item="historyItem" class="h-full">
                <div class="relative h-full hidden lg:block">
                  <div class="absolute inset-0 flex items-center justify-center w-6 h-full">
                    <div class="w-1 h-full bg-gray-200 dark:bg-gray-700 pointer-events-none" />
                  </div>
                  <div
                    class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-purple-500 rounded-full sm:mt-0 title-font top-1/2">
                    {{ id + 1 }}
                  </div>
                </div>
              </portfolio-history-card>
            </div>
          </div>
        </section>
      </div>
    </transition>
  </div>
</template>
