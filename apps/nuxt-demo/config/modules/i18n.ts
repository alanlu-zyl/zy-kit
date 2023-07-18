import { type NuxtConfig } from '@nuxt/schema'

// @nuxtjs/i18n
// https://v8.i18n.nuxtjs.org/
export const nuxtConfig: NuxtConfig['i18n'] = {
  /* https://v8.i18n.nuxtjs.org/options/vue-i18n */
  vueI18n: './config/i18n.config.ts', // if you are using custom path, default
}
