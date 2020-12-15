<template>
  <section class="text-gray-700 body-font">
    <div class="container flex flex-wrap px-5 py-24 mx-auto">
      <div class="w-full mb-20 text-center">
        <h1
          class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
        >
          Mes formations
        </h1>
        <div class="w-20 h-1 mx-auto bg-indigo-500 rounded" />
      </div>
      <div
        v-for="(formation, id) in formations"
        :key="id"
        class="relative flex pt-10 pb-20 mx-auto sm:items-center md:w-2/3"
      >
        <div
          class="absolute inset-0 flex items-center justify-center w-6 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none" />
        </div>
        <div
          class="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-6 h-6 mt-10 text-sm font-medium text-white bg-indigo-500 rounded-full sm:mt-0 title-font"
        >
          {{ id + 1 }}
        </div>
        <div
          class="flex flex-col items-start flex-grow pl-6 md:pl-8 sm:items-center sm:flex-row"
        >
          <div
            class="inline-flex items-center justify-center flex-shrink-0 w-24 h-24 text-indigo-500 bg-indigo-100 rounded-full"
          >
            <div class="formation-logo" v-html="formation.logo.svg"></div>
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <div class="flex">
              <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">
                {{ formation.title }}
              </h2>
              <span class="mx-2 my-auto text-gray-900">-</span>
              <a
                :href="formation.place_link"
                target="_blank"
                rel="noopener noreferrer"
                class="my-auto text-gray-600 transition-colors duration-300 border-b border-gray-500 hover:text-gray-900 hover:border-gray-900"
              >
                {{ formation.place }}
              </a>
            </div>
            <p
              class="leading-relaxed word-wraping"
              lang="fr"
              v-html="formation.resume"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Formations',
  props: {
    formations: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.formation-logo {
  @apply w-3/4 h-full;
}
/deep/ svg {
  @apply w-3/4 h-full mx-auto fill-current text-indigo-500;
}
</style>
