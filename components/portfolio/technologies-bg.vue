<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import { shuffleArray } from '~~/utils/methods'
import { useMainStore } from '~~/store/main'

const { technologies } = useMainStore()
shuffleArray(technologies)

const sliderDiplayed = ref(false)
</script>

<template>
  <div>
    <portfolio-technologies v-if="sliderDiplayed" />
    <div v-else class="overflow-hidden relative cursor-pointer group" title="Display all technologies" @click="sliderDiplayed = !sliderDiplayed">
      <div class="technologies-bg relative h-32">
        <div class="absolute top-0 z-10 flex space-x-12 h-full">
          <div v-for="technology in technologies" :key="technology.slug" class="h-24 w-64 m-auto">
            <svg-icon
              :name="`technology-${technology.slug}`"
              class="h-full w-full rounded-lg text-gray-300 dark:text-gray-800 m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-290%, 0, 0);
  }
}
.technologies-bg {
  animation: slide 60s linear infinite;
  animation-direction: alternate;
}
</style>
