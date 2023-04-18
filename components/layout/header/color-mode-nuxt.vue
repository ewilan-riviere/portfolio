<script lang="ts" setup>
const colorMode = useColorMode()
const toggle = () => {
  colorMode.preference === 'dark'
    ? colorMode.preference = 'light'
    : colorMode.preference = 'dark'
}
</script>

<template>
  <button
    class="option rounded-r-full px-2 !border-r !bg-white dark:!bg-gray-800 border-gray-200 dark:border-gray-700 hover:!bg-gray-100 dark:hover:!bg-gray-700 relative h-10 w-10"
    type="button"
    aria-label="Toggle dark mode"
    :title="$t(`app.color-mode.${colorMode.value ? 'light' : 'dark'}`)"
    @click="toggle()"
  >
    <span class="sun">
      <svg-icon name="sun" class="h-6 w-6 icon" />
    </span>
    <span class="moon icon">
      <svg-icon name="moon" class="h-6 w-6 icon" />
    </span>
  </button>
</template>

<style scoped>
.icon {
  @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
}
.moon {
  @apply hidden;
}

.dark .moon {
  @apply block;
}

.dark .sun {
  @apply hidden;
}
</style>
