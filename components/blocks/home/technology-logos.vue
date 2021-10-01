<template>
  <client-only>
    <transition name="fade">
      <div
        v-cloak
        v-if="isLoad"
        class="bg-primary-700 dark:bg-primary-800 cloud-logos"
      >
        <div
          class="
            max-w-screen-xl
            px-4
            pt-4
            pb-4
            md:pb-10
            mx-auto
            sm:pt-8 sm:px-6
            lg:px-8
          "
        >
          <div class="lg:space-y-6">
            <h2 class="text-3xl font-semibold leading-9 text-white">
              {{ $t('technologiesLogo') }}
            </h2>
            <swiper
              v-cloak
              ref="carousel"
              class="swiper my-auto h-32"
              :options="main"
            >
              <swiper-slide
                v-for="technology in randomTechnologies"
                :key="technology.id"
                class="flex"
              >
                <a
                  :href="technology.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="mx-auto text-gray-300 text-opacity-50 zoom"
                  :title="technology.name"
                >
                  <svg-icon
                    :name="`${technology.logo}`"
                    :alt="technology.name"
                    class="w-40 h-28"
                  />
                </a>
              </swiper-slide>
              <div slot="button-prev" class="swiper-button-prev">
                <svg-icon name="arrow-chevron-right" />
              </div>
              <div slot="button-next" class="swiper-button-next">
                <svg-icon name="arrow-chevron-right" />
              </div>
              <div slot="pagination" class="swiper-pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </transition>
  </client-only>
</template>

<script>
export default {
  name: 'TechnologyLogos',
  data() {
    return {
      isLoad: false,
      main: {
        loop: false,
        spaceBetween: 10,
        slidesPerView: 1,
        slidesPerGroup: 1,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          500: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          800: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1200: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        },
      },
      technologies: [
        {
          name: 'Laravel',
          logo: 'techno/laravel',
          link: 'https://laravel.com',
        },
        { name: 'PHP', logo: 'techno/php', link: 'https://www.php.net' },
        {
          name: 'Backpack',
          logo: 'techno/backpack',
          link: 'https://backpackforlaravel.com',
        },
        { name: 'Nuxt.js', logo: 'techno/nuxtjs', link: 'https://nuxtjs.org' },
        { name: 'Vue.js', logo: 'techno/vuejs', link: 'https://vuejs.org' },
        {
          name: 'Tailwind CSS',
          logo: 'techno/tailwindcss',
          link: 'https://tailwindcss.com',
        },
        {
          name: 'Flutter',
          logo: 'techno/flutter',
          link: 'https://flutter.dev',
        },
        { name: 'Dart', logo: 'techno/dart', link: 'https://dart.dev' },
        {
          name: 'Node.js',
          logo: 'techno/node',
          link: 'https://nodejs.org/en',
        },
        {
          name: 'Bash',
          logo: 'techno/bash',
          link: 'https://www.gnu.org/software/bash',
        },
        {
          name: 'Bootstrap',
          logo: 'techno/bootstrap',
          link: 'https://getbootstrap.com',
        },
        { name: 'Git', logo: 'techno/git', link: 'https://git-scm.com' },
        {
          name: 'Javascript',
          logo: 'techno/javascript',
          link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        },
        {
          name: 'LaTeX',
          logo: 'techno/latex',
          link: 'https://www.latex-project.org',
        },
        {
          name: 'Linux',
          logo: 'techno/linux',
          link: 'https://www.linux.org',
        },
        {
          name: 'MySQL',
          logo: 'techno/mysql',
          link: 'https://www.mysql.com',
        },
        {
          name: 'NGINX',
          logo: 'techno/nginx',
          link: 'https://www.nginx.com',
        },
        {
          name: 'Sass',
          logo: 'techno/sass',
          link: 'https://sass-lang.com',
        },
        {
          name: 'TypeScript',
          logo: 'techno/typescript',
          link: 'https://www.typescriptlang.org',
        },
        {
          name: 'Markdown',
          logo: 'techno/markdown',
          link: 'https://en.wikipedia.org/wiki/Markdown',
        },
        {
          name: 'Strapi',
          logo: 'techno/strapi',
          link: 'https://strapi.io',
        },
      ],
      randomTechnologies: [],
    }
  },
  created() {
    this.randomTechnologies = this.shuffle(this.technologies)
  },
  mounted() {
    setTimeout(() => {
      this.isLoad = true
    }, 300)
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
.technology-logos::v-deep {
  & .swiper-button-prev {
    left: unset !important;
    @apply right-14 transform rotate-180 !important;
  }
  & .swiper-button-prev,
  & .swiper-button-next {
    @apply absolute w-10 bottom-1 hover:bg-primary-300 dark:hover:bg-primary-700 transition-colors duration-100 rounded-md !important;
    & .icon {
      @apply w-8 h-8 m-auto text-gray-300 dark:text-gray-400 !important;
    }
  }
  & .swiper-pagination {
    @apply cursor-default bottom-1;
    & .swiper-pagination-bullet {
      @apply bg-primary-300 dark:bg-primary-600 dark:opacity-60;
    }
    & .swiper-pagination-bullet-active {
      @apply bg-primary-300 dark:bg-primary-300 dark:opacity-100;
    }
  }
}
</style>
