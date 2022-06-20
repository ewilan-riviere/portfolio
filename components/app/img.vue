<script setup lang="ts">
import lozad from 'lozad'

const props = defineProps<{
  color?: string
  src?: string
  title?: string
  alt?: string
  placeholder?: string
}>()

const source = ref<string>()
const lazyMedia = ref<HTMLElement>()
const media = ref<HTMLImageElement>()
const defaultImage = ref<HTMLImageElement>()
const display = ref(false)
const attrs = useAttrs()

onMounted(() => {
  source.value = props.src
  lozad(media.value, {
    load(el: HTMLImageElement) {
      el.src = el.dataset.src!
      el.onload = () => {
        display.value = true
        emit('loaded', true)
      }
      el.onerror = () => {
        media.value?.classList.add('hidden')
        defaultImage.value?.classList.remove('hidden')
        display.value = true
      }
    },
  }).observe()
})

const emit = defineEmits<{
  (e: 'loaded', loaded: boolean): void
}>()
</script>

<template>
  <div ref="lazyMedia" class="lazy-media">
    <transition>
      <div
        v-if="!display"
        v-bind="attrs"
        class="placeholder bg-gray-50 dark:bg-gray-800"
        :style="color !== '#ffffff' ? `background-color: ${color};` : ''"
      />
    </transition>
    <img
      ref="media"
      v-bind="attrs"
      :data-src="source"
      :alt="display ? (alt ? alt : title) : ''"
      loading="lazy"
    />
    <img
      ref="defaultImage"
      v-bind="attrs"
      :src="placeholder ? placeholder : '/default.jpg'"
      :alt="display ? (alt ? alt : title) : ''"
      class="hidden"
      loading="lazy"
    />
  </div>
</template>

<style scoped>
.lazy-media {
  position: relative;
}

.placeholder {
  position: absolute;
  height: 100%;
  width: 100%;
}

img {
  height: 100%;
  width: 100%;
}
</style>
