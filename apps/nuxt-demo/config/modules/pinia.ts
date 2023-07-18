import { type NuxtConfig } from '@nuxt/schema'

// @pinia/nuxt
// https://pinia.vuejs.org/
export const nuxtConfig: NuxtConfig['pinia'] = {
  autoImports: [
    // automatically imports `defineStore`
    'defineStore', // import { defineStore } from 'pinia'
    ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
  ],
}
