<template>
  <main
    class="relative flex-1 overflow-y-auto focus:outline-none"
    tabindex="-1"
  >
    <div class="py-8 xl:py-10">
      <div
        class="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8 xl:max-w-5xl xl:grid xl:grid-cols-3"
      >
        <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
          <div>
            <div>
              <div
                class="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6"
              >
                <div>
                  <h1 class="text-2xl font-bold text-gray-900">
                    {{ project.title }}
                  </h1>
                  <!-- <time class="mt-2 text-sm text-gray-500">
                    Débuté en {{ $getDate(project.createdAt) }}
                  </time> -->
                </div>
              </div>
              <aside class="mt-8 xl:hidden">
                <h2 class="sr-only">Details</h2>
                <div class="space-y-5">
                  <div class="flex items-center space-x-2">
                    <!-- Heroicon name: solid/lock-open -->
                    <svg
                      class="w-5 h-5 text-green-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z"
                      />
                    </svg>
                    <span class="text-sm font-medium text-green-700"
                      >Open Issue</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <!-- Heroicon name: solid/chat-alt -->
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-sm font-medium text-gray-900"
                      >4 comments</span
                    >
                  </div>
                  <div class="flex items-center space-x-2">
                    <!-- Heroicon name: solid/calendar -->
                    <svg
                      class="w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span class="text-sm font-medium text-gray-900"
                      >Created on
                      <time datetime="2020-12-02">Dec 2, 2020</time></span
                    >
                  </div>
                </div>
                <div
                  class="py-6 mt-6 space-y-8 border-t border-b border-gray-200"
                >
                  <div>
                    <h2 class="text-sm font-medium text-gray-500">Assignees</h2>
                    <ul class="mt-3 space-y-3">
                      <li class="flex justify-start">
                        <a href="#" class="flex items-center space-x-3">
                          <div class="flex-shrink-0">
                            <img
                              class="w-5 h-5 rounded-full"
                              src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                              alt=""
                            />
                          </div>
                          <div class="text-sm font-medium text-gray-900">
                            Eduardo Benz
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="text-sm font-medium text-gray-500">Tags</h2>
                    <ul class="mt-2 leading-8">
                      <li class="inline">
                        <a
                          href="#"
                          class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                        >
                          <div
                            class="absolute flex items-center justify-center flex-shrink-0"
                          >
                            <span
                              class="h-1.5 w-1.5 rounded-full bg-rose-500"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div class="ml-3.5 text-sm font-medium text-gray-900">
                            Bug
                          </div>
                        </a>
                      </li>
                      <li class="inline">
                        <a
                          href="#"
                          class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                        >
                          <div
                            class="absolute flex items-center justify-center flex-shrink-0"
                          >
                            <span
                              class="h-1.5 w-1.5 rounded-full bg-indigo-500"
                              aria-hidden="true"
                            ></span>
                          </div>
                          <div class="ml-3.5 text-sm font-medium text-gray-900">
                            Accessibility
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
              <div class="py-3 xl:pt-6 xl:pb-0">
                <h2 class="sr-only">Description</h2>
                <div
                  class="prose max-w-none"
                  v-html="project.description"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <aside class="hidden xl:block xl:pl-8">
          <h2 class="sr-only">Details</h2>
          <div class="space-y-5">
            <div v-if="project.front" class="flex items-center space-x-2">
              <icon-swatch class="w-6 h-6 text-gray-400" />
              <span>Front :</span>
              <a
                v-if="project.front.project"
                :href="project.front.project"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-gray-900 border-b border-gray-900"
              >
                Projet
              </a>
              <span v-if="project.front.project">/</span>
              <a
                v-if="project.front.repository"
                :href="project.front.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-gray-900 border-b border-gray-900"
              >
                Dépôt
              </a>
            </div>
            <div v-if="project.back" class="flex items-center space-x-2">
              <icon-server class="w-6 h-6 text-gray-400" />
              <span>Back :</span>
              <a
                v-if="project.back.project"
                :href="project.back.project"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-gray-900 border-b border-gray-900"
              >
                Projet
              </a>
              <span v-if="project.back.project">/</span>
              <a
                v-if="project.back.repository"
                :href="project.back.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium text-gray-900 border-b border-gray-900"
              >
                Dépôt
              </a>
            </div>
            <div class="flex items-center space-x-2">
              <icon-calendar class="w-6 h-6 text-gray-400" />
              <span class="text-sm font-medium text-gray-900"
                >Débuté en
                <time :datetime="project.createdAt">
                  {{ $getDate(project.createdAt) }}
                </time></span
              >
            </div>
            <div v-if="project.formation" class="flex items-center space-x-2">
              <icon-location class="w-6 h-6 text-gray-400" />
              <span>Type :</span>
              <div
                v-if="project.formation.title"
                class="text-sm font-medium text-gray-900"
              >
                {{ project.formation.title }}
              </div>
            </div>
          </div>
          <div class="py-6 mt-6 space-y-8 border-t border-gray-200">
            <div v-if="project.developers">
              <h2 class="text-sm font-medium text-gray-500">
                Développeur·euses
              </h2>
              <ul class="mt-3 space-y-3">
                <li
                  v-for="developer in project.developers"
                  :key="developer.id"
                  class="flex justify-start"
                >
                  <a
                    :href="developer.link.url"
                    class="flex items-center space-x-3"
                  >
                    <div class="flex-shrink-0">
                      <img
                        class="w-5 h-5 rounded-full"
                        :src="developer.image"
                        alt=""
                      />
                    </div>
                    <div class="text-sm font-medium text-gray-900">
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
                    class="relative inline-flex items-center rounded-full border px-3 py-0.5"
                    :style="`border-color: ${skill.color}`"
                  >
                    <div
                      class="absolute flex items-center justify-center flex-shrink-0"
                    >
                      <span
                        class="h-1.5 w-1.5 rounded-full"
                        aria-hidden="true"
                        :style="`background-color: ${skill.color}`"
                      ></span>
                    </div>
                    <div class="ml-3.5 text-sm font-medium text-gray-900">
                      {{ skill.title }}
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
import IconCalendar from '~/components/icons/icon-calendar.vue'
import IconLocation from '~/components/icons/icon-location.vue'
import iconServer from '~/components/icons/icon-server.vue'
import IconSwatch from '~/components/icons/icon-swatch.vue'
export default {
  name: 'ProjectsSlug',
  components: { iconServer, IconSwatch, IconCalendar, IconLocation },
  async asyncData({ app, query, error, params, $content }) {
    try {
      const [project] = await Promise.all([
        app.$axios.$get(`projects/${params.slug}`),
      ])

      return {
        project: project.data,
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error)

      return {
        project: {},
      }
    }
  },
}
</script>

<style lang="postcss" scoped></style>
