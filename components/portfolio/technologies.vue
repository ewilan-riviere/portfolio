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
        :slides-per-group="3"
        :breakpoints="{
          600: {
            slidesPerView: 2,
          },
          800: {
            slidesPerView: 3,
          },
          900: {
            slidesPerView: 4,
          },
          1100: {
            slidesPerView: 5,
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
                :name="`technology-${technology.slug}`"
                class="h-24 w-full rounded-lg text-gray-300 dark:text-gray-800 group-hover:text-gray-700 transition-colors duration-100 mx-auto"
              />
            </a>
          </div>
        </swiper-slide>
        <button
          class="swiper-button right-6"
          @click="controlledSwiper?.slideNext()"
        >
          <svg-icon name="arrow-chevron-right" class="w-6 h-6" />
        </button>
        <button
          class="swiper-button right-16"
          @click="controlledSwiper?.slidePrev()"
        >
          <svg-icon name="arrow-chevron-right" class="w-6 h-6 rotate-180" />
        </button>
      </swiper>
    </client-only>
  </div>
</template>

<style lang="css" scoped>
.technologies :deep(.swiper) {
  @apply pb-6;

  & .swiper-pagination {
    @apply bottom-0;
  }

  & .swiper-button-next,
  .swiper-button-prev {
    @apply hidden;
  }

  & .swiper-pagination-bullet {
    @apply bg-gray-400;
  }

  & .swiper-pagination-bullet-active {
    @apply bg-gray-300;
  }
}

.dark .technologies :deep(.swiper) {
  & .swiper-pagination-bullet {
    @apply bg-gray-500;
  }

  & .swiper-pagination-bullet-active {
    @apply bg-gray-600;
  }
}

.swiper-button {
  @apply absolute z-10 bottom-0 p-2 rounded-md transition-colors duration-75 text-gray-700;
}

.swiper-button:hover {
  @apply bg-gray-200;
}

.dark {
  & .swiper-button {
    @apply text-gray-100;
  }

  & .swiper-button:hover {
    @apply !bg-gray-700;
  }
}
</style>
