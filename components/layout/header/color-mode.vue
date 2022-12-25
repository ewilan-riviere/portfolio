<script lang="ts" setup>
const { isDark, toggle } = useColorScheme()
</script>

<template>
  <button
    class="option rounded-r-full px-2 !border-r !bg-white dark:!bg-gray-800 border-gray-200 dark:border-gray-700 hover:!bg-gray-100 dark:hover:!bg-gray-700"
    type="button"
    aria-label="Toggle dark mode"
    :title="$t(`app.color-mode.${isDark ? 'light' : 'dark'}`)"
    @click="toggle()"
  >
    <span class="sun">
      <svg-icon name="sun" class="h-6 w-6 block" />
    </span>
    <span class="moon">
      <svg-icon name="moon" class="h-6 w-6 block" />
    </span>
  </button>
</template>

<style scoped>
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
