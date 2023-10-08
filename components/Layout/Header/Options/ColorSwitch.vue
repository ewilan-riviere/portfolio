<script lang="ts" setup>
const { isDark, toggle } = useColorScheme()
</script>

<template>
  <button
    class="option option-right"
    :title="$t(`app.color-mode.${isDark ? 'light' : 'dark'}`)"
    @click="toggle"
  >
    <SvgIcon
      name="sun"
      class="icon sun"
    />
    <SvgIcon
      name="moon"
      class="icon moon"
    />
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
