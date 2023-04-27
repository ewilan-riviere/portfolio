<script lang="ts" setup>
const isDev = import.meta.env.DEV
</script>

<template>
  <div
    :class="{
      'debug-screens': isDev,
    }"
    class="flex h-full flex-col bg-zinc-50 dark:bg-black"
  >
    <div class="fixed inset-0 flex justify-center sm:px-8">
      <div class="flex w-full max-w-7xl lg:px-8">
        <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
      </div>
    </div>
    <div class="mb-28" />
    <layout-header />
    <layout-sidebar />
    <main class="min-h-[60vh]">
      <slot />
    </main>
    <layout-footer />
  </div>
</template>

<style scoped></style>
