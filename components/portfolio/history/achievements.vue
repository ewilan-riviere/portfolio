<script setup lang="ts">
const projects = await $fetch('/api/projects')
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
</script>

<template>
  <div id="statistics" class="medium-container shadow-inner">
    <div class="container">
      <div class="mx-auto py-16 lg:py-20 xl:py-24 px-10">
        <div class="grid md:grid-cols-2 gap-5 md:gap-8 lg:grid-cols-3 xl:gap-5">
          <div
            v-for="achivement in achivements"
            :key="achivement.slug"
            class="flex"
          >
            <div>
              <svg-icon
                :name="`achievement-${achivement.slug}`"
                class="mx-auto h-12 w-auto md:h-20 text-purple-600"
              />
            </div>
            <div class="pt-2 md:pl-5 md:pt-0 w-full">
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
