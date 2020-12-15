<template>
  <div>
    <div
      class="fixed min-w-full min-h-screen bg-center bg-no-repeat bg-cover bg-logo"
    >
      <div
        class="absolute top-0 left-0 w-full h-full bg-white bg-opacity-95"
      ></div>
    </div>
    <div class="relative">
      <div class="min-h-screen pt-20">
        <div class="absolute text-center center-it">
          <div class="text-2xl font-pelagiad">Portfolio</div>
          <div class="text-5xl font-morpheus">Ewilan Rivière</div>
          <div class="mt-6 text-4xl italic font-pelagiad">Coming soon</div>
          <div class="inline-flex rounded-md shadow">
            <button
              class="inline-flex items-center justify-center px-5 py-3 mt-3 text-base font-semibold text-white transition-colors duration-300 bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700"
              @click="toggleInDev"
            >
              Version en développement
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  methods: {
    toggleInDev() {
      this.$emit('toggle-dev')
    },
  },
}
</script>
