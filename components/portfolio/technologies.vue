<script setup lang="ts">
const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}
const technologies = await $fetch('/api/technologies')
shuffleArray(technologies)
</script>

<template>
  <div
    class="max-w-5xl rounded-md mx-auto shadow-lg bg-gray-50 dark:bg-gray-800 py-6"
  >
    <div class="text-purple-600 text-xl italic text-center pt-6">
      See {{ technologies.length }} technologies what I love
    </div>
    <div class="relative overflow-hidden mt-3">
      <div class="relative overflow-auto">
        <!-- Contents -->
        <div class="relative w-full flex gap-20 snap-x overflow-x-auto p-5">
          <div class="snap-center shrink-0 hidden">
            <div class="shrink-0 w-4 sm:w-48"></div>
          </div>
          <a
            v-for="technology in technologies"
            :href="technology.link"
            target="_blank"
            rel="noopener noreferrer"
            class="snap-center shrink-0 first:pl-8 last:pr-8 group"
          >
            <svg-icon
              :name="`techno/${technology.slug}`"
              class="shrink-0 w-80 h-40 rounded-lg text-gray-400 group-hover:text-gray-500 transition-colors duration-100"
            />
          </a>
          <div class="snap-center shrink-0 hidden">
            <div class="shrink-0 w-4 sm:w-48"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
