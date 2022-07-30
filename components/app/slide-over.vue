<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core'

interface Props {
  full?: boolean
  border?: boolean
  title?: string
  subtitle?: string
}
const props = withDefaults(defineProps<Props>(), {
  full: false,
  border: false,
  title: undefined,
  subtitle: undefined,
})

const emit = defineEmits(['close'])

const target = ref<HTMLElement>()
const open = ref(false)
const dialog = ref(false)
const layer = ref(false)
const overlay = ref(false)

const closeEvent = () => {
  open.value = false
  emit('close', dialog.value)
}
const scrollDisabled = () => {
  document.body.classList.add('overflow-hidden')
}
const scrollEnabled = () => {
  document.body.classList.remove('overflow-hidden')
}

watch(
  () => open.value,
  (newVal) => {
    if (newVal) {
      layer.value = newVal
      setTimeout(() => {
        overlay.value = newVal
        dialog.value = newVal
      }, 150)
      scrollDisabled()
    }
    else {
      overlay.value = newVal
      dialog.value = newVal
      setTimeout(() => {
        layer.value = newVal
      }, 500)
      scrollEnabled()
    }
  },
)

onClickOutside(target, () => closeEvent())
</script>

<template>
  <div>
    <button @click="open = !open">
      <slot />
    </button>
    <div
      v-if="layer"
      class="relative z-50"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      <Transition>
        <div
          v-if="overlay"
          class="fixed inset-0 bg-white dark:bg-gray-900 opacity-50 transition-opacity"
        />
      </Transition>

      <Transition>
        <div class="fixed inset-0 overflow-hidden">
          <div class="absolute inset-0 overflow-hidden">
            <div
              :class="[
                full ? 'max-w-full' : 'max-w-full pl-10',
              ]"
              class="pointer-events-none fixed inset-y-0 right-0 flex"
            >
              <div
                ref="target"
                :class="[
                  dialog ? 'translate-x-0' : 'translate-x-full',
                  full ? 'w-screen' : 'w-screen max-w-3xl',
                ]"
                class="pointer-events-auto transform transition ease-in-out duration-500 sm:duration-700"
              >
                <div class="flex h-full flex-col overflow-y-scroll bg-white dark:bg-gray-800 py-6 shadow-xl">
                  <div class="px-4 sm:px-6 sticky top-0">
                    <div class="flex items-start justify-between">
                      <div>
                        <h3
                          v-if="title"
                          id="slide-over-title"
                          class="text-lg leading-6 font-medium text-gray-dark"
                        >
                          {{ title }}
                        </h3>
                        <p
                          v-if="subtitle"
                          class="mt-1 max-w-2xl text-sm text-gray-medium"
                        >
                          {{ subtitle }}
                        </p>
                      </div>
                      <div class="flex items-center">
                        <slot name="title-right" />
                        <div class="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 dark:bg-gray-700 dark:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            @click="open = false"
                          >
                            <span class="sr-only">Close panel</span>
                            <!-- Heroicon name: outline/x -->
                            <svg
                              class="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="2"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div

                    class="relative mt-6 flex-1 px-4 sm:px-6"
                  >
                    <div :class="border ? 'border-t border-gray-200 dark:border-gray-700' : ''">
                      <slot name="content" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
