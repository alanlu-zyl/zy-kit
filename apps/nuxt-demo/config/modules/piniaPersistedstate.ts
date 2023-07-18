import { type NuxtConfig } from '@nuxt/schema'

// @pinia-plugin-persistedstate/nuxt
// https://prazdevs.github.io/pinia-plugin-persistedstate
export const nuxtConfig: NuxtConfig['piniaPersistedstate'] = {
  /* options */
  storage: 'localStorage',
}
