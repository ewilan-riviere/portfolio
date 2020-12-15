<template>
  <footer
    class="relative w-full bg-white border-t dark:border-gray-800 dark:bg-gray-900"
  >
    <div
      class="max-w-screen-xl px-4 py-6 mx-auto space-y-2 overflow-hidden sm:px-6 lg:px-8"
    >
      <div>
        <div class="flex justify-center">
          <a
            v-for="social in socialLinks"
            :key="social.id"
            v-tooltip="social.label"
            class="p-3 transition-colors duration-300 rounded-md hover:bg-gray-200"
            :href="social.link"
            target="_blank"
            rel="noopener noreferrer"
            :class="`hover:icon-${social.icon}`"
          >
            <icon :name="social.icon" :size="20" />
          </a>
        </div>
      </div>
      <div
        class="flex items-center justify-center text-base text-center text-gray-400"
      >
        <div class="flex items-center w-max-content">
          <a
            href="https://creativecommons.org"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center px-1 py-2 text-base leading-6 text-center text-gray-400 transition-colors duration-300 rounded-md hover:text-gray-600"
          >
            <icon
              v-for="icon in copyrights"
              :key="icon.id"
              :name="icon"
              :size="20"
              class="mr-1"
            />
            <span class="ml-1">
              {{ date(2019) }}
            </span>
          </a>
          <span class="mx-1"> · </span>
          <a
            :href="github"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center px-1 py-2 text-base leading-6 text-center text-gray-400 transition-colors duration-300 rounded-md hover:text-gray-600"
          >
            {{ packageJson.author.name }}.
          </a>
          <a
            :href="license"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center px-1 py-2 text-base leading-6 text-center text-gray-400 transition-colors duration-300 rounded-md hover:text-gray-600"
          >
            MIT License,
          </a>
          <a
            href="https://nuxtjs.org"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center px-1 py-2 text-base leading-6 text-center text-gray-400 transition-colors duration-300 rounded-md hover:nuxt-icon group hover:text-gray-600"
          >
            built with
            <icon name="nuxt" :size="20" class="mx-1" />
            <span class="font-medium font-quicksand">
              <span
                class="transition-colors duration-300 group-hover:text-gray-nuxt"
                >NUXT</span
              ><span
                class="transition-colors duration-300 group-hover:text-green-nuxt"
                >JS</span
              ></span
            >.
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import packageJson from '~/package.json'

export default {
  name: 'AppFooter',
  data() {
    return {
      packageJson,
      modes: ['system', 'light', 'dark', 'sepia'],
      footerLinks: [
        {
          label: 'About',
          route: 'home',
        },
        {
          label: 'Documentation',
          route: 'home',
        },
        {
          label: 'Articles',
          route: 'home',
        },
      ],
      socialLinks: [
        {
          label: 'GitHub',
          link: 'https://github.com/ewilan-riviere',
          icon: 'github',
        },
        {
          label: 'GitLab',
          link: 'https://gitlab.com/EwieFairy',
          icon: 'gitlab',
        },
        {
          label: 'Twitter',
          link: 'https://twitter.com/ewieSwitch',
          icon: 'twitter',
        },
        {
          label: 'LinkedIn',
          link: 'https://www.linkedin.com/in/ewilan-riviere',
          icon: 'linkedin',
        },
        {
          label: 'Portfolio',
          link: 'http://ewilan-riviere.com',
          icon: 'briefcase',
        },
        {
          label: 'E-mail',
          link: 'mailto:ewilan.riviere@gmail.com',
          icon: 'mail',
        },
      ],
      copyrights: [
        'creative-commons',
        'creative-commons-by',
        'creative-commons-nc',
      ],
    }
  },
  computed: {
    github() {
      return `https://github.com/ewilan-riviere`
    },
    license() {
      return `https://github.com/ewilan-riviere/portfolio-front/blob/master/LICENSE`
    },
  },
  mounted() {
    // this.$colorMode.preference = 'system'
  },
  methods: {
    date(begin) {
      begin = parseInt(begin)
      const current = new Date().getFullYear()
      const year = `${begin} - ${current}`
      if (begin === current) {
        return begin
      }
      return year
    },
    // changeMode(mode) {
    //   this.$colorMode.preference = mode
    // },
  },
}
</script>

<style scoped>
@variants hover {
  /deep/ path {
    @apply transition-colors duration-300;
  }
  /deep/ .nuxt-icon:hover path:nth-child(1) {
    fill: #00c58e;
  }
  /deep/ .nuxt-icon:hover path:nth-child(2) {
    fill: #2f495e;
  }
  /deep/ .nuxt-icon:hover path:nth-child(3) {
    fill: #108775;
  }

  /deep/ .icon-github:hover path {
    fill: #181717;
  }
  /deep/ .icon-gitlab:hover path {
    fill: #fc6d26;
  }
  /deep/ .icon-twitter:hover path {
    fill: #1da1f2;
  }
  /deep/ .icon-linkedin:hover path {
    fill: #0077b5;
  }
  /deep/ .icon-portfolio:hover path {
    @apply text-purple-600;
  }
  /deep/ .icon-mail:hover path {
    fill: #d14836;
  }
}
</style>
