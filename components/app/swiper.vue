<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper } from 'swiper/vue'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import type { Swiper as SwiperType } from 'swiper/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const onSwiper = (swiper: SwiperType) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const modules = [Navigation, Pagination, Scrollbar, A11y]
</script>

<template>
  <Swiper
    :modules="modules"
    :slides-per-view="3"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <slot />
  </Swiper>
</template>
