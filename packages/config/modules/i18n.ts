import type { NuxtModule } from '@nuxt/schema'
import type NuxtI18nOptions from '@nuxtjs/i18n/dist/module.d'

// @nuxtjs/i18n
// https://v8.i18n.nuxtjs.org/
export const nuxtConfig: typeof NuxtI18nOptions extends NuxtModule<infer O> ? Partial<O> : Record<string, any> = {
  /* https://v8.i18n.nuxtjs.org/options/vue-i18n */
  locales: ['zh', 'en'], // used in URL path prefix
  defaultLocale: 'zh', // default locale of your project for Nuxt pages and routings
  // vueI18n: './config/i18n.config.ts', // if you are using custom path, default
}
