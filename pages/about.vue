<script lang="ts" setup>
import type { IconType } from '.nuxt/svg-transformer'

const links: {
  label: string
  href: string
  icon: IconType
  color: string
  colorDark: string
}[] = [
  {
    label: 'Follow on Twitter',
    href: 'https://twitter.com/ewilanriviere',
    icon: 'social/twitter',
    color: '#1DA1F2',
    colorDark: '#1DA1F2',
  },
  {
    label: 'Follow on Stack Overflow',
    href: 'https://stackoverflow.com/users/11008206/ewilan-r?tab=profile',
    icon: 'social/stackoverflow',
    color: '#F48024',
    colorDark: '#F48024',
  },
  {
    label: 'Follow on GitHub',
    href: 'https://github.com/ewilan-riviere',
    icon: 'social/github',
    color: '#333',
    colorDark: '#fff',
  },
  {
    label: 'Follow on LinkedIn',
    href: 'https://www.linkedin.com/in/ewilan-riviere/',
    icon: 'social/linkedin',
    color: '#0077B5',
    colorDark: '#0077B5',
  },
]
</script>

<template>
  <layout-page title="Title" description="Desc">
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <div class="w-max rotate-3 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 px-3 pt-3 pb-8">
            <img src="/images/ewilan-riviere.webp" alt="" class="w-64 h-64 object-cover">
          </div>
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I'm Ewilan Rivière. I live in New York City, where I design the future.
        </h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>I've loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on.</p><p>The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit.</p><p>I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space.</p><p>Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really <em>can</em> make it to orbit — from the comfort of their own backyards.</p>
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list">
          <about-link v-for="(link, id) in links" :key="id" :link="link" />
        </ul>
      </div>
    </div>
  </layout-page>
</template>
