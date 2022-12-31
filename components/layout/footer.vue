<script lang="ts" setup>
import type { RouteType } from '~~/.nuxt/typed-link'

const items: {
  label: string
  to: RouteType
}[] = [
  {
    label: 'Contact me',
    to: { name: 'about', hash: '#contact' },
  },
]
</script>

<template>
  <footer class="mt-32">
    <div class="sm:px-8">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div
          class="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40"
        >
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                class="flex flex-col items-center justify-between gap-6 sm:flex-row"
              >
                <div
                  class="flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                  <typed-link
                    v-for="item in items"
                    :key="item.label"
                    class="transition hover:text-teal-500 dark:hover:text-teal-400"
                    :to="item.to"
                  >
                    {{ item.label }}
                  </typed-link>
                </div>
                <p class="text-sm text-zinc-400 dark:text-zinc-500">
                  ©
                  <!-- -->2022<!-- -->
                  Ewilan Rivière. MIT licensed.
                </p>
              </div>
              <div class="text-xs text-gray-500 text-center mt-10">
                <em>From
                  <a
                    href="https://tailwindui.com/templates/spotlight"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline underline-offset-2"
                  >Tailwind UI</a>.</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
