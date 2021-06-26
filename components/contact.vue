<template>
  <div class="relative sm:pb-16">
    <div aria-hidden="true" class="hidden sm:block">
      <svg
        class="absolute -ml-3 top-8 left-1/2"
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
        class="
          relative
          px-6
          py-10
          overflow-hidden
          bg-primary-500
          dark:bg-primary-700
          shadow-xl
          rounded-2xl
          sm:px-12 sm:py-20
        "
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
              class="text-primary-400 dark:text-primary-500 text-opacity-40"
              fill="currentColor"
              d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
            />
            <path
              class="text-primary-600 dark:text-primary-600 text-opacity-40"
              fill="currentColor"
              d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
            />
          </svg>
        </div>
        <div class="relative">
          <div class="sm:text-center">
            <h2
              class="
                text-3xl
                font-extrabold
                tracking-tight
                text-white
                sm:text-4xl
              "
            >
              {{ $t('contact.title') }}
            </h2>
            <p class="max-w-2xl mx-auto mt-6 text-lg text-primary-100">
              {{ $t('contact.subtitle') }}
            </p>
          </div>
          <div class="max-w-xl pt-10 mx-auto">
            <form class="grid grid-cols-1 gap-y-6" @submit.prevent="submit">
              <div>
                <label for="full_name" class="sr-only"
                  >{{ $t('fields.name') }}*</label
                >
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  name="name"
                  autocomplete="name"
                  maxlength="100"
                  class="
                    block
                    w-full
                    px-4
                    py-3
                    placeholder-gray-500
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                  "
                  :placeholder="`${$t('fields.name')}*`"
                  required
                />
              </div>
              <div>
                <label for="email" class="sr-only"
                  >{{ $t('fields.email') }}*</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  maxlength="100"
                  class="
                    block
                    w-full
                    px-4
                    py-3
                    placeholder-gray-500
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                  "
                  :placeholder="`${$t('fields.email')}*`"
                  required
                />
              </div>
              <div>
                <label for="message" class="sr-only"
                  >{{ $t('fields.message') }}*</label
                >
                <textarea
                  id="message"
                  v-model="form.message"
                  name="message"
                  rows="4"
                  class="
                    block
                    w-full
                    px-4
                    py-3
                    placeholder-gray-500
                    border-gray-300
                    rounded-md
                    shadow-sm
                    focus:ring-indigo-500 focus:border-indigo-500
                  "
                  minlength="50"
                  maxlength="1500"
                  :placeholder="`${$t('fields.message')}*`"
                  required
                />
                <div class="flex justify-between ml-1 text-sm text-gray-100">
                  <span>Min. 25 {{ $t('fields.characters') }}</span>
                  <span
                    >{{ $t('fields.currently') }}
                    {{ form.message.length }}/1500</span
                  >
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
                      class="
                        w-4
                        h-4
                        text-indigo-600
                        border-gray-300
                        rounded
                        focus:ring-indigo-500
                      "
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="conditions" class="font-medium text-gray-700"
                      >I accept conditions</label
                    >
                  </div>
                </div>
              </div>
              <div class="flex justify-between space-x-1 w-max">
                <app-button type="submit" color="secondary">
                  <span v-if="!loading" class="flex items-center space-x-2">
                    <svg-icon name="airplane" class="w-4 h-4" />
                    <span> {{ $t('fields.send') }} </span>
                  </span>
                  <span v-else class="flex items-center space-x-2">
                    <loading class="w-4 h-4" />
                    <span> {{ $t('fields.sending') }} </span>
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

<script>
export default {
  name: 'Cta',
  data() {
    return {
      loading: false,
      success: false,
      errors: false,
      isDev: process.env.NODE_ENV !== 'production',
      form: {
        name: '',
        email: '',
        message: '',
        honeypot: false,
      },
      formTesting: {
        name: 'Ewilan',
        email: 'ewilan@dotslashplay.it',
        message:
          'Dolor pariatur exercitation duis dolore eu ut commodo quis incididunt ad voluptate sit. Do est nulla adipisicing ut dolore amet dolore nostrud labore. Magna laborum aliqua duis eiusmod quis aliquip officia veniam adipisicing est magna nostrud culpa. Laborum nisi nisi sit Lorem fugiat aute deserunt ea reprehenderit sint sint nulla ad labore.',
        honeypot: false,
      },
      message: {
        title: 'Erreur',
        text: "Une erreur s'est produite, nous sommes désolés.",
      },
    }
  },
  methods: {
    fillForm() {
      for (const [key] of Object.entries(this.form)) {
        this.form[key] = this.formTesting[key]
      }
    },
    async submit() {
      this.loading = true
      const title = 'Message sended!'
      const message = 'Thanks you for your message.'
      if (this.form.honeypot) {
        setTimeout(() => {
          this.$swal(title, message, 'success')
        }, 1500)
        this.loading = false
        return
      }
      try {
        await this.$axios.$post('/submission', this.form)

        this.success = true
        this.errors = false
        this.form = {
          name: '',
          email: '',
          message: '',
        }
        this.message = {
          title: 'Succès',
          text: 'Votre message a bien été envoyé',
        }
        setTimeout(() => {
          this.success = false
        }, 1500)
      } catch (e) {
        console.error(e)
        this.errors = true
      }
      this.loading = false
    },
  },
}
</script>
