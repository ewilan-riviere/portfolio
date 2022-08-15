<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const { about } = useMainStore()
</script>

<template>
  <app-slide-over
    border
    title="My hobbies"
    subtitle="Some activities I love"
  >
    <app-button fake-button>
      And my hobbies?
    </app-button>
    <template #content>
      <div>
        <dl>
          <div
            v-for="hobby in about.hobbies"
            :key="hobby"
            class="hobby"
          >
            <dt>
              {{ $t(`hobbies.${hobby}.label`) }}
            </dt>
            <dd>
              {{ $t(`hobbies.${hobby}.description`) }}
            </dd>
          </div>
        </dl>
      </div>
    </template>
  </app-slide-over>
</template>

<style lang="css" scoped>
.hobby {
  @apply py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4;
  & dt {
    @apply text-sm font-medium text-gray-500 dark:text-gray-400;
  }
  & dd {
    @apply mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-100;
  }
}
</style>
