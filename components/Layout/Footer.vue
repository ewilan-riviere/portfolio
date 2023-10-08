<script lang="ts" setup>
import { useMainStore } from '~/store/main'

const currentYear = new Date().getFullYear()

const { socials } = useMainStore()
const list = socials.map((social) => {
  return {
    label: social.title,
    href: social.href,
  }
})

const items: {
  label: string
  to?: any
  href?: string
  translate?: boolean
}[] = [
  {
    label: 'footer.contact-me',
    to: { name: 'contact' },
    translate: true,
  },
  ...list,
]
</script>

<template>
  <footer class="mt-8 lg:mt-32">
    <div class="sm:px-8">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div
          class="border-t border-zinc-100 pt-10 pb-10 dark:border-zinc-700/40"
        >
          <div class="relative px-4 sm:px-8 lg:px-12">
            <div class="mx-auto max-w-2xl lg:max-w-5xl">
              <div
                class="flex flex-col items-center justify-between gap-6 sm:flex-row"
              >
                <div
                  class="hidden lg:flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"
                >
                  <span
                    v-for="item in items"
                    :key="item.label"
                  >
                    <TypedLink
                      v-if="item.to"
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      :to="item.to"
                    >
                      {{ $t(item.label) }}
                    </TypedLink>
                    <a
                      v-else
                      class="transition hover:text-teal-500 dark:hover:text-teal-400"
                      :href="item.href"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {{ item.translate ? $t(item.label) : item.label }}
                    </a>
                  </span>
                </div>
                <p class="text-sm text-zinc-400 dark:text-zinc-500 mx-auto lg:mx-0">
                  © 2021-{{ currentYear }} <a
                    href="https://github.com/ewilan-riviere"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="underline decoration-dashed"
                  >Ewilan Rivière</a>.
                </p>
              </div>
              <div class="text-center mt-10 text-gray-600 dark:text-gray-400 text-sm">
                {{ $t('footer.design-inspired') }} <a
                  href="https://tailwindui.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="underline decoration-dashed"
                >Tailwind UI</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
