const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    'components/**/*.vue',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.js',
    'nuxt.config.js',
  ],
  theme: {
    container: {
      center: true,
    },
    // screens: {
    // sm: '360px',
    // md: '600px',
    // lg: '900px',
    // xl: '1300px',
    // '2xl': '1536px',
    // },
    extend: {
      colors: {
        rose: colors.rose,
        primary: {
          100: '#e5d8fb',
          200: '#cbb0f8',
          300: '#b089f4',
          400: '#9661f1',
          500: '#7c3aed',
          600: '#632ebe',
          700: '#4a238e',
          800: '#32175f',
          900: '#190c2f',
        },
      },
      ringColor: (theme) => ({
        primary: theme('colors.primary'),
      }),
      backgroundImage: {
        // logo: "url('/images/logo.svg')",
      },
      opacity: {
        40: '0.40',
        65: '0.65',
        95: '0.95',
      },
      fontFamily: {
        morpheus: ['Morpheus'], // a-la-croisee-des-mondes
        booter: ['Booter'], // l-autre
        'caslon-antique': ['Caslon Antique'], // ewilan
        immortal: ['Immortal'], // les-ames-croisees
        pelagiad: ['Pelagiad'], // morrowind
        quicksand: ['Quicksand'], // morrowind
      },
      typography: (theme) => ({
        light: {
          css: [
            {
              p: {
                color: theme('colors.gray.800'),
              },
            },
          ],
        },
        dark: {
          css: [
            {
              p: {
                color: theme('colors.gray.300'),
              },
              strong: {
                color: theme('colors.gray.200'),
              },
              a: {
                color: theme('colors.primary.200'),
              },
            },
          ],
        },
      }),
    },
  },
  variants: {
    extend: {
      display: ['dark'],
      opacity: ['dark'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark'],
      textOpacity: ['dark'],
      typography: ['responsive', 'dark'],
      scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      boxShadow: ['dark'],
      translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundColor: ['hover', 'focus', 'group-hover', 'dark'],
      backgroundOpacity: ['dark'],
      borderColor: ['hover', 'focus', 'group-hover'],
      borderRadius: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
  ],
}
