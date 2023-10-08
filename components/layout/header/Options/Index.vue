<template>
  <div class="options flex items-center divide-x">
    <LayoutHeaderOptionsLocaleSwitch />
    <LayoutHeaderOptionsColorSwitch />
  </div>
</template>

<style lang="css" scoped>
.options {
  & :deep(.option) {
    @apply !border shadow-sm h-10 w-12 flex;
    @apply border-gray-100;
    @apply bg-white;
    @apply hover:bg-gray-100;

    & .icon {
      @apply w-6 h-6 m-auto;
    }
  }
  & :deep(.option-left) {
    @apply rounded-l-full pl-1;
  }
  & :deep(.option-right) {
    @apply rounded-r-full pr-1;
  }
}

.dark {
  .options :deep(.option) {
    @apply border-gray-700;
    @apply bg-gray-800;
    @apply hover:bg-gray-700;
  }
}
</style>
