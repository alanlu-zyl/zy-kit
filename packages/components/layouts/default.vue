<script setup lang="ts">
import { CSSProvider } from '@master/css.vue'
import config from '@zy-kit/master/master.css'

const route = useRoute()

useHead({
  titleTemplate: () => {
    return route.meta.title ? `@zy-kit/components - ${route.meta.title}` : '@zy-kit/components'
  },
})
</script>

<template>
  <CSSProvider :config="config">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/button">Button</NuxtLink>
      <NuxtLink to="/comments">Comments</NuxtLink>
      <NuxtLink to="/form">Form</NuxtLink>
      <NuxtLink to="/input">Input</NuxtLink>
    </nav>
    <slot />
  </CSSProvider>
</template>
