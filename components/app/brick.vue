<script lang="ts" setup>
const props = defineProps<{
  src?: string
}>()

const img = ref<HTMLImageElement>()
const isLoaded = ref(false)

const loadImage = async (url: string, elem: HTMLImageElement) => {
  return new Promise((resolve, reject) => {
    elem.onload = () => {
      setTimeout(() => {
        isLoaded.value = true
        resolve(elem)
      }, 250)
    }
    elem.onerror = reject
    elem.src = url
  })
}

onMounted(async () => {
  await loadImage(props.src ?? '', img.value!)
})
</script>

<template>
  <transition>
    <!-- <img
      ref="img"
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      class="mb-4 transition-opacity rounded-md"
      loading="lazy"
    > -->
    <div
      :class="isLoaded ? 'opacity-100' : 'opacity-0'"
      class="relative mb-4 before:content-[''] before:rounded-md before:absolute before:inset-0 before:bg-black before:bg-opacity-20 transition-opacity rounded-md overflow-hidden"
    >
      <img
        ref="img"
        class="w-full rounded-md"
      >
      <div class="test__body absolute inset-0 p-8 text-white flex flex-col">
        <div class="relative">
          <a
            class="test__link absolute inset-0"
            target="_blank"
            href="/"
          />
          <h1 class="test__title text-3xl font-bold mb-3">
            Title post
          </h1>
          <p class="test__author font-sm font-light">
            Author
          </p>
        </div>
        <div class="mt-auto">
          <span class="test__tag bg-white bg-opacity-60 py-1 px-4 rounded-md text-black">#tag</span>
        </div>
      </div>
    </div>
  </transition>
</template>
