module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        'ptsans-regular': ['PTSans-Regular'],
        'roboto-medium': ['Roboto-Medium'],
        quicksand: ['Quicksand'],
        morpheus: ['Morpheus'], // a-la-croisee-des-mondes
        booter: ['Booter'], // l-autre
        'caslon-antique': ['Caslon Antique'], // ewilan
        immortal: ['Immortal'], // les-ames-croisees
        pelagiad: ['Pelagiad'], // morrowind
        mono: [
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      screens: {
        xl: '1500px',
        lg: '1100px',
        md: '900px',
        sm: '500px',
      },
      colors: {
        'blue-star-dark': '#002856',
        'blue-star-light': '#53BAAA',
      },
      backgroundImage: {
        logo: "url('/images/logo.svg')",
      },
      opacity: {
        40: '0.40',
        65: '0.65',
        95: '0.95',
      },
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    animation: [
      'responsive',
      'motion-safe',
      'motion-reduce',
      'hover',
      'group-hover',
    ],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
