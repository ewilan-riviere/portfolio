<script lang="ts" setup>
defineProps<{
  project: Project
}>()

const { getDomain } = useUtils()
</script>

<template>
  <div>
    <div class="space-y-1">
      <div
        v-for="(link, index) in project.links"
        :key="index"
        class="flex items-center space-x-1"
      >
        <span>
          <span class="capitalize">{{ index }}</span> <span>demo: </span>
        </span>
        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          {{ getDomain(link) ? getDomain(link)?.hostname : project.title }}
        </a>
      </div>
    </div>
    <div
      v-if="project.isOpenSource"
      class="space-y-1"
    >
      <div
        v-for="(repository, index) in project.repositories"
        :key="index"
        class="flex items-center space-x-1"
      >
        <span>
          <span class="capitalize">{{ repository.type }}</span> <span>repository: </span>
        </span>
        <a
          v-if="repository"
          :href="repository.url"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          {{ getDomain(repository.url)?.hostname }}{{ getDomain(repository.url)?.pathname }}
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.link {
  @apply block w-max px-1 py-0.5 rounded-md underline underline-offset-2;
}

.link:hover {
  @apply bg-gray-200 bg-opacity-50;
}

.dark {
  & .link:hover {
    @apply bg-gray-700 bg-opacity-50;
  }
}
</style>
