import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'
import components from '@zy-kit/components/nuxt'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

// modules's nuxtConfig
import * as nuxtConfig from './config/modules/nuxtConfig'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // https://nuxt.com/docs/api/configuration/nuxt-config#devtools
  devtools: { enabled: true },

  // https://nuxt.com/docs/api/configuration/nuxt-config#typescript
  typescript: {
    // typeCheck: true,
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#modules
  modules: [
    components,
    ['@element-plus/nuxt', nuxtConfig.elementPlus],
    ['@vueuse/nuxt', nuxtConfig.vueuse],
    ['@pinia/nuxt', nuxtConfig.pinia],
    ['@pinia-plugin-persistedstate/nuxt', nuxtConfig.piniaPersistedstate],
    ['@nuxt/content', nuxtConfig.content],
    ['@nuxt/image', nuxtConfig.image],
    '@nuxtjs/fontaine',
    ['@nuxtjs/color-mode', nuxtConfig.colorMode],
    ['@nuxtjs/i18n', nuxtConfig.i18n],
    ['nuxt-icon', nuxtConfig.nuxtIcon],
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
      VueI18nVitePlugin({
        // locale messages resource pre-compile option
        include: [resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')],
      }),
    ],
  },

  // https://nuxt.com/docs/guide/concepts/rendering#hybrid-rendering
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/products/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/old-page': { redirect: '/new-page' },
  },
})
