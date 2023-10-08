<script lang="ts" setup>
defineProps<{
  title?: string
  description?: string
  image?: string
}>()
</script>

<template>
  <layout-container>
    <header
      :class="{
        'space-x-6': image,
      }"
      class="max-w-2xl flex items-center"
    >
      <AppImg
        v-if="image"
        :src="image" :alt="title"
        class="h-24 w-24 object-cover rounded-md"
      />
      <div>
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {{ title }}
        </h1>
        <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {{ description }}
        </p>
        <div class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <slot name="header" />
        </div>
      </div>
    </header>
    <div class="mt-16 sm:mt-20">
      <slot />
    </div>
  </layout-container>
</template>

<style scoped></style>
