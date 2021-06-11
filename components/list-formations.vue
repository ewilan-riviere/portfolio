<template>
  <section class="text-gray-700 body-font">
    <div class="flex flex-wrap px-5 mx-auto md:container">
      <div
        v-for="(formation, id) in formations"
        :key="id"
        class="
          relative
          flex
          w-full
          pt-10
          pb-6
          mx-auto
          lg:pb-20
          sm:items-center
          lg:w-2/3
        "
      >
        <div
          class="absolute inset-0 flex items-center justify-center w-6 h-full"
        >
          <div class="w-1 h-full bg-gray-200 pointer-events-none" />
        </div>
        <div
          class="
            relative
            z-10
            inline-flex
            items-center
            justify-center
            flex-shrink-0
            w-6
            h-6
            mt-10
            text-sm
            font-medium
            text-white
            bg-indigo-500
            rounded-full
            sm:mt-0
            title-font
          "
        >
          {{ id + 1 }}
        </div>
        <div
          class="
            flex flex-col
            items-start
            flex-grow
            pl-6
            md:pl-8
            sm:items-center sm:flex-row
          "
        >
          <div
            class="
              inline-flex
              items-center
              justify-center
              flex-shrink-0
              w-24
              h-24
              text-indigo-500
              bg-indigo-100
              rounded-full
            "
          >
            <div class="formation-logo" v-html="formation.image" />
          </div>
          <div class="flex-grow mt-6 sm:pl-6 sm:mt-0">
            <div class="items-center mb-5 lg:mb-0 lg:flex">
              <h3 class="mb-1 text-xl font-medium text-gray-900 title-font">
                {{ formation.title }}
              </h3>
              <span class="hidden mx-2 my-auto text-gray-900 lg:block">-</span>
              <a
                v-if="formation.place"
                :href="formation.place.link"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  my-auto
                  text-gray-600
                  transition-colors
                  duration-300
                  border-b border-gray-500
                  hover:text-gray-900 hover:border-gray-900
                "
              >
                {{ formation.place.name }}
              </a>
            </div>
            <div class="mb-1 italic">
              {{ $formatDate(formation.date.begin) }} -
              {{ $formatDate(formation.date.end) }}
            </div>
            <p
              class="leading-relaxed word-wraping"
              lang="fr"
              v-html="limitLength(formation.resume, 250)"
            />
            <app-button class="mt-6"> En savoir plus </app-button>
            <div class="mt-8">
              <ul
                class="
                  grid
                  max-w-3xl
                  grid-cols-1
                  gap-6
                  md:grid-cols-2
                  xl:grid-cols-3
                "
              >
                <li
                  v-for="project in formation.projects"
                  :key="project.id"
                  class="
                    col-span-1
                    bg-white
                    divide-y divide-gray-200
                    rounded-lg
                    shadow
                  "
                >
                  <div
                    class="
                      flex
                      items-center
                      justify-between
                      w-full
                      p-6
                      space-x-6
                    "
                  >
                    <div class="flex-1 truncate">
                      <div class="flex items-center space-x-3">
                        <h4 class="text-sm font-medium text-gray-900 truncate">
                          {{ project.title }}
                        </h4>
                      </div>
                      <p
                        class="mt-1 text-sm text-gray-500 truncate"
                        v-html="limitLength(project.extract)"
                      />
                    </div>
                    <img
                      class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-50"
                      :src="project.image"
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
import { limitLength } from '@/plugins/utils/methods'
export default {
  name: 'ListFormations',
  props: {
    formations: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      limitLength,
    }
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
