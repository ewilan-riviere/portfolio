<template>
  <div class="relative overflow-hidden">
    <div class="container my-10 max-w-7xl">
      <div class="mx-auto sm:px-6 lg:px-8 mb-16 mt-10">
        <div class="text-center">
          <p
            class="
              text-base
              font-semibold
              text-primary-600
              tracking-wide
              uppercase
            "
          >
            {{ $t('projectsList.ontitle') }}
          </p>
          <h2
            class="
              mt-1
              text-3xl
              font-semibold
              text-gray-900
              dark:text-gray-100
              sm:text-4xl sm:tracking-tight
              lg:text-5xl
              title-font
            "
          >
            {{ $t('projectsList.title') }}
          </h2>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {{ $t('projectsList.subtitle') }}
          </p>
        </div>
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
        dark:via-gray-800
        to-white
        dark:to-gray-900
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
      <app-button :to="localePath('projects')" color="white">
        <div class="flex items-center">
          <span>
            {{ $t('projectsList.cta') }}
          </span>
          <svg-icon name="chevron-right" class="relative w-6 h-6 ml-1" />
        </div>
      </app-button>
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
