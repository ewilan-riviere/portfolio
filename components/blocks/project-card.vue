<template>
  <section
    class="
      relative
      flex flex-col
      col-span-1
      my-5
      text-center
      divide-y divide-gray-200
      dark:divide-gray-700
      shadow
    "
  >
    <nuxt-link
      :to="
        localePath({
          name: 'projects-slug',
          params: { slug: project.meta.slug },
        })
      "
      class="
        bg-opacity-70
        transition-colors
        duration-100
        dark:bg-gray-800 dark:hover:bg-gray-700
        hover:bg-gray-100
        rounded-t-lg
      "
    >
      <div class="flex flex-col flex-1 p-8">
        <app-img
          :src="`/data/projects/logo/${project.logo}`"
          class="flex-shrink-0 w-32 h-32 mx-auto object-contain"
        />
        <div class="">
          <h3
            class="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-100"
          >
            {{ project.title }}
          </h3>
        </div>
        <dl class="flex flex-col justify-between flex-grow mt-1">
          <dt class="sr-only">
            {{ project.title }}
          </dt>
          <div
            class="
              mt-5
              text-sm
              italic
              dark:text-gray-300
              text-left
              word-wraping
            "
            v-html="limitLength(project.abstract, 150)"
          />
          <dt class="sr-only">Formation</dt>
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
    <component
      :is="project.discover ? 'a' : 'span'"
      class="w-full dark:bg-gray-800 group rounded-b-lg"
      :class="{ 'hover:bg-gray-200 dark:hover:bg-gray-700': project.discover }"
      :href="project.discover"
      target="_blank"
      rel="noopener noreferrer"
    >
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
        <div
          class="
            flex flex-1
            w-0
            -ml-px
            group
            relative
            items-center
            justify-center
            py-4
            text-sm
            font-medium
            text-gray-700
            dark:text-gray-300
            border border-transparent
            transition-colors
            duration-100
          "
        >
          <span v-if="project.discover" class="font-semibold">
            {{ $t('project.discover') }}
          </span>
          <span v-else class="text-sm italic">
            {{ $t('project.coming_soon') }}
          </span>
        </div>
      </div>
    </component>
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
