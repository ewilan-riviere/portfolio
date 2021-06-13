<template>
  <main
    class="relative flex-1 overflow-y-auto focus:outline-none"
    tabindex="-1"
  >
    <div class="py-8 xl:py-10">
      <div
        class="
          max-w-3xl
          px-4
          mx-auto
          sm:px-6
          lg:px-8
          xl:max-w-5xl xl:grid xl:grid-cols-3
        "
      >
        <div class="xl:col-span-2 xl:pr-8 xl:border-r xl:border-gray-200">
          <div>
            <div>
              <div
                class="
                  md:flex md:items-center md:justify-between md:space-x-4
                  xl:border-b xl:pb-6
                "
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
                  <div v-if="project.front" class="flex items-center space-x-2">
                    <svg-icon name="swatch" class="w-6 h-6 text-gray-400" />
                    <span>Front :</span>
                    <a
                      v-if="project.front.project"
                      :href="project.front.project"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        border-b border-gray-900
                      "
                    >
                      Projet
                    </a>
                    <span v-if="project.front.project">/</span>
                    <a
                      v-if="project.front.repository"
                      :href="project.front.repository"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        border-b border-gray-900
                      "
                    >
                      Dépôt
                    </a>
                  </div>
                  <div v-if="project.back" class="flex items-center space-x-2">
                    <svg-icon name="server" class="w-6 h-6 text-gray-400" />
                    <span>Back :</span>
                    <a
                      v-if="project.back.project"
                      :href="project.back.project"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        border-b border-gray-900
                      "
                    >
                      Projet
                    </a>
                    <span v-if="project.back.project">/</span>
                    <a
                      v-if="project.back.repository"
                      :href="project.back.repository"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="
                        text-sm
                        font-medium
                        text-gray-900
                        border-b border-gray-900
                      "
                    >
                      Dépôt
                    </a>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg-icon name="calendar" class="w-6 h-6 text-gray-400" />
                    <span class="text-sm font-medium text-gray-900"
                      >Débuté en
                      <time :datetime="project.createdAt">
                        {{ $formatDate(project.createdAt) }}
                      </time></span
                    >
                  </div>
                  <div
                    v-if="project.formation"
                    class="flex items-center space-x-2"
                  >
                    <svg-icon name="location" class="w-6 h-6 text-gray-400" />
                    <span>Type :</span>
                    <div
                      v-if="project.formation.title"
                      class="text-sm font-medium text-gray-900"
                    >
                      {{ project.formation.title }}
                    </div>
                  </div>
                </div>
                <div
                  class="py-6 mt-6 space-y-8 border-t border-b border-gray-200"
                >
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
                    <h2 class="text-sm font-medium text-gray-500">
                      Technologies
                    </h2>
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
                          <div class="ml-3.5 text-sm font-medium text-gray-900">
                            {{ skill.title }}
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
              <svg-icon name="swatch" class="w-6 h-6 text-gray-400" />
              <span>Front :</span>
              <a
                v-if="project.front.project"
                :href="project.front.project"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  border-b border-gray-900
                "
              >
                Projet
              </a>
              <span v-if="project.front.project">/</span>
              <a
                v-if="project.front.repository"
                :href="project.front.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  border-b border-gray-900
                "
              >
                Dépôt
              </a>
            </div>
            <div v-if="project.back" class="flex items-center space-x-2">
              <svg-icon name="server" class="w-6 h-6 text-gray-400" />
              <span>Back :</span>
              <a
                v-if="project.back.project"
                :href="project.back.project"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  border-b border-gray-900
                "
              >
                Projet
              </a>
              <span v-if="project.back.project">/</span>
              <a
                v-if="project.back.repository"
                :href="project.back.repository"
                target="_blank"
                rel="noopener noreferrer"
                class="
                  text-sm
                  font-medium
                  text-gray-900
                  border-b border-gray-900
                "
              >
                Dépôt
              </a>
            </div>
            <div class="flex items-center space-x-2">
              <svg-icon name="calendar" class="w-6 h-6 text-gray-400" />
              <span class="text-sm font-medium text-gray-900"
                >Débuté en
                <time :datetime="project.createdAt">
                  {{ $formatDate(project.createdAt) }}
                </time></span
              >
            </div>
            <div v-if="project.formation" class="flex items-center space-x-2">
              <svg-icon name="location" class="w-6 h-6 text-gray-400" />
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
import { limitLength } from '@/plugins/utils/methods'
export default {
  name: 'PageProjectsSlug',
  async asyncData({ app, params }) {
    try {
      const project = await app.$axios.$get(`projects/${params.slug}`)

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
  data() {
    return {
      limitLength,
    }
  },
  created() {
    this.$store.commit('setHeader', {
      subtitle: 'Projets',
      title: this.project.title,
      abstract: limitLength(this.project.description, 50),
    })
  },
}
</script>

<style lang="postcss" scoped></style>
