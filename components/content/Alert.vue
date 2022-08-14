<script setup lang="ts">
import { computed } from '@vue/reactivity'

const props = defineProps({
  /**
   * @values info, success, warning, danger
   */
  type: {
    type: String,
    default: 'info',
    validator (value: string) {
      return ['info', 'success', 'warning', 'danger'].includes(value)
    }
  }
})

const info = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
const success = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>'
const warning = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>'
const danger = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" /></svg>'

const currentIcon = computed(() => {
  const icons = {
    info,
    success,
    warning,
    danger
  }
  return icons[props.type]
})
</script>

<template>
  <div class="w-full bg-gray-50 dark:bg-gray-800 rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <span
            :class="type"
            class="w-6 h-6 block"
            v-html="currentIcon"
          />
        </div>
        <div class="ml-3 w-0 flex-1 pt-0.5">
          <p class="text-sm font-medium text-gray-dark m-0 capitalize">
            {{ type }}
          </p>
          <div class="mt-1 text-sm text-gray-medium mb-0">
            <Markdown unwrap="p" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div
    class="px-4 py-3 mt-4 mb-4 text-sm leading-relaxed alert rounded-xl"
    :class="[type]"
  >
    <div class="flex items-start">
      <div class="flex-grow alert-content">
        <span class="w-6 h-6 block" v-html="currentIcon"></span>

      </div>
    </div>
  </div> -->
</template>

<style lang="css" scoped>
.info {
  @apply text-blue-500 dark:text-blue-400;
}
.success {
  @apply text-green-500 dark:text-green-400;
}
.warning {
  @apply text-orange-500 dark:text-orange-400;
}
.danger {
  @apply text-red-500 dark:text-red-400;
}
.alert {
  :deep() {
    strong {
      @apply font-semibold text-current;
    }

    a {
      @apply border-none font-semibold text-current underline;
      code {
        @apply border border-dashed border-transparent;
      }
    }

    .prose-code {
      @apply my-4;

      code {
        @apply bg-transparent;
      }
    }
  }
}

.alert :deep(p) {
  @apply m-0 !important;
}

.dark .alert {
  :deep() {
    a {
      @apply text-current;
    }
  }
}
</style>
