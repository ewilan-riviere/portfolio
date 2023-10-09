// eslint.config.js
import antfu from '@antfu/eslint-config'

export default antfu({
  markdown: false,
  rules: {
    'no-console': 'warn',
    'node/prefer-global/process': 'off',
    'vue/max-attributes-per-line': ['error', {
      singleline: 1,
    }],
  },
})
