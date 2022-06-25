<template>
  <footer class="main-container md:flex md:items-center justify-between pb-6 text-gray-700 dark:text-gray-300">
    <app-social class="flex flex-wrap justify-center items-center md:space-x-6 md:order-2" />
    <div class="mt-8 md:mt-0 md:order-1">
      <div class="text-center text-base dark:text-gray-100 flex items-center">
        &copy; 2020-{{ new Date().getFullYear() }}. <a href="https://github.com/ewilan-riviere" target="_blank"
          rel="noopener noreferrer" class="link ml-1">Ewilan
          Rivière</a>. <a href="https://gitlab.com/ewilan-riviere/portfolio/-/blob/main/LICENSE" target="_blank"
          rel="noopener noreferrer" class="link ml-1">MIT License</a>.
        <span class="flex items-center ml-1">
          <span>Built with</span>
          <a href="https://v3.nuxtjs.org" target="_blank" rel="noopener noreferrer" class="link mx-1">
            <svg-icon name="nuxt" class="w-5 h-5" />
          </a>
          <span>&</span>
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" class="link mx-1">
            <svg-icon name="tailwindcss" class="w-5 h-5" />
          </a>
        </span>
      </div>
    </div>
  </footer>
</template>

<style lang="css" scoped>
.link {
  @apply flex items-center space-x-1 transition-colors duration-100;
}

.link:hover {
  @apply text-gray-500;
}

.dark {
  & .link:hover {
    @apply text-gray-400;
  }
}
</style>
