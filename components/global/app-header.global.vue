<template>
  <div>
    <div class="relative">
      <img
        src="/images/background.webp"
        alt="header"
        class="object-cover w-full gradient"
        style="height: 25rem"
      />
      <div class="absolute z-10 w-full text-center text-black center-it">
        <div class="text-xl lg:text-2xl font-pelagiad">
          {{ $store.state.header.subtitle }}
        </div>
        <div class="mb-4 text-3xl lg:text-5xl font-morpheus">
          {{ $store.state.header.title }}
        </div>
        <div class="text-xl lg:text-2xl font-pelagiad">
          {{ $store.state.header.abstract }}
        </div>
      </div>
    </div>
    <section
      :class="displayIfScrolled ? 'bg-black bg-opacity-65 h-16' : 'h-20'"
      class="fixed top-0 z-40 w-full text-white transition-all duration-300"
    >
      <div
        :class="displayIfScrolled ? 'h-16' : 'h-20'"
        class="relative w-11/12 mx-auto transition-all duration-300 border-b border-white border-opacity-50"
      >
        <div
          class="absolute items-center px-5 py-3 transform -translate-y-1/2 lg:ml-10 top-1/2 hover:text-gray-300"
        >
          <nuxt-link :to="{ name: 'home' }">
            <icon
              name="logo"
              :size="displayIfScrolled ? 40 : 56"
              svg-inject="transition-all duration-300"
            />
          </nuxt-link>
        </div>
        <div
          class="flex items-center h-full mx-auto font-sans text-lg font-semibold w-max-content"
        >
          <h1 class="text-xl font-normal lg:text-3xl font-morpheus">
            &ndash; Ewilan Rivière &ndash;
          </h1>
          <!-- <nuxt-link
            v-for="nav in navigation"
            :key="nav.id"
            :to="{ name: nav.route }"
            class="mx-5 transition-colors duration-300 hover:text-gray-200 fromLeft link-border"
          >
            {{ nav.label }}
          </nuxt-link> -->
        </div>
        <div
          class="absolute right-0 items-center px-5 py-3 ml-10 transform -translate-y-1/2 top-1/2"
        >
          <a
            href="https://github.com/ewilan-riviere/portfolio-front"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-gray-900"
          >
            <icon
              name="github"
              :size="displayIfScrolled ? 32 : 36"
              class="transition-all duration-300"
            />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
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
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    scrollTo() {
      return window.scrollTo({
        bottom: document.querySelector('#__nuxt'),
        behavior: 'smooth',
      })
    },
    handleScroll() {
      if (window.scrollY > 50) {
        this.displayIfScrolled = true
      } else {
        this.displayIfScrolled = false
      }
    },
  },
}
</script>
