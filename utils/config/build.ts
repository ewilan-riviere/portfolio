const build = {
  postcss: {
    order: ['tailwindcss/nesting', 'tailwindcss', 'autoprefixer'],
    plugins: {
      'postcss-nested': false,
    },
  },
  transpile: ['vue-i18n'],
}

export default build
