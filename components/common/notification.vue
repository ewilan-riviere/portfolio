<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <!-- Global notification live region, render this permanently at the end of the document -->
  <div
    aria-live="assertive"
    class="
      fixed
      z-50
      inset-0
      flex
      items-end
      px-4
      py-6
      pointer-events-none
      sm:p-6 sm:items-start
    "
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <transition name="fade">
        <div
          v-if="$store.state.notificationIsDisplay"
          class="
            max-w-sm
            w-full
            bg-white
            shadow-lg
            rounded-lg
            pointer-events-auto
            ring-1 ring-black ring-opacity-5
            overflow-hidden
          "
        >
          <div class="p-4">
            <div class="flex items-start">
              <div class="flex-shrink-0">
                <svg-icon
                  :name="$store.state.notification.icon"
                  :class="$store.state.notification.color"
                  class="h-6 w-6"
                />
              </div>
              <div class="ml-3 w-0 flex-1 pt-0.5">
                <p class="text-sm font-medium text-gray-900">
                  {{ $t(`notification.${$store.state.notification.title}`) }}
                </p>
                <p class="mt-1 text-sm text-gray-500">
                  {{ $t(`notification.${$store.state.notification.text}`) }}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex">
                <button
                  class="
                    bg-white
                    rounded-md
                    inline-flex
                    text-gray-400
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-indigo-500
                  "
                  @click="$store.commit('toggleNotificationIsDisplay')"
                >
                  <span class="sr-only">Close</span>
                  <!-- Heroicon name: solid/x -->
                  <svg
                    class="h-5 w-5"
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
}
</script>
