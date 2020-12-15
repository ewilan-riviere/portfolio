<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative overflow-hidden bg-white">
    <div class="hidden lg:block lg:absolute lg:inset-0">
      <svg
        class="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              class="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y="72"
          width="640"
          height="640"
          class="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>
    <div class="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <nav
        class="relative flex items-center justify-between max-w-screen-xl px-4 mx-auto sm:px-6"
      >
        <div class="flex items-center flex-1">
          <div class="flex items-center justify-between w-full md:w-auto">
            <a href="#" aria-label="Home">
              <img
                class="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                alt="Logo"
              />
            </a>
            <div class="flex items-center -mr-2 md:hidden">
              <button
                id="main-menu"
                type="button"
                class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  class="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="hidden md:block md:ml-10">
            <a
              href="#"
              class="font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >Product</a
            >
            <a
              href="#"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >Features</a
            >
            <a
              href="#"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >Marketplace</a
            >
            <a
              href="#"
              class="ml-10 font-medium text-gray-500 transition duration-150 ease-in-out hover:text-gray-900"
              >Company</a
            >
          </div>
        </div>
        <div class="hidden text-right md:block">
          <span class="inline-flex rounded-md shadow-md">
            <span class="inline-flex rounded-md shadow-xs">
              <a
                href="#"
                class="inline-flex items-center px-4 py-2 text-base font-medium leading-6 text-indigo-600 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:bg-gray-50 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo"
              >
                Log in
              </a>
            </span>
          </span>
        </div>
      </nav>

      <!--
      Mobile menu, show/hide based on menu open state.

      Entering: "duration-150 ease-out"
        From: "opacity-0 scale-95"
        To: "opacity-100 scale-100"
      Leaving: "duration-100 ease-in"
        From: "opacity-100 scale-100"
        To: "opacity-0 scale-95"
    -->
      <div
        class="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
      >
        <div class="rounded-lg shadow-md">
          <div
            class="overflow-hidden bg-white rounded-lg shadow-xs"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="main-menu"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <div>
                <img
                  class="w-auto h-8"
                  src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg"
                  alt=""
                />
              </div>
              <div class="-mr-2">
                <button
                  type="button"
                  class="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                  aria-label="Close menu"
                >
                  <svg
                    class="w-6 h-6"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <a
                href="#"
                class="block px-3 py-2 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >Product</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >Features</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >Marketplace</a
              >
              <a
                href="#"
                class="block px-3 py-2 mt-1 text-base font-medium text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50"
                role="menuitem"
                >Company</a
              >
            </div>
            <div>
              <a
                href="#"
                class="block w-full px-5 py-3 font-medium text-center text-indigo-600 transition duration-150 ease-in-out bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700"
                role="menuitem"
              >
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>

      <main
        class="max-w-screen-xl px-4 mx-auto mt-8 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24"
      >
        <div class="lg:grid lg:grid-cols-12 lg:gap-8">
          <div
            class="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <div
              class="text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base"
            >
              Coming soon
            </div>
            <h2
              class="mt-1 text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl"
            >
              Data to enrich your
              <br class="hidden md:inline" />
              <span class="text-indigo-600">online business</span>
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
            >
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua ad ad non deserunt sunt.
            </p>
            <div
              class="mt-5 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
            >
              <p class="text-base font-medium text-gray-900">
                Sign up to get notified when it’s ready.
              </p>
              <form action="#" method="POST" class="mt-3 sm:flex">
                <input
                  aria-label="Email"
                  class="block w-full px-3 py-3 text-base leading-6 placeholder-gray-500 transition duration-150 ease-in-out border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:placeholder-gray-400 focus:shadow-outline-blue focus:border-blue-300 sm:flex-1"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  class="w-full px-6 py-3 mt-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-700 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray active:bg-gray-900 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Notify me
                </button>
              </form>
              <p class="mt-3 text-sm leading-5 text-gray-500">
                We care about the protection of your data. Read our
                <a href="#" class="font-medium text-gray-900 underline"
                  >Privacy Policy</a
                >.
              </p>
            </div>
          </div>
          <div
            class="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
          >
            <svg
              class="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
              width="640"
              height="784"
              fill="none"
              viewBox="0 0 640 784"
            >
              <defs>
                <pattern
                  id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                  x="118"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    class="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                y="72"
                width="640"
                height="640"
                class="text-gray-50"
                fill="currentColor"
              />
              <rect
                x="118"
                width="404"
                height="784"
                fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
              />
            </svg>
            <div
              class="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md"
            >
              <button
                type="button"
                class="relative block w-full overflow-hidden rounded-lg focus:outline-none focus:shadow-outline"
              >
                <img
                  class="w-full"
                  src="https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Woman making a sale"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center w-full h-full"
                >
                  <svg
                    class="w-20 h-20 text-indigo-500"
                    fill="currentColor"
                    viewBox="0 0 84 84"
                  >
                    <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
                    <path
                      d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style scoped></style>
