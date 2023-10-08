<script lang="ts" setup>
const error = useError()

const statusCode = ref(404)
const message = ref('Page not found')

watchEffect(() => {
  if (error.value) {
    // @ts-expect-error statusCode is not defined in the Error type
    statusCode.value = error.value.statusCode
    message.value = error.value.message
  }
})
</script>

<template>
  <div>
    <NuxtLayout>
      <layout-container>
        <div class="flex min-h-full flex-col lg:relative">
          <div class="flex flex-grow flex-col">
            <main class="flex flex-grow flex-col">
              <div
                class="mx-auto flex w-full max-w-7xl flex-grow flex-col px-4 sm:px-6 lg:px-8"
              >
                <div class="my-auto flex-shrink-0 py-16 sm:py-32">
                  <p
                    class="text-base font-semibold text-primary-600 dark:text-primary-500"
                  >
                    {{ statusCode }}
                  </p>
                  <h1
                    class="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl"
                  >
                    Error
                  </h1>
                  <p class="mt-2 text-base text-gray-500 dark:text-gray-100 max-w-md">
                    {{ message }}
                  </p>
                  <div class="mt-6">
                    <TypedLink
                      :to="{ name: 'index' }"
                      class="text-base font-medium text-primary-600 hover:text-primary-500 dark:text-primary-500"
                    >
                      Go back home
                      <span aria-hidden="true"> &rarr;</span>
                    </TypedLink>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div
            class="hidden lg:absolute lg:inset-y-0 lg:right-0 lg:block lg:w-1/2"
          >
            <img
              class="absolute inset-0 h-full w-full object-cover"
              src="/images/error.svg"
              alt=""
            >
          </div>
        </div>
      </layout-container>
    </NuxtLayout>
  </div>
</template>
