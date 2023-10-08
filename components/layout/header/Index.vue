<script lang="ts" setup>
const { isScroll } = useScroll()
const sidebarState = useSidebar()

function toggle() {
  sidebarState.value = !sidebarState.value
}
</script>

<template>
  <LayoutContainer :margin="false" fixed class="z-40">
    <header :class="isScroll ? 'mt-1' : 'mt-6'" class="z-50 transition-all">
      <div class="mx-auto">
        <div class="relative">
          <div class="flex justify-between items-center">
            <button class="hover:bg-gray-700 transition-colors p-1 rounded-full block lg:hidden" @click="toggle">
              <SvgIcon name="menu" class="w-8 h-8 text-black dark:text-white" display="block" />
            </button>
            <TypedLink
              :to="{
                name: 'index',
              }"
              aria-label="Home"
              class="origin-left group relative hidden lg:block"
            >
              <SvgIcon
                name="logo/classic"
                class="w-12 h-12 block text-black dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 bg-white dark:bg-gray-900 rounded-full shadow"
              />
            </TypedLink>
            <LayoutHeaderNavbar class="hidden lg:block" />
            <LayoutHeaderOptions />
          </div>
        </div>
      </div>
    </header>
  </LayoutContainer>
</template>

<style scoped>
.router-link-exact-active {
  @apply text-teal-500 dark:text-teal-400;
}
</style>
