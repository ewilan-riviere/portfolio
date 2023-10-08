<script lang="ts" setup>
const props = defineProps<{
  content?: string
}>()

const ready = ref(false)
const html = ref<string>()
html.value = props.content

onMounted(() => {
  ready.value = true
})
</script>

<template>
  <div>
    <div v-if="ready" v-html="html" />
  </div>
</template>
