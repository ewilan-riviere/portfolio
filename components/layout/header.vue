<script lang="ts" setup>
const { isScroll } = useScroll()
</script>

<template>
  <layout-container :margin="false" fixed class="z-40">
    <header :class="isScroll ? 'mt-1' : 'mt-6'" class="z-50 mb-16 transition-all">
      <div class="mx-auto">
        <div class="relative">
          <div class="flex justify-between items-center">
            <typed-link
              :to="{
                name: 'index',
              }"
              aria-label="Home" class="block origin-left group relative bg-white dark:bg-gray-900 rounded-full shadow"
            >
              <svg-icon name="logo/classic" class="w-12 h-12 block text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 relative z-10" />
            </typed-link>
            <layout-header-navbar />
            <div class="flex items-center divide-x">
              <layout-header-locale-switch />
              <layout-header-color-mode />
            </div>
          </div>
        </div>
      </div>
    </header>
  </layout-container>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-teal-500 dark:text-teal-400;
}
</style>
