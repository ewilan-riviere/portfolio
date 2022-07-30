<script setup lang="ts">
const props = defineProps<{
  name?: string
}>()

const currentIcon = computed(() =>
  defineAsyncComponent({
    loader: () => import(`../assets/icons/${props.name}.svg`),
    loadingComponent: {
      template: '<span></span>',
    },
    errorComponent: {
      template: '<span>error</span>',
    },
    delay: 200,
    timeout: 3000,
    suspensible: true,
  }),
)
const attrs = useAttrs()
const defaultSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="transparent" d="M0 0h24v24H0z"/></svg>'
</script>

<template>
  <span>
    <client-only>
      <component
        :is="currentIcon"
        :class="attrs.class"
      />
      <template #fallback>
        <span
          :class="attrs.class"
          v-html="defaultSvg"
        />
      </template>
    </client-only>
  </span>
</template>
