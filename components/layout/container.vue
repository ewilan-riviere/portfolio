<script lang="ts" setup>
interface Props {
  margin?: boolean
  fixed?: boolean
}

withDefaults(defineProps<Props>(), {
  margin: true,
  fixed: false,
})
</script>

<template>
  <div
    class="sm:px-8" :class="[
      margin ? 'mt-16 sm:mt-32' : 'mt-0 sm:mt-0',
      { 'fixed w-full': fixed },
    ]"
  >
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
