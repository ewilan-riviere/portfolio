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
  <div class="medium-container technologies">
    <div class="text-purple-600 text-xl italic font-semibold text-center pt-3">
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
        loop
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
        <swiper-slide v-for="technology in technologies" :key="technology.slug">
          <div class="p-10">
            <a
              :href="technology.link"
              target="_blank"
              rel="noopener noreferrer"
              class="group hover:bg-gray-100 dark:hover:bg-gray-900 rounded-md block px-6 py-3"
            >
              <svg-icon
                :name="`techno/${technology.slug}`"
                class="h-32 w-full rounded-lg text-gray-400 group-hover:text-gray-500 transition-colors duration-100 mx-auto"
              />
            </a>
          </div>
        </swiper-slide>
        <button
          @click="controlledSwiper?.slideNext()"
          class="swiper-button right-0"
        >
          <svg-icon name="arrow/chevron-right" class="w-6 h-6" />
        </button>
        <button
          @click="controlledSwiper?.slidePrev()"
          class="swiper-button right-10"
        >
          <svg-icon name="arrow/chevron-right" class="w-6 h-6 rotate-180" />
        </button>
      </swiper>
    </client-only>
  </div>
</template>

<style lang="css" scoped>
.technologies :deep(.swiper) {
  & .swiper-wrapper {
    /* @apply pb-3; */
  }
  & .swiper-pagination {
    @apply bottom-3;
  }
  & .swiper-button-next,
  .swiper-button-prev {
    @apply hidden;
  }
  & .swiper-pagination-bullet {
    @apply bg-gray-800;
  }
  & .swiper-pagination-bullet-active {
    @apply bg-purple-600;
  }
}

.dark .technologies :deep(.swiper) {
  & .swiper-pagination-bullet {
    @apply bg-gray-100;
  }
  & .swiper-pagination-bullet-active {
    @apply bg-purple-300;
  }
}

.swiper-button {
  @apply absolute z-10 bottom-0 hover:bg-gray-200 dark:hover:bg-gray-700 p-2 rounded-md transition-colors duration-75 text-gray-700 dark:text-gray-100;
}
</style>
