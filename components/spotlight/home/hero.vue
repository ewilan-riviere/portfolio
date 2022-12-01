<script lang="ts" setup>
import type { IconType } from '~~/.nuxt/svg-transformer'

defineProps<{
  title?: string
}>()

interface Social {
  name: string
  url: string
  icon: IconType
}

const socials: Social[] = [
  {
    name: 'Twitter',
    url: 'https://twitter.com/ewilanriviere',
    icon: 'social/github',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ewilanriviere',
    icon: 'social/gitlab',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ewilanriviere',
    icon: 'social/twitter',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ewilanriviere',
    icon: 'social/stackoverflow',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/ewilanriviere',
    icon: 'social/linkedin',
  },
]
</script>

<template>
  <div class="sm:px-8 mt-9">
    <div class="mx-auto max-w-7xl lg:px-8">
      <div class="relative px-4 sm:px-8 lg:px-12">
        <div class="mx-auto max-w-2xl lg:max-w-5xl">
          <div class="max-w-2xl">
            <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {{ $t('hero.title') }}
            </h1>
            <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {{ $t('hero.subtitle') }}
            </p>
            <div class="mt-6 flex gap-6">
              <a v-for="social in socials" :key="social.icon" class="group -m-1 p-1" :aria-label="`Follow on ${social.name}`" :title="social.name" :href="social.url">
                <svg-icon class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" :name="social.icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
