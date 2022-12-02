<script lang="ts" setup>
import type { RouteType } from '~~/.nuxt/typed-link'

const route = useRoute()
const { isScroll } = useScroll()
const navItems: {
  title: string
  to: RouteType
}[] = [
  {
    title: 'Home',
    to: {
      name: 'index',
    },
  },
  {
    title: 'About',
    to: {
      name: 'about',
    },
  },
  {
    title: 'Projects',
    to: {
      name: 'projects',
    },
  },
  {
    title: 'Speaking',
    to: {
      name: 'speaking',
    },
  },
  {
    title: 'Uses',
    to: {
      name: 'uses',
    },
  },
]
</script>

<template>
  <header :class="isScroll ? 'mt-1' : 'mt-6'" class="z-50 sm:px-20 mb-16 relative transition-all">
    <div class="mx-auto max-w-7xl fixed w-full">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl flex justify-between items-center">
          <nuxt-link aria-label="Home" class="block origin-left group relative bg-white dark:bg-gray-900 rounded-full shadow" to="/">
            <svg-icon name="logo/classic" class="w-12 h-12 block text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 relative z-10" />
          </nuxt-link>
          <nav>
            <ul class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
              <li class="flex">
                <typed-link v-for="navItem in navItems" :key="navItem.title" :to="navItem.to" class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400">
                  {{ navItem.title }}
                  <span v-if="route.name === navItem.to.name" class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
                </typed-link>
              </li>
            </ul>
          </nav>
          <div class="flex items-center divide-x">
            <layout-locale-switch />
            <layout-color-mode />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-teal-500 dark:text-teal-400;
}
</style>
