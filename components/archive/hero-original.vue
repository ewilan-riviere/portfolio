<template>
  <div>
    <div class="relative">
      <div class="h-96">
        <img
          src="/images/forest.jpg"
          alt="header"
          class="object-cover w-full h-full gradient"
        />
      </div>
      <div
        class="
          absolute
          z-10
          w-full
          text-center text-black
          transform
          -translate-x-1/2 -translate-y-1/2
          top-1/2
          left-1/2
        "
      >
        <div class="font-sans text-xl lg:text-2xl lg:font-pelagiad">
          {{ $store.state.header.subtitle }}
        </div>
        <div class="mb-4 text-4xl lg:text-5xl font-morpheus">
          {{ $store.state.header.title }}
        </div>
        <div class="font-sans text-xl lg:text-2xl lg:font-pelagiad">
          {{ $store.state.header.abstract }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroOriginal',
  data() {
    return {
      displayIfScrolled: false,
      navigation: [
        {
          label: 'Technologies',
          route: 'home',
        },
        {
          label: 'Projets',
          route: 'projects',
        },
        {
          label: 'À propos',
          route: 'home',
        },
      ],
    }
  },
}
</script>

<style lang="postcss" scoped>
.gradient {
  mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
}
</style>
