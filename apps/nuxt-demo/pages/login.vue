<script setup lang="ts">
definePageMeta({
  middleware: 'logged-in-redirect',
})

const route = useRoute()

async function handleEmailLogin() {
  // ...

  navigateTo(route.query.redirect_to ?? '/')
}
</script>

<template>
  <div>
    <button @click="handleEmailLogin"></button>
  </div>
</template>
