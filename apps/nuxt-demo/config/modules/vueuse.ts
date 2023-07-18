import { type NuxtConfig } from '@nuxt/schema'

// @vueuse/nuxt
// https://vueuse.org/
export const nuxtConfig: NuxtConfig['vueuse'] = {
  ssrHandlers: true,
}
