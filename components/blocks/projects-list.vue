<template>
  <div class="relative overflow-hidden">
    <div class="container my-10 max-w-7xl">
      <app-title
        v-if="title"
        :eyebrow="'projectsList.ontitle'"
        :title="'projectsList.title'"
        :text="'projectsList.subtitle'"
        position="center"
      />
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
          <span class="mb-1">
            {{ $t('projectsList.cta') }}
          </span>
          <svg-icon name="arrow-chevron-right" class="relative w-6 h-6 ml-1" />
        </div>
      </app-button>
    </div>
  </div>
</template>

<script>
import { limitLength } from '@/plugins/utils/methods'
import projectCard from './project-card.vue'
import AppTitle from './app-title.vue'

export default {
  name: 'ProjectsList',
  components: { projectCard, AppTitle },
  props: {
    projects: {
      type: Array,
      default: () => [],
    },
    limited: {
      type: Boolean,
      default: false,
    },
    title: {
      type: Boolean,
      default: true,
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
