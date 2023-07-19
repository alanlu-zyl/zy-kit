<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: () => {
    return route.meta.title ? `@zy-kit/components - ${route.meta.title}` : '@zy-kit/components'
  },
})
</script>

<template>
  <div>
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/button">Button</NuxtLink>
      <NuxtLink to="/comments">Comments</NuxtLink>
      <NuxtLink to="/form">Form</NuxtLink>
      <NuxtLink to="/input">Input</NuxtLink>
    </nav>
    <slot />
  </div>
</template>
