<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  reverse?: boolean
  bg?: 'bg-forest-swamp' | 'bg-jungle-forest' | 'bg-jungle-cascade'
}>()
</script>

<template>
  <div class="relative">
    <div
      :class="[
        reverse ? 'gradient-bottom' : 'gradient-top',
        bg ? bg : 'bg-forest-swamp',
      ]"
      class="parallax h-[25rem]"
    ></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2
        v-if="title"
        class="text-center font-header text-4xl font-morpheus text-purple-600 sm:text-5xl lg:text-6xl"
      >
        {{ title }}
      </h2>
      <h3
        v-if="subtitle"
        class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
      >
        {{ subtitle }}
      </h3>
    </div>
  </div>
</template>
