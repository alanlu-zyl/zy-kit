<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - OMO` : 'OMO'
  },
})
</script>

<template>
  <CSSProvider>
    <slot name="nav"> Default nav content </slot>
    <slot />
    <slot name="footer"> Default footer content </slot>
  </CSSProvider>
</template>
