<script lang="ts" setup>
const show = ref(false)
function loaded(loaded: boolean) {
  show.value = loaded
}
</script>

<template>
  <div
    :class="show ? 'opacity-100' : 'opacity-0'"
    class="relative transition-opacity duration-150 group"
  >
    <div class="transition-colors duration-100 absolute -z-10 inset-0 rounded-full">
      <div class="rainbow-flag group-hover:before:opacity-100 group-active:after:opacity-100 group-active:before:opacity-0 h-full w-full rounded-full" />
    </div>
    <app-img
      src="/images/ewilan-riviere.webp"
      alt="ewilan riviere"
      class="rounded-full p-[0.05rem]"
      @loaded="loaded"
    />
  </div>
</template>

<style scoped></style>
