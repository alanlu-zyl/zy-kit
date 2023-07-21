import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { NuxtModule } from '@nuxt/schema'

const currentDir = dirname(fileURLToPath(import.meta.url))

// @formkit/nuxt
// https://formkit.com/
export const nuxtConfig: typeof import('@formkit/nuxt').default extends NuxtModule<infer O> ? Partial<O> : Record<string, any> = {
  configFile: resolve(currentDir, '../config/formkit.config.ts'),
}
