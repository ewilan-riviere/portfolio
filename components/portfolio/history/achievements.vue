<script setup lang="ts">
import { useMainStore } from '~~/store/main'

const { projects } = useMainStore()
const achievements = [
  {
    slug: 'bachelor',
    value: '+4',
  },
  {
    slug: 'projects',
    value: projects.length,
  },
  {
    slug: 'experience',
    value: `${new Date().getFullYear() - 2018}`,
  },
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
  <div
    id="statistics"
    class="medium-container shadow-inner p-6 lg:py-10 xl:py-12 xl:px-10"
  >
    <div class="container">
      <div class="mx-auto">
        <div class="flex flex-wrap mt-16">
          <div
            v-for="achievement in achievements"
            :key="achievement.slug"
            class="flex m-auto w-40"
          >
            <div>
              <svg-icon
                :name="`achievement-${achievement.slug}`"
                class="mx-auto h-12 w-auto md:h-20 text-purple-600"
              />
            </div>
            <div class="pt-2 md:pl-5 md:pt-0 w-full">
              <h1
                class="font-body text-2xl font-bold text-purple-600 md:text-4xl"
              >
                {{ achievement.value }}
              </h1>
              <h4
                class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
              >
                {{ $t(`achievements.${achievement.slug}`) }}
              </h4>
            </div>
          </div>
        </div>
        <div class="flex mt-12">
          <app-button class="mx-auto" @click="toggle">
            <div class="flex items-center space-x-2">
              <span>
                {{ $t('history.open') }}
              </span>
              <svg-icon
                name="arrow-chevron-right"
                :class="opened ? 'rotate-45' : ''"
                class="w-5 h-5 transition-transform duration-75"
              />
            </div>
          </app-button>
        </div>
      </div>
    </div>
  </div>
</template>
