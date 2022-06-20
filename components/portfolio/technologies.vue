<script setup lang="ts">
import { Navigation, Pagination, Controller } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Swiper as SwiperInterface } from 'swiper/types'

import 'swiper/css'
import 'swiper/css/pagination'
import { shuffleArray } from '~~/utils/methods'
import { useMainStore } from '~~/store/main'

const { technologies } = useMainStore()
shuffleArray(technologies)

const controlledSwiper = ref<SwiperInterface>()
const setControlledSwiper = (swiper: SwiperInterface) =>
  (controlledSwiper.value = swiper)
</script>

<template>
  <div class="technologies">
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
        :slides-per-group="3"
        :breakpoints="{
          400: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
          },
        }"
        @swiper="setControlledSwiper"
      >
        <swiper-slide v-for="technology in technologies" :key="technology.slug">
          <div class="p-5">
            <a
              :href="technology.link"
              target="_blank"
              rel="noopener noreferrer"
              class="group rounded-md block px-2 py-1"
            >
              <svg-icon
                :name="`techno/${technology.slug}`"
                class="h-32 w-full rounded-lg text-gray-400 group-hover:text-gray-500 transition-colors duration-100 mx-auto"
              />
            </a>
          </div>
        </swiper-slide>
        <button
          class="swiper-button right-6"
          @click="controlledSwiper?.slideNext()"
        >
          <svg-icon name="arrow/chevron-right" class="w-6 h-6" />
        </button>
        <button
          class="swiper-button right-16"
          @click="controlledSwiper?.slidePrev()"
        >
          <svg-icon name="arrow/chevron-right" class="w-6 h-6 rotate-180" />
        </button>
      </swiper>
    </client-only>
  </div>
</template>

<style lang="css" scoped>
.technologies :deep(.swiper) {
  & .swiper-pagination {
    @apply bottom-0;
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
