<template>
  <div class="container max-w-7xl mt-10">
    <ul
      role="list"
      class="
        grid grid-cols-2
        gap-x-4 gap-y-8
        sm:grid-cols-3 sm:gap-x-6
        lg:grid-cols-4
        xl:gap-x-8
      "
    >
      <li v-for="picture in gallery" :key="picture.id" class="relative">
        <div
          class="
            group
            block
            w-full
            aspect-w-10 aspect-h-7
            rounded-lg
            bg-gray-100
            focus-within:ring-2
            focus-within:ring-offset-2
            focus-within:ring-offset-gray-100
            focus-within:ring-indigo-500
            overflow-hidden
          "
        >
          <app-img
            :src="picture.url"
            :title="picture.name"
            class="object-cover pointer-events-none group-hover:opacity-75"
          />
          <button
            type="button"
            class="absolute inset-0 focus:outline-none"
            @click="openInTab(picture.url)"
          >
            <span class="sr-only">View details for {{ picture.name }}</span>
          </button>
        </div>
      </li>

      <!-- More files... -->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProjectGallery',
  props: {
    gallery: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    openInTab(url) {
      window.open(url)
    },
  },
}
</script>
