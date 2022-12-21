<script lang="ts" setup>
const isDark = ref(false)

const toggleDark = () => {
  const root = document.documentElement.classList
  if (root.contains('dark')) {
    root.toggle('light')
    root.remove('dark')

    localStorage.setItem('color-scheme', 'light')
    isDark.value = false
  }
  else {
    root.toggle('dark')
    root.remove('light')

    localStorage.setItem('color-scheme', 'dark')
    isDark.value = true
  }
}

const setColorMode = () => {
  if (process.client) {
    const color = localStorage.getItem('color-scheme')
    if (color && color === 'dark')
      isDark.value = true
    else isDark.value = false
  }
}
setColorMode()
</script>

<template>
  <button
    class="option rounded-r-full px-2 !border-r"
    type="button"
    aria-label="Toggle dark mode"
    :title="$t(`app.color-mode.${isDark ? 'light' : 'dark'}`)"
    @click="toggleDark()"
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
