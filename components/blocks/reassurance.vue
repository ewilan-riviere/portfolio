<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative bg-gray-800">
    <div
      class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2"
    >
      <img
        class="object-cover w-full h-full"
        src="/images/work.webp"
        alt="Support team"
      />
    </div>
    <div
      class="relative max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:px-8 lg:py-16"
    >
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <div
          class="text-base font-semibold leading-6 tracking-wider text-gray-300 uppercase"
        >
          Toujours en recherche de projets funs
        </div>
        <h2
          class="mt-2 text-3xl font-extrabold leading-9 tracking-tight text-white sm:text-4xl sm:leading-10"
        >
          Vous avez une proposition ?
        </h2>
        <p class="mt-3 text-lg leading-7 text-gray-300">
          Si vous voulez travailler en équipe sur un projet open-source ou lié à
          une association, en supposant que ce projet soit en relation avec les
          technologies que j'apprécie et mes valeurs, je serai ravie de
          participer si celui-ci m'intéresse !
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Reassurance',
})
</script>
