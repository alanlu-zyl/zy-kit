<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - OMO` : 'OMO'
  },
})
</script>

<template>
  <div>
    <slot name="nav"> </slot>
    <div class="mx:auto p:2x max-w:xl bg:white">
      <slot />
    </div>
    <slot name="footer"> </slot>
  </div>
</template>
