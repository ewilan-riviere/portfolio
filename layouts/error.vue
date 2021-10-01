<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen flex flex-col lg:relative">
    <div class="flex-grow flex flex-col">
      <main class="flex-grow flex flex-col">
        <div
          class="
            flex-grow
            mx-auto
            max-w-7xl
            w-full
            flex flex-col
            px-4
            sm:px-6
            lg:px-8
          "
        >
          <div class="flex-shrink-0 my-auto py-16 sm:py-32">
            <p
              class="
                text-sm
                font-semibold
                text-primary-600
                dark:text-primary-400
                uppercase
                tracking-wide
              "
            >
              {{ error.statusCode }} error
            </p>
            <h1
              class="
                mt-2
                text-3xl
                font-semibold
                text-gray-900
                dark:text-gray-100
                tracking-tight
                sm:text-4xl
              "
            >
              {{ error.message }}
            </h1>
            <p class="mt-2 text-base text-gray-500 dark:text-gray-400">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div class="mt-6">
              <nuxt-link
                :to="
                  localePath({
                    name: 'index',
                  })
                "
                class="
                  text-base
                  font-medium
                  text-primary-600
                  dark:text-primary-400
                  hover:text-primary-500
                  dark:hover:text-primary-600
                "
                >Go back home<span aria-hidden="true"> &rarr;</span></nuxt-link
              >
            </div>
          </div>
        </div>
      </main>
    </div>
    <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        src="/images/error.svg"
        alt=""
        class="object-contain max-w-full h-full"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'basic',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
