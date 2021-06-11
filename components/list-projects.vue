<template>
  <div class="relative overflow-hidden">
    <div class="container my-10">
      <div class="flex justify-between mb-10">
        <div class="w-full mb-6 lg:w-1/2 lg:mb-0">
          <h2
            class="
              mb-2
              text-2xl
              font-medium
              text-gray-900
              sm:text-3xl
              title-font
            "
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
      <section class="masonry-container">
        <project-card
          v-for="(project, projectId) in projects"
          :key="projectId"
          :project="project"
          class="masonry-block"
        />
      </section>
    </div>
    <div
      v-if="limited"
      class="
        absolute
        bottom-0
        w-full
        h-96
        bg-gradient-to-b
        from-transparent
        via-gray-50
        to-white
      "
    />
    <div
      v-if="limited"
      class="
        absolute
        flex
        justify-center
        mt-8
        transform
        -translate-x-1/2
        bottom-20
        left-1/2
      "
    >
      <nuxt-link
        :to="{ name: 'projects' }"
        class="
          flex
          items-center
          justify-center
          px-5
          py-3
          text-base
          font-semibold
          text-white
          transition-colors
          duration-300
          bg-indigo-600
          border border-transparent
          rounded-md
          shadow
          hover:bg-indigo-700
          group
          w-max
          lg:w-auto
        "
      >
        <span>Découvrir davantage de projets</span>
        <svg-icon name="chevron-right" class="relative w-6 h-6 ml-1" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { limitLength } from '@/plugins/utils/methods'

export default {
  name: 'ListProjects',
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
  data() {
    return {
      limitLength,
    }
  },
}
</script>

<style lang="postcss" scoped>
.masonry-block {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  margin-bottom: 0.8rem;
  break-inside: avoid;
}

.masonry-container {
  column-count: 1;
  column-gap: 1rem;
}

@screen sm {
  .masonry-container {
    column-count: 2;
  }
}

@screen md {
  .masonry-container {
    column-count: 2;
  }
}

@screen lg {
  .masonry-container {
    column-count: 3;
  }
}

@screen xl {
  .masonry-container {
    column-count: 4;
  }
}
</style>
