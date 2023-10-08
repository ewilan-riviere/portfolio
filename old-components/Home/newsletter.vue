<script lang="ts" setup></script>

<template>
  <div
    class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
  >
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
        class="h-6 w-6 flex-none"
      >
        <path
          d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
          class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
        />
        <path
          d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
          class="stroke-zinc-400 dark:stroke-zinc-500"
        />
      </svg>
      <span class="ml-3">
        {{ $t('home.contact.title') }}
      </span>
    </h2>
    <p class="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ $t('home.contact.subtitle') }}
    </p>
    <div class="mt-6 flex justify-end">
      <app-button color="white" :to="{ name: 'contact' }">
        {{ $t('home.contact.button') }}
      </app-button>
    </div>
  </div>
</template>

<style scoped></style>
