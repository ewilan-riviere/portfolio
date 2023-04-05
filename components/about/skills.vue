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
    <app-swiper>
      <SwiperSlide
        v-for="technology in shuffleTechnologies"
        :key="technology.slug"
      >
        <div :title="technology.title" class="flex">
          <svg-icon
            :name="technology.icon"
            class="shrink-0 w-48 h-20 rounded-lg text-gray-400 dark:text-gray-200 mx-auto"
          />
        </div>
      </SwiperSlide>
    </app-swiper>
  </section>
</template>
