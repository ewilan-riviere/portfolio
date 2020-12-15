<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="relative bg-white">
    <div class="absolute inset-0">
      <div class="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
    </div>
    <div class="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
      <div
        class="px-4 py-16 bg-gray-50 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12"
      >
        <div class="max-w-lg mx-auto">
          <h2
            class="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-3xl sm:leading-9"
          >
            Get in touch
          </h2>
          <p class="mt-3 text-lg leading-6 text-gray-500">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat
            massa dictumst amet. Sapien tortor lacus arcu.
          </p>
          <dl class="mt-8 text-base leading-6 text-gray-500">
            <div>
              <dt class="sr-only">Postal address</dt>
              <dd>
                <p>742 Evergreen Terrace</p>
                <p>Springfield, OR 12345</p>
              </dd>
            </div>
            <div class="mt-6">
              <dt class="sr-only">Phone number</dt>
              <dd class="flex">
                <icon
                  name="phone-stroke"
                  stroke
                  class="flex-shrink-0 text-gray-400"
                  :size="25"
                />
                <span class="ml-3"> +1 (555) 123-4567 </span>
              </dd>
            </div>
            <div class="mt-3">
              <dt class="sr-only">Email</dt>
              <dd class="flex">
                <icon
                  name="mail-stroke"
                  stroke
                  class="flex-shrink-0 text-gray-400"
                  :size="25"
                />
                <span class="ml-3"> support@example.com </span>
              </dd>
            </div>
          </dl>
          <p class="mt-6 text-base leading-6 text-gray-500">
            Looking for careers?
            <a href="#" class="font-medium text-gray-700 underline"
              >View all job openings</a
            >.
          </p>
        </div>
      </div>
      <div
        class="px-4 py-16 bg-white sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12"
      >
        <div class="max-w-lg mx-auto lg:max-w-none">
          <form action="#" method="POST" class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="full_name" class="sr-only">Full name</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="full_name"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Full name"
                />
              </div>
            </div>
            <div>
              <label for="email" class="sr-only">Email</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="email"
                  type="email"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <label for="phone" class="sr-only">Phone</label>
              <div class="relative rounded-md shadow-sm">
                <input
                  id="phone"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div>
              <label for="message" class="sr-only">Message</label>
              <div class="relative rounded-md shadow-sm">
                <textarea
                  id="message"
                  rows="4"
                  class="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <div class="">
              <span class="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  class="inline-flex justify-center px-6 py-3 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
                >
                  Submit
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Contact',
})
</script>
