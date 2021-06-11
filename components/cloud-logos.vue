<template>
  <transition name="fade">
    <div v-cloak v-if="isLoad" class="bg-indigo-800">
      <div
        class="max-w-screen-xl px-4 pt-4 pb-20 mx-auto sm:pt-8 sm:px-6 lg:px-8"
      >
        <div class="lg:space-y-6">
          <h2 class="text-3xl font-bold leading-9 text-white">
            Des technologies solides et connues
          </h2>
          <client-only>
            <splide :options="options" class="grab">
              <splide-slide
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
              </splide-slide>
            </splide>
          </client-only>
          <!-- <div class="loop">
          <div class="flex items-center space-x-16">
            <a v-for="technology in randomTechnologies" :key="technology.id" :href="technology.link" target="_blank" rel="noopener noreferrer" class="text-gray-300 text-opacity-50 rounded-sm hover:bg-gray-50 hover:bg-opacity-10" :title="technology.name">
              <svg-icon :name="`${technology.logo}`" :alt="technology.name" class="w-40" />
            </a>
          </div>
        </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="module">
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
  name: 'CloudLogos',
  data() {
    return {
      isLoad: false,
      options: {
        rewind: true,
        // width: 800,
        // type: 'fade',
        // perPage: 1,
        height: '12vh',
        interval: 1500,
        gap: '1rem',
        autoplay: false,
        lazyLoad: 'nearby',
        pauseOnHover: false,
        arrows: 'slider',
        pagination: false,
        perPage: 5,
        breakpoints: {
          1300: {
            perPage: 5,
            gap: '1rem',
            pagination: true,
          },
          900: {
            perPage: 3,
            gap: '1rem',
            pagination: true,
          },
          600: {
            perPage: 2,
            gap: '1rem',
          },
          360: {
            perPage: 1,
            gap: '1rem',
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
.splide__arrow {
  top: unset !important;
  bottom: -2.5rem !important;
  background-color: transparent !important;
  transform: unset !important;
  fill: gray !important;
}
.splide__pagination {
  bottom: -2rem !important;
}
.splide__arrow--next {
}
.grab {
  cursor: grab;
}
.zoom {
  @apply transition-transform duration-300;
}
.zoom:hover {
  transform: scale(1.1);
}
.loop {
  @apply inline-block whitespace-nowrap;
  animation: loop 50s infinite linear;
  padding-left: 100%;
}

.loop:hover {
  /* animation-play-state: paused; */
}

@keyframes loop {
  to {
    transform: translateX(-100%);
  }
}
</style>
