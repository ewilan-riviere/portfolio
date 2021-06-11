<template>
  <div class="pb-16 bg-white lg:pb-24">
    <div class="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div
        class="
          relative
          px-8
          py-24
          overflow-hidden
          bg-indigo-500
          shadow-2xl
          rounded-xl
          lg:px-16 lg:grid lg:grid-cols-2 lg:gap-x-8
        "
      >
        <div
          class="
            absolute
            inset-0
            opacity-50
            filter
            saturate-0
            mix-blend-multiply
          "
        >
          <img
            src="/images/ewilan-riviere.jpg"
            alt=""
            class="object-cover w-full h-full"
          />
        </div>
        <div class="relative lg:col-span-1">
          <img
            class="w-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-white.svg"
            alt=""
          />
          <blockquote class="mt-6 text-white">
            <p class="text-xl font-medium sm:text-2xl">
              Workflow has completely transformed how we interact with
              customers. We've seen record bookings, higher customer
              satisfaction, and reduced churn.
            </p>
            <footer class="mt-6">
              <p class="flex flex-col font-medium">
                <span>Marie Chilvers</span>
                <span>CEO, Workcation</span>
              </p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CtaAlt',
}
</script>
