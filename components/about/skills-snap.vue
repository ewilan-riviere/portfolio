<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { useMainStore } from '~~/store/main'
import type { Technology } from '~~/types/technology'

const { technologies } = useMainStore()
const { shuffle } = useData()

const shuffleTechnologies = ref<Technology[]>()
shuffleTechnologies.value = shuffle<Technology>(technologies)
</script>

<template>
  <section>
    <h2 class="text-2xl">
      Technologies I use
    </h2>
    <p class="mt-3">
      Scroll to see more!
    </p>
    <div
      class="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 space-x-6 mt-10"
    >
      <!-- <div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48" />
    </div> -->
      <a
        v-for="technology in shuffleTechnologies"
        :key="technology.slug"
        :href="technology.link"
        target="_blank"
        rel="noopener noreferrer"
        class="snap-center shrink-0 first:pl-8 last:pr-8 block"
      >
        <svg-icon
          :name="technology.icon"
          :title="technology.title"
          class="shrink-0 w-60 h-20 rounded-lg text-gray-400 dark:text-gray-200"
        />
      </a>
    <!-- <div class="snap-center shrink-0">
      <div class="shrink-0 w-4 sm:w-48" />
    </div> -->
    </div>
    <app-swiper>
      <SwiperSlide
        v-for="technology in shuffleTechnologies"
        :key="technology.slug"
      >
        <svg-icon
          :name="technology.icon"
          :title="technology.title"
          class="shrink-0 w-60 h-20 rounded-lg text-gray-400 dark:text-gray-200"
        />
      </SwiperSlide>
    </app-swiper>
  </section>
</template>

<style scoped></style>
