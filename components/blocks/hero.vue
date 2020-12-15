<template>
  <section class="text-gray-700 body-font">
    <div
      class="container flex flex-col items-center px-5 py-24 mx-auto md:flex-row"
    >
      <div
        class="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"
      >
        <h1
          class="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl"
        >
          Portfolio<br />
          d'Ewilan Rivière
        </h1>
        <p class="mb-8 leading-relaxed">
          Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
          plant cold-pressed tacos poke beard tote bag. Heirloom echo park
          mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
          try-hard chambray.
        </p>
        <div class="flex justify-center">
          <button
            class="inline-flex px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
          >
            Button
          </button>
          <button
            class="inline-flex px-6 py-2 ml-4 text-lg text-gray-700 bg-gray-200 border-0 rounded focus:outline-none hover:bg-gray-300"
          >
            Button
          </button>
        </div>
      </div>
      <div class="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <swiper class="rounded"></swiper>
      </div>
    </div>
  </section>
</template>

<script>
import swiper from '@/components/blocks/swiper'

export default {
  name: 'Hero',
  components: {
    swiper,
  },
}
</script>

<style lang="scss" scoped></style>
