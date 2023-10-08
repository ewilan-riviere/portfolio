<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import type { SwiperModule, SwiperOptions } from 'swiper/types'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const modules: SwiperModule[] = [Pagination, Navigation, Autoplay]
const main: SwiperOptions = {
  loop: true,
  spaceBetween: 50,
  autoplay: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    800: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
}
</script>

<template>
  <div class="app-swiper mt-10">
    <Swiper
      class="relative !pb-10"
      :modules="modules"
      :loop="main.loop"
      :space-between="main.spaceBetween"
      :autoplay="main.autoplay"
      :slides-per-view="main.slidesPerView"
      :slides-per-group="main.slidesPerGroup"
      :grab-cursor="main.grabCursor"
      :navigation="main.navigation"
      :pagination="main.pagination"
      :breakpoints="main.breakpoints"
    >
      <slot />
      <div class="swiper-pagination" />
      <div class="swiper-button swiper-button-prev">
        <SvgIcon name="chevron-right" class="w-8 h-8" />
      </div>
      <div class="swiper-button swiper-button-next">
        <SvgIcon name="chevron-right" class="w-8 h-8" />
      </div>
    </Swiper>
  </div>
</template>

<style lang="css" scoped>
.app-swiper {
  @apply relative mx-auto;
  & .swiper-button {
    top: unset;
    @apply absolute bottom-0 w-10 rounded-md transition-colors duration-100 hover:bg-gray-300;
  }
  & .swiper-button::after {
    content: none !important;
  }
}
.app-swiper {
  & .swiper-button-prev {
    left: unset !important;
    @apply right-14 rotate-180 transform;
  }
  & .swiper-button-prev,
  & .swiper-button-next {
    @apply absolute bottom-0 w-10 rounded-md text-primary-500 transition-colors duration-100 hover:bg-gray-300;
    & svg {
      @apply m-auto h-8 w-8 text-gray-900;
    }
  }
  & :deep(.swiper-pagination) {
    @apply bottom-1 cursor-default;
    & .swiper-pagination-bullet {
      @apply bg-primary-600;
    }
    & .swiper-pagination-bullet-active {
      @apply bg-primary-600;
    }
  }
}
.dark {
  & .app-swiper {
    & .swiper-button-prev,
    & .swiper-button-next {
      @apply hover:bg-gray-700;
      & svg {
        @apply text-gray-400;
      }
    }
    & .swiper-pagination {
      & .swiper-pagination-bullet {
        @apply bg-primary-600 opacity-60;
      }
      & .swiper-pagination-bullet-active {
        @apply bg-primary-300 opacity-100;
      }
    }
  }
}
</style>
