<script lang="ts" setup>
import type { Project } from 'types/project'

const { fetchData } = useApi()
const { shuffle } = useData()
const api = await fetchData<Project[]>('/api/projects', {
  'filter[isFavorite]': true,
  'filter[isOpenSource]': true,
  'context': 'personal',
  'sort': '-createdAt',
})

const list = ref<Project[]>()
list.value = shuffle(api)

const projects = ref<Project[]>()
projects.value = list.value.slice(0, 4)

const placeholder = '/images/placeholder.webp'
</script>

<template>
  <div v-if="projects" class="overflow-hidden">
    <div class="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
      <div
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8"
      >
        <div class="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl"
          >
            Open source
          </h2>
          <p class="mt-6 text-xl leading-8 text-gray-300">
            I write some open source projects, mostly for PHP and Laravel but
            some for JavaScript / TypeScript too with Node.js or Vite.
          </p>
          <p class="mt-6 text-base leading-7 text-gray-300">
            My favorite subjects are eBooks, SVG, XML and useful helpers for improve developer experience.
          </p>
          <div class="mt-10 flex">
            <app-button :to="{ name: 'projects' }">
              Discover projects
              <span aria-hidden="true" class="ml-1">&rarr;</span>
            </app-button>
          </div>
        </div>
        <div
          class="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents"
        >
          <div
            class="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end"
          >
            <img
              :src="projects[0].image ?? placeholder"
              alt=""
              class="aspect-[7/5] w-[37rem] img"
            >
          </div>
          <div
            class="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8"
          >
            <div
              class="order-first flex w-64 flex-none justify-end self-end lg:w-auto"
            >
              <img
                :src="projects[1].image ?? placeholder"
                alt=""
                class="aspect-[4/3] w-[24rem] flex-none img"
              >
            </div>
            <div class="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
              <img
                :src="projects[2].image ?? placeholder"
                alt=""
                class="aspect-[7/5] w-[37rem] flex-none img"
              >
            </div>
            <div
              class="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none"
            >
              <img
                :src="projects[3].image ?? placeholder"
                alt=""
                class="aspect-[4/3] w-[24rem] img"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.img {
  @apply max-w-none rounded-2xl bg-gray-800 object-cover;
}
</style>
