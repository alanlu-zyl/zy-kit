<script setup lang="ts">
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
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator />

    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
:root {
  --zh-font-family: 'Noto Sans TC';
  --en-font-family: 'Inter';

  /* Formkit */
  --fk-bg-submit: #fbc700;
  --fk-max-width-input: 100%;
}

body {
  font-family: var(--zh-font-family), var(--en-font-family);
}
</style>
