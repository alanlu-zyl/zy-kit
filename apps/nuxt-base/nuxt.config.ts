// import { dirname, resolve } from 'node:path'
// import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

// modules's config
import { appConfig, nuxtConfig } from '@zy-kit/config'

// import components from '@zy-kit/components/nuxt'
// import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#devtools
  devtools: { enabled: true },

  // https://nuxt.com/docs/api/configuration/nuxt-config#typescript
  typescript: {
    includeWorkspace: true,
    // typeCheck: true,
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: [
    // components,
    ['@element-plus/nuxt', nuxtConfig.elementPlus],
    ['@vueuse/nuxt', nuxtConfig.vueuse],
    ['@pinia/nuxt', nuxtConfig.pinia],
    ['@pinia-plugin-persistedstate/nuxt', nuxtConfig.piniaPersistedstate],
    // ['@nuxt/content', nuxtConfig.content],
    ['@nuxt/image', nuxtConfig.image],
    ['nuxt-icon', nuxtConfig.nuxtIcon],
    ['@nuxtjs/color-mode', nuxtConfig.colorMode],
    // '@nuxtjs/fontaine',
    // ['@nuxtjs/i18n', nuxtConfig.i18n],
    ['@formkit/nuxt', nuxtConfig.formkit],
  ],

  // https://nuxt.com/docs/api/configuration/nuxt-config#runtimeconfig
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },

  appConfig: {
    nuxtIcon: appConfig.nuxtIcon,
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    baseURL: '/',
    // Set default configuration for <head> on every page.
    head: {},
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#imports
  imports: {
    // Auto-import pinia stores defined in `~/stores`
    dirs: ['stores'],
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#css
  css: [
    // SCSS file in the project
    '@zy-kit/scss', // you should add main.scss somewhere in your app
    'element-plus/es/components/dialog/style/css',
  ],

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@zy-kit/scss/src/abstracts" as *;',
        },
      },
    },
    plugins: [
      // https://vue-i18n.intlify.dev/guide/advanced/optimization.html#unplugin-vue-i18n
      // VueI18nVitePlugin({
      //   // locale messages resource pre-compile option
      //   include: [resolve(currentDir, './locales/*.json')],
      // }),
    ],
  },
})
