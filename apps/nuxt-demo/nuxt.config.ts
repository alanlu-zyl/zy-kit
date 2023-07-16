import { defineNuxtConfig } from 'nuxt/config'
import components from '@zy-kit/components/nuxt'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    components,
    '@element-plus/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // automatically imports `defineStore`
          'defineStore', // import { defineStore } from 'pinia'
          ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxt/content',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    [
      '@nuxtjs/i18n',
      {
        i18n: {
          vueI18n: './i18n.config.ts', // if you are using custom path, default
        },
      },
    ],
    [
      '@formkit/nuxt',
      {
        formkit: {
          configFile: './formkit.config.ts',
        },
      },
    ],
  ],
  imports: {
    dirs: ['stores'],
  },
  css: [
    // SCSS file in the project
    '@zy-kit/scss', // you should add main.scss somewhere in your app
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@zy-kit/scss/src/abstracts" as *;',
        },
      },
    },
  },
  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Oxygen&display=swap',
        },
      ],
    },
  },
})
