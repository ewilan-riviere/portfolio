<template>
  <section class="text-gray-700 body-font lg:-mt-16">
    <div class="flex flex-wrap px-5 mx-auto md:container">
      <div
        v-for="(formation, id) in formations"
        :key="id"
        class="
          relative
          flex
          w-full
          pt-10
          pb-6
          mx-auto
          lg:pb-20
          sm:items-center
          lg:w-2/3
        "
      >
        <div
          class="absolute inset-0 flex items-center justify-center w-6 h-full"
        >
          <div
            class="w-1 h-full bg-gray-200 dark:bg-gray-700 pointer-events-none"
          />
        </div>
        <div
          class="
            relative
            z-10
            inline-flex
            items-center
            justify-center
            flex-shrink-0
            w-6
            h-6
            mt-10
            text-sm
            font-medium
            text-white
            bg-indigo-500
            rounded-full
            sm:mt-0
            title-font
          "
        >
          {{ id + 1 }}
        </div>
        <formation-card :formation="formation" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ListFormations',
  props: {
    formations: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="postcss" scoped>
.formation-logo {
  @apply w-3/4 h-full;
}
/deep/ svg {
  @apply w-3/4 h-full mx-auto fill-current text-indigo-500;
}
</style>
