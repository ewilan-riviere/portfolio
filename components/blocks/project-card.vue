<template>
  <section
    class="
      relative
      flex flex-col
      col-span-1
      my-5
      text-center
      transition-colors
      duration-100
      dark:bg-gray-800
      divide-y divide-gray-200
      dark:divide-gray-700 dark:hover:bg-opacity-50
      rounded-lg
      shadow
    "
  >
    <nuxt-link
      :to="
        localePath({
          name: 'projects-slug',
          params: { slug: project.slug },
        })
      "
      class="pb-20 bg-opacity-70"
    >
      <div class="flex flex-col flex-1 px-8 pt-8">
        <img
          v-lazy-load
          class="flex-shrink-0 w-32 h-32 mx-auto object-contain"
          :src="project.assets.image"
          :alt="project.title"
        />
        <div class="">
          <div v-if="project.assets.imageTitle">
            <h3 class="sr-only">
              {{ project.title }}
            </h3>
            <img :src="project.assets.imageTitle" :alt="project.title" />
          </div>
          <h3
            v-else
            class="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ project.title }}
          </h3>
        </div>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">
            {{ project.title }}
          </dt>
          <p
            class="
              mt-5
              text-sm
              italic
              dark:text-gray-300
              text-left
              word-wraping
            "
            v-html="limitLength(project.description, 150)"
          />
          <dt class="sr-only">Type</dt>
          <dd v-if="project.formation" class="mt-3">
            <span
              class="
                px-3
                py-1
                text-xs
                font-medium
                text-gray-700
                bg-primary-100
                dark:bg-primary-800 dark:text-white
                rounded-full
              "
              >{{ project.formation.title }}</span
            >
          </dd>
        </dl>
      </div>
    </nuxt-link>
    <section v-if="project.links" class="absolute bottom-0 w-full">
      <div
        class="
          flex
          -mt-px
          border-t border-gray-200
          dark:border-gray-700
          divide-x divide-gray-200
          dark:divide-gray-700
        "
      >
        <div v-if="project.links.front" class="flex flex-1 w-0 group">
          <a
            v-if="project.links.front.repository"
            :href="project.links.front.repository"
            target="_blank"
            rel="noopener noreferrer"
            class="
              relative
              inline-flex
              items-center
              justify-center
              flex-1
              w-0
              py-4
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300
              border border-transparent
              rounded-br-lg
            "
          >
            <div class="flex items-center">
              <svg-icon
                name="git"
                class="
                  w-6
                  h-6
                  transition-colors
                  duration-300
                  group-hover:text-red-600
                "
              />
              <span
                class="
                  ml-1
                  font-semibold
                  transition-colors
                  duration-300
                  group-hover:text-gray-500
                "
                >Dépôt Git</span
              >
            </div>
          </a>
          <span
            v-else
            class="
              relative
              inline-flex
              items-center
              justify-center
              flex-1
              w-0
              py-4
              text-sm
              italic
              font-medium
              text-gray-400
              border border-transparent
              rounded-br-lg
            "
          >
            Non open-source
          </span>
        </div>
        <div v-if="project.links.front" class="flex flex-1 w-0 -ml-px group">
          <a
            v-if="project.links.front.project"
            :href="project.links.front.project"
            target="_blank"
            rel="noopener noreferrer"
            class="
              relative
              inline-flex
              items-center
              justify-center
              flex-1
              w-0
              py-4
              text-sm
              font-medium
              text-gray-700
              dark:text-gray-300
              border border-transparent
              rounded-br-lg
            "
          >
            <div class="flex items-center">
              <svg-icon
                name="sparkles"
                class="
                  w-6
                  h-6
                  transition-colors
                  duration-300
                  group-hover:text-yellow-300
                "
              />
              <span
                class="
                  ml-1
                  font-semibold
                  transition-colors
                  duration-300
                  group-hover:text-gray-500
                  dark:group-hover:text-gray-200
                "
                >Découvrir</span
              >
            </div>
          </a>
          <span
            v-else
            class="
              relative
              inline-flex
              items-center
              justify-center
              flex-1
              w-0
              py-4
              text-sm
              italic
              font-medium
              text-gray-400
              border border-transparent
              rounded-br-lg
            "
          >
            Bientôt disponible
          </span>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { limitLength } from '@/plugins/utils/methods'
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      limitLength,
    }
  },
}
</script>
