<script lang="ts" setup>
import { importSvg } from '#icons'

const props = defineProps<{
  name: SvgName
}>()

const svg = ref<string>('')
importSvg(props.name).then(res => svg.value = res)

watch(() => props.name, async (name) => {
  svg.value = await importSvg(name)
})
</script>

<template>
  <span v-html="svg" />
</template>
