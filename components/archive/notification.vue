<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="
      fixed
      inset-0
      flex
      items-end
      px-4
      py-6
      pt-20
      pointer-events-none
      sm:px-6 sm:items-start
    "
  >
    <div class="flex flex-col items-center w-full space-y-4 sm:items-end">
      <!--
      Notification panel, dynamically insert this into the live region when it needs to be displayed

      Entering: "transform ease-out duration-300 transition"
        From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        To: "translate-y-0 opacity-100 sm:translate-x-0"
      Leaving: "transition ease-in duration-100"
        From: "opacity-100"
        To: "opacity-0"
    -->
      <transition name="fade">
        <div
          v-if="isDisplay"
          class="
            w-full
            max-w-sm
            overflow-hidden
            bg-white
            dark:bg-gray-900
            rounded-lg
            shadow-lg
            pointer-events-auto
            ring-1 ring-black ring-opacity-5
          "
        >
          <div v-if="message" class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <!-- Heroicon name: outline/check-circle -->
                <svg
                  class="w-6 h-6 text-green-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ message.title }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ message.text }}
                </p>
              </div>
              <div class="flex flex-shrink-0 ml-4">
                <button
                  class="
                    inline-flex
                    text-gray-400
                    bg-white
                    dark:bg-gray-900
                    rounded-md
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-primary-500
                  "
                  @click="isDisplay === false"
                >
                  <span class="sr-only">Close</span>
                  <!-- Heroicon name: solid/x -->
                  <svg
                    class="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notification',
  props: {
    display: {
      type: Boolean,
      default: false,
    },
    message: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isDisplay: false,
    }
  },
  watch: {
    display(newValue, oldValue) {
      this.isDisplay = newValue
    },
  },
  created() {
    this.isDisplay = this.display
  },
}
</script>
