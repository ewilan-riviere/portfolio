<template>
  <article>
    <div class="relative py-16 overflow-hidden bg-white">
      <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
        <div
          class="relative h-full mx-auto text-lg max-w-prose"
          aria-hidden="true"
        >
          <svg
            class="absolute transform translate-x-32 top-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
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
              fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
            />
          </svg>
          <svg
            class="absolute transform -translate-x-32 -translate-y-1/2 top-1/2 right-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
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
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            class="absolute transform translate-x-32 bottom-12 left-full"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
          >
            <defs>
              <pattern
                id="d3eb07ae-5182-43e6-857d-35c643af9034"
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
              fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
            />
          </svg>
        </div>
      </div>
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="mx-auto text-lg max-w-prose">
          <img
            :src="`/images/privacy-policy/${$route.params.appName}.webp`"
            class="w-32 mx-auto mb-5"
            :alt="page.title"
          />
          <h1>
            <span
              class="block text-base font-semibold tracking-wide text-center text-indigo-600 uppercase"
            >
              {{ page.subtitle }}
            </span>
            <span
              class="block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl"
            >
              {{ page.title }}
            </span>
          </h1>
          <div class="flex mx-auto mt-5 italic w-max-content">
            Last update: {{ getDate(page.update) }}
          </div>
          <p
            class="mt-8 text-xl leading-8 text-gray-500"
            v-html="page.description"
          ></p>
        </div>
        <div
          class="mx-auto mt-6 prose prose-lg text-gray-500 prose-indigo word-wraping"
          lang="en"
        >
          <nuxt-content :document="page" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  async asyncData({ $content, app, params }) {
    const page = await $content(`privacy-policy/${params.appName}`).fetch()

    return {
      page,
    }
  },
  methods: {
    getDate(date) {
      if (process.client) {
        // the param is raw DateTime from API like 2020-10-16T08:18:49.000000Z
        date = new Date(date)

        // define options
        const userLang = navigator.language || navigator.userLanguage
        const dateOptions = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }

        const dateToStringLocale = date.toLocaleString(userLang, dateOptions) // vendredi 16 octobre 2020
        return dateToStringLocale
      }
    },
  },
}
</script>
