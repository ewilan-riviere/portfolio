<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useMainStore } from '~~/store/main'
const { t } = useI18n()

const { features } = useMainStore()
</script>

<template>
  <div class="mx-6">
    <div class="medium-container !pb-6 !p-0">
      <div class="pt-16 sm:p-6">
        <div class="mx-auto">
          <div class="mt-12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8 lg:grid-cols-3 px-6">
            <div v-for="feature in features" :key="feature.slug"
              class="text-center sm:flex sm:text-left lg:block lg:text-center">
              <div class="sm:flex-shrink-0">
                <div class="flow-root">
                  <svg-icon class="w-16 h-16 mx-auto" :name="`features/${feature.slug}`" alt="" />
                </div>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                <h3 class="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {{ t(`features.${feature.slug}.title`) }}
                </h3>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  {{ t(`features.${feature.slug}.text`) }}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <portfolio-technologies class="mt-3" />
    </div>
  </div>
</template>
