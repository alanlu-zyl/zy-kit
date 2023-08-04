<script setup lang="ts">
const localePath = useLocalePath()
type route = Parameters<typeof localePath>[0]

const router = useRouter()
const forward = (router.options.history.state.back || '/') as route
</script>

<template>
  <div class="rel flex ai:center p:4x|6x t:center z:1">
    <nuxt-link class="abs-center-y left:6x pointer fg:B-50" :to="localePath(forward)">
      <Icon name="mdi:arrow-left"></Icon>
    </nuxt-link>
    <h2 class="mx:auto">
      <slot>Title</slot>
    </h2>
  </div>
</template>
