const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'components/**/*.{vue,ts,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts,js}',
    'app.vue'
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '1.25rem',
      center: true
    },
    extend: {
      colors: {
        primary: {
          100: '#e2e0ff',
          200: '#c4c1ff',
          300: '#a7a1ff',
          400: '#8982ff',
          500: '#6c63ff',
          600: '#564fcc',
          700: '#413b99',
          800: '#2b2866',
          900: '#161433',
        },
      },
      keyframes: {
        life: {
          '0%': { width: '100%' },
          '100%': { width: '0%' },
        },
      },
      animation: {
        life: 'life 3900ms linear forwards',
      },
      backgroundImage: {
        'forest-swamp': 'url(\'/background/forest-swamp.webp\')',
        'jungle-forest': 'url(\'/background/jungle-forest.webp\')',
        'jungle-cascade': 'url(\'/background/jungle-cascade.webp\')'
      },
      fontFamily: {
        morpheus: ['Morpheus'], // a-la-croisee-des-mondes
        booter: ['Booter'], // l-autre
        'caslon-antique': ['Caslon Antique'], // ewilan
        immortal: ['Immortal'], // les-ames-croisees
        pelagiad: ['Pelagiad'], // morrowind
        quicksand: ['Quicksand'] // Quicksand
      }
    }
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.main-container': {
          '@apply container max-w-7xl px-6 lg:px-8': {}
        },
        '.medium-container': {
          '@apply container max-w-5xl px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 shadow rounded-md':
            {}
        },
        '.parallax': {
          '@apply bg-center bg-no-repeat bg-cover': {},
          'background-attachment': 'fixed'
        },
        '.center-full': {
          '@apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2':
            {}
        },
        '.center-y': {
          '@apply absolute top-1/2 -translate-y-1/2': {}
        },
        '.center-x': {
          '@apply absolute left-1/2 -translate-x-1/2': {}
        },
        '.text-gray-medium': {
          '@apply text-gray-500 dark:text-gray-400': {}
        },
        '.text-gray-dark': {
          '@apply text-gray-900 dark:text-gray-100': {}
        },
        '.word-wraping': {
          'text-align': 'justify',
          '-webkit-hyphens': 'auto',
          '-moz-hyphens': 'auto',
          '-ms-hyphens': 'auto',
          hyphens: 'auto',
        },
        '.debug-screens': {
          '@apply before:bottom-0 before:left-0 before:fixed before:px-1 before:text-sm before:bg-black before:text-white before:shadow-xl before:content-["screen:_"] sm:before:content-["screen:sm"] md:before:content-["screen:md"] lg:before:content-["screen:lg"] xl:before:content-["screen:xl"] 2xl:before:content-["screen:2xl"]':
            {},
          '&:before': {
            'z-index': '2147483647'
          }
        }
      })
    }),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
  ]
}
