<script lang="ts" setup>
defineProps<{
  social: {
    label: string
    href: string
    title: string
    icon: SvgName
    color: string
    colorDark: string
  }
}>()
</script>

<template>
  <li class="mt-4 flex">
    <a
      class="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500 text-color"
      :href="social.href"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SvgIcon
        :name="social.icon"
        class="h-6 w-6 flex-none fill-zinc-500 transition icon"
      />
      <span class="ml-4">{{ $t(social.label, { social: social.title }) }}</span>
    </a>
  </li>
</template>

<style scoped>
.text-color:hover {
  & .icon {
    color: v-bind(social.color);
  }
}

.dark .text-color:hover {
  & .icon {
    color: v-bind(social.colorDark);
  }
}
</style>
