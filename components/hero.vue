<template>
  <div class="relative">
    <div>
      <div class="relative">
        <div class="absolute inset-0 h-96">
          <img
            src="/images/forest.jpg"
            class="object-cover w-full h-full gradient"
          />
        </div>
        <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1
            class="
              text-3xl
              tracking-tight
              text-center
              sm:text-5xl
              lg:text-6xl lg:font-morpheus
            "
          >
            <span class="block text-black">{{
              $t($store.state.header.title)
            }}</span>
          </h1>
          <p
            class="
              max-w-lg
              mx-auto
              mt-6
              text-xl text-center text-gray-800
              sm:max-w-3xl
              lg:font-pelagiad lg:text-2xl
            "
          >
            {{ $t($store.state.header.abstract) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="postcss" scoped>
.gradient {
  mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
}
</style>
