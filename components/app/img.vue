<script lang="ts" setup>
const props = defineProps<{
  color?: string
  src?: string
  title?: string
  alt?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'loaded', loaded: boolean): void
}>()

const source = ref<string>()
const media = ref<HTMLImageElement>()
const defaultImage = ref<HTMLImageElement>()
const display = ref(false)
const attrs = useAttrs()

onMounted(() => {
  source.value = props.src

  if (window.IntersectionObserver) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const media = entry.target
          if (media instanceof HTMLImageElement) {
            media.src = source.value ?? props.placeholder ?? ''
            media.onload = () => {
              display.value = true
              emit('loaded', true)
            }
            media.onerror = () => {
              media.classList.add('hidden')
              defaultImage.value?.classList.remove('hidden')
              display.value = true
            }
          }

          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -200px 0px' })
    if (media.value)
      observer.observe(media.value)
  }
})
</script>

<template>
  <div
    class="lazy-media"
  >
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
    >
    <img
      ref="defaultImage"
      v-bind="attrs"
      :src="placeholder ? placeholder : '/default.webp'"
      :alt="display ? (alt ? alt : title) : ''"
      class="hidden object-cover"
      loading="lazy"
    >
  </div>
</template>

<style lang="css" scoped>
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
