import { type CustomAppConfig, type NuxtConfig } from '@nuxt/schema'

// nuxt-icon
// https://nuxt.com/modules/icon
export const nuxtConfig: NuxtConfig['icon'] = {}

export const appConfig: CustomAppConfig['nuxtIcon'] = {
  size: '24px', // default <Icon> size applied
  class: 'icon', // default <Icon> class applied
  aliases: {
    nuxt: 'logos:nuxt-icon',
  },
}
