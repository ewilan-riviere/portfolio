<template>
  <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
  <div class="bg-indigo-800">
    <div class="max-w-screen-xl px-4 py-8 mx-auto sm:py-10 sm:px-6 lg:px-8">
      <div class="lg:space-y-10">
        <h2 class="text-3xl font-bold leading-9 text-white">
          Des technologies solides et connues
        </h2>
        <section v-if="showSwiper">
          <div
            v-swiper:mySwiper="swiperOption"
            :auto-update="true"
            :auto-destroy="true"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 mt-4 ml-8 swiper-wrapper lg:flex-grow-0 lg:ml-4"
            >
              <div
                v-for="technology in randomTechnologies"
                :key="technology.id"
                class="swiper-slide"
              >
                <a
                  :href="technology.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="object-contain text-gray-300 text-opacity-50"
                >
                  <icon :name="`${technology.logo}`" :size="160" ratio />
                </a>
              </div>
            </div>
            <div class="hidden swiper-pagination lg:block"></div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CloudLogos',
  data() {
    return {
      technologies: [
        {
          label: 'Laravel',
          logo: 'techno-laravel',
          link: 'https://laravel.com',
        },
        { label: 'PHP', logo: 'techno-php', link: 'https://www.php.net' },
        {
          label: 'Backpack',
          logo: 'techno-backpack',
          link: 'https://backpackforlaravel.com',
        },
        { label: 'Nuxt.js', logo: 'techno-nuxtjs', link: 'https://nuxtjs.org' },
        { label: 'Vue.js', logo: 'techno-vuejs', link: 'https://vuejs.org' },
        {
          label: 'Tailwind CSS',
          logo: 'techno-tailwindcss',
          link: 'https://tailwindcss.com',
        },
        {
          label: 'Flutter',
          logo: 'techno-flutter',
          link: 'https://flutter.dev',
        },
        { label: 'Dart', logo: 'techno-dart', link: 'https://dart.dev' },
        {
          label: 'Node.js',
          logo: 'techno-node',
          link: 'https://nodejs.org/en',
        },
        {
          label: 'Bash',
          logo: 'techno-bash',
          link: 'https://www.gnu.org/software/bash',
        },
        {
          label: 'Bootstrap',
          logo: 'techno-bootstrap',
          link: 'https://getbootstrap.com',
        },
        { label: 'Git', logo: 'techno-git', link: 'https://git-scm.com' },
        {
          label: 'Javascript',
          logo: 'techno-javascript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          label: 'LaTeX',
          logo: 'techno-latex',
          link: 'https://www.latex-project.org',
        },
        {
          label: 'Linux',
          logo: 'techno-linux',
          link: 'https://www.linux.org',
        },
        {
          label: 'MySQL',
          logo: 'techno-mysql',
          link: 'https://www.mysql.com',
        },
        {
          label: 'NGINX',
          logo: 'techno-nginx',
          link: 'https://www.nginx.com',
        },
        {
          label: 'Sass',
          logo: 'techno-sass',
          link: 'https://sass-lang.com',
        },
        {
          label: 'TypeScript',
          logo: 'techno-typescript',
          link: 'https://www.typescriptlang.org',
        },
        {
          label: 'Markdown',
          logo: 'techno-markdown',
          link: 'https://en.wikipedia.org/wiki/Markdown',
        },
      ],
      swiperOption: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        // loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
        breakpoints: {
          '@0.75': {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 40,
          },
          '@1.25': {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 40,
          },
          '@1.75': {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 50,
          },
        },
        lazy: {
          loadPrevNext: true,
        },
        flipEffect: {
          slideShadows: false,
        },
      },
      randomTechnologies: [],
      showSwiper: false,
    }
  },
  created() {
    this.randomTechnologies = this.shuffle(this.technologies)
  },
  mounted() {
    this.showSwiper = true
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length
      let temporaryValue
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // And swap it with the current element.
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
  },
}
</script>

<style lang="postcss" scoped>
.swiper-container {
  @apply pb-10 pt-8 !important;
}

.swiper-pagination {
  @apply bottom-2.5;
}

/deep/ .swiper-pagination-bullet {
  @apply bg-black bg-opacity-50 !important;
}

/deep/ .swiper-pagination-bullet-active {
  @apply bg-black bg-opacity-25 !important;
}
</style>
