module.exports = {
  mode: 'jit',
  darkMode: 'class',
  purge: [
    'assets/**/*.css',
    'assets/**/*.pcss',
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
    extend: {
      colors: {
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
        quicksand: ['Quicksand'], // Quicksand
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              fontSize: '2rem',
            },
          },
        },
        light: {
          css: {
            color: theme('colors.gray.100'),
            h1: {
              color: theme('colors.gray.100'),
            },
            h2: {
              color: theme('colors.gray.100'),
            },
            h3: {
              color: theme('colors.gray.100'),
            },
            strong: {
              color: theme('colors.gray.200'),
            },
            blockquote: {
              color: theme('colors.gray.200'),
            },
            a: {
              color: theme('colors.primary.100'),
              '&:hover': {
                color: theme('colors.primary.200'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      display: ['dark'],
      opacity: ['dark'],
      width: ['hover', 'focus'],
      textColor: ['responsive', 'hover', 'focus', 'group-hover', 'dark'],
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
