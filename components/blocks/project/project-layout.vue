<template>
  <div class="xl:grid xl:grid-cols-3">
    <div
      class="
        xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200
        dark:xl:border-gray-400
      "
    >
      <div class="xl:border-b xl:pb-6 mt-2">
        <div class="text-gray-500 dark:text-gray-200 italic">
          {{ $t('project.context') }}: {{ project.experience }}
        </div>
        <div class="text-gray-600 dark:text-gray-300">
          {{ project.abstract }}
        </div>
      </div>
      <div class="py-3 xl:pt-6 xl:pb-0">
        <h2 class="sr-only">Description</h2>
        <div
          class="prose dark:prose-light max-w-none hyphenate"
          v-html="project.description"
        ></div>
      </div>
    </div>

    <aside class="xl:block xl:pl-8 xl:mt-0 mt-8">
      <h2 class="sr-only">Details</h2>

      <div class="flex items-center space-x-2">
        <svg-icon name="calendar" class="w-6 h-6 text-gray-400" />
        <span class="text-sm font-medium text-gray-900 dark:text-gray-100"
          >{{ $t('project.date_start') }}
          <time :datetime="project.date">
            {{ $formatDate(project.date) }}
          </time></span
        >
      </div>

      <div v-if="project.status" class="flex items-center space-x-2 mt-2">
        <svg-icon
          name="tasks"
          class="w-6 h-6 text-gray-400 dark:text-gray-300"
        />
        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">
          {{ project.status.name }} ({{ project.status.order }}/4)
        </span>
      </div>

      <div class="space-y-5 mt-6">
        <div v-for="(link, type) in project.links" :key="type">
          <div class="flex items-center space-x-1">
            <svg-icon
              :name="`links/${icon(type)}`"
              class="w-6 h-6 text-gray-400 dark:text-gray-300"
            />
            <span class="dark:text-gray-100">{{ link.type }}</span>
          </div>
          <div class="mt-1">
            <div v-if="link.project" class="text-sm dark:text-gray-100">
              <span>{{ $t('project.demo') }}:</span
              ><a
                :href="link.project"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  font-medium
                  text-gray-900
                  dark:text-gray-100
                  hover:text-gray-800 hover:border-gray-800
                  transition-colors
                  duration-100
                  border-b border-gray-900
                  ml-1
                "
                >{{ getHostname(link.project) }}</a
              >
            </div>
            <div
              v-if="link.repository && !project.isPrivate"
              class="text-sm dark:text-gray-100"
            >
              <span>{{ $t('project.repository') }}:</span
              ><a
                :href="link.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  font-medium
                  text-gray-900
                  dark:text-gray-100
                  hover:text-gray-800 hover:border-gray-800
                  transition-colors
                  duration-100
                  border-b border-gray-900
                  ml-1
                "
                >{{ getHostname(link.repository) }}</a
              >
            </div>
          </div>
        </div>

        <div v-if="project.formation" class="flex items-center space-x-2">
          <svg-icon
            name="briefcase"
            class="w-6 h-6 text-gray-400 dark:text-gray-300"
          />
          <span>Formation :</span>
          <div
            v-if="project.formation.title"
            class="text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            {{ project.formation.title }}
          </div>
        </div>
      </div>
      <div
        class="
          py-6
          mt-6
          space-y-8
          border-t
          xl:border-gray-200
          border-transparent
        "
      >
        <div v-if="project.developers">
          <h2 class="text-sm font-medium text-gray-500 dark:text-gray-400">
            {{ $t('project.team') }}
          </h2>
          <ul class="mt-3 space-y-3">
            <li
              v-for="developer in project.developers"
              :key="developer.id"
              class="flex justify-start"
            >
              <a :href="developer.link.url" class="flex items-center space-x-3">
                <div class="flex-shrink-0">
                  <img
                    class="w-5 h-5 rounded-full"
                    :src="developer.image"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div
                  class="text-sm font-medium text-gray-900 dark:text-gray-100"
                >
                  {{ developer.name }}
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div v-if="project.skills">
          <h2 class="text-sm font-medium text-gray-500">Technologies</h2>
          <ul class="mt-2 leading-8">
            <li
              v-for="skill in project.skills"
              :key="skill.id"
              class="inline mr-1"
            >
              <a
                href="#"
                class="
                  relative
                  inline-flex
                  items-center
                  rounded-full
                  border
                  px-3
                  py-0.5
                "
                :style="`border-color: ${skill.color}`"
              >
                <div
                  class="
                    absolute
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                  "
                >
                  <span
                    class="h-1.5 w-1.5 rounded-full"
                    aria-hidden="true"
                    :style="`background-color: ${skill.color}`"
                  ></span>
                </div>
                <div
                  class="
                    ml-3.5
                    text-sm
                    font-medium
                    text-gray-900
                    dark:text-gray-100
                  "
                >
                  {{ skill.title }}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { getHostname } from '~/plugins/utils/methods'
export default {
  name: 'ProjectLayout',
  props: {
    project: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getHostname,
    icon(type) {
      const types = {
        FRONT: 'swatch',
        BACK: 'server',
        FRONT_BACK: 'swatch',
        APP_ANDROID: 'android',
        APP_IOS: 'ios',
        default: '',
      }
      return types[type.toUpperCase()] || types.default
    },
  },
}
</script>
