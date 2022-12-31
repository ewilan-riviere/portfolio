<script lang="ts" setup>
import { useMainStore } from '~~/store/main'

const route = useRoute()
const { navbar } = useMainStore()
</script>

<template>
  <nav>
    <ul
      class="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
    >
      <li class="flex">
        <typed-link
          v-for="navItem in navbar"
          :key="navItem.title"
          :to="navItem.to"
          class="relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400"
        >
          {{ navItem.title }}
          <span
            v-if="route.name === navItem.to.name"
            class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"
          />
        </typed-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
