<script lang="ts" setup>
const form = ref({
  name: '',
  email: '',
  message: '',
  conditions: false,
  honeypot: false,
})

const isDev = import.meta.env.DEV
const { document } = await useMarkdown('terms')

const loading = ref(false)
const send = ref(false)
const success = ref(false)

const termsAreOpened = ref(false)
function toggleTerms() {
  termsAreOpened.value = !termsAreOpened.value
}
function test() {
  form.value = {
    name: 'test',
    email: 'test@mail.com',
    message: 'test message',
    conditions: true,
    honeypot: false,
  }
}

async function submit() {
  loading.value = true
  const res = await useFetch('/api/contact', {
    method: 'POST',
    body: {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
      conditions: form.value.conditions,
      honeypot: form.value.honeypot,
    },
  })

  if (res.data.value?.ok) {
    form.value = {
      name: '',
      email: '',
      message: '',
      conditions: false,
      honeypot: false,
    }
    termsAreOpened.value = false

    send.value = true
    success.value = true
  }
  else {
    send.value = true
    success.value = false
  }

  loading.value = false
  setTimeout(() => {
    send.value = false
  }, 3000)
}
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="relative shadow-xl bg-white dark:bg-gray-800 rounded-lg">
      <h2 class="sr-only">
        Contact us
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3">
        <!-- Contact information -->
        <div
          class="relative overflow-hidden bg-primary-700 py-10 px-6 sm:px-10 xl:p-12 rounded-l-md"
        >
          <div class="absolute bottom-0 -right-10">
            <svg
              viewBox="0 0 32 32"
              class="w-56 h-56 text-white opacity-30"
            >
              <path
                fill="currentColor"
                d="m29.919 6.163l-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744l-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556L24.919 8.72c.519-.462-.113-.719-.806-.256l-14.75 9.288l-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-white">
            {{ $t('contact.title') }}
          </h3>
          <div class="mt-6 max-w-3xl text-base text-indigo-50">
            {{ $t('contact.subtitle') }}
          </div>
        </div>

        <!-- Contact form -->
        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <div>
            <slot />
          </div>
          <form
            class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            @submit.prevent="submit"
          >
            <FieldText
              v-model="form.name"
              name="name"
              :label="$t('contact.form.name')"
              required
            />
            <FieldText
              v-model="form.email"
              name="email"
              :label="$t('contact.form.email')"
              required
            />
            <FieldText
              v-model="form.message"
              :name="$t('contact.form.message')"
              label="Message"
              multiline
              required
              class="sm:col-span-2"
              :maxlength="2000"
            />
            <FieldToggle
              v-model="form.conditions"
              name="conditions"
              flexible
              reverse
              required
              class="sm:col-span-2"
            >
              <template #label>
                <span>
                  {{ $t('contact.form.accept') }}
                </span>
                <span
                  class="underline ml-1"
                  @click="toggleTerms"
                >
                  {{ $t('contact.form.terms') }}
                </span>
              </template>
            </FieldToggle>
            <input
              id="conditions-2"
              v-model="form.honeypot"
              type="checkbox"
              class="sr-only"
              name="conditions-2"
            >
            <AppDialog
              :open="termsAreOpened"
              @close="termsAreOpened = false"
            >
              <div
                v-if="document"
                class="p-6 prose dark:prose-invert"
              >
                <ContentRenderer :value="document" />
                <div class="flex justify-end">
                  <AppButton
                    color="secondary"
                    @click="termsAreOpened = false"
                  >
                    {{ $t('contact.form.understand') }}
                  </AppButton>
                </div>
              </div>
            </AppDialog>
            <div class="sm:col-span-2 flex items-center justify-between">
              <Transition>
                <div
                  v-if="send"
                  class="text-sm"
                >
                  <span
                    v-if="success"
                    class="text-green-500 dark:text-green-400"
                  >
                    Votre message a été envoyé avec succès!
                  </span>
                  <span
                    v-else
                    class="text-red-500 dark:text-red-400"
                  >
                    Une erreur est survenue lors de l'envoi de votre message.
                  </span>
                </div>
              </Transition>
              <div v-if="!send" />
              <div class="space-x-1 flex items-center">
                <Transition>
                  <AppLoading v-if="loading" />
                </Transition>
                <AppButton
                  v-if="isDev"
                  @click="test"
                >
                  test
                </AppButton>
                <AppButton type="submit">
                  {{ $t('contact.form.submit') }}
                </AppButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
