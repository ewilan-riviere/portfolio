<script setup lang="ts">
const projects = await $fetch('/api/projects')
const achivements = [
  {
    name: 'Training',
    slug: 'training',
    value: `Bachelor +4`,
  },
  {
    name: 'Projects',
    slug: 'projects',
    value: projects.length,
  },
  {
    name: 'Experience',
    slug: 'experience',
    value: `${new Date().getFullYear() - 2018} years`,
  },
]
</script>

<template>
  <div class="bg-gray-50 dark:bg-gray-800 shadow" id="statistics">
    <div class="container">
      <div
        class="mx-auto w-5/6 py-16 md:w-11/12 lg:py-20 xl:py-24 2xl:w-full px-10"
      >
        <div class="grid md:grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3 xl:gap-5">
          <div
            v-for="achivement in achivements"
            :key="achivement.slug"
            class="flex flex-col items-center justify-start lg:justify-center text-center md:flex-row md:text-left"
          >
            <div>
              <svg-icon
                :name="`achievement-${achivement.slug}`"
                class="mx-auto h-12 w-auto md:h-20 text-purple-600"
              />
            </div>
            <div class="pt-2 md:pl-5 md:pt-0">
              <h1
                class="font-body text-2xl font-bold text-purple-600 md:text-4xl"
              >
                {{ achivement.value }}
              </h1>
              <h4
                class="text-grey-dark font-header text-base font-medium leading-loose md:text-xl"
              >
                {{ achivement.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
