<script lang="ts" setup>
import { SwiperSlide } from 'swiper/vue'
import { useMainStore } from '~/store/main'
import type { Technology } from '~/types/technology'

const { technologies } = useMainStore()
const { shuffle } = useData()

const technos = computed(() => shuffle<Technology>(technologies))
</script>

<template>
  <section>
    <h2 class="text-2xl">
      {{ $t('about.technologies') }}
    </h2>
    <ClientOnly>
      <AppSwiper>
        <SwiperSlide
          v-for="technology in technos"
          :key="technology.slug"
        >
          <div class="flex">
            <span class="sr-only">
              {{ technology.title }}
            </span>
            <SvgIcon
              :name="technology.icon"
              class="shrink-0 w-48 h-20 rounded-lg text-gray-400 dark:text-gray-200 mx-auto"
            />
          </div>
        </SwiperSlide>
      </AppSwiper>
    </ClientOnly>
  </section>
</template>
