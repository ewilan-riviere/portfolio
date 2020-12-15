<template>
  <div>
    <div class="relative">
      <img
        src="/images/background.jpg"
        alt="header"
        class="object-cover w-full gradient"
        style="height: 30rem"
      />
      <!-- <div class="absolute bottom-0 w-full h-48 gradient"></div> -->
      <div class="absolute z-10 w-full text-center text-black center-it">
        <div class="text-2xl font-pelagiad">Portfolio</div>
        <div class="mb-4 text-5xl font-morpheus">Ewilan Rivière</div>
        <div class="text-2xl font-pelagiad">
          Développeuse web & mobile chez
          <a
            href="https://www.useweb.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="border-black-after link-border fromLeft"
          >
            Useweb</a
          >,
          <a
            href="https://goo.gl/maps/FZDAdEWE3LasCpxi6"
            target="_blank"
            rel="noopener noreferrer"
            class="border-black-after link-border fromLeft"
          >
            France</a
          >
        </div>
      </div>
    </div>
    <!-- <div class="absolute text-6xl text-white center-it-header font-morpheus">
      Portfolio
    </div> -->
    <div
      :class="displayIfScrolled ? 'bg-black bg-opacity-65 h-16' : 'h-20'"
      class="fixed top-0 z-40 w-full text-white transition-all duration-300"
    >
      <div class="absolute items-center px-5 py-3 ml-20">
        <icon
          name="logo"
          :size="displayIfScrolled ? 40 : 56"
          svg-inject="transition-all duration-300"
        />
      </div>
      <div
        class="flex items-center h-full mx-auto font-sans text-lg font-semibold w-max-content"
      >
        <a
          v-for="nav in navigation"
          :key="nav.id"
          href=""
          class="mx-5 transition-colors duration-300 hover:text-gray-200 fromLeft link-border"
        >
          {{ nav.label }}
        </a>
      </div>
      <div
        class="w-11/12 mx-auto border-b border-white border-opacity-50"
      ></div>
    </div>
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
          route: '',
        },
        {
          label: 'Réalisations',
          route: '',
        },
        {
          label: 'À propos',
          route: '',
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

<style lang="postcss" scoped>
.text-on-img-tailwind .source::after {
  @apply absolute top-0 left-0 right-0 bottom-0 w-full max-w-full bg-black bg-opacity-40;
  content: '';
}
.border-black-after:after {
  @apply border-black !important;
}
.link-border {
  @apply inline-block;
}
.link-border:after {
  @apply border-b-2 block transform;
  content: '';
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
.link-border:hover:after {
  transform: scaleX(1);
}
.link-border.fromRight:after {
  transform-origin: 100% 50%;
}
.link-border.fromLeft:after {
  transform-origin: 0% 50%;
}
.gradient {
  /* background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0.3) 70%,
    rgba(255, 255, 255, 0.2) 80%,
    rgba(255, 255, 255, 0.1) 90%,
    rgba(255, 255, 255, 0) 100%
  ); */
  mask-image: linear-gradient(to bottom, white 0%, transparent 100%);
}
</style>
