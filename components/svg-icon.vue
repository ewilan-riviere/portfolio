<script setup lang="ts">
const props = defineProps<{
  name?: string
}>()

const currentIcon = computed(() =>
  defineAsyncComponent({
    // loader: () => import(`../assets/icons/${props.name}.svg`),
    // loading: https://github.com/jpkleemans/vite-svg-loader/issues/47
    loader: () => import('../assets/' + props.name + '.svg?component'),
    loadingComponent: {
      template: '<span></span>'
    },
    errorComponent: {
      template: '<span>error</span>'
    },
    delay: 200,
    timeout: 3000,
    suspensible: true
  })
)
const attrs = useAttrs()

const defaultSvg = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" class="${attrs.class}"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>`
</script>

<template>
  <span>
    <client-only>
      <component :is="currentIcon" :class="attrs.class" />
      <template #fallback>
        <span v-html="defaultSvg"></span>
      </template>
    </client-only>
  </span>
</template>
