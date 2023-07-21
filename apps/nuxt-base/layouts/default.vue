<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - [nuxt-base]` : '[nuxt-base]'
  },
})
</script>

<template>
  <CSSProvider>
    <slot />
  </CSSProvider>
</template>
