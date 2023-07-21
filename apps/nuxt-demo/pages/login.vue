<script setup lang="ts">
definePageMeta({
  middleware: 'logged-in-redirect',
})

const route = useRoute()

async function handleEmailLogin() {
  // ...

  navigateTo((route.query.redirect_to as string) ?? '/')
}
</script>

<template>
  <div>
    <button @click="handleEmailLogin"></button>
  </div>
</template>
