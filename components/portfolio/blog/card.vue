<script setup lang="ts">
const props = defineProps<{
  guide: Guide
  large?: boolean
}>()

const { formatDate, getList } = useUtils()

const readTime = computed(() => {
  const time = props.guide.readingTime?.minutes

  return Math.round(time ?? 0)
})
const slug = computed(() => props.guide._path.replace('/blog/', ''))
const date = computed(() => formatDate(props.guide.date, {
  day: '2-digit'
}))
</script>

<template>
  <nuxt-link
    :to="{ name: 'blog-slug', params: { slug } }"
    class="flex flex-col rounded-lg shadow overflow-hidden transform duration-500 hover:-translate-y-2 hover:shadow-lg group cursor-pointer relative"
  >
    <div class="flex-shrink-0">
      <app-img
        class="h-48 w-full object-cover"
        :src="guide.picture"
        :alt="guide.title"
      />
    </div>
    <div
      class="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between"
    >
      <div class="flex-1">
        <p class="text-sm font-medium text-primary-600 dark:text-primary-400 capitalize">
          {{ guide.category }}
        </p>
        <div class="block mt-2">
          <p
            class="text-xl font-semibold text-gray-dark border-b-2 border-transparent group-hover:border-primary-400 transition-color duration-100 w-max"
          >
            {{ guide.title }}
          </p>
          <p class="mt-3 text-base text-gray-medium">
            {{ guide.description }}
          </p>
        </div>
      </div>
      <div class="mt-6">
        <div
          v-if="guide.tags"
          class="text-sm font-medium text-gray-dark capitalize"
        >
          {{ getList(guide.tags) }}
        </div>
        <div class="flex space-x-1 text-sm text-gray-medium">
          <time :datetime="date">
            {{ date }}
          </time>
          <span aria-hidden="true"> &middot; </span>
          <span> {{ readTime }} min read </span>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
