<template>
  <div class="relative">
    <div class="parallax bg-forest-swamp gradient-top"></div>
    <div
      class="absolute top-0 w-full px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32 pt-32"
    >
      <h1 class="text-4xl tracking-tight text-center sm:text-5xl font-morpheus">
        <span class="block text-black dark:text-white">Portfolio</span>
      </h1>
      <h2
        class="max-w-lg mx-auto mt-6 text-xl text-center text-gray-800 dark:text-gray-200 sm:max-w-3xl lg:font-pelagiad lg:text-3xl"
      >
        Developer designer of applications
      </h2>
    </div>
  </div>
</template>

<style lang="css" scoped>
.gradient {
  mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
}
.parallax {
  @apply h-96 bg-fixed bg-center bg-no-repeat bg-cover;
}
.gradient-top {
  mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
}
.gradient-inter {
  mask-image: linear-gradient(
    180deg,
    transparent 0%,
    white 60%,
    white 40%,
    transparent 100%
  );
}
.gradient-bottom {
  mask-image: linear-gradient(to top, white 0%, transparent 100%);
}
</style>
