<script setup lang="ts">
import type { DefaultConfigOptions } from '@formkit/vue'

useHead({
  bodyAttrs: {
    class: 'normal',
  },
})
useSeoMeta({
  title: 'App',
  ogTitle: 'App',
  description: 'description',
  ogDescription: 'description',
  // ogImage: 'https://example.com/image.png',
})

const { locale } = useI18n()

const config: DefaultConfigOptions = inject(Symbol.for('FormKitConfig'))!
watch(locale, (newVal) => {
  config.locale = newVal
})
</script>

<template>
  <CSSProvider>
    <NuxtLayout>
      <NuxtLoadingIndicator />

      <ClientOnly>
        <ElDialog></ElDialog>
      </ClientOnly>
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
