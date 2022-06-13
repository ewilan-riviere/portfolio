<template>
  <footer class="parallax bg-jungle-cascade gradient-bottom">
    <div
      class="max-w-7xl m-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
    >
      <app-social class="flex justify-center space-x-6 md:order-2" />
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-white">
          &copy; 2020-{{ new Date().getFullYear() }}. Ewilan Rivière. MIT
          License.
        </p>
      </div>
    </div>
  </footer>
</template>
