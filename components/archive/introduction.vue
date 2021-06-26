<template>
  <div class="overflow-hidden bg-white dark:bg-gray-900">
    <div class="relative px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="py-0 lg:py-16">
        <div class="mx-auto max-w-max lg:max-w-7xl">
          <div class="relative z-10 mb-8 md:mb-2">
            <div v-if="text" class="text-base max-w-prose lg:max-w-none">
              <h2
                class="
                  font-semibold
                  leading-6
                  tracking-wide
                  text-indigo-600
                  uppercase
                "
              >
                {{ text.subtitle }}
              </h2>
              <p
                class="
                  mt-2
                  text-3xl
                  font-bold
                  leading-8
                  tracking-tight
                  text-gray-900
                  sm:text-4xl
                "
              >
                {{ text.title }}
              </p>
            </div>
          </div>
          <div class="relative">
            <svg
              class="absolute top-0 right-0 hidden -mt-20 -mr-20 md:block"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="95e8f2de-6d30-4b7e-8159-f791729db21b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#95e8f2de-6d30-4b7e-8159-f791729db21b)"
              />
            </svg>
            <svg
              class="absolute bottom-0 left-0 hidden -mb-20 -ml-20 md:block"
              width="404"
              height="384"
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="7a00fe67-0343-4a3c-8e81-c145097a3ce0"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="384"
                fill="url(#7a00fe67-0343-4a3c-8e81-c145097a3ce0)"
              />
            </svg>
            <div class="relative md:py-6">
              <div
                class="
                  prose prose-lg
                  text-gray-500
                  prose-indigo
                  lg:max-w-none
                  hyphenate
                  text-columns
                "
              >
                <nuxt-content :document="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
  props: {
    text: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style lang="postcss">
.nuxt-content img {
  max-height: 20rem;
  float: right;
}
/* .text-columns {
  columns: 2;
  column-gap: 2.5rem;
} */
.nuxt-content p {
  @apply mt-0;
}
</style>
