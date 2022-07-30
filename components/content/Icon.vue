<script setup lang="ts">
import type { Ref } from 'vue'
import { computed, ref, watch } from 'vue'
import { useNuxtApp } from '#imports'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
})
const nuxtApp = useNuxtApp()
// const icon: Ref<IconifyIcon | null> = ref(null)
// const component = computed(() => nuxtApp.vueApp.component(props.name))

// icon.value = await loadIcon(props.name).catch(_ => null)

// watch(() => props.name, async () => {
//   icon.value = await loadIcon(props.name).catch(_ => null)
// })
</script>

<template>
  <div />
  <!-- <div>{{ name }}</div> -->
  <!-- <Iconify v-if="icon" :icon="icon" />
  <Component :is="component" v-else-if="component" />
  <span v-else>{{ name }}</span> -->
</template>
