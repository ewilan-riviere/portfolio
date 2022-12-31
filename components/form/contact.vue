<script lang="ts" setup>
const form = ref({
  name: '',
  email: '',
  message: '',
  conditions: false,
})
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="relative shadow-xl bg-gray-800 rounded-lg">
      <h2 class="sr-only">
        Contact us
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-3">
        <!-- Contact information -->
        <div
          class="relative overflow-hidden bg-primary-700 py-10 px-6 sm:px-10 xl:p-12 rounded-l-md"
        >
          <div class="absolute bottom-0 -right-10">
            <svg viewBox="0 0 32 32" class="w-56 h-56 text-white opacity-30">
              <path
                fill="currentColor"
                d="m29.919 6.163l-4.225 19.925c-.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744l-3.106 2.988c-.344.344-.631.631-1.294.631l.463-6.556L24.919 8.72c.519-.462-.113-.719-.806-.256l-14.75 9.288l-6.35-1.988c-1.381-.431-1.406-1.381.288-2.044l24.837-9.569c1.15-.431 2.156.256 1.781 2.013z"
              />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-white">
            You've send mail!
          </h3>
          <div class="mt-6 max-w-3xl text-base text-indigo-50">
            If you want to contact me for a new project!
          </div>
        </div>

        <!-- Contact form -->
        <div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
          <form class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <field-text v-model="form.name" name="name" label="Nom" />
            <field-text v-model="form.email" name="email" label="Email" />
            <field-text
              v-model="form.message"
              name="message"
              label="Message"
              multiline
              class="sm:col-span-2"
            />
            <field-toggle
              v-model="form.conditions"
              name="conditions"
              label="Agree to policies"
              flexible
              reverse
              class="sm:col-span-2"
            />
            <div class="sm:col-span-2 sm:flex sm:justify-end">
              <app-button> Let's talk </app-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
