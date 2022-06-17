<template>
  <footer class="main-container md:flex md:items-center justify-between pb-6">
    <app-social
      class="flex flex-wrap justify-center items-center md:space-x-6 md:order-2"
    />
    <div class="mt-8 md:mt-0 md:order-1">
      <p class="text-center text-base dark:text-gray-100">
        &copy; 2020-{{ new Date().getFullYear() }}. Ewilan Rivière. MIT License.
      </p>
    </div>
  </footer>
</template>
