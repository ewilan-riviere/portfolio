module.exports = {
  content: [
    'components/**/*.{vue,js}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'plugins/**/*.{js,ts}',
    'app.vue',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: '1.25rem',
      center: true,
    },
    extend: {
      backgroundImage: {
        'forest-swamp': "url('/images/forest-swamp.webp')",
        'jungle-forest': "url('/images/jungle-forest.webp')",
        'jungle-cascade': "url('/images/jungle-cascade.webp')",
      },
      fontFamily: {
        morpheus: ['Morpheus'], // a-la-croisee-des-mondes
        booter: ['Booter'], // l-autre
        'caslon-antique': ['Caslon Antique'], // ewilan
        immortal: ['Immortal'], // les-ames-croisees
        pelagiad: ['Pelagiad'], // morrowind
        quicksand: ['Quicksand'], // Quicksand
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('tailwindcss-debug-screens'),
    require('tailwind-scrollbar'),
  ],
}
