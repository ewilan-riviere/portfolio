<script setup lang="ts">
import { Navigation, Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperInterface } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'
import { shuffleArray } from '~~/utils/methods'

const technologies = await $fetch('/api/technologies')
shuffleArray(technologies)

const controlledSwiper = ref<SwiperInterface>()
const setControlledSwiper = (swiper: SwiperInterface) =>
  (controlledSwiper.value = swiper)
</script>

<template>
  <div
    class="max-w-6xl rounded-md mx-auto shadow bg-gray-50 dark:bg-gray-800 py-3"
  >
    <div class="text-purple-600 text-xl italic text-center pt-3">
      {{ technologies.length }} technologies I love
    </div>
    <client-only>
      <swiper
        :modules="[Navigation, Pagination, Controller]"
        :controller="{ control: controlledSwiper }"
        :slides-per-view="1"
        :space-between="25"
        navigation
        grab-cursor
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="setControlledSwiper"
        :slides-per-group="3"
        :breakpoints="{
          600: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
          1300: {
            slidesPerView: 4,
          },
        }"
      >
        <swiper-slide
          v-for="technology in technologies"
          :key="technology.slug"
          class="w-80"
        >
          <a
            :href="technology.link"
            target="_blank"
            rel="noopener noreferrer"
            class="group"
          >
            <svg-icon
              :name="`techno/${technology.slug}`"
              class="h-40 w-full rounded-lg text-gray-400 group-hover:text-gray-500 transition-colors duration-100 mx-auto px-6"
            />
          </a>
        </swiper-slide>
        <button
          @click="controlledSwiper?.slideNext()"
          class="absolute z-10 top-0 right-0"
        >
          slide next
        </button>
        <button
          @click="controlledSwiper?.slidePrev()"
          class="absolute z-10 top-0 left-0"
        >
          slide previous
        </button>
      </swiper>
    </client-only>
  </div>
</template>

<style lang="css" scoped>
::v-deep(.swiper) {
  & .swiper-wrapper {
    @apply pb-3;
  }
  & .swiper-pagination {
    @apply bottom-0;
  }
}

::v-deep(.swiper-button-next) {
  @apply hidden !important;
}
::v-deep(.swiper-button-prev) {
  @apply hidden !important;
}
::v-deep(.swiper-pagination-bullet) {
  @apply bg-gray-800;
}
::v-deep(.swiper-pagination-bullet-active) {
  @apply bg-purple-600;
}
</style>
