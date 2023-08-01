<script setup lang="ts">
import type { DefaultConfigOptions } from '@formkit/vue'

// i18n
const { locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const config: DefaultConfigOptions = inject(Symbol.for('FormKitConfig'))!
watch(locale, (newVal) => {
  config.locale = newVal
  switchLocalePath(newVal)
})

useHead({
  htmlAttrs: {
    id: 'mcss',
  },
  bodyAttrs: {
    class: 'normal',
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - OMO` : 'OMO'
  },
})
useSeoMeta({
  title: 'App',
  ogTitle: 'App',
  description: 'description',
  ogDescription: 'description',
  // ogImage: 'https://example.com/image.png',
})

const route = useRoute()
</script>

<template>
  <CSSProvider>
    <div class="bb:1|gray">
      <form>
        <select v-model="locale">
          <option value="zh">zh</option>
          <option value="en">en</option>
        </select>
      </form>
      <div>
        <p>
          Current route: <code>{{ route.path }}</code>
        </p>
        <p>
          Current layout: <code>{{ route.meta.layout }}</code>
        </p>
      </div>
      <NuxtLink :to="localePath('/login')">Login</NuxtLink>
    </div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
  </CSSProvider>
</template>

<style lang="scss">
:root {
  --zh-font-family: 'Noto Sans TC';
  --en-font-family: 'Inter';
  --fk-font-family: var(--zh-font-family), var(--en-font-family);
}

body {
  font-family: var(--zh-font-family), var(--en-font-family);
}
</style>
