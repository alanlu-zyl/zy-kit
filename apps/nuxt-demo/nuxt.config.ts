import components from '@zy-kit/components/nuxt'

// modules's config
import { nuxtConfig } from '@zy-kit/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['../nuxt-base'],
  modules: [
    //
    components,
    ['@nuxtjs/i18n', nuxtConfig.i18n],
    ['@element-plus/nuxt', nuxtConfig.elementPlus],
    ['@nuxt/content', nuxtConfig.content],
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
