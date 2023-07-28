<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - OMO` : 'OMO'
  },
})

const route = useRoute()
</script>

<template>
  <div class="bg:G-10">
    <div class="max-w:3xs bg:W-50 vh vw mx:auto">
      <NavBar>
        <template #default>
          <slot name="title">{{ route.meta.title }}</slot>
        </template>
      </NavBar>
      <div class="mx:auto p:2x max-w:xl bg:white">
        <slot />
      </div>
      <slot name="footer"> </slot>
    </div>
  </div>
</template>
