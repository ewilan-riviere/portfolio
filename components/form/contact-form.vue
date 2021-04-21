<template>
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div
        class="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
      >
        <div class="max-w-lg mx-auto">
          <h2
            class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl"
          >
            Une question ?
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Si vous avez une question sur mes projets ou sur mon parcours,
            n'hésitez pas !
          </p>
        </div>
      </div>
      <div
        class="px-4 pb-8 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form class="grid grid-cols-1 gap-y-6" @submit.prevent="submit">
            <div>
              <label for="full_name" class="sr-only">Nom*</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                maxlength="100"
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Nom*"
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
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Email*"
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
                class="block w-full px-4 py-3 placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                minlength="125"
                maxlength="1500"
                placeholder="Message*"
                required
              ></textarea>
              <div class="flex justify-between ml-1 text-sm text-gray-400">
                <span>Min. 125 characters</span>
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
                    class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
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
              <button
                type="submit"
                class="inline-flex justify-center px-6 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span v-if="!loading" class="flex items-center space-x-2">
                  <icon-airplane class="w-4 h-4" />
                  <span> Envoyer </span>
                </span>
                <span v-else class="flex items-center space-x-2">
                  <icon-load class="w-4 h-4" />
                  <span> Envoi en cours </span>
                </span>
              </button>
              <button
                v-if="isDev"
                type="button"
                class="flex items-center px-3 py-2 font-semibold text-white transition-colors duration-100 bg-indigo-600 rounded-md hover:bg-indigo-700"
                @click="fillForm"
              >
                <icon-test class="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconAirplane from '../icons/icon-airplane.vue'
import IconLoad from '../icons/icon-load.vue'
import iconTest from '../icons/icon-test.vue'
export default {
  name: 'ContactForm',
  components: { iconTest, IconAirplane, IconLoad },
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
        this.$swal(title, message, 'success')
      } catch (e) {
        console.error(e)
        this.errors = true
        const title = 'Error!'
        const message =
          "We are sorry but your message can't be send, try in some time."
        this.$swal(title, message, 'error')
      }
      this.loading = false
    },
  },
}
</script>

<style lang="postcss" scoped></style>
