<template>
  <section class="text-gray-700 body-font">
    <div class="bg-indigo-800">
      <div
        class="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
      >
        <h2 class="text-2xl font-medium tracking-tight text-white sm:text-3xl">
          <div class="mb-2">Mes formations</div>
          <div class="w-20 h-1 mr-auto bg-indigo-500 rounded" />
        </h2>
        <div class="mt-8 lex lg:mt-0 lg:flex-shrink-0">
          <div class="inline-flex rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
            >
              Get started
            </a>
          </div>
          <div class="inline-flex ml-3 rounded-md shadow">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap px-5 mx-auto md:container">
      <div
        v-for="(formation, id) in formations"
        :key="id"
        class="relative flex w-full pt-10 pb-20 mx-auto sm:items-center lg:w-2/3"
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
            <div class="items-center mb-5 lg:mb-0 lg:flex">
              <h2 class="mb-1 text-xl font-medium text-gray-900 title-font">
                {{ formation.title }}
              </h2>
              <span class="hidden mx-2 my-auto text-gray-900 lg:block">-</span>
              <a
                :href="formation.place.link"
                target="_blank"
                rel="noopener noreferrer"
                class="my-auto text-gray-600 transition-colors duration-300 border-b border-gray-500 hover:text-gray-900 hover:border-gray-900"
              >
                {{ formation.place.name }}
              </a>
            </div>
            <p
              class="leading-relaxed word-wraping"
              lang="fr"
              v-html="formation.resume"
            ></p>
            <div class="mt-8">
              <ul class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <li
                  v-for="project in formation.projects"
                  :key="project.id"
                  class="col-span-1 bg-white divide-y divide-gray-200 rounded-lg shadow"
                >
                  <div
                    class="flex items-center justify-between w-full p-6 space-x-6"
                  >
                    <div class="flex-1 truncate">
                      <div class="flex items-center space-x-3">
                        <h3 class="text-sm font-medium text-gray-900 truncate">
                          {{ project.title }}
                        </h3>
                      </div>
                      <p
                        class="mt-1 text-sm text-gray-500 truncate"
                        v-html="textOverflow(project.extract)"
                      ></p>
                    </div>
                    <img
                      class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50"
                      :src="project.assets.image"
                      :alt="project.title"
                    />
                  </div>
                </li>
              </ul>
            </div>
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

  methods: {
    textOverflow(string) {
      if (string !== null) {
        return `${string.replace(/^(.{80}[^\s]*).*/, '$1')}...`
      } else {
        return ''
      }
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
