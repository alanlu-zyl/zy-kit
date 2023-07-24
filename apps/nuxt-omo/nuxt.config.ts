import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineNuxtConfig } from 'nuxt/config'

// modules's config
import { nuxtConfig } from '@zy-kit/config'

// import components from '@zy-kit/components/nuxt'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

const currentDir = dirname(fileURLToPath(import.meta.url))

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../nuxt-base'],
  modules: [
    ['@nuxtjs/i18n', nuxtConfig.i18n],
    ['@element-plus/nuxt', nuxtConfig.elementPlus],
    // fonts
    '@nuxtjs/google-fonts',
    '@nuxtjs/fontaine',
  ],

  googleFonts: {
    families: {
      'Noto+Sans+TC': {
        // weights
        wght: [100, 400],
        // italic
        ital: [100],
      },
      Inter: true,
    },
    download: true,
    stylePath: 'css/fonts.css',
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#app
  app: {
    baseURL: '/',
    // Set default configuration for <head> on every page.
    head: {},
  },

  // https://nuxt.com/docs/api/configuration/nuxt-config#vite
  vite: {
    plugins: [
      // https://vue-i18n.intlify.dev/guide/advanced/optimization.html#unplugin-vue-i18n
      VueI18nVitePlugin({
        // locale messages resource pre-compile option
        include: [resolve(currentDir, './locales/*.json')],
      }),
    ],
  },
})
