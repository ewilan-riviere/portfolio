<script lang="ts" setup>
import { useMainStore } from '@/store/main'

const { socials } = useMainStore()
</script>

<template>
  <layout-page title="About me" description="Tech enthusiast">
    <div
      class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12"
    >
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <div
            class="w-max rotate-3 border border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 px-3 pt-3 pb-8"
          >
            <img
              src="/images/ewilan-riviere.webp"
              alt="Ewilan Rivière"
              class="w-64 h-64 object-cover"
            >
          </div>
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1
          class="text-3xl font-semibold text-zinc-800 dark:text-zinc-100 sm:text-4xl"
        >
          Hi, I'm Ewilan Rivière, full-stack developer
        </h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>
            As a young developer, I started to develop my first real projects
            with Laravel (PHP), learning also to use Git. But I'm also very
            interested in the user experience, which pushes me to keep a link
            with the front-end with Vue.js and Nuxt.js (JavaScript / TypeScript)
            with CSS frameworks like Tailwind CSS. I want to implement the
            necessary for SEO, although I am not an expert in this field. On the
            mobile side, beyond web responsive, I do Flutter (Dart) in order to
            be able to deploy applications on Android and on iOS.
          </p>
          <p>
            I like to have knowledge on each part of the chain, from local
            development to deployment on a server (with NGINX), which leads me
            to configure quite often Linux servers for both production and local
            development. Therefore, I like to have efficient tools, whatever the
            development environment (Linux, Windows or macOS) to be able to
            easily use such or such version of a language.
          </p>
          <p>
            I develop best in groups, preferring communication and help to
            isolated development, as long as I have colleagues who also enjoy
            this way of working. I love to discuss technologies, I'm interested
            in the latest versions of the languages I use and I spend a lot of
            time reading documentation or making it, in Markdown of course. I
            always have too many projects on the go, but I also always have
            something to do!
          </p>
        </div>
      </div>
      <div class="lg:pl-20">
        <ul role="list">
          <about-social
            v-for="(social, id) in socials"
            :key="id"
            :social="social"
          />
        </ul>
      </div>
    </div>
    <div class="space-y-16 mt-10">
      <about-uses />
      <about-features />
      <form-contact id="contact" />
    </div>
  </layout-page>
</template>
