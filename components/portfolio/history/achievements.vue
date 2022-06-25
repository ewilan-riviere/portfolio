<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { projects } = useMainStore()
const achivements = [
  {
    name: 'Bachelor',
    slug: 'training',
    value: '+4'
  },
  {
    name: 'Projects',
    slug: 'projects',
    value: projects.length
  },
  {
    name: 'Experience years',
    slug: 'experience',
    value: `${new Date().getFullYear() - 2018}`
  }
]
const opened = ref(false)
const emit = defineEmits<{
  (e: 'opened', opened: boolean): void
}>()
const toggle = () => {
  opened.value = !opened.value
  emit('opened', opened.value)
}
</script>

<template>
  <div id="statistics" class="medium-container shadow-inner p-6 lg:py-10 xl:py-12 xl:px-10">
    <div class="container">
      <div class="mx-auto">
        <div class="grid md:grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3 xl:gap-5 mt-16">
          <div v-for="achivement in achivements" :key="achivement.slug" class="flex">
            <div>
              <svg-icon :name="`achievement-${achivement.slug}`" class="mx-auto h-12 w-auto md:h-20 text-purple-600" />
            </div>
            <div class="pt-2 md:pl-5 md:pt-0 w-full">
              <h1 class="font-body text-2xl font-bold text-purple-600 md:text-4xl">
                {{ achivement.value }}
              </h1>
              <h4 class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl">
                {{ achivement?.name }}
              </h4>
            </div>
          </div>
        </div>
        <div class="flex mt-12">
          <app-button class="mx-auto" @click="toggle">
            <div class="flex items-center space-x-2">
              <span>Open history</span>
              <svg-icon name="arrow-chevron-right" :class="opened ? 'rotate-45' : ''"
                class="w-5 h-5 transition-transform duration-75" />
            </div>
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>
