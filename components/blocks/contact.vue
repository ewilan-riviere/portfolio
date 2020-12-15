<template>
  <section class="relative text-gray-700 body-font">
    <div class="container flex flex-wrap px-5 py-24 mx-auto sm:flex-no-wrap">
      <div
        class="relative flex items-end justify-start p-10 overflow-hidden bg-gray-300 rounded-lg lg:w-2/3 md:w-1/2 sm:mr-10"
      >
        <!-- eslint-disable prettier/prettier -->
        <iframe
          class="absolute inset-0"
          style="filter: grayscale(1) contrast(1.2) opacity(0.4)"
          title="map"
          marginheight="0"
          marginwidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          width="100%"
          height="100%"
          frameborder="0"
        />
        <div class="relative flex flex-wrap py-6 bg-white">
          <div class="px-6 lg:w-1/2">
            <h2
              class="text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              ADDRESS
            </h2>
            <p class="leading-relaxed">
              Photo booth tattooed prism, portland taiyaki hoodie neutra
              typewriter
            </p>
          </div>
          <div class="px-6 mt-4 lg:w-1/2 lg:mt-0">
            <h2
              class="text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              EMAIL
            </h2>
            <a class="leading-relaxed text-indigo-500">example@email.com</a>
            <h2
              class="mt-4 text-sm font-medium tracking-widest text-gray-900 title-font"
            >
              PHONE
            </h2>
            <p class="leading-relaxed">123-456-7890</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col w-full mt-8 bg-white lg:w-1/3 md:w-1/2 md:ml-auto md:py-8 md:mt-0"
      >
        <h2 class="mb-1 text-lg font-medium text-gray-900 title-font">
          Feedback
        </h2>
        <p class="mb-5 leading-relaxed text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <input
          class="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
          placeholder="Name"
          type="text"
        />
        <input
          class="px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded focus:outline-none focus:border-indigo-500"
          placeholder="Email"
          type="email"
        />
        <textarea
          class="h-32 px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded resize-none focus:outline-none focus:border-indigo-500"
          placeholder="Message"
        />
        <button
          class="px-6 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
        >
          Button
        </button>
        <p class="mt-3 text-xs text-gray-500">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Contact',
}
</script>

<style lang="scss" scoped></style>
