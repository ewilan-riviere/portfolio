<template>
  <section class="text-gray-700 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
          <h1
            class="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl title-font"
          >
            Mes projets
          </h1>
          <div class="w-20 h-1 bg-indigo-500 rounded" />
        </div>
        <p class="w-full text-base leading-relaxed lg:w-1/2">
          Qu'ils soient personnels, réalisés seule ou en équipe, ou bien
          professionnels, voici une sélection de mes projets.
        </p>
      </div>
      <div class="flex flex-wrap -m-4">
        <client-only>
          <div
            v-masonry
            transition-duration="3s"
            item-selector=".item"
            :gutter="10"
            :fit-width="true"
            class="masonry-container"
          >
            <div
              v-for="(project, projectId) in projects"
              :key="projectId"
              v-masonry-tile
              class="bg-gray-200 rounded-md item"
            >
              <img
                class="object-cover object-center w-full h-40 mb-3 rounded"
                :src="project.assets.image"
                alt="content"
              />
              <div class="px-5 pb-5">
                <h2 class="text-lg font-bold">{{ project.title }}</h2>
                <p class="w-64 mt-5" v-html="project.resume"></p>
                <div class="flex justify-between mt-5">
                  <a
                    :href="project.github_link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Dépôt Git
                  </a>
                  <a
                    :href="project.try_it"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Découvrir
                  </a>
                </div>
              </div>
            </div>
          </div>
        </client-only>
        <!-- <div
          v-for="project in projects"
          :key="project.id"
          class="p-4 xl:w-1/4 md:w-1/2"
        >
          <div class="bg-gray-200 rounded-lg">
            <img
              class="object-cover object-center w-full h-40 mb-6 rounded"
              :src="project.image"
              alt="content"
            />
            <div class="p-6">
        
              <h2 class="mb-4 text-lg font-medium text-gray-900 title-font">
                {{ project.title }}
              </h2>
              <p class="text-base leading-relaxed">
                {{ project.title }}
              </p>
            </div>
          </div>
        </div> -->
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
  },
}
</script>

<style scoped>
/deep/ .item {
  @apply mb-3;
}
/deep/ .masonry-container {
  margin: 0 auto;
}
</style>
