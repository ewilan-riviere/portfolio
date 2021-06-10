module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'eslint:recommended' // <- add this line
    // 'plugin:prettier/recommended', <- remove this line
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {}
}
