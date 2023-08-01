<script setup lang="ts"></script>

<template>
  <div class="rel flex ai:center p:4x|6x t:center z:1">
    <nuxt-link class="abs-center-y left:6x pointer fg:B-50" :to="localePath($router.options.history.state.back || '/')">
      <Icon name="mdi:arrow-left"></Icon>
    </nuxt-link>
    <h2 class="mx:auto">
      <slot>Title</slot>
    </h2>
  </div>
</template>
