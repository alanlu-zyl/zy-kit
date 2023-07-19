<script setup lang="ts">
import { CSSProvider } from '@master/css.vue'
import config from '@zy-kit/master/master.css'

import { appName } from '~/constants'

const route = useRoute()
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - ${appName} ${route.meta.title}` : appName
  },
  link: [{ rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css' }],
})
</script>

<template>
  <CSSProvider :config="config">
    <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
      <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
          <h2 class="text-xl sm:text-2xl leading-7 font-semibold">Welcome</h2>
          <p class="mt-3 text-gray-600">
            <slot name="nav"> Default footer content </slot>
          </p>
          <div class="block my-4 border-b" />
          <slot />
          <div class="block my-4 border-b" />
          <p class="mt-3 text-gray-600">
            <slot name="footer"> Default footer content </slot>
          </p>
        </div>
        <!-- Footer -->
        <div class="flex justify-center pt-4 space-x-2">
          <!-- <slot name="footer"> Default footer content </slot> -->
        </div>
      </div>
    </div>
  </CSSProvider>
</template>
