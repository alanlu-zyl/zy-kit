<script setup lang="ts">
definePageMeta({
  title: 'Comments',
})
</script>

<template>
  <div>
    <h2>[Comments]</h2>
    <Comments></Comments>
    <LazyComments></LazyComments>
    <ClientOnly>
      <Comments></Comments>
      <template #fallback>
        <!-- this will be rendered on server side -->
        <p>Loading button...</p>
      </template>
    </ClientOnly>
  </div>
</template>
