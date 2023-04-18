<script lang="ts" setup>
import type { RouteType } from '~~/.nuxt/typed-link'

const currentYear = new Date().getFullYear()

const items: {
  label: string
  to?: RouteType
  href?: string
}[] = [
  {
    label: 'footer.contact-me',
    to: { name: 'contact' },
  },
  {
    label: 'footer.github',
    href: 'https://github.com/ewilan-riviere',
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
                  <span
                    v-for="item in items"
                    :key="item.label"
                  >
                    <typed-link
                      v-if="item.to"
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      :to="item.to"
                    >
                      {{ $t(item.label) }}
                    </typed-link>
                    <a
                      v-else
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      :href="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ $t(item.label) }}
                    </a>
                  </span>
                </div>
                <p class="text-sm text-zinc-400 dark:text-zinc-500">
                  © 2021-{{ currentYear }}
                  Ewilan Rivière.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
