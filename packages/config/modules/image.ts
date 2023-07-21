import type { NuxtModule } from '@nuxt/schema'

// @nuxt/image
// https://image.nuxtjs.org/
export const nuxtConfig: typeof import('@nuxt/image').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any> = {
  /* https://image.nuxtjs.org/configuration */
}
