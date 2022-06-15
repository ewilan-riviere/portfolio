<script setup lang="ts">
const about = await $fetch("/api/about")

const showRainbow = ref(false)
const loaded = (loaded: boolean) => {
  showRainbow.value = loaded
}
</script>

<template>
  <div class="relative py-8">
    <div class="absolute inset-0 z-20 parallax bg-forest-swamp gradient-top" />
    <div class="container relative z-30 h-screen">
      <div
        class="flex flex-col items-center justify-center lg:flex-row center-full w-full"
      >
        <div class="relative h-56 w-56">
          <transition>
            <div
              v-if="showRainbow"
              class="rainbow absolute -z-10 inset-0 rounded-full"
            ></div>
          </transition>
          <app-img
            src="https://ewilan-riviere.com/images/author.webp"
            alt="ewilan riviere"
            class="rounded-full p-0.5"
            @loaded="loaded"
          />
        </div>
        <div class="pt-8 sm:pt-10 lg:pl-8 lg:pt-0 text-center lg:text-left">
          <h1 class="text-4xl sm:text-5xl font-morpheus">
            {{ about.name }}
          </h1>
          <h2
            class="max-w-lg mx-auto mt-3 text-xl text-gray-800 dark:text-gray-200 sm:max-w-3xl lg:font-pelagiad lg:text-3xl"
          >
            {{ about.professionalTitle }}
          </h2>
          <app-social
            class="flex justify-center lg:justify-start space-x-1 lg:space-x-3 mt-5"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.rainbow {
  background: linear-gradient(
    90deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 154, 0, 1) 10%,
    rgba(208, 222, 33, 1) 20%,
    rgba(79, 220, 74, 1) 30%,
    rgba(63, 218, 216, 1) 40%,
    rgba(47, 201, 226, 1) 50%,
    rgba(28, 127, 238, 1) 60%,
    rgba(95, 21, 242, 1) 70%,
    rgba(186, 12, 248, 1) 80%,
    rgba(251, 7, 217, 1) 90%,
    rgba(255, 0, 0, 1) 100%
  );
}
</style>
