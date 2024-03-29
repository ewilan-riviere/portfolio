<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { useMainStore } from '~/store/main'

const sidebar = ref(false)
const layer = ref(false)
const overlay = ref(false)
const target = ref(null)

const { navbar } = useMainStore()
const sidebarState = useSidebar()

function openSidebar() {
  layer.value = true
  setTimeout(() => {
    overlay.value = true
    sidebar.value = true
  }, 150)
}
function closeSidebar() {
  sidebar.value = false
  overlay.value = false
  setTimeout(() => {
    layer.value = false
  }, 150)

  sidebarState.value = false
}

watch(
  () => sidebarState.value,
  (newVal) => {
    if (newVal)
      openSidebar()
    else closeSidebar()
  },
)

onClickOutside(target, () => {
  closeSidebar()
})
</script>

<template>
  <div
    v-if="layer"
    class="fixed inset-0 z-40 flex"
    role="dialog"
    aria-modal="true"
  >
    <Transition>
      <div
        v-if="overlay"
        class="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
      />
    </Transition>
    <div
      ref="target"
      :class="sidebar ? 'translate-x-0' : '-translate-x-full'"
      class="relative flex w-full max-w-xs flex-1 transform flex-col bg-gray-100 pt-5 pb-4 transition duration-300 ease-in-out dark:bg-gray-800"
    >
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button
          type="button"
          class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          @click="closeSidebar"
        >
          <span class="sr-only">Close sidebar</span>
          <!-- <SvgIcon name="cross" class="h-6 w-6 text-white" /> -->
        </button>
      </div>
      <div class="flex flex-shrink-0 items-center px-4">
        <NuxtLink
          to="/"
          class="inline-flex h-8 w-auto items-center"
          active-class="active-logo"
        >
          <span
            class="inline-flex items-center"
            @click="closeSidebar"
          >
            <SvgIcon
              name="logo/classic"
              class="w-auto h-8 transition-all duration-100 sm:h-10 group-hover:home-logo-shadow"
            />
            <div class="mt-2 ml-3 dark:text-gray-100">
              <SvgIcon
                name="logo/text"
                class="h-6 w-auto"
              />
            </div>
          </span>
        </NuxtLink>
      </div>
      <div class="mt-5 h-0 flex-1 overflow-y-auto">
        <nav class="px-2">
          <div class="space-y-2">
            <TypedLink
              v-for="(item, id) in navbar"
              :key="id"
              :to="item.to"
              class="link group"
              @click="closeSidebar"
            >
              <!-- <SvgIcon
                :name="`nav-${link.icon}`"
                class="w-6 h-6"
              /> -->
              <div>{{ $t(`nav.${item.title}`) }}</div>
            </TypedLink>
            <!-- <hr class="border-gray-700 dark:border-gray-300"> -->
            <!-- <a
              v-for="(link, id) in navigation.external"
              :key="id"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="link group"
              @click="closeSidebar"
            >
              <SvgIcon
                :name="`nav-${link.icon}`"
                class="w-6 h-6"
              />
              <div>{{ $t(`nav.${link.label}`) }}</div>
            </a> -->
          </div>
        </nav>
      </div>
    </div>

    <div
      class="w-14 flex-shrink-0"
      aria-hidden="true"
    >
      <!-- Dummy element to force sidebar to shrink to fit close icon -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.link {
  @apply flex items-center rounded-md text-base leading-5 text-gray-600 hover:bg-gray-200 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 w-full px-2 py-3 font-semibold space-x-1;
}

.router-link-active {
  @apply text-black dark:bg-gray-600 dark:text-white;
}
</style>
