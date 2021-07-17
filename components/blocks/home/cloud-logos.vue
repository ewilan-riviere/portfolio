<template>
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
          <agile ref="thumbnails" class="thumbnails" :options="options">
            <div
              v-for="(technology, id) in randomTechnologies"
              :key="id"
              class="slide slide--thumbnails"
              :class="`slide--${id}`"
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
            </div>
            <template slot="prevButton">
              <svg-icon
                name="arrow/chevron-right"
                class="
                  w-8
                  h-8
                  m-auto
                  text-gray-400
                  dark:text-gray-400
                  arrow-rotate
                "
              />
            </template>
            <template slot="nextButton">
              <svg-icon
                name="arrow/chevron-right"
                class="w-8 h-8 m-auto text-gray-400 dark:text-gray-400"
              />
            </template>
          </agile>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="module">
// https://github.com/lukaszflorczak/vue-agile
import { VueAgile } from 'vue-agile'

export default {
  name: 'CloudLogos',
  components: {
    agile: VueAgile,
  },
  data() {
    return {
      isLoad: false,
      options: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: true,
        infinite: true,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 700,
            settings: {
              dots: true,
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 900,
            settings: {
              dots: true,
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1100,
            settings: {
              dots: true,
              navButtons: true,
              slidesToShow: 5,
            },
          },
        ],
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

<style lang="postcss">
.cloud-logos {
  & .zoom {
    @apply transition-transform duration-300;
  }
  & .zoom:hover {
    transform: scale(1.1);
  }
  & .arrow-rotate {
    transform: rotate(180deg);
  }
  & .agile {
    & .slide {
      display: flex !important;
    }
    & .agile__actions {
      @apply mt-3 absolute md:relative w-full top-1/2 -translate-y-1/2 transform;
      & .agile__dots {
        @apply w-full flex-wrap justify-center;
        & .agile__dot {
          @apply mx-2 my-1;
          & button {
            @apply border border-solid border-gray-400 dark:border-gray-300 rounded-full bg-transparent cursor-pointer block h-3 w-3 duration-300;
          }
        }
        & .agile__dot--current button,
        & .agile__dot:hover button {
          @apply bg-gray-400 dark:bg-gray-300;
        }
      }
      & .agile__nav-button {
        @apply hover:bg-gray-100 hover:bg-opacity-20 transition-colors duration-100 rounded-md;
      }
    }
  }
}
</style>
