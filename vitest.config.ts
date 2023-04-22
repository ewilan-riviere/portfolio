import path from 'node:path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        // {
        //   '#imports': [
        //     'useNuxtApp',
        //     'useBaseFetch',
        //     'useRuntimeConfig',
        //     'useState',
        //     'useLazyAsyncData',
        //     'useLocalisationOptions',
        //     'useFavoriteLocalisation',
        //     'useInputValidation',
        //   ],
        // },
      ],
    }),
    Components({
      dirs: ['./components'],
      directoryAsNamespace: true,
    }),
  ],
  test: {
    globals: true,
    environment: 'happy-dom',
    coverage: {
      provider: 'c8',
    },
    deps: {
      inline: [/@nuxt\/test-utils-edge/],
    },
  },
  root: '.',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '~': path.resolve(__dirname, './'),
      '#imports': path.resolve(__dirname, './.nuxt/imports.d.ts'),
      '#app': path.resolve(
        __dirname,
        './node_modules/nuxt/dist/app/index.d.ts',
      ),
      '#head': path.resolve(
        __dirname,
        './node_modules/nuxt/dist/app/index.d.ts',
      ),
    },
  },
})
