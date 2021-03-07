<template>
  <section class="overflow-hidden text-gray-700 body-font">
    <div class="relative px-5 py-24 mx-auto md:container">
      <div class="flex flex-wrap w-full mb-10">
        <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
          <h2
            class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
          >
            Mes projets
          </h2>
          <div class="w-20 h-1 bg-indigo-500 rounded" />
        </div>
        <p class="w-full text-base leading-relaxed text-right lg:w-1/2">
          Qu'ils soient personnels, réalisés seule ou en équipe, ou bien
          professionnels, voici une sélection de mes projets.
        </p>
      </div>
      <div class="m-2 mt-5 m-md-5">
        <client-only>
          <masonry
            :cols="{ default: 4, 1200: 3, 900: 2, 600: 1 }"
            :gutter="{ default: '30px', 700: '15px' }"
          >
            <div
              v-for="(project, projectId) in projects"
              :key="projectId"
              :data-index="projectId"
            >
              <section
                class="relative flex flex-col col-span-1 my-5 text-center transition-colors duration-100 divide-y divide-gray-200 rounded-lg shadow bg-gray-50 hover:bg-gray-100"
              >
                <nuxt-link
                  :to="{
                    name: 'projects-slug',
                    params: { slug: project.slug },
                  }"
                  class="pb-20 bg-opacity-70"
                >
                  <div class="flex flex-col flex-1 px-8 pt-8">
                    <img
                      class="flex-shrink-0 w-32 h-32 mx-auto rounded-full"
                      :src="project.assets.image"
                      :alt="project.title"
                    />
                    <div class="">
                      <div v-if="project.assets.imageTitle">
                        <h3 class="sr-only">{{ project.title }}</h3>
                        <img
                          :src="project.assets.imageTitle"
                          :alt="project.title"
                        />
                      </div>
                      <h3
                        v-else
                        class="mt-6 text-lg font-semibold text-gray-900"
                      >
                        {{ project.title }}
                      </h3>
                    </div>
                    <dl class="flex flex-col justify-between flex-grow mt-1">
                      <dt class="sr-only">{{ project.title }}</dt>
                      <p
                        class="mt-5 text-sm italic text-left word-wraping"
                        v-html="$limitLength(project.description, 150)"
                      ></p>
                      <dt class="sr-only">Type</dt>
                      <dd class="mt-3">
                        <span
                          class="px-2 py-1 text-xs font-medium bg-green-200 rounded-full"
                          >{{ project.formation.title }}</span
                        >
                      </dd>
                    </dl>
                  </div>
                </nuxt-link>
                <section class="absolute bottom-0 w-full">
                  <div
                    class="flex -mt-px border-t border-gray-200 divide-x divide-gray-200"
                  >
                    <div class="flex flex-1 w-0 group">
                      <a
                        v-if="project.front && project.front.repository"
                        :href="project.front.repository"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg"
                      >
                        <div class="flex items-center">
                          <icon
                            name="git"
                            :size="20"
                            class="transition-colors duration-300 group-hover:icon-git-hover"
                          />
                          <span
                            class="ml-1 font-semibold transition-colors duration-300 group-hover:text-gray-500"
                            >Dépôt Git</span
                          >
                        </div>
                      </a>
                      <span
                        v-else
                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm italic font-medium text-gray-400 border border-transparent rounded-br-lg"
                      >
                        Indisponible
                      </span>
                    </div>
                    <div class="flex flex-1 w-0 -ml-px group">
                      <a
                        v-if="project.front && project.front.project"
                        :href="project.front.project"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm font-medium text-gray-700 border border-transparent rounded-br-lg"
                      >
                        <div class="flex items-center">
                          <icon
                            name="sparkles"
                            :size="20"
                            class="transition-colors duration-300 group-hover:text-yellow-300"
                          />
                          <span
                            class="ml-1 font-semibold transition-colors duration-300 group-hover:text-gray-500"
                            >Découvrir</span
                          >
                        </div>
                      </a>
                      <span
                        v-else
                        class="relative inline-flex items-center justify-center flex-1 w-0 py-4 text-sm italic font-medium text-gray-400 border border-transparent rounded-br-lg"
                      >
                        Indisponible
                      </span>
                    </div>
                  </div>
                </section>
              </section>
            </div>
          </masonry>
        </client-only>
      </div>
      <!-- <div
        class="absolute bottom-0 w-full h-96 bg-gradient-to-b from-white to-transparent"
      ></div> -->
      <div
        v-if="limited"
        class="absolute w-full bottom-28 h-96 bg-gradient-to-b from-transparent via-gray-50 to-white"
      ></div>
      <div
        v-if="limited"
        class="absolute flex justify-center mt-8 transform -translate-x-1/2 bottom-56 left-1/2"
      >
        <nuxt-link
          :to="{ name: 'projects' }"
          class="flex items-center justify-center px-5 py-3 text-base font-semibold text-white transition-colors duration-300 bg-indigo-600 border border-transparent rounded-md shadow hover:bg-indigo-700 group w-max lg:w-auto"
        >
          <span>Découvrir davantage de projets</span>
          <icon
            name="chevron-right"
            stroke
            class="relative ml-1 group-hover:animate-pulse"
          />
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProjectsAlt',
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
    limited: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="postcss" scoped>
@variants group-hover, hover, focus {
  .zoom {
    transform: scale(1.025);
  }
  .icon-git-hover {
    color: #f05032;
  }
  .shadow-svg {
    filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));
  }
}
/* /deep/ .item {
  @apply mb-3;
} */
/deep/ .masonry-container {
  margin: 0 auto;
}
/* masonry view */
/deep/ .masonry-bottom {
  @apply mt-1 pt-1 !important;
  min-height: 0px !important;
}
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }

  &.card {
    flex: 0 0 auto;
  }
}
.grid-sizer {
  width: 100%;
}
.item {
  width: 100%;
  padding-bottom: 10px;
  padding-left: 10px;
}
@screen sm {
  .grid-sizer {
    width: 50%;
  }
  .item {
    width: 50%;
    padding-bottom: 10px;
    padding-left: 10px;
  }
}
@screen md {
  .grid-sizer {
    width: 50%;
  }
  .item {
    width: 50%;
    padding-bottom: 10px;
    padding-left: 10px;
  }
}
@screen lg {
  .grid-sizer {
    width: 33%;
  }
  .item {
    width: 33%;
    padding-bottom: 10px;
    padding-left: 10px;
  }
}
@screen xl {
  .grid-sizer {
    width: 25%;
  }
  .item {
    width: 25%;
    padding-bottom: 10px;
    padding-left: 10px;
  }
}
</style>
