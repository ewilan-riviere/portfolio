<script lang="ts" setup>
defineProps<{
  to: any
}>();
</script>

<template>
  <NuxtLinkLocale :to="to">
    <slot />
  </NuxtLinkLocale>
</template>
