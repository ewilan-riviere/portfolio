<script setup lang="ts">
const props = defineProps<{
  name?: string
}>()

const currentIcon = computed(() =>
  defineAsyncComponent({
    loader: () => import(`../assets/icons/${props.name}.svg`),
    // loading: https://github.com/jpkleemans/vite-svg-loader/issues/47
    // loader: () => import('../assets/icons/' + props.name + '.svg?component'),
    loadingComponent: {
      template: '<span></span>',
    },
    errorComponent: {
      template: '<span>error</span>',
    },
    delay: 200,
    timeout: 3000,
    suspensible: true,
  })
)
const attrs = useAttrs()
</script>

<template>
  <span>
    <client-only>
      <component :is="currentIcon" :class="attrs.class" />
      <template #fallback>
        <!-- <span v-html="defaultSvg"></span> -->
      </template>
    </client-only>
  </span>
</template>
