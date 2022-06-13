<template>
  <div class="container py-16 md:py-20" id="contact">
    <h2
      class="text-center font-header text-4xl font-semibold uppercase text-purple-600 sm:text-5xl lg:text-6xl"
    >
      Here's a contact form
    </h2>
    <h4
      class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl"
    >
      Have Any Questions?
    </h4>
    <div class="mx-auto w-full pt-5 text-center sm:w-2/3 lg:pt-6">
      <p class="font-body text-grey-10">
        Lorem ipsum dolor sit amet consectetur adipiscing elit hendrerit
        condimentum turpis nisl sem, viverra habitasse urna ante lobortis
        fermentum accumsan. Viverra habitasse urna ante lobortis fermentum
        accumsan.
      </p>
    </div>
    <form class="mx-auto w-full pt-10 sm:w-3/4">
      <div class="flex flex-col md:flex-row">
        <input
          class="mr-3 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:w-1/2 lg:mr-5"
          placeholder="Name"
          type="text"
          id="name"
        />
        <input
          class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-0 md:ml-3 md:w-1/2 lg:ml-5"
          placeholder="Email"
          type="text"
          id="email"
        />
      </div>
      <textarea
        class="mt-6 w-full rounded border-grey-50 px-4 py-3 font-body text-black md:mt-8"
        placeholder="Message"
        id="message"
        cols="30"
        rows="10"
      ></textarea>
      <button
        class="mt-6 flex items-center justify-center rounded bg-purple-600 px-8 py-3 font-header text-lg font-bold uppercase text-white hover:bg-grey-20"
      >
        Send
        <i class="bx bx-chevron-right relative -right-2 text-3xl"></i>
      </button>
    </form>
  </div>
</template>
