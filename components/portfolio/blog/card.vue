<script setup lang="ts">
defineProps<{
  large?: boolean
}>()
</script>

<template>
  <div
    :class="large ? 'md:col-span-2' : 'md:col-span-1'"
    class="relative z-20 mx-auto w-full max-w-sm sm:mx-0 sm:max-w-none group"
  >
    <a
      :class="large ? 'items-center sm:flex-row sm:pr-3' : ''"
      class="flex flex-col h-full rounded cursor-pointer bg-gray-50 dark:bg-gray-800 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors duration-200 shadow"
      href="https://reddit.com"
    >
      <app-img
        :class="
          large
            ? 'w-full sm:min-h-full sm:w-1/2 sm:rounded-l sm:rounded-tr-none'
            : ''
        "
        class="h-48 object-cover rounded-t"
        src="https://images.unsplash.com/photo-1563784462041-5f97ac9523dd?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1024&amp;q=80"
        alt=""
      />
      <div class="flex-1 py-8 pr-5 pl-8">
        <h6
          class="m-0 text-2xl font-bold leading-9 duration-300 dark:text-white group-hover:text-purple-600"
        >
          Enjoying the beach life while on a vacation
        </h6>
        <p
          class="mx-0 mt-4 mb-0 text-sm font-semibold leading-relaxed text-gray-500 dark:text-gray-400"
        >
          Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.
        </p>
        <div class="flex items-center mt-8">
          <img
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.95&amp;w=512&amp;h=512&amp;q=80"
            class="block mr-3 w-12 max-w-full h-12 align-middle rounded-full"
          >
          <div class="text-xs leading-4 text-gray-500 dark:text-gray-400">
            <div
              class="mt-0 text-sm font-bold leading-5 text-gray-600 dark:text-gray-200"
            >
              Adam Cuppy
            </div>
            <div class="pt-1 font-medium">Vlogger</div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
