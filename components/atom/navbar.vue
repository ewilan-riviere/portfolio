<script setup lang="ts">
const isDark = ref(false)

const { isScroll } = useScroll()
</script>

<template>
  <section
    :class="[
      {
        'bg-gray-200 dark:bg-black !text-black dark:!text-white bg-opacity-60':
          isScroll,
      },
    ]"
    class="fixed top-0 z-40 w-full text-white transition-all duration-300"
  >
    <div class="mx-auto max-w-7xl">
      <layout-header
        :class="isScroll ? 'border-transparent' : 'border-white'"
        class="border-b border-opacity-50 transition-all duration-300"
      />
    </div>
  </section>
</template>
