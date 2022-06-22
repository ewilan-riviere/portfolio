<script setup lang="ts">
const minChar = 10
const isDev = useNuxtApp()._legacyContext?.isDev
const loading = ref(false)
const success = ref(false)

const form = ref({
  name: '',
  to: null,
  email: '',
  message: '',
  honeypot: false,
})
const formTesting = {
  name: 'Ewilan',
  email: 'ewilan@email.com',
  to: null,
  message:
    'Dolor pariatur exercitation duis dolore eu ut commodo quis incididunt ad voluptate sit. Do est nulla adipisicing ut dolore amet dolore nostrud labore. Magna laborum aliqua duis eiusmod quis aliquip officia veniam adipisicing est magna nostrud culpa. Laborum nisi nisi sit Lorem fugiat aute deserunt ea reprehenderit sint sint nulla ad labore.',
  honeypot: false,
}

const fillForm = () => {
  const original: Keyable = form.value
  const testing: Keyable = formTesting
  for (const [key] of Object.entries(original)) {
    original[key] = testing[key]
  }
  // @ts-ignore
  form.value = original
}
const resetForm = () => {
  form.value.name = ''
  form.value.email = ''
  form.value.message = ''
  form.value.honeypot = false
}

const submit = async () => {
  const config = useRuntimeConfig()
  loading.value = true

  const { pushToast } = useToast()
  // form.value.to = config.public.mailToAddress

  let toast: Toast = {
    type: 'error',
    title: 'Erreur',
    text: "Une erreur s'est produite, nous sommes désolés.",
  }

  const response = await $fetch
    .raw<ApiResponse>('/api/send/submission', {
      baseURL: config.public.apiUrl,
      method: 'POST',
      body: JSON.stringify(form.value),
    })
    .catch((e) => {
      console.error(e)
      pushToast(toast)
    })

  if (response) {
    if (response.status === 200) {
      success.value = true
      toast = {
        type: 'success',
        title: 'Merci !',
        text: 'Votre message a bien été envoyé.',
      }
      pushToast(toast)
      resetForm()
    } else {
      console.error(response.status)
      pushToast(toast)
    }
  }

  loading.value = false
}
</script>

<template>
  <div class="relative">
    <div aria-hidden="true" class="hidden sm:block">
      <svg
        class="absolute -ml-3 top-8 left-1/2 hidden lg:block"
        width="404"
        height="392"
        fill="none"
        viewBox="0 0 404 392"
      >
        <defs>
          <pattern
            id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
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
        <rect width="404" height="392" />
      </svg>
    </div>
    <div class="max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8">
      <div
        class="relative px-6 py-10 overflow-hidden bg-purple-500 dark:bg-purple-800 shadow rounded-2xl sm:px-12 sm:py-20"
      >
        <div
          aria-hidden="true"
          class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
        >
          <svg
            class="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 1463 360"
          >
            <path
              class="text-purple-400 dark:text-purple-900 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              class="text-purple-600 dark:text-purple-700 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div class="relative">
          <div class="sm:text-center">
            <h2
              class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
            >
              You've send mail!
            </h2>
            <p class="max-w-2xl mx-auto mt-6 text-lg text-purple-100">
              If you want to contact me for a new project!
            </p>
          </div>
          <div class="max-w-xl pt-10 mx-auto">
            <form class="grid grid-cols-1 gap-y-6" @submit.prevent="submit">
              <div>
                <label for="full_name" class="sr-only">Name*</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  maxlength="100"
                  class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:text-gray-900"
                  :placeholder="`Name*`"
                  required
                />
              </div>
              <div>
                <label for="email" class="sr-only">Email*</label>
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  maxlength="100"
                  class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:text-gray-900"
                  :placeholder="`Email*`"
                  required
                />
              </div>
              <div>
                <label for="message" class="sr-only">Message*</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 dark:text-gray-900"
                  :minlength="minChar"
                  maxlength="1500"
                  :spellcheck="false"
                  :placeholder="`Message*`"
                  required
                />
                <div class="flex justify-between ml-1 text-sm text-gray-100">
                  <span>Min. {{ minChar }} characters</span>
                  <span>Currently {{ form.message.length }}/1500</span>
                </div>
              </div>
              <div class="hidden">
                <div class="relative flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="conditions"
                      v-model="form.honeypot"
                      name="conditions"
                      type="checkbox"
                      class="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="conditions" class="font-medium text-gray-700">
                      I accept conditions
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex justify-between space-x-1 w-max">
                <app-button type="submit" color="secondary">
                  <span class="flex items-center space-x-2">
                    <svg-icon
                      v-if="!loading"
                      name="notification/airplane"
                      class="w-4 h-4"
                    />
                    <app-loading v-else class="w-4 h-4" />
                    <span> Send </span>
                  </span>
                </app-button>
                <app-button v-if="isDev" color="secondary" @click="fillForm">
                  <svg-icon name="test" class="w-4 h-4" />
                </app-button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
