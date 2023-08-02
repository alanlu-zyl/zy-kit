<script setup lang="ts">
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
      <slot name="header" />
      <div class="p:2x">
        <slot />
      </div>
      <slot name="footer"> </slot>
    </div>
  </div>
</template>
